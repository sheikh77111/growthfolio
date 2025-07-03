import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function WebsiteDevelopmentPage() {
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
                Web Development
              </span>
              <h1 className="text-4xl md:text-5xl font-hanson font-bold mb-6">Website Development</h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your online presence with seamless web design, development, and optimization that converts
                visitors into customers.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/webdevelop.jpg" alt="Website Development" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-hanson font-bold mb-6 text-black">Development Services</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We build modern, responsive websites that not only look great but also perform exceptionally. Our
                development process focuses on user experience, performance, and scalability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Custom Web Design</h3>
                  <p className="text-white">Unique designs tailored to your brand and business objectives.</p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">E-commerce Solutions</h3>
                  <p className="text-white">
                    Full-featured online stores with secure payment processing and inventory management.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">CMS Integration</h3>
                  <p className="text-white">
                    Easy-to-use content management systems for effortless website updates.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">SEO Optimization</h3>
                  <p className="text-white">Built-in SEO best practices to improve your search engine rankings.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-hanson font-bold mb-4 text-black">Technologies</h3>
              <ul className="space-y-3">
                {[
                  "React & Next.js",
                  "WordPress & Shopify",
                  "Mobile-first design",
                  "Performance optimization",
                  "Security implementation",
                  "Analytics integration",
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
