import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ProductType } from '@/hooks/useFetch'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useCart } from '@/hooks/useCard'
import { CartProvider } from '@/context/CartContext'
import { ShoppingCart, Star } from 'lucide-react'
import Link from 'next/link'

const ProductSkeleton = () => {
    return (
        <Card className="w-[350px] h-[490px] flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-4">
                <div className="relative h-48 w-full mb-4">
                    <Skeleton />
                </div>
                <h3 className="font-semibold text-lg line-clamp-1 text-gray-800"><Skeleton /></h3>
            </CardHeader>
            <CardContent className="flex flex-col items-center  p-4">
                <Skeleton />
                <div className="flex justify-between items-center w-full">
                    <Skeleton />
                    <div className="flex items-center ">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <Skeleton />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4">
                <Button
                    className="w-full text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProductSkeleton