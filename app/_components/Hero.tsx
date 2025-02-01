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
import Image from 'next/image'



const Hero = ({ products }: { products: ProductType[] }) => {


  const { addToCart } = useCart()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
          <Link href={`/product/${products[0].id}`} className="lg:w-[70%] h-full">
            <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative flex items-center justify-center">
                  <img
                    src={products[0].image}
                    alt={products[0].title}
                    className='w-[400px] h-[460px] p-5'
                  />
                </div>
                <div className="p-6 bg-white dark:bg-gray-800">
                  <h2 className="text-3xl font-semibold mb-2 line-clamp-1">{products[0].title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{products[0].description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <div className="flex flex-col lg:w-[30%] h-full gap-6">
            <Link href={`/product/${products[1].id}`} className="flex-1">
              <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative flex-grow">
                    <img
                      src={products[1].image}
                      alt={products[1].title}
                      className='w-[400px] h-[160px] p-5'
                    />
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-1">{products[1].title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">{products[1].description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href={`/product/${products[2].id}`} className="flex-1">
              <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative flex-grow">
                    <img
                      src={products[2].image}
                      alt={products[2].title}
                      className='w-[400px] h-[160px] p-5'
                    />
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-1">{products[2].title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">{products[2].description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero




{/*{products.length > 0 && <Product product={products[1]} />}*/ }