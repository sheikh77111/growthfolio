"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            <Image src="/images/logo-icon.svg" alt="UpSwing Digital Logo" fill className="object-contain" />
          </div>
          <span className="text-white font-bold text-xl">Growthfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["ABOUT", "SERVICES", "PORTFOLIO", "CONTACT", "BLOG"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-green-400 transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Impact Badge */}
        <div className="hidden md:block relative h-12 w-12">
          <Image src="/images/impact-badge.svg" alt="Impact Badge" fill className="object-contain animate-spin-slow" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["ABOUT", "SERVICES", "PORTFOLIO", "CONTACT", "BLOG"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white hover:text-green-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
