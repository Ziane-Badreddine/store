"use client"

import useFetch from '@/hooks/useFetch'
import React from 'react'
import Product from './Product'
import Hero from './Hero'

const Categorie = ({ category }: { category: string }) => {


  const { products } = useFetch()
  const productsFilterCategory = products.filter((product, index) => {
    return product.category.startsWith(category.slice(0, 2))
  }).sort((a, b) => a.rating.rate - b.rating.rate)

  const productTopRate = productsFilterCategory[productsFilterCategory.length - 1]




  return (
    <div className='p-5'>
      {productTopRate !== undefined && <Hero product={productTopRate} />}
      <div className='flex flex-wrap items-center justify-center'>
        {productsFilterCategory.length > 0 && productsFilterCategory.map((product, index) => {
          return <Product product={product} key={index} />
        })}
      </div>
    </div>
  )
}

export default Categorie