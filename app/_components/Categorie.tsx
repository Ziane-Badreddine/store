"use client"

import useFetch from '@/hooks/useFetch'
import React from 'react'
import Product from './Product'
import Hero from './Hero'
import HeroSkeleton from './HeroSkeleton'

const Categorie = ({ category }: { category: string }) => {


  const { products } = useFetch()
  const productsFilterCategory = products.filter((product, index) => {
    return product.category.startsWith(category.slice(0, 2))
  }).sort((a, b) => a.rating.rate - b.rating.rate).reverse()

  const productTopRate = productsFilterCategory[productsFilterCategory.length - 1]




  return (
    <div className=' p-10'>
      {productTopRate !== undefined ? <Hero products={[productsFilterCategory[0], productsFilterCategory[1], productsFilterCategory[2]]} /> : <HeroSkeleton />}
      <div className='grid grid-cols-4 place-self-center  gap-10 '>
        {productsFilterCategory.length > 0 && productsFilterCategory.map((product, index) => {
          return <Product product={product} key={index} />
        })}
      </div>
    </div>
  )
}

export default Categorie