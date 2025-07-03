import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function SocialMediaMarketingPage() {
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
                Digital Marketing
              </span>
              <h1 className="text-4xl md:text-5xl font-hanson font-bold mb-6">Social Media Marketing</h1>
              <p className="text-xl text-gray-300 mb-8">
                Elevate your online presence with data-driven social media, PPC, and influencer campaigns that capture
                attention, expand your reach, and drive measurable results. 
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/socialmedia.jpg" alt="Social Media Marketing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-hanson font-bold mb-6 text-black">What We Offer</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our comprehensive social media marketing services are designed to build your brand presence, engage your
                audience, and drive conversions across all major platforms. 
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Strategy Development</h3>
                  <p className="text-white">
                    Custom social media strategies tailored to your brand goals and target audience.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Content Creation</h3>
                  <p className="text-white">
                    Engaging visual and written content that resonates with your audience and drives engagement.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Paid Advertising</h3>
                  <p className="text-white">
                    Targeted PPC campaigns across Facebook, Instagram, LinkedIn, and other platforms.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Analytics & Reporting</h3>
                  <p className="text-white">
                    Detailed performance tracking and monthly reports to measure ROI and optimize campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-hanson font-bold mb-4 text-black">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Increased brand awareness",
                  "Higher engagement rates",
                  "Lead generation",
                  "Improved customer loyalty",
                  "Better ROI tracking",
                  "24/7 monitoring",
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
