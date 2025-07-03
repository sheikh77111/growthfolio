import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Branding */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-2xl font-hanson font-bold mb-2">DISCOVER.</h2>
              <h2 className="text-2xl font-hanson font-bold mb-2">CREATE.</h2>
              <h2 className="text-2xl font-hanson font-bold mb-8">EXECUTE.</h2>
            </div>
            <p className="text-gray-400">All Rights Reserved © 2025</p>
          </div>

          {/* Middle Column - Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-hanson font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p>Calicut, Kerala</p>
                <p>India 673639</p>
              </div>
              <div className="pt-4">
                <p className="mb-2">growthfoliosmm@gmail.com</p>
                <p>+91 87144 12695</p>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-hanson font-bold mb-6">Our Newsletter</h3>
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent border-b border-gray-600 py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                />
                <button className="ml-4 text-white hover:text-gray-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex space-x-6">
              <Link href="https://www.instagram.com/growth.folio/" className="text-white hover:text-gray-300">
                in.
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                fb.
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                li
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                lt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
