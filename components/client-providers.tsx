"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import type { ReactNode } from "react"

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  )
}

