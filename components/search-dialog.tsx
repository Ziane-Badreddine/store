"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import type { Product } from "@/lib/types"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim().length > 0) {
        setIsLoading(true)
        try {
          const res = await fetch("https://fakestoreapi.com/products")
          const products: Product[] = await res.json()

          const filtered = products.filter(
            (product) =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              product.category.toLowerCase().includes(searchQuery.toLowerCase()),
          )

          setResults(filtered)
        } catch (error) {
          console.error("Error searching products:", error)
        } finally {
          setIsLoading(false)
        }
      } else {
        setResults([])
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchQuery])

  const handleNavigate = (productId: number) => {
    setOpen(false)
    router.push(`/product/${productId}`)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="md:flex">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search products</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        <div className="flex items-center relative">
          <Search className="h-4 w-4 mr-2 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 " />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-10 "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
        <div className="overflow-y-auto flex-1 mt-4">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : results.length > 0 ? (
            <ScrollArea className="space-y-2">
              {results.map((product) => (
                <div key={product.id}>
                  <button
                    className="w-full text-left p-2 hover:bg-muted rounded-md flex items-center gap-3"
                    onClick={() => handleNavigate(product.id)}
                  >
                    <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium line-clamp-1">{product.title}</p>
                      <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                    </div>
                  </button>
                </div>
              ))}
            </ScrollArea>
          ) : searchQuery.trim().length > 1 ? (
            <div className="text-center py-8 text-muted-foreground">No products found matching "{searchQuery}"</div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}

