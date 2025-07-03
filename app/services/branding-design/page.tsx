import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function BrandingDesignPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full mb-4">
                Brand Identity
              </span>
              <h1 className="text-4xl md:text-5xl font-hanson font-bold mb-6">Branding & Design</h1>
              <p className="text-xl text-gray-300 mb-8">
                Stand out with a unique brand identity! From logos to taglines, we create visuals that leave a lasting
                impression and position you above the competition.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/branding.jpg" alt="Branding & Design" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-hanson font-bold mb-6 text-black">Brand Identity Solutions</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We create comprehensive brand identities that resonate with your target audience and differentiate you
                from competitors. Our design process ensures consistency across all touchpoints.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Logo Design</h3>
                  <p className="text-white">
                    Memorable logos that capture your brand essence and work across all media.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Brand Guidelines</h3>
                  <p className="text-white">Comprehensive style guides to ensure consistent brand application.</p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Marketing Materials</h3>
                  <p className="text-white">
                    Business cards, brochures, and promotional materials that reinforce your brand.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Digital Assets</h3>
                  <p className="text-white">Social media templates, email signatures, and web graphics.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-hanson font-bold mb-4 text-black">Design Process</h3>
              <ul className="space-y-3">
                {[
                  "Brand discovery workshop",
                  "Competitive analysis",
                  "Concept development",
                  "Design refinement",
                  "Brand guideline creation",
                  "Asset delivery",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
