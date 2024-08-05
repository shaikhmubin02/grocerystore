'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Products from "./productcard"
import Inquiryform from "./inquiryform"
import Image from 'next/image';

export function Homepage() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [showMoreCards, setShowMoreCards] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleCartPopup = () => {
    setIsCartPopupOpen(!isCartPopupOpen)
  }

  const toggleShowMoreCards = () => {
    setShowMoreCards(!showMoreCards)
  }
  
  return (
    <div className="flex flex-col min-h-[100dvh]">
    
      <header className="bg-background border-b px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image src="/logoisajimart.jpg" alt="" height={1} width={30}/>
        <Image src="/imgisajimart.jpg" alt="" height={5} width={100}/>
          {/* <ShoppingBasketIcon className="h-6 w-6" /> */}
          {/* <span className="font-semibold text-lg">Isaji Mart</span> */}
        </Link>
        <div className="relative">
          <Button variant="outline" size="sm" className="md:hidden" onClick={toggleMenu}>
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          {isMenuOpen && (
            <Card className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <nav className="flex flex-col gap-6 p-4">
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                  Home
                </Link>
                <Link href="#products" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                  Products
                </Link>
                <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                  About
                </Link>
                <div className="relative">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                    onClick={toggleCartPopup}
                    prefetch={false}
                  >
                    <ShoppingCartIcon className="h-5 w-5" />
                    Cart
                  </Link>
                  {isCartPopupOpen && (
                    <div className="absolute bottom-0 left-0 transform translate-y-full bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                      Feature coming soon...
                    </div>
                  )}
                </div>
                
              </nav>
            </Card>
            
          )}
          <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#products" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Products
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <div className="relative">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
              onClick={toggleCartPopup}
              prefetch={false}
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Cart
            </Link>
            {isCartPopupOpen && (
              <div className="absolute bottom-0 left-0 transform translate-y-full bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                Feature coming soon...
              </div>
            )}
          </div>
        </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Fresh Produce, Pick Up at Our Store</h1>
              <p className="text-muted-foreground md:text-xl">
                Discover the best quality groceries and pick them up at our convenient location.
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Shop Now
                </Link>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5" />
                    <span>+91 70698 98533</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <MapPinIcon className="h-6 w-6 text-muted-foreground" />
                <span>Shop No. 9, Ayman-52, Nr.Zainab Avenue, TP85, 100ft Road, Serkhej Road, Ahmedabad-380055</span>
              </div>
            </div>
            <Image
              src="/main.jpg"
              alt="Hero Image"
              width={500}
              height={600}
              className="mx-auto aspect-square object-cover rounded-lg"
            />
          </div>
        </section>
        <section id="products" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Products</h2>
              <p className="text-muted-foreground md:text-xl">Discover our top-selling items.</p>
            </div>
            <Products />
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Shop by Category</h2>
              <p className="text-muted-foreground md:text-xl">Browse our wide selection of products.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <Link
                href="#"
                className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <BananaIcon className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">Fruits</span>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <CarrotIcon className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">Vegetables</span>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <MilkIcon className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">Dairy</span>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <WheatIcon className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">Grains</span>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="py-12 md:py-24">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-20 ">
            <div className="space-y-4 ">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Have a question?</h2>
                <p className="text-muted-foreground md:text-xl">Fill out the form below and we&apos;ll get back to you.</p>
                <Inquiryform />
              </div>
            {/* <Image
              src="/gs.jpg"
              alt="About Image"
              width={600}
              height={600}
              className="mx-auto aspect-square object-cover rounded-lg"
            /> */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Isaji Mart</h2>
              <p className="text-muted-foreground md:text-xl">
              At Isaji Mart, we are passionate about providing our customers with the freshest and highest-quality produce. Our team meticulously selects each item to ensure that you receive only the best. We also prioritize sustainability, implementing eco-friendly practices throughout our operations. Visit our store to pick up your groceries today.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">isajimart24@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">+91 70698 98533</span>
                </div>
                <div className="flex gap-2">
                  <MapPinIcon className="h-6 w-6 text-muted-foreground" />
                  <span className="text-muted-foreground">Shop No. 9, Ayman-52, Nr.Zainab Avenue, TP85, 100ft Road, Serkhej Road, Ahmedabad-380055</span>
                </div>
              </div>
              {/* <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link> */}
              
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted border-t px-4 md:px-6 py-6 text-sm">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">&copy; 2024 Isaji Mart. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BananaIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" />
      <path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" />
    </svg>
  )
}


function CarrotIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" />
      <path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" />
      <path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" />
    </svg>
  )
}


function MailIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MilkIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2h8" />
      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    </svg>
  )
}


function PhoneIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function ShoppingBasketIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 11-1 9" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
      <path d="M4.5 15.5h15" />
      <path d="m5 11 4-7" />
      <path d="m9 11 1 9" />
    </svg>
  )
}


function ShoppingCartIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function WheatIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22 16 8" />
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
      <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
    </svg>
  )
}


function XIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"  
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
