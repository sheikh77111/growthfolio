"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <main className="pt-20">
      {/* Hero Contact Section */}
      <section className="min-h-[80vh] bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[60vh]">
            {/* Left Side - Contact Information */}
            <div className="flex flex-col justify-center p-8 lg:p-16">
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-hanson font-bold mb-6 leading-tight">
                  CONTACT US.
                </h1>
                <h2 className="text-3xl md:text-4xl font-hanson font-bold mb-6">LET'S GROW TOGETHER!</h2>
                <p className="text-lg text-gray-300 mb-12">
                  Get in touch—our team will respond promptly to help you grow.
                </p>
              </div>

              {/* Contact Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Kochi Office */}
                <div>
                  <h3 className="text-2xl font-hanson font-bold mb-4">Calicut</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Calicut, Kerala,</p>
                    <p>India 673639</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <p className="text-white">growthfoliosmm@gmail.com</p>
                    <p className="text-white">+91 87144 12695 </p>
                  </div>
                </div>

                {/* London Office */}
                <div>
                  <h3 className="text-2xl font-hanson font-bold mb-4">Dubai</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>UAE, Dubai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Image */}
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/contact1.jpg"
                alt="Contact Us - Team Meeting"
                fill
                className="object-cover rounded-lg lg:rounded-none lg:rounded-r-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Contact Form Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Empty Space */}
            <div className="hidden lg:block"></div>

            {/* Right Side - Contact Form */}
            <div className="bg-black text-white p-8 lg:p-12 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-hanson font-bold mb-4">
                Reach Out Today—Let’s Kickstart Something Great!
              </h2>
              <p className="text-base text-gray-300 mb-8">
                Let’s talk. We’ll follow up faster than your next notification.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition-colors resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-white hover:text-brand-green transition-colors text-sm font-medium"
                  >
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Original Contact Section */}
      <ContactSection />
    </main>
  )
}
