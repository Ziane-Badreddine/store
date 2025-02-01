
"use client"
import useFetch from "@/hooks/useFetch";
import Hero from "./_components/Hero";
import Product from "./_components/Product";
import HeroSkeleton from "./_components/HeroSkeleton";
import ProductSkeleton from "./_components/ProductSkeleton";
import { category } from "@/constants/static";
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";



export default function Home() {

  const { products } = useFetch()
  const productsFilterCategory = products.sort((a, b) => a.rating.rate - b.rating.rate).reverse()

  const productTopRate = productsFilterCategory[productsFilterCategory.length - 1]

  return (
    <div className=' p-10'>
      {productTopRate !== undefined ? <Hero products={[productsFilterCategory[0], productsFilterCategory[1], productsFilterCategory[2]]} /> : <HeroSkeleton />}
      <div className="flex items-center justify-center gap-5 w-full mb-20">
        {
          category.map((item, i) => {
            return <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer w-[20%]"
              key={i}
            >
              <Link href={`category/${item}`}>
                <Card className="rounded-2xl shadow-md transition bg-white p-4">
                  <CardContent className="flex justify-center items-center text-center">
                    <h3 className="text-xl font-semibold text-primary">{item}</h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          })
        }
      </div>


      <div className='grid grid-cols-4 place-self-center  gap-10 '>
        {productsFilterCategory.length > 0 ? productsFilterCategory.map((product, index) => {
          return <Product product={product} key={index} />
        }) : productsFilterCategory.map((product, index) => {
          return <ProductSkeleton key={index} />
        })}
      </div>
    </div>
  );
}
