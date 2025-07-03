import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function PhotographyVideographyPage() {
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
                Creative Services
              </span>
              <h1 className="text-4xl md:text-5xl font-hanson font-bold mb-6">Photography & Videography</h1>
              <p className="text-xl text-gray-300 mb-8">
                Make your event unforgettable! Our team captures every moment with vivid photography and videography
                that tells your story with impact and style.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/photo.jpg" alt="Photography & Videography" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-hanson font-bold mb-6 text-black">What We Capture</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                From corporate events to personal celebrations, our photography and videography services ensure every
                important moment is captured with professional quality and artistic vision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Event Photography</h3>
                  <p className="text-white">
                    Professional coverage of corporate events, weddings, and special occasions.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Commercial Videography</h3>
                  <p className="text-white">
                    High-quality video production for marketing, training, and promotional content.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Product Photography</h3>
                  <p className="text-white">
                    Stunning product shots that showcase your items in the best possible light.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Brand Storytelling</h3>
                  <p className="text-white">
                    Visual narratives that communicate your brand values and connect with your audience.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-hanson font-bold mb-4 text-black">Our Expertise</h3>
              <ul className="space-y-3">
                {[
                  "4K video production",
                  "Drone photography",
                  "Professional lighting",
                  "Post-production editing",
                  "Same-day delivery options",
                  "Multi-camera setups",
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
