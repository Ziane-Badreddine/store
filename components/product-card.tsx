import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import type { Product } from "@/lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import ClientAddToCart from "@/components/client-add-to-cart"
import { Badge } from "./ui/badge"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Link href={`/product/${product.id}`} className="relative aspect-square bg-white ">
        <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-contain p-4 " />
      </Link>
      <CardContent className="flex-1 p-4 pb-0">
        <div className="flex items-center justify-between mb-2">
          <Badge className="text-sm font-medium ">{product.category}</Badge>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
            <span className="text-sm font-medium">{product.rating.rate}</span>
          </div>
        </div>
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-semibold line-clamp-2 mb-2 hover:underline">{product.title}</h3>
        </Link>
        <p className="text-lg font-bold text-muted-foreground">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <ClientAddToCart product={product} />
      </CardFooter>
    </Card>
  )
}

