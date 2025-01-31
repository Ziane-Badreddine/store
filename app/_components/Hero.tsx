"use client"
import React from 'react'
import Link from 'next/link'
import useFetch from '@/hooks/useFetch'
import Product from './Product'
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
import { FaStar, FaArrowRight } from "react-icons/fa";



const Hero = ({ product }: { product: ProductType }) => {


  const {addToCart} = useCart()

  return (
      <div className="flex justify-center pt-32">
        <Card className="w-[1000px] flex flex-col ">
          <p className='text-center font-bold text-primary text-2xl pt-3'></p>
          <CardHeader>
            <CardTitle><img className='  mx-auto object-center object-cover pb-2  w-44' src={product.image} alt={product.title} /></CardTitle>
            <CardDescription><p className='text-primary line-clamp-1 text-start'>{product.title}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>

            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <div className='text-neutral-700 text-xs line-clamp-2'>{product.description}</div>
              </div>
              <div className="flex  justify-between">
                <div className='text-neutral-700 text-xl '> ${product.price}</div>
                <div className='text-neutral-700 text-xl flex'>
                  <FaStar className='mr-1 text-yellow-400' />
                  <FaStar className='mr-1 text-yellow-400' />
                  <FaStar className='mr-1 text-yellow-400' />
                  <FaStar className='mr-1 text-yellow-400' />
                  <FaStar />
                </div>
              </div>
            </div>

          </CardContent>
          <CardFooter className="w-full">
            <Button className='w-full' onClick={() => addToCart(product)}>Add To Cart</Button>
          </CardFooter>
        </Card>
      </div>
  )
}

export default Hero




{/*{products.length > 0 && <Product product={products[1]} />}*/ }