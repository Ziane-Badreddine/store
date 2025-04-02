import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to StoreApp</h1>
            <p className="text-muted-foreground md:text-xl">
              Discover quality products at competitive prices. From electronics to fashion, we have everything you need.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/category/electronics">Shop Electronics</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/category/clothing">Shop Clothing</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-muted-foreground/20 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/40">
                StoreApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

