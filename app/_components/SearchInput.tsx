"use client"

import React, { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, ShoppingBag } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from '@/components/ui/scroll-area'
import useFetch from '@/hooks/useFetch'
import Link from 'next/link'
import { useRouter } from 'next/navigation'




export function SearchInput() {

    const { products } = useFetch();
    const [productsFilter, setProductFilter] = useState([...products]);
    const inputSearch = useRef<HTMLInputElement>(null)



    const handleChange = () => {
        if (inputSearch.current?.value !== undefined) {
            let searchValue = inputSearch.current.value.trim().toLocaleUpperCase();
            let productsFilterTemp = products.filter((product, i) => {
                return  product.title.startsWith(searchValue)
            })
            setProductFilter([...productsFilterTemp])
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex items-center justify-center'>
                    <Input className='cursor-pointer' placeholder='search product'  size={40}  />
                    <Search className='w-5 h-5 right-[110px] absolute' />
                </div>
            </DialogTrigger>
            <DialogContent className="w-[70vw] h-[60vh] pt-2">
                <DialogHeader className='gap-2'>
                    <DialogTitle>
                        <div className='flex items-center justify-center gap-2 pr-5'>
                            <Search className='w-5 h-5' />
                            <Input placeholder='search product' className='border-0 hover:border-0 focus:outline-0 outline-white outline-0' onChange={handleChange} ref={inputSearch} />
                        </div>
                    </DialogTitle>
                </DialogHeader>

                <div className='flex flex-col  w-full h-[50vh]'>
                    <ScrollArea>
                        <div>
                            {
                                productsFilter.length > 0 ? productsFilter.map((product, i) => {
                                    return (
                                    <Link href={`/product/${product.id}`} key={i}>
                                        <DialogClose asChild>
                                            <Button className='flex justify-start  gap-2 w-full px-0 text-black' variant={"link"}>
                                                <ShoppingBag className='w-5 h-5' />
                                                <h1 className='line-clamp-1'>
                                                    {product.title.slice(0, 40)}
                                                </h1>
                                            </Button>
                                        </DialogClose>
                                    </Link>)
                                }) : <h1 className='text-center mt-20'>Products not Found</h1>
                            }

                        </div>
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    )
}


export default SearchInput


