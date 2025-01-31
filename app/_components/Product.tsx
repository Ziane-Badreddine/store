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





const Product = ({ product }: { product: ProductType }) => {
  const { addToCart } = useCart();

  return (
      <Card className="w-[350px] flex flex-col ">
        <CardHeader>
          <CardTitle><img className='  mx-auto object-center object-cover pb-2 ' src={product.image} alt={product.title} height={100} width={200} /></CardTitle>
          <CardDescription><p className='text-green-800 line-clamp-1 text-start'>{product.title}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <div className='text-neutral-700 text-xs line-clamp-2'>{product.description}</div>
            </div>
            <div className="flex  justify-between">
              <div className='text-neutral-700 text-xs '>Price: {product.price}$</div>
              <div className='text-neutral-700 text-xs'>Rate: {product.rating.rate}/5</div>
            </div>
          </div>

        </CardContent>
        <CardFooter className="w-full">
          <Button className='w-full' onClick={() => addToCart(product)}>Shop</Button>
        </CardFooter>
      </Card>
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