import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import ProductList from "@/components/product-list"
import ProductListSkeleton from "@/components/skeleton/product-list-skeleton"
import { Button } from "@/components/ui/button"
import { getProducts } from "@/lib/api"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const products = await getProducts()
  const categories = [...new Set(products.map((product) => product.category))]

  return categories.map((category) => ({
    slug: category.replace(/\s+/g, "-").toLowerCase(),
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const formattedCategory = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${formattedCategory} - StoreApp`,
    description: `Browse our ${formattedCategory} collection`,
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products = await getProducts()

  const formattedSlug = params.slug.replace(/-/g, " ")
  const categoryProducts = products.filter((product) => product.category.toLowerCase() === formattedSlug)

  if (categoryProducts.length === 0) {
    notFound()
  }

  const categoryName = categoryProducts[0].category

  // Get top rated product in this category
  const topRatedProduct = [...categoryProducts].sort((a, b) => b.rating.rate - a.rating.rate)[0]

  // Category descriptions (you could fetch these from an API in a real app)
  const categoryDescriptions: Record<string, string> = {
    electronics:
      "Discover cutting-edge electronics from top brands. From smartphones to smart home devices, find the latest tech to enhance your digital lifestyle.",
    jewelery:
      "Elegant jewelry pieces for every occasion. Our curated collection features stunning designs crafted with precision and quality materials.",
    "men's clothing":
      "Premium men's apparel combining style and comfort. From casual essentials to business attire, elevate your wardrobe with our quality selections.",
    "women's clothing":
      "Fashionable women's clothing for every season. Explore our diverse collection of trendy and timeless pieces designed for comfort and style.",
  }

  const categoryDescription =
    categoryDescriptions[categoryName.toLowerCase()] ||
    `Explore our collection of ${categoryName.toLowerCase()} products designed with quality and style in mind.`

  return (
    <div>
      {/* Category Hero */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{categoryName}</h1>
            <p className="text-muted-foreground text-lg mb-8">{categoryDescription}</p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="container py-12 md:py-16">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight">Featured {categoryName} Product</h2>
          <p className="text-muted-foreground max-w-[700px]">Our top-rated product in this category</p>
        </div>

        <div className="featured-product-card max-w-[80%] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 bg-card">
            <div className="relative aspect-square bg-background rounded-lg overflow-hidden">
              <Image
                src={topRatedProduct.image || "/placeholder.svg"}
                alt={topRatedProduct.title}
                fill
                className="object-contain p-6 "
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">{topRatedProduct.title}</h3>

              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <Star className="h-5 w-5 fill-primary text-primary mr-1" />
                  <span className="font-medium">{topRatedProduct.rating.rate}</span>
                </div>
                <span className="text-muted-foreground">({topRatedProduct.rating.count} reviews)</span>
              </div>

              <p className="text-muted-foreground mb-6 line-clamp-3">{topRatedProduct.description}</p>

              <div className="text-2xl font-bold mb-6">${topRatedProduct.price.toFixed(2)}</div>

              <Button asChild size="lg">
                <Link href={`/product/${topRatedProduct.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Category Products */}
      <section className="container py-8 md:py-12 px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">All {categoryName} Products</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Browse our complete collection of {categoryName.toLowerCase()} products
          </p>
        </div>

        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={categoryProducts} />
        </Suspense>
      </section>
    </div>
  )
}

