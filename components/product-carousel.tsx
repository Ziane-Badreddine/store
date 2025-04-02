"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

export default function ProductCarousel({ products }: { products: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [products.length])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  if (!products.length) return null

  const product = products[currentIndex]

  return (
    <section className="w-full py-12 md:py-16 bg-muted relative overflow-hidden px-8 ">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12  items-center sm:d">
          <div className="space-y-4 order-last">
            <div className="text-sm font-medium text-primary uppercase tracking-wide">Featured Product</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{product.title}</h1>
            <p className="text-muted-foreground md:text-xl line-clamp-3">{product.description}</p>
            <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href={`/product/${product.id}`}>View Details</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/category/${product.category.replace(/\s+/g, "-").toLowerCase()}`}>
                  Browse {product.category}
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center md:h-[75vh] md:p-10">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-background">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-1 md:left-4 top-1/4 md:top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full h-10 w-10 z-20"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous product</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 md:right-4 top-1/4 md:top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full h-10 w-10 z-20"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next product</span>
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {products.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-6 bg-primary" : "w-2 bg-primary/30"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

