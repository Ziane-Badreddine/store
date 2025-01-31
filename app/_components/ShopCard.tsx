"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowBigLeft, MoveRight, ShoppingCart } from "lucide-react"
import CartShop from "./CardShop"
import { CartContext, CartProvider } from "@/context/CartContext"
import Link from "next/link"



export function ShopCard() {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={"icon"}>
                    <ShoppingCart />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                    <SheetDescription>
                        Review your selected items before checkout. Adjust quantities, remove products, or proceed to payment.
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-5 mt-5 capitalize h-[75vh]  overflow-auto ">
                    <CartShop />
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Link href={"/shop"} className="w-full">
                            <Button size={"lg"} className="w-full"   type="submit">Validate Your Shopping
                                <MoveRight />
                            </Button>
                        </Link>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
