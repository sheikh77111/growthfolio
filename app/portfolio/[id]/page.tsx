"use client"

import { use } from "react"
import type { JSX } from "react"
import { useRef, useState } from "react"
import { PlayCircle } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import {ArrowLeft, ArrowRight, X } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

interface ProjectPageProps {
  params: {
    id: string
  }
}

// Project data with pic1 images
const projectsData = {
  1: {
    title: "Creative Design",
    category: "Social Media Marketing",
    description:
      "We craft visually compelling designs that captivate audiences and strengthen your brand identity.",
    location: "Global",
    year: "2025",
    services: ["Social Media Design", "Brand Identity Design", "Print Media Design","Marketing Collateral","Event & Campaign Branding "],
    media: [
  { type: "image", src: "/images/creative1.jpg" },
  { type: "image", src: "/images/creative2.jpg" },
  { type: "image", src: "/images/creative3.jpg" },
  { type: "image", src: "/images/creative4.jpg" },
  { type: "image", src: "/images/creative5.jpg" },
  { type: "image", src: "/images/creative6.jpg" },
  { type: "image", src: "/images/creative7.jpg" },
  { type: "image", src: "/images/creative8.jpg" },
  { type: "image", src: "/images/creative9.jpg" },
  { type: "image", src: "/images/creative10.jpg" },
  { type: "image", src: "/images/creative11.jpg" },
  { type: "image", src: "/images/creative12.jpg" },
  { type: "image", src: "/images/creative13.jpg" },
  { type: "image", src: "/images/creative14.jpg" },
  { type: "image", src: "/images/creative15.jpg" },
  { type: "image", src: "/images/creative16.jpg" },
  { type: "image", src: "/images/creative17.jpg" },
  { type: "image", src: "/images/creative18.jpg" },
  { type: "image", src: "/images/creative19.png" },
  { type: "image", src: "/images/creative20.jpg" },
  { type: "image", src: "/images/creative21.jpg" },
  { type: "image", src: "/images/creative22.jpg" },
  { type: "image", src: "/images/creative23.jpg" },
  { type: "image", src: "/images/creative24.jpg" },
  { type: "image", src: "/images/creative25.jpg" },
  { type: "image", src: "/images/creative26.jpg" },
  { type: "image", src: "/images/creative27.jpg" },
  
],
    challenge:
      "Brands struggled to visually communicate their message effectively across digital platforms, leading to weak audience engagement and inconsistent branding.",
    solution:
      "We crafted cohesive visual identities, engaging social media creatives, and dynamic motion graphics tailored to each brand’s personality and goals.",
    results: "Improved brand recognition by 3× and increased engagement rates across digital channels by up to 70%.",
  },
  2: {
    title: "CGI Advertising",
    category: "Digital Advertising",
    description:
      "We create impactful CGI advertising that transforms ideas into stunning, hyper-realistic visuals to elevate brand storytelling and captivate audiences.",
    location: "Global",
    year: "2025",
    services: ["Product Visualization", "CGI Commercials", "Virtual Environments"],
    media: [

  { type: "image", src: "/images/mock.jpg" },
  { type: "video", src: "/videos/mock1.mp4" },
  { type: "video", src: "/videos/mock2.mp4" },
  { type: "video", src: "/videos/mock3.mp4" },
  { type: "video", src: "/videos/mock4.mp4" },
],

    challenge:
      "The client sought to create visually compelling advertisements that could showcase their products in imaginative, high-impact scenarios not possible with traditional filming methods.",
    solution:
      "We crafted photorealistic CGI visuals that allowed for complete creative control, enabling dynamic storytelling, seamless integration with digital platforms, and cost-effective production without sacrificing quality.",
    results:
      "The campaign saw a 60% increase in engagement rates and a 35% boost in brand recall, with audiences praising the visuals as innovative and memorable.",
  },
  3: {
    title: "Motion Graphics",
    category: "Digital Advertising",
    description:
      "We create dynamic motion graphics that captivate audiences and elevate your digital marketing impact.",
    location: "Global",
    year: "2025",
    services: ["Logo Animations", "Product Demo Videos", "Social Media Animation","Explainer Videos","3D Motion Graphics"],
    media: [
  { type: "image", src: "/images/motion1.jpg" },
  { type: "video", src: "/videos/motion1.mp4" },
  { type: "video", src: "/videos/motion2.mp4" },
  { type: "video", src: "/videos/motion3.mp4" },
  { type: "video", src: "/videos/motion4.mp4" },
  { type: "video", src: "/videos/motion5.mp4" },
  { type: "video", src: "/videos/motion6.mp4" },
  { type: "video", src: "/videos/motion7.mp4" },
  { type: "video", src: "/videos/motion8.mp4" },
  { type: "video", src: "/videos/motion9.mp4" },
  { type: "video", src: "/videos/motion10.mp4" },
  { type: "video", src: "/videos/motion11.mp4" },
  { type: "video", src: "/videos/motion12.mp4" },
  { type: "video", src: "/videos/motion13.mp4" },
  { type: "video", src: "/videos/motion14.mp4" },
  { type: "video", src: "/videos/motion15.mp4" },
  { type: "video", src: "/videos/motion16.mp4" },
  { type: "video", src: "/videos/motion17.mp4" },
  { type: "video", src: "/videos/motion18.mp4" },
  { type: "video", src: "/videos/motion19.mp4" },
  { type: "video", src: "/videos/motion20.mp4" },
  { type: "video", src: "/videos/motion21.mp4" },
  { type: "video", src: "/videos/motion22.mp4" },
  { type: "video", src: "/videos/motion23.mp4" },
  { type: "video", src: "/videos/motion24.mp4" },
  { type: "video", src: "/videos/motion25.mp4" },
],

    challenge:
      "In today’s digital landscape, managing content across multiple platforms has become overwhelming — with scattered tools, inconsistent scheduling, and limited insights holding teams back.",
    solution:
      "The answer lies in a unified, intuitive system that brings everything together — combining scheduling, publishing, and real-time analytics in one seamless experience.",
    results: "The impact? Drastically improved workflows, smarter content decisions, and significantly higher engagement across all channels.",
  },
  4: {
    title: "UBC Restaurant",
    category: "Social Media Marketing",
    description:
      "UBC Restaurant partnered with our digital marketing agency to enhance its social media presence through targeted content, engaging visuals, and strategic campaign management.",
    location: "Koyilandy",
    year: "2025",
    services: ["Social Media Managing", "Video Production", "Graphic Design"],
    media: [
  { type: "image", src: "/images/UBC2.jpg" },
  { type: "image", src: "/images/UBC3.jpg" },
  { type: "video", src: "/videos/UBC1.mp4" },
  { type: "image", src: "/images/UBC4.jpg" },
  { type: "image", src: "/images/UBC5.jpg" },
  { type: "video", src: "/videos/UBC2.mp4" },
  { type: "image", src: "/images/UBC6.jpg" },
  { type: "image", src: "/images/UBC7.jpg" },
  { type: "video", src: "/videos/UBC3.mp4" },
  { type: "image", src: "/images/UBC8.jpg" },
  { type: "image", src: "/images/UBC9.jpg" },
  { type: "video", src: "/videos/UBC4.mp4" },
  { type: "image", src: "/images/UBC1.jpg" },
  { type: "video", src: "/videos/UBC5.mp4" },
],

    challenge:
      "UBC Restaurant needed to stand out in a competitive food scene and attract more foot traffic through a stronger online presence.",
    solution:
      "We crafted a tailored social media strategy with high-quality food photography, engaging reels, customer-focused content, and geo-targeted campaigns.",
    results: "Social engagement grew by 200%, and in-store visits increased by 35% within three months of campaign launch.",
  },
  5: {
    title: "Romero Original",
    category: "Social Media Marketing",
    description:
      "At Growthfolio, we're proud to partner with Romero Original, a UK-based takeaway known for their mouthwatering pizzas and burgers. From bold motion videos to eye-catching social media creatives, we help them stand out online and attract more hungry customers every day.",
    location: ["Whallvy ,"," United Kingdom"],
    year: "2025",
    services: ["Social Media Handling", "Motion Graphics", "Creatives - social media posts"],
    media: [
  { type: "image", src: "/images/rome1.jpg" },
  { type: "video", src: "/videos/demo1_web.mp4" },
  { type: "image", src: "/images/rome2.jpg" },
  { type: "video", src: "/videos/demo2_web.mp4" },
  { type: "image", src: "/images/rome3.jpg" },
  { type: "video", src: "/videos/demo3_web.mp4" },
  { type: "image", src: "/images/rome4.jpg" },
  { type: "video", src: "/videos/demo4_web.mp4" },
  { type: "image", src: "/images/rome5.jpg" },
  { type: "video", src: "/videos/demo5_web.mp4" },
  { type: "image", src: "/images/rome6.jpg" },
  { type: "video", src: "/videos/demo6_web.mp4" },
],

    challenge:
      "Romero needed to boost its brand visibility and attract more foot traffic in a highly competitive food market, especially among younger, social media-savvy customers.",
    solution:
      "We developed a vibrant social media strategy featuring mouthwatering food photography, engaging Reels, influencer collaborations, and time-sensitive offers to drive both online engagement and in-store visits.",
    results:
      "UBC experienced a 75% increase in social media engagement, a 50% rise in follower count within three months, and a 30% boost in daily customer visits driven by online promotions.",
  },
  
  6: {
    title: "3D Product Animation",
    category: "Advertising",
    description:
      "We create high-impact 3D animations that bring your products to life, driving engagement and elevating your brand's visual presence.",
    location: "Global",
    year: "2024",
    services: ["3D Product Modeling", "3D Animation & Motion Design", "Texturing & Rendering"],
    media: [
  { type: "image", src: "/images/3d2.png" },
  { type: "image", src: "/images/3d1.jpg" },
  { type: "video", src: "/videos/3d.mp4" },
  { type: "image", src: "/images/3d3.jpg" },
  { type: "video", src: "/videos/3d1.mp4" },
  { type: "image", src: "/images/3d4.png" },
  { type: "image", src: "/images/3d5.png" },
  { type: "video", src: "/videos/3d3.mp4" },
  { type: "image", src: "/images/3d6.png" },
  { type: "image", src: "/images/3d7.png" },
  { type: "video", src: "/videos/3d2.mp4" },
  { type: "image", src: "/images/3d14.jpg" },
  { type: "image", src: "/images/3d8.jpg" },
  { type: "image", src: "/images/3d9.jpg" },
  { type: "video", src: "/videos/3d4.mp4" },
  { type: "image", src: "/images/3d10.jpg" },
  { type: "image", src: "/images/3d11.jpg" },
  { type: "video", src: "/videos/3d5.mp4" },
  { type: "image", src: "/images/3d12.jpg" },
  { type: "image", src: "/images/3d13.jpg" },
  { type: "video", src: "/videos/3d6.mp4" },
  { type: "image", src: "/images/3d15.jpg" },
  { type: "image", src: "/images/3d16.jpg" },
  { type: "image", src: "/images/3d17.jpg" },
  { type: "image", src: "/images/3d18.jpg" },
  { type: "image", src: "/images/3d19.jpg" },
],
    challenge:
      "Presenting complex product features in an engaging and visually clear way that resonates with both technical and non-technical audiences.",
    solution:
      "We crafted high-quality 3D animations that highlighted key product functions, materials, and user benefits—using dynamic motion, realistic rendering, and brand-aligned aesthetics.",
    results:
      "The animations boosted product understanding, increased customer engagement across digital platforms, and supported more effective marketing and sales presentations.",
  },
  7: {
    title: "Video Producation abd Anchoring",
    category: "Lead Generation",
    description:
      "Video production and anchoring create engaging visual content and on-camera messaging to boost brand impact.",
    location: "Global",
    year: "2025",
    services: ["Scriptwriting & Storyboarding", "Event Videography", "On-Camera Hosting & Anchoring","Video Shooting & Editing","Social Media Video Campaigns"],
    media: [
  { type: "image", src: "/images/anchoring2.jpg" },
  { type: "video", src: "/videos/anchoring1.mp4" },
  { type: "video", src: "/videos/anchoring2.mp4" },
  { type: "video", src: "/videos/anchoring3.mp4" },
  { type: "video", src: "/videos/anchoring4.mp4" },
  { type: "video", src: "/videos/anchoring5.mp4" },
  { type: "video", src: "/videos/anchoring6.mp4" },
  { type: "video", src: "/videos/anchoring7.mp4" },
],
    challenge:
      "Brands struggled to create professional, engaging video content that effectively communicated their message and connected with online audiences.",
    solution:
      "We provided end-to-end video production and anchoring services, including scripting, on-camera talent, filming, and editing, tailored for digital platforms.",
    results: "Clients saw up to 3x higher engagement rates and a 60% increase in video-driven conversions across social and web channels",
  },
  8: {
    title: "Artificial Intelligence",
    category: "Content Creation",
    description:
      "We create AI-powered videos that streamline content production, deliver personalized messaging, and boost engagement across digital platforms.",
    location: "Global",
    year: "2025",
    services: ["AI-Generated Scriptwriting", "Text-to-Video Creation", "AI Voiceovers & Avatars","Automated Video Personalization"],
    media: [
  { type: "image", src: "/images/ai1.jpg" },
  { type: "video", src: "/videos/ai1.mp4" },
  { type: "image", src: "/images/ai2.jpg" },
  { type: "video", src: "/videos/ai2.mp4" },
  { type: "image", src: "/images/ai4.jpg" },
  { type: "video", src: "/videos/ai3.mp4" },
  { type: "image", src: "/images/ai5.jpg" },
  { type: "video", src: "/videos/ai4.mp4" },
  { type: "image", src: "/images/ai6.jpg" },
  { type: "video", src: "/videos/ai5.mp4" },
  { type: "image", src: "/images/ai7.jpg" },
  { type: "video", src: "/videos/ai6.mp4" },
  { type: "image", src: "/images/ai8.jpg" },
  { type: "video", src: "/videos/ai7.mp4" },
  { type: "video", src: "/videos/ai8.mp4" },
],

    challenge:
      "Brands needed to produce high-quality video content quickly and affordably to keep up with the fast-paced demands of digital platforms.",
    solution:
      "We leveraged AI tools to automate scriptwriting, voiceovers, and video editing, enabling scalable and consistent video content creation.",
    results: "Clients saw a 3x increase in viewer engagement and a 40% boost in conversion rates from video-driven campaigns.",
  },
  9: {
    title: "Go On",
    category: "Branding",
    description:
      "We are a results-driven digital marketing agency that helps travel brands like Go On grow through strategic branding, targeted campaigns, and engaging digital experiences.",
    location: "Global",
    year: "2025",
    services: ["Logo Designing", "Business Card", "Cover Letter","Branding"],
    media: [

  { type: "image", src: "/images/go1.jpg" },
  { type: "image", src: "/images/go3.jpg" },
  { type: "image", src: "/images/go4.jpg" },
  { type: "image", src: "/images/go5.jpg" },
  { type: "image", src: "/images/go2.jpg" },
  { type: "image", src: "/images/go7.jpg" },
  { type: "image", src: "/images/go8.jpg" },
  { type: "image", src: "/images/go9.jpg" },
  { type: "image", src: "/images/go10.jpg" },
  { type: "image", src: "/images/go11.jpg" },
  { type: "image", src: "/images/go12.jpg" },
  { type: "image", src: "/images/go13.jpg" },
  { type: "image", src: "/images/go14.jpg" },
  { type: "image", src: "/images/go15.jpg" },
  { type: "image", src: "/images/go16.jpg" },
  { type: "image", src: "/images/go17.jpg" },
  { type: "image", src: "/images/go18.jpg" },
  { type: "image", src: "/images/go19.jpg" },
  { type: "image", src: "/images/go20.jpg" },
  { type: "image", src: "/images/go21.jpg" },
  { type: "image", src: "/images/go22.jpg" },
  { type: "image", src: "/images/go23.jpg" },
  { type: "image", src: "/images/go24.jpg" },
  { type: "image", src: "/images/go25.jpg" },
],

    challenge:
      "Go On wanted to establish a strong and cohesive brand identity across digital and print platforms, aiming to stand out in the competitive travel industry with visuals that inspire trust and wanderlust.",
    solution:
      "We developed a complete branding suite—including a custom-designed logo, professional business cards, compelling cover letters, and a consistent visual identity—that reflects the spirit of adventure and reliability. Every element was crafted to ensure brand consistency, recognition, and appeal across all customer touchpoints.",
    results:
      "The refreshed branding led to a 60% increase in customer engagement and a 35% improvement in brand recall. Go On’s audience praised the new visuals as both modern and inspiring, helping the brand position itself as a top-tier travel agency.",
  },
  10: {
    title: "Cafe Sufie",
    category: "Branding",
    description:
      "We are a digital marketing agency that builds memorable and authentic brand experiences to help cafés like Cafe Sufie stand out and connect with their audience.",
    location: "Global",
    year: "2025",
    services: ["Logo Designing", "Business Card", "Cover Letter","Branding"],
    media: [

  { type: "image", src: "/images/cafe2.jpg" },
  { type: "image", src: "/images/cafe3.jpg" },
  { type: "image", src: "/images/cafe4.jpg" },
  { type: "image", src: "/images/cafe5.jpg" },
  { type: "image", src: "/images/cafe6.jpg" },
  { type: "image", src: "/images/cafe7.jpg" },
  { type: "image", src: "/images/cafe8.jpg" },
  { type: "image", src: "/images/cafe9.jpg" },
  { type: "image", src: "/images/cafe10.jpg" },
  { type: "image", src: "/images/cafe11.jpg" },
  { type: "image", src: "/images/cafe12.jpg" },
  { type: "image", src: "/images/cafe13.jpg" },
  { type: "image", src: "/images/cafe14.jpg" },
  { type: "image", src: "/images/cafe15.jpg" },
],

    challenge:
      "Cafe Sufie needed a distinct and visually appealing brand identity to stand out in a crowded café market and create a memorable impression on both new and returning customers.",
    solution:
      "We developed a cohesive and elegant branding package—including a custom logo, visual identity, and marketing materials—that reflected the café’s unique ambiance and charm, enabling consistent storytelling across digital and physical touchpoints.",
    results:
      "Following the rebrand, Cafe Sufie experienced a 60% increase in customer engagement and a 35% boost in brand recall, with customers praising the café’s new look as warm, stylish, and unforgettable.",
  },
  11: {
    title: "Cam Zone",
    category: "Branding",
    description:
      "We create bold and strategic brand identities that help companies like Cam Zone stand out and build trust in competitive markets.",
    location: "Global",
    year: "2025",
    services: ["Logo Designing", "Business Card", "Cover Letter","Branding"],
    media: [

  { type: "image", src: "/images/cam2.png" },
  { type: "image", src: "/images/cam3.png" },
  { type: "image", src: "/images/cam4.png" },
  { type: "image", src: "/images/cam7.png" },
  { type: "image", src: "/images/cam5.jpg" },
  { type: "image", src: "/images/cam6.jpg" },
  { type: "image", src: "/images/cam8.jpg" },
  
],

    challenge:
      "Cam Zone aimed to create visually impactful branding that could effectively convey trust, innovation, and the reliability of their home security solutions—beyond what traditional advertising could achieve.",
    solution:
      "We designed a comprehensive visual identity featuring bold, modern branding and marketing materials that communicated safety and professionalism, allowing for strong storytelling and seamless integration across digital and print platforms.",
    results:
      "The refreshed branding enhanced Cam Zone’s market presence, strengthened customer trust, and positioned the company as a dependable and forward-thinking security brand.",
  },
}

