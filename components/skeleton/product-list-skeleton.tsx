import ProductCardSkeleton from "@/components/skeleton/product-card-skeleton"

export default function ProductListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
    </div>
  )
}

