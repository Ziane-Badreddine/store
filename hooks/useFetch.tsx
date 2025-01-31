"use client"

import { useEffect, useState } from "react"



export interface ProductType {
    id: number | 1,
    title: string | '',
    price: number | '',
    description: string | '',
    category: string | '',
    image: string | '',
    rating: { rate: number | 1, count: number | 1 }
}



const useFetch = () => {

    const [products, setProducts] = useState<ProductType[]>([])
    const category = ["electronics", "jewelery", "men's clothing", "women's clothing"]
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);





    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch("https://fakestoreapi.com/products")
                const body = await response.json()
                setProducts(body);
                setError(null)

            } catch (error) {
                setError("Something be wrong");
            } finally {
                setLoading(false);

            }
                
        }
        fetchData();
        
    }, [])


    return {products,category,error, loading }
}


export default useFetch