import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function CreativeContentPage() {
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
                Content Creation
              </span>
              <h1 className="text-4xl md:text-5xl font-hanson font-bold mb-6">Creative Content Production</h1>
              <p className="text-xl text-gray-300 mb-8">
                From social media photography to ad campaigns, we produce content that engages your audience and
                amplifies your brand message.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/content.jpg" alt="Creative Content Production" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-hanson font-bold mb-6 text-black">Content That Converts</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our creative content production services help you tell your brand story through compelling visuals,
                engaging copy, and strategic messaging that resonates with your target audience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Social Media Content</h3>
                  <p className="text-white">Eye-catching posts, stories, and reels optimized for each platform.</p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Ad Campaigns</h3>
                  <p className="text-white">Compelling advertising content that drives clicks and conversions.</p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Blog Content</h3>
                  <p className="text-white">
                    SEO-optimized articles that establish thought leadership and drive traffic.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg">
                  <h3 className="font-hanson font-bold text-lg mb-3">Video Content</h3>
                  <p className="text-white">
                    Engaging video content for social media, websites, and advertising campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-hanson font-bold mb-4 text-black">Content Types</h3>
              <ul className="space-y-3">
                {[
                  "Photography & graphics",
                  "Video production",
                  "Copywriting & blogs",
                  "Infographics",
                  "Email campaigns",
                  "Social media templates",
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
