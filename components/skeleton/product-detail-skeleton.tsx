import { Skeleton } from "@/components/ui/skeleton"

export default function ProductDetailSkeleton() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
          <Skeleton className="h-full w-full" />
        </div>

        <div className="flex flex-col">
          <Skeleton className="h-5 w-24 mb-2" />
          <Skeleton className="h-9 w-full mb-4" />

          <div className="flex items-center mb-6">
            <Skeleton className="h-5 w-24 mr-4" />
            <Skeleton className="h-5 w-20" />
          </div>

          <Skeleton className="h-8 w-24 mb-6" />

          <div className="space-y-2 mb-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <div className="flex gap-4 mt-auto">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>
    </div>
  )
}

