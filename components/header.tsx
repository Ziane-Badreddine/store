"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { getProducts } from "@/lib/api"
import { useCart } from "@/context/cart-context"
import SearchDialog from "@/components/search-dialog"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [categories, setCategories] = useState<string[]>([])
  const pathname = usePathname()
  const { openCart, totalItems } = useCart()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const products = await getProducts()
        const uniqueCategories = [...new Set(products.map((product) => product.category))]
        setCategories(uniqueCategories)
      } catch (error) {
        console.error("Failed to fetch categories:", error)
        setCategories([])
      }
    }

    fetchCategories()
  }, [])

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background md:px-10 px-3">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-primary">StoreApp</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${category.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {category}
            </Link>
          ))}
        </nav>

        <div className="flex items-center ml-auto gap-2">
          <SearchDialog />
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={openCart} className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

