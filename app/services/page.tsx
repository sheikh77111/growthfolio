import Link from "next/link"
import { ContactSection } from "@/components/contact-section"

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-hanson font-bold text-black mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Social Media Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-hanson font-bold text-black mb-3">Social Media Marketing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Elevate your online presence with data-driven social media, PPC, and influencer campaigns. Our team
                    crafts strategies that capture attention, expand your reach, and drive results.
                  </p>
                  <Link
                    href="/services/social-media-marketing"
                    className="text-black font-medium text-sm hover:text-green-500 transition-colors"
                  >
                    • READ MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Photography & Videography */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-hanson font-bold text-black mb-3">Photography & Videography</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Make your event unforgettable! Our team captures every moment with vivid photography and videography
                    that tells your story with impact and style.
                  </p>
                  <Link
                    href="/services/photography-videography"
                    className="text-black font-medium text-sm hover:text-green-500 transition-colors"
                  >
                    • READ MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Branding & Design */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-hanson font-bold text-black mb-3">Branding & Design</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Stand out with a unique brand identity! From logos to taglines, we create visuals that leave a
                    lasting impression and position you above the competition.
                  </p>
                  <Link
                    href="/services/branding-design"
                    className="text-black font-medium text-sm hover:text-green-500 transition-colors"
                  >
                    • READ MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Website Development */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">W</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-hanson font-bold text-black mb-3">Website Development</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Transform your online presence with seamless web design, development, and optimization that converts
                    visitors into customers.
                  </p>
                  <Link
                    href="/services/website-development"
                    className="text-black font-medium text-sm hover:text-green-500 transition-colors"
                  >
                    • READ MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Creative Content Production */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-hanson font-bold text-black mb-3">Creative Content Production</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    From social media photography to ad campaigns, we produce content that engages your audience and
                    amplifies your brand message.
                  </p>
                  <Link
                    href="/services/creative-content"
                    className="text-black font-medium text-sm hover:text-green-500 transition-colors"
                  >
                    • READ MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Google My Business & Local SEO */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">G</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-hanson font-bold text-black mb-3">Google My Business & Local SEO</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Make your business the top choice with a fully optimized Google My Business profile and local SEO
                    strategies that drive foot traffic.
                  </p>
                  <Link
                    href="/services/google-my-business"
                    className="text-black font-medium text-sm hover:text-green-500 transition-colors"
                  >
                    • READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
