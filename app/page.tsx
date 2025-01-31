
"use client"
import useFetch from "@/hooks/useFetch";
import Hero from "./_components/Hero";
import Product from "./_components/Product";
import Footer from "./_components/Footer";



export default function Home() {
  
  const { products } = useFetch()

  return (
    <div>
      {products.length > 0 && <Hero product={products[0]} /> }
    </div>
  );
}
