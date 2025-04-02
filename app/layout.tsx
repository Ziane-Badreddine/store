import type React from "react"
import './globals.css'
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartSheet from "@/components/cart-sheet"
import { JetBrains_Mono } from "next/font/google"
import ClientProviders from "@/components/client-providers"
import { Toaster } from "@/components/ui/toaster"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata = {
  title: "StoreApp - Your Online Shopping Destination",
  description: "Find the best products at the best prices",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.className} min-h-screen flex flex-col `}>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
          <CartSheet />
        </ClientProviders>
        <Toaster />
      </body>
    </html>
  )
}