// Project data with pic1 images (same as before)

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const projectId = Number.parseInt(id)

  // State for lightbox
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({})

  // Get project data or fallback
  const project = projectsData[projectId as keyof typeof projectsData] || projectsData[1]

  const handleMediaClick = (index: number) => {
    setSelectedMediaIndex(index)
  }

  return (
    <main className="pt-20">
      {/* Project Hero */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-hanson font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{project.description}</p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">{project.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Year</h3>
                  <p className="text-gray-400">{project.year}</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
  {project.media[0]?.type === "image" ? (
    <Image
      src={project.media[0].src}
      alt={project.title}
      fill
      className="object-cover"
    />
  ) : (
    <Image
      src="/placeholder.svg"
      alt="Placeholder"
      fill
      className="object-cover"
    />
  )}
</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-hanson font-bold mb-12 text-black text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.media.map((item, index) => (
              <div
                key={index}
                onClick={() => handleMediaClick(index)}
                className="relative h-[300px] rounded-lg overflow-hidden group cursor-pointer"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <video
                      ref={(el) => {videoRefs.current[index] = el}}
                      src={item.src}
                      preload="metadata"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition" />
                    </div>
                  </>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
  


      {/* Project Details */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-hanson font-bold mb-6 text-black">The Challenge</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{project.challenge}</p>

              <h2 className="text-3xl font-hanson font-bold mb-6 text-black">Our Solution</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{project.solution}</p>

              <h2 className="text-3xl font-hanson font-bold mb-6 text-black">Results</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.results}</p>
            </div>

            <div>
              <h3 className="text-xl font-hanson font-bold mb-4 text-black">Services</h3>
              <ul className="space-y-2">
                {project.services.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link
              href={`/portfolio/${projectId > 1 ? projectId - 1 : 6}`}
              className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous Project
            </Link>

            <Link
              href="/portfolio"
              className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-full"
            >
              All Projects
            </Link>

            <Link
              href={`/portfolio/${projectId < 6 ? projectId + 1 : 1}`}
              className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
            >
              Next Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
  {selectedMediaIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMediaIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Media Viewer */}
            <div className="relative h-[80vh] w-full">
              {(() => {
                const media = project.media[selectedMediaIndex];
                if (!media) return null;

                return media.type === "image" ? (
                  <Image
                    src={media.src}
                    alt={`${project.title} - Image ${selectedMediaIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black">
                    <video
                      key={media.src}
                      controls
                      autoPlay
                      preload="auto"
                      className="max-h-full max-w-full object-contain bg-black rounded"
                    >
                      <source src={media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      <ContactSection />
    </main>
  )
}
