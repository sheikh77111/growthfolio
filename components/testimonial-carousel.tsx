"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ashbi Johnson",
    position: "Marketing Director",
    company: "TechCorp",
    image: "/images/ashbi.jpeg",
    quote: "Growthfolio's personalized approach and clear communication made all the difference. Amazing team!",
    rating: 5,
  },
  {
    id: 2,
    name: "Shimi Chen",
    position: "CEO",
    company: "StartUp Innovations",
    image: "/images/shimi.jpeg",
    quote:
      "The quality of work delivered by Growthfolio exceeded our expectations. Their team understood our vision perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rashad Williams",
    position: "Brand Manager",
    company: "Luxury Brands Inc.",
    image: "/images/rashad.jpeg",
    quote:
      "Working with Growthfolio transformed our brand presence. Their creative approach and attention to detail is unmatched.",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Client Photos Row - Only showing 3 photos */}
          <div className="flex justify-center gap-6 mb-12">
            {testimonials.map((client, clientIndex) => (
              <div
                key={client.id}
                className={`w-20 h-20 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                  clientIndex === currentIndex ? "ring-4 ring-brand-green scale-110" : "opacity-50 scale-90"
                }`}
                onClick={() => setCurrentIndex(clientIndex)}
              >
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Testimonial Content with Fixed Navigation */}
          <div className="relative">
            {/* Left Navigation - Fixed Position */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 flex items-center gap-2 text-black hover:text-gray-600 transition-colors group z-10"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium text-lg">PREV</span>
            </button>

            {/* Right Navigation - Fixed Position */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 flex items-center gap-2 text-black hover:text-gray-600 transition-colors group z-10"
            >
              <span className="font-medium text-lg">NEXT</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Testimonial Card */}
            <div className="text-center px-16">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {Array(currentTestimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                  {currentTestimonial.quote}
                </blockquote>
                <div>
                  <h3 className="font-bold text-xl text-black">{currentTestimonial.name}</h3>
                  <p className="text-gray-600">
                    {currentTestimonial.position}, {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-brand-green" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
