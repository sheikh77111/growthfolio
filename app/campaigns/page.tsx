'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    clientName: 'HeadX Future 2.0',
    image: '/images/campaign-1.jpg',
    description:
      'We successfully executed a high-impact Out-of-Home (OOH) campaign for HeadX Future 2.0, strategically designed to deliver premium visibility and strong brand recall. By leveraging prominent billboard placements across high-traffic urban locations, the campaign ensured maximum exposure to a wide and relevant audience.',
  },
  {
    id: 2,
    clientName: 'Babal Mandhi',
    image: '/images/campaign-2.jpg',
    description:
      `For Babal Mandhi, we brought the brand closer to people where it matters most right in the heart of the city. Our OOH campaign was built around visibility that doesn't just exist, but stands out. By activating key outdoor locations with heavy traffic flow, we ensured the brand became part of the everyday journey of thousands. Whether during rush hours or evening drives, the campaign consistently stayed in front of the audience, creating repeated impressions that translate into real recall.`,
  },
  {
    id: 3,
    clientName: 'G-Tech',
    image: '/images/campaign-3.jpg',
    description:
      'For G-TEC Areekode, we crafted an OOH campaign that turned everyday city movement into a powerful visibility engine. The objective was to position the brand prominently within the local landscape making it instantly recognizable to students, professionals, and passersby.By securing high-impact billboard spaces in key transit zones, the campaign ensured the message reached audiences at the right moments during daily commutes, peak hours, and evening traffic. The consistent presence helped build familiarity while reinforcing trust in the brand.',
  },
];

export default function CampaignsPage() {
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);
  const [enquiry, setEnquiry] = useState({ firstName: '', phone: '', email: '', message: '' });
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...enquiry, type: 'enquiry' }),
      });
      if (res.ok) {
        setEnquirySubmitted(true);
        setEnquiry({ firstName: '', phone: '', email: '', message: '' });
        setTimeout(() => setEnquirySubmitted(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-white/90 font-semibold text-sm md:text-base tracking-wide mb-4">OUR WORK</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Latest Campaigns</h1>
            <p className="text-lg md:text-xl opacity-90">
              Explore our successful client campaigns and the impact we've created for leading brands.
            </p>
            <div className="flex items-center gap-2 mt-8 text-sm">
              <span>Home</span>
              <span>/</span>
              <span className="text-white font-semibold">Campaigns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Campaign List */}
            <div className="md:col-span-1 space-y-4">
              <h2 className="text-2xl font-bold text-foreground mb-6">Client Campaigns</h2>
              {campaigns.map((campaign) => (
                <button
                  key={campaign.id}
                  onClick={() => setSelectedCampaign(campaign)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${selectedCampaign.id === campaign.id
                      ? 'bg-primary text-white font-semibold shadow-lg'
                      : 'bg-card text-foreground hover:bg-secondary border border-border'
                    }`}
                >
                  {campaign.clientName}
                </button>
              ))}
            </div>

            {/* Right Column - Campaign Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Image */}
              <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={selectedCampaign.image}
                  alt={selectedCampaign.clientName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {selectedCampaign.description}
                </p>
              </div>

              {/* Enquire Now Form */}
              <div className="mt-12 bg-secondary/10 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-8">Enquire Now</h3>

                <form onSubmit={handleEnquirySubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        value={enquiry.firstName}
                        onChange={(e) => setEnquiry({ ...enquiry, firstName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter Your Number"
                        value={enquiry.phone}
                        onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Mail
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={enquiry.email}
                      onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Write Your Message"
                      rows={5}
                      value={enquiry.message}
                      onChange={(e) => setEnquiry({ ...enquiry, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Notice */}
                  <p className="text-sm text-destructive font-medium">
                    * Call us 24/7 or fill out the form below to receive a free.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-destructive text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Submit
                  </button>

                  {/* Success Message */}
                  {enquirySubmitted && (
                    <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-700 text-center">
                      Thank you! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="https://www.linkedin.com/company/growthfolio/" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-lg hover:bg-primary transition-colors group">
                  <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.795 0-9.733h3.554v1.376c.429-.663 1.191-1.608 2.895-1.608 2.12 0 3.708 1.382 3.708 4.356v5.609zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.968.771-1.71 1.958-1.71 1.187 0 1.914.742 1.939 1.71 0 .948-.752 1.706-1.982 1.706zm1.582 11.597H3.635V9.172h3.284v11.28zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/growth.folio?igsh=aHl4Zzgxd3YyeXds" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-lg hover:bg-primary transition-colors group">
                  <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                  </svg>
                </a>
                <a href="https://wa.me/918714412695" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-lg hover:bg-primary transition-colors group">
                  <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}