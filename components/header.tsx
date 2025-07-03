"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    { name: "Photography & Videography", href: "/services/photography-videography" },
    { name: "Branding & Design", href: "/services/branding-design" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Creative Content Production", href: "/services/creative-content" },
    { name: "Google My Business & Local SEO", href: "/services/google-my-business" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black/80"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image src="/images/logo-web.png" alt="Growthfolio Logo" fill className="object-contain" />
          </div>
          <span className="text-white font-gilroy font-semibold text-xl tracking-wide">Growthfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/about"
            className="text-white hover:text-brand-green font-medium text-sm tracking-wider transition-colors duration-300"
          >
            ABOUT
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-white hover:text-brand-green font-medium text-sm tracking-wider transition-colors duration-300">
              SERVICES
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-800 animate-in slide-in-from-top-2 duration-200">
                <div className="py-2">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-white hover:text-brand-green hover:bg-gray-800/50 transition-colors text-sm font-medium border-b border-gray-800"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-gray-300 hover:text-brand-green hover:bg-gray-800/50 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            className="text-white hover:text-brand-green font-medium text-sm tracking-wider transition-colors duration-300"
          >
            PORTFOLIO
          </Link>

          <Link
            href="/contact"
            className="text-white hover:text-brand-green font-medium text-sm tracking-wider transition-colors duration-300"
          >
            CONTACT
          </Link>
        </nav>

        {/* Instagram Badge - Animated GIF */}
        <div className="hidden lg:block">
          <Link href="https://www.instagram.com/growth.folio/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative w-16 h-16 group">
              <Image
                src="/images/comp-23.gif"
                alt="Follow us on Instagram"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-white hover:text-brand-green font-medium py-2 border-b border-gray-800 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <div className="border-b border-gray-800">
              <Link
                href="/services"
                className="text-white hover:text-brand-green font-medium py-2 block transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <div className="pl-4 pb-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block text-gray-300 hover:text-brand-green transition-colors py-1 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/portfolio"
              className="text-white hover:text-brand-green font-medium py-2 border-b border-gray-800 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-brand-green font-medium py-2 border-b border-gray-800 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="https://www.instagram.com/growth.folio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-green font-medium py-2 border-b border-gray-800 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FOLLOW US ON INSTAGRAM
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
