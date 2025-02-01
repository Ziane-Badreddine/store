"use client"
import { Button } from '@/components/ui/button'
import { ProductType } from '@/hooks/useFetch'
import React from 'react'
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





const Product = ({ product }: { product: ProductType }) => {
  const { addToCart } = useCart();
  

  return (
    <Link href={`/product/${product.id}`} className="lg:w-[70%] h-full">
    <Card className="w-[350px] h-[490px] flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-4">
        <div className="relative h-48 w-full mb-4">
          <img
            className="absolute inset-0 w-full h-full object-contain"
            src={product.image || "/placeholder.svg"}
            alt={product.title}
          />
        </div>
        <h3 className="font-semibold text-lg line-clamp-1 text-gray-800">{product.title}</h3>
      </CardHeader>
      <CardContent className="flex flex-col items-center  p-4">
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{product.description}</p>
        <div className="flex justify-between items-center w-full">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <div className="flex items-center ">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating.rate.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button
          className="w-full text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    </Link>
  )
}

export default Product






{/*

<div className='felx flex-col text-center bg-primary items-center justify-center w-[400px] p-3'>
      <img className='text-center w-20 items-center' src={product.image} alt={product.title} height={70} width={70} />
      <div className='text-neutral-800 font-bold'>{product.title}</div>
      <div className='text-neutral-700 text-xs'>{product.description}</div>
        <div className='text-neutral-700 text-xs m-10'>Price: {product.price}$</div>
        <div className='text-neutral-700 text-xs'>Category:{product.category}</div>
      <div className='text-neutral-700 text-xs'>Quantity: {product.rating.count}</div>
      <div className='text-neutral-700 text-xs'>Rate: {product.rating.rate}/5</div>
    </div>
    */}