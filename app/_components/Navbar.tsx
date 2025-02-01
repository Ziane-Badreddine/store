"use client"

import React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { category } from '@/constants/static'
import useFetch from '@/hooks/useFetch'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Search, ShoppingBag, ShoppingCart } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ShopCard } from './ShopCard'
import SearchInput from './SearchInput'
import { useCart } from '@/hooks/useCard'



const Navbar = () => {

  const { category } = useFetch()
  const { cart } = useCart()
  return (
    <header className='fixed left-0 z-50 ring-0 w-full flex items-center justify-between py-5  px-10  mb-10 shadow-md backdrop-blur-md'>
      <div className='flex items-center justify-center gap-6 h-full'>
        <Link href={"/"}>
          <h1 className='text-2xl  font-bold text-primary'>
            Logo.
          </h1>
        </Link>
        <nav>
          <ul className="flex items-center justify-center gap-6">
            {category.map((item, index) => {
              return <Link key={index} href={`/category/${item}`}>
                <li className=' text-lg font-medium capitalize text-black mt-[5.5px] hover:text-primary'>
                  {item}
                </li>


              </Link>
            })}
          </ul>
        </nav>
      </div>

      <div className='flex items-center justify-center gap-5'>
        <SearchInput />
        <ShopCard />
      </div>


    </header>
  )
}

export default Navbar