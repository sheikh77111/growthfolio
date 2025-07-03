"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ContactSection } from "@/components/contact-section"

interface PortfolioProject {
  id: number
  title: string
  category: string
  images: string[]
  description: string
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Creative Design",
    category: "Social Media Advertising",
    images: ["/images/creative1.jpg", "/images/creative1.jpg", "/images/creative1.jpg", "/images/creative1.jpg"],
    description: "Innovative, impactful, creative design."

  },
  {
    id: 2,
    title: "CGI Advertising",
    category: "Digital Advertising",
    images: ["/images/digital1.jpg", "/images/digital1.jpg", "/images/digital1.jpg", "/images/digital1.jpg"],
    description: "Immersive CG visuals driving brand impact",
  },
  {
    id: 3,
    title: "Motion Graphics",
    category: "Digital Advertising",
    images: ["/images/motion.jpg", "/images/motion.jpg", "/images/motion.jpg", "/images/motion.jpg"],
    description: "Dynamic visuals for digital growth.",
  },
  {
    id: 4,
    title: "UBC Restaurant",
    category: "Social Media Marketing",
    images: ["/images/UBC3.jpg", "/images/UBC3.jpg", "/images/UBC3.jpg", "/images/UBC3.jpg"],
    description: "Boosting restaurant visibility with content",
  },
  {
    id: 5,
    title: "Romero Original",
    category: "Social Media Marketing",
    images: ["/images/romero1.png", "/images/romero1.png", "/images/romero1.png", "/images/romero1.png"],
    description: "Bold visuals driving Romero's daily growth.",
  },
  {
    id: 6,
    title: "3D Product Animation",
    category: "Advertising",
    images: ["/images/3d1.jpg", "/images/3d1.jpg", "/images/3d1.jpg", "/images/3d1.jpg"],
    description: "mmersive visuals elevate brand identity",
  },
  {
    id: 7,
    title: "Video Production and Anchoring",
    category: "Lead Generation",
    images: ["/images/anchoring1.jpg", "/images/anchoring1.jpg", "/images/anchoring1.jpg", "/images/anchoring1.jpg"],
    description: "Video storytelling, production, and on-screen anchoring.",
  },
  {
    id: 8,
    title: "Artificial Intelligence",
    category: "Content Creation",
    images: ["/images/ai3.jpg", "/images/ai3.jpg", "/images/ai3.jpg", "/images/ai3.jpg"],
    description: "Create personalized video content effortlessly using AI.",
  },
  {
    id: 9,
    title: "Go On",
    category: "Branding",
    images: ["/images/go2.jpg", "/images/go2.jpg", "/images/go2.jpg", "/images/go2.jpg"],
    description: "Creative digital agency helping travel brands grow online.",
  },
  {
    id: 10,
    title: "Cafe Sufie",
    category: "Branding",
    images: ["/images/cafe1.jpg", "/images/cafe1.jpg", "/images/cafe1.jpg", "/images/cafe1.jpg"],
    description: "Building memorable brands that connect with audiences.",
  },
  {
    id: 11,
    title: "Cam Zone",
    category: "Branding",
    images: ["/images/cam1.png", "/images/cam1.png", "/images/cam1.png", "/images/cam1.png"],
    description: "Empowering brands with bold, strategic visual identities.",
  },
]

export default function PortfolioPage() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [titleVisible, setTitleVisible] = useState(false)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    if (titleRef.current) {
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
        }
      )
      titleObserver.observe(titleRef.current)
      observers.push(titleObserver)
    }

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems((prev) => new Set([...prev, index]))
              }
            })
          },
          {
            threshold: 0.1,
            rootMargin: "50px",
          }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <main className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            ref={titleRef}
            className={`
              text-4xl md:text-6xl lg:text-7xl font-hanson font-bold text-black mb-12 tracking-tight
              transform transition-all duration-1500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
              ${titleVisible ? "scale-100 rotate-0 opacity-100 translate-y-0" : "scale-90 rotate-1 opacity-0 translate-y-12"}
            `}
            style={{
              transformOrigin: "center center",
              filter: titleVisible ? "blur(0px)" : "blur(2px)",
            }}
          >
            <span
              className={`inline-block transform transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                titleVisible ? "translate-x-0 rotate-0" : "-translate-x-8 rotate-2"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              PORTFOLIO
            </span>{" "}
            <span
              className={`inline-block transform transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                titleVisible ? "translate-x-0 rotate-0" : "translate-x-8 -rotate-2"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              GALLERY
            </span>
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className={`transform transition-all duration-700 ease-out ${
                  visibleItems.has(index) ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ 
                  transitionDelay: `${Math.min(index, 8) * 100}ms` 
                }}
              >
                <Link href={`/portfolio/${project.id}`} className="group block">
                  <div className="relative h-[320px] w-full">
                    <div className="relative h-full w-full perspective-1000">
                      {project.images.slice(0, 3).map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:duration-700 stacked-image-${imageIndex} ${
                            imageIndex === 0 ? "z-30" : imageIndex === 1 ? "z-20" : "z-10"
                          }`}
                          style={{
                            transform: `
                              translateX(${imageIndex * 6}px)
                              translateY(${imageIndex * 6}px)
                              rotate(${imageIndex * 1.5}deg)
                              ${visibleItems.has(index) ? "" : `translateY(${20 + imageIndex * 10}px)`}
                            `,
                            transformOrigin: "center center",
                            transition: `all 700ms ease-out ${Math.min(index, 8) * 100 + imageIndex * 100}ms`,
                          }}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - Image ${imageIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {imageIndex === 0 && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                  <span className="inline-block px-3 py-1 bg-brand-green text-white text-xs font-semibold rounded-full mb-3">
                                    {project.category}
                                  </span>
                                  <h3 className="text-white font-hanson font-bold text-lg mb-2 leading-tight">{project.title}</h3>
                                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.description}
                                  </p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Hover effect styles */}
        <style jsx>{`
          .group:hover .stacked-image-0 {
            transform: translateX(-8px) translateY(-8px) rotate(-2deg) !important;
          }
          .group:hover .stacked-image-1 {
            transform: translateX(0px) translateY(0px) rotate(0deg) !important;
          }
          .group:hover .stacked-image-2 {
            transform: translateX(8px) translateY(8px) rotate(2deg) !important;
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
