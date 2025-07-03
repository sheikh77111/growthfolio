import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function GoogleMyBusinessPage() {
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
                Local SEO
              </span>
              <h1 className="text-4xl md:text-5xl font-hanson font-bold mb-6">Google My Business & Local SEO</h1>
              <p className="text-xl text-gray-300 mb-8">
                Make your business the top choice with a fully optimized Google My Business profile and local SEO
                strategies that drive foot traffic.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/seo.jpg" alt="Google My Business & Local SEO" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-hanson font-bold mb-6 text-black">Local Search Optimization</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Dominate local search results with our comprehensive Google My Business optimization and local SEO
                strategies. We help businesses increase their visibility in local searches and attract more customers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">GMB Optimization</h3>
                  <p className="text-white">Complete setup and optimization of your Google My Business profile.</p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Review Management</h3>
                  <p className="text-white">
                    Strategies to increase positive reviews and manage your online reputation.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Local Citations</h3>
                  <p className="text-white">
                    Building consistent business listings across local directories and platforms.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Local Content</h3>
                  <p className="text-white">Location-specific content that improves local search rankings.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-hanson font-bold mb-4 text-black">Local SEO Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Higher local rankings",
                  "Increased foot traffic",
                  "More phone calls",
                  "Better online visibility",
                  "Competitive advantage",
                  "Improved brand credibility",
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
