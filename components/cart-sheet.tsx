"use client"

import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from "@/components/ui/sheet"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartSheet() {
  const { items, isCartOpen, closeCart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({totalItems})</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 ">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center ">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <SheetClose asChild>
                <Button>Continue Shopping</Button>
              </SheetClose>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-4 py-4 border-b px-4">
                  <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <Link
                      href={`/product/${item.product.id}`}
                      className="font-medium line-clamp-1 hover:underline"
                      onClick={closeCart}
                    >
                      {item.product.title}
                    </Link>

                    <div className="text-sm text-muted-foreground mb-2">${item.product.price.toFixed(2)}</div>

                    <div className="flex items-center mt-auto">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>

                        <span className="w-8 text-center text-sm">{item.quantity}</span>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2 text-destructive"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t pt-4">
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between text-base font-medium">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Link href={"/checkout"} className="w-full" onClick={closeCart}>
                <Button className="w-full">Checkout</Button>
              </Link>

            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

