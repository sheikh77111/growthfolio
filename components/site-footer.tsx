import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="relative h-10 w-10 mr-2">
                <Image src="/images/logo-web.png" alt="Growthfolio Logo" fill className="object-contain" />
              </div>
              <span className="text-white font-bold text-xl">Growthfolio</span>
            </Link>
            <p className="text-gray-400">
              We enjoy building incredible things. Digital agency specializing in photography, videography, and creative
              solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Photography", "Videography", "Digital Marketing", "Web Design", "Branding"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/services/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-green-400">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/growth.folio/" className="text-gray-400 hover:text-green-400">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-green-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-green-400">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="text-gray-400">
              Email: info@growthfolio.com
              <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Growthfolio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-green-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-green-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
