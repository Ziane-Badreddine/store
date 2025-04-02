"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCart } from "@/context/cart-context"

export default function ClientAddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <Button className="w-full" onClick={() => addToCart(product)}>
      <ShoppingCart className="h-4 w-4 mr-2" />
      Add to Cart
    </Button>
  )
}

