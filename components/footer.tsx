import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row justify-between py-8 md:py-12 px-8">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl">StoreApp</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">Your one-stop shop for all your needs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-2">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/electronics" className="text-muted-foreground hover:text-foreground">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/jewelry" className="text-muted-foreground hover:text-foreground">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link href="/category/men's-clothing" className="text-muted-foreground hover:text-foreground">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link href="/category/women's-clothing" className="text-muted-foreground hover:text-foreground">
                  Women's Clothing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} StoreApp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

