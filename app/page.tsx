import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section with Video Background Only */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Scroll indicator - Always visible */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* New Ideas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-hanson font-bold text-black mb-8 leading-tight">
                IDEAS THAT CONNECT*
                <br />
                RESULTS THAT LAST
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-hanson font-bold text-black mb-4">About Us</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Hi! We’re your go-to marketing partner for smart strategies, eye-catching designs, and unforgettable branding. 
                  Ready to take your business to the next level? Let’s make magic—coffee sometime?
                </p>
              </div>
            </div>

            {/* Right Side - Hover21 GIF */}
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 group cursor-pointer">
                <Image
                  src="/images/hover21.gif"
                  alt="Creative Animation"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section with Taller Moving Images */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-hanson font-bold text-black text-center">Featured Work</h2>
        </div>

        {/* Two Rows of Moving Images - Taller and exactly 4 visible at full screen */}
        <div className="space-y-8">
          {/* First Row - Moving Right */}
          <div className="flex animate-scroll-right">
            {[
              {
                id: 1,
                title: "creative Design",
                category: "Social Media Marketing",
                cover: "/images/creatives.jpg",
              },
              {
                id: 2,
                title: "Digital Advertising",
                category: " CGI Advertising",
                cover: "/images/digital1.jpg",
              },
              {
                id: 3,
                title: "Motion Graphics",
                category: "Digital Advertising",
                cover: "/images/motion.jpg",
              },
              {
                id: 4,
                title: "UBC Restaurant",
                category: "Social Media Marketing",
                cover: "/images/UBC1.jpg",
              },
              {
                id: 5,
                title: "Romero Original",
                category: "Social Media Advertising",
                cover: "/images/pizza.jpg",
              },
              {
                id: 6,
                title: "3D Product Animation",
                category: "Advertising",
                cover: "/images/432e.jpg",
              },
              
            ]
              .concat([
                // Duplicate for seamless loop
                {
                  id: 7,
                  title: "Video Production and Anchoring",
                  category: "Lead genration",
                  cover: "/images/anchoring.jpg",
                },
  
              ])
              .map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 mx-6 transform rotate-3 hover:rotate-0 transition-transform duration-300"
                >
                  <Link href={`/portfolio/${project.id}`} className="block">
                    <div className="relative w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] md:w-[360px] md:h-[480px] overflow-hidden rounded-3xl shadow-2xl">
                      <Image src={project.cover} alt={project.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="font-bold text-xl">{project.title}</h3>
                        <p className="text-base opacity-80">{project.category}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          

           {/* First Row - Moving left */}
          <div className="flex animate-scroll-left">
            {[
              {
                id: 1,
                title: "creative Design",
                category: "Social Media Marketing",
                cover: "/images/creatives.jpg",
              },
              {
                id: 2,
                title: "Digital Advertising",
                category: " CGI Advertising",
                cover: "/images/digital1.jpg",
              },
              {
                id: 3,
                title: "Motion Graphics",
                category: "Digital Advertising",
                cover: "/images/motion.jpg",
              },
              {
                id: 4,
                title: "UBC Restaurant",
                category: "Social Media Marketing",
                cover: "/images/UBC1.jpg",
              },
              {
                id: 5,
                title: "Romero Original",
                category: "Social Media Advertising",
                cover: "/images/pizza.jpg",
              },
              {
                id: 6,
                title: "3D Product Animation",
                category: "Advertising",
                cover: "/images/432e.jpg",
              },
              
            ]
              .concat([
                // Duplicate for seamless loop
                {
                  id: 7,
                  title: "Video Production and Anchoring",
                  category: "Lead genration",
                  cover: "/images/anchoring.jpg",
                },
  
              ])
              .map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 mx-6 transform rotate-3 hover:rotate-0 transition-transform duration-300"
                >
                  <Link href={`/portfolio/${project.id}`} className="block">
                    <div className="relative w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] md:w-[360px] md:h-[480px] overflow-hidden rounded-3xl shadow-2xl">
                      <Image src={project.cover} alt={project.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="font-bold text-xl">{project.title}</h3>
                        <p className="text-base opacity-80">{project.category}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
       </div>

        {/* View All Work Button */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
          >
            View All Work <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Client Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Our Team Section - Updated with New Team Image */}
      <section className="w-full">
        <div className="text-center py-16 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-hanson font-bold text-black">OUR TEAM.</h2>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/images/43ew.jpeg"
            alt="Our Team - Growthfolio"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
