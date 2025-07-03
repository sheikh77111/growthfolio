"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"

export default function AboutPage() {
  const [titleVisible, setTitleVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContentVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (titleRef.current) {
      titleObserver.observe(titleRef.current)
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current)
    }

    return () => {
      titleObserver.disconnect()
      contentObserver.disconnect()
    }
  }, [])

  return (
    <main className="pt-20">
      {/* Main Image Section */}
      <section className="w-full">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/images/pic2.jpg"
            alt="Team collaboration at UpSwing Digital"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div
            ref={titleRef}
            className={`
              transform transition-all duration-1000 ease-out
              ${titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-hanson font-bold text-black leading-tight mb-12">
              <div
                className={`
                  transform transition-all duration-700 ease-out delay-200
                  ${titleVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}
                `}
              >
                Why We’re a Great Fit
              </div>
              <div
                className={`
                  transform transition-all duration-700 ease-out delay-500
                  ${titleVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
                `}
              >
                FOR YOU
              </div>
            </h2>
          </div>

          {/* Content Text Section - Left Aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <div
              ref={contentRef}
              className={`
                text-left
                transform transition-all duration-1000 ease-out delay-700
                ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
              `}
            >
              <h3
                className={`
                  text-lg md:text-xl lg:text-2xl font-hanson font-bold text-black leading-tight mb-8
                  transform transition-all duration-800 ease-out delay-900
                  ${contentVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}
                `}
              >
                <div>INNOVATIVE STRATEGY FOR</div>
                <div>BUSINESS GROWTH |</div>
                <div>GROWTHFOLIO</div>
              </h3>
              <p
                className={`
                  text-lg md:text-xl text-gray-700 leading-relaxed
                  transform transition-all duration-800 ease-out delay-1100
                  ${contentVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}
                `}
              >
                Your Digital Marketing Powerhouse
                We’re not just another agency — we’re your secret weapon for digital domination. From boosting clicks to 
                crushing conversions, we make marketing both powerful and fun. Why settle for a basic social media agency 
                when you can have a full-service digital marketing partner? 
                Let’s chat and sprinkle some marketing magic on your brand!
              </p>
            </div>
            {/* Right side - White blank space */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl lg:text-2xl font-hanson font-bold mb-8 text-black">
            Who We Are & What We Do?
          </h2>
          <div className="prose prose-lg prose-invert">
            <p className="text-black leading-relaxed mb-6">
              At GROWTHFOLIO, we are a dynamic Social Media Communications & Digital Media Agency based in India.
              Recognizing the pivotal role of a brand's digital presence, we delve deeply into understanding our clients
              and their target audiences. Our approach involves creating, developing, and communicating brand messages
              in a compelling and impactful manner across relevant digital platforms.
            </p>
            <p className="text-black leading-relaxed mb-6">
              GROWTHFOLIO specializes in designing and executing innovative social media marketing campaigns. Leveraging
              cutting-edge digital media tools, our goal is to bring genuine value to both potential and existing
              stakeholders. Our commitment is to transcend the conventional and ensure that our campaigns resonate
              authentically, steering clear of the typical corporate push.
            </p>
            <p className="text-black leading-relaxed">
              Rather than just telling our story, we prefer showcasing it through the lens of the projects we deliver
              for our clients. The following pages unveil a glimpse into our services and some of the most successful
              campaigns we've crafted. Each project is a testament to our dedication to transforming brands in the
              digital sphere.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
