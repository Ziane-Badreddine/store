"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import useStar from "@/hooks/useStar";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCard";
import Product from "@/app/_components/Product";

const Page = ({ params }: { params: Promise<{ productId: string }> }) => {
  const resolvedParams = use(params); 
  const { products } = useFetch();
  const [stars, setStars] = useState<(0 | 1)[]>([]);
  const {addToCart} = useCart()

  const productId = parseInt(resolvedParams.productId);

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((p) => p.id === productId);
      if (product) {
        setStars(useStar(product));
      }
    }
  }, [productId, products]);

  if (!productId || products.length === 0) return null;

  const product = products.find((p) => p.id === productId);
  if (!product) return <p>Product not found</p>;

  return (
    <main className="flex  flex-col justify-center gap-5 w-screen py-32 px-52 ">
      <div className="flex items-center h-[65vh] justify-center gap-5 w-full">
        <div className="p-10 h-[50vh] w-[40%] border border-primary">
          <img
            className="h-[90%] w-[80%] m-auto"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="flex flex-col justify-center h-[55vh]  items-center w-[60%] gap-5 p-5">
          <div className="flex flex-col justify-between h-full">
            <div>
            <h1 className="text-xl font-medium mb-5">{product.title}</h1>
            <p className="text-lg">
              {product.description}
            </p>
            </div>
            <div>
              <div className="flex items-center justify-between gap-5">
                <h1 className="text-primary text-2xl font-semibold">
                  ${product.price}
                </h1>
                <div className="flex">
                  {stars.map((star, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${star === 1 ? "fill-yellow-400" : "fill-gray-400"}`}
                    />
                  ))}
                </div>
              </div>
              <Button className="w-full mt-5" onClick={() => addToCart(product)}>Add To Cart</Button>
            </div>

          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium">
          Consultez également
        </h1>
        <div className=" mt-10 grid grid-cols-3 gap-5">
            {products.map((item,i) => {
              return item.category === product.category ? <Product key={i} product={item} /> : null 
            })}
        </div>
      </div>

    </main>
  );
};

export default Page;
