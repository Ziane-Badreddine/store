import { Suspense } from "react"
import ProductList from "@/components/product-list"
import ProductCarousel from "@/components/product-carousel"
import ProductListSkeleton from "@/components/skeleton/product-list-skeleton"
import { getProducts } from "@/lib/api"

export default async function Home() {
  const products = await getProducts()
  const topRatedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 4)

  // Featured products for carousel (top 5 rated)
  const featuredProducts = products.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5)

  return (
    <main className="flex-1">
      <ProductCarousel products={featuredProducts} />

      <section className="container py-8 md:py-12 px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Top Rated Products</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Discover our highest-rated products loved by customers worldwide
          </p>
        </div>

        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={topRatedProducts} />
        </Suspense>
      </section>
    </main>
  )
}

