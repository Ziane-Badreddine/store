import { Suspense } from "react"
import { getProduct, getProducts } from "@/lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProductList from "@/components/product-list"
import ProductListSkeleton from "@/components/skeleton/product-list-skeleton"
import ProductDetailSkeleton from "@/components/skeleton/product-detail-skeleton"
import ClientAddToCart from "@/components/client-add-to-cart"
import Link from "next/link"
import SocialShare from "@/components/social-share"

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const product = await getProduct(params.id)

    return {
      title: `${product.title} - StoreApp`,
      description: product.description,
    }
  } catch (error) {
    return {
      title: "Product Not Found - StoreApp",
      description: "The requested product could not be found",
    }
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  try {
    const productPromise = getProduct(params.id)
    const allProductsPromise = getProducts()

    // Use Promise.all to fetch both in parallel
    const [product, allProducts] = await Promise.all([productPromise, allProductsPromise])

    // Get recommended products (same category, excluding current product)
    const recommendedProducts = allProducts
      .filter((p) => p.category === product.category && p.id !== product.id)
      .sort(() => 0.5 - Math.random()) // Simple shuffle
      .slice(0, 4)

    return (
      <div className="overflow-hidden">
        <Suspense fallback={<ProductDetailSkeleton />}>
          <div className="container py-8 md:py-12 px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <div className="mb-2 text-sm font-medium text-muted-foreground uppercase">{product.category}</div>

                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    <Star className="h-5 w-5 fill-primary text-primary mr-1" />
                    <span className="font-medium">{product.rating.rate}</span>
                  </div>
                  <span className="text-muted-foreground">({product.rating.count} reviews)</span>
                </div>

                <div className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</div>

                <p className="text-muted-foreground mb-8">{product.description}</p>

                <div className="flex gap-4 ">
                  <ClientAddToCart product={product} />
                </div>
                
                <div className="mt-6 flex items-center gap-2">
                  <SocialShare 
                    url={`https://storeapp.com/product/${product.id}`} 
                    title={product.title} 
                    description={product.description} 
                  />
                  <Button  asChild>
                    <Link href="/checkout">Buy Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Suspense>

        {/* Recommended Products Section */}
        {recommendedProducts.length > 0 && (
          <section className="container py-8 md:py-12 border-t px-8">
            <div className="flex flex-col items-center gap-4 text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight">You May Also Like</h2>
              <p className="text-muted-foreground max-w-[700px]">Similar products you might be interested in</p>
            </div>

            <Suspense fallback={<ProductListSkeleton count={4} />}>
              <ProductList products={recommendedProducts} />
            </Suspense>
          </section>
        )}
      </div>
    )
  } catch (error) {
    notFound()
  }
}
