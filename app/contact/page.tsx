'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'contact' }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 87144 12695',
      link: 'tel:+918714412695',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hellogrowthfolio@gmail.com',
      link: 'mailto:hellogrowthfolio@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Level 2, Venture Arcade, Mavoor Rd, above Croma, Thondayad, Kozhikode, Kerala 673016',
      link: null,
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Get In Touch</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-balance">
            We'd love to hear about your project and discuss how we can help elevate your brand
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const isAddress = info.label === 'Address';
                  const mapsLink = 'https://www.google.com/maps/place/Level+2,+Venture+Arcade,+Mavoor+Rd,+above+Croma,+Thondayad,+Kozhikode,+Kerala+673016/@11.2705,75.8057,17z';
                  
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary mt-1" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">{info.label}</p>
                        {isAddress ? (
                          <Link
                            href={mapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors break-all underline"
                          >
                            {info.value}
                          </Link>
                        ) : info.link ? (
                          <Link
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-6">
              <Link
                href="https://www.instagram.com/growth.folio?igsh=aHl4Zzgxd3YyeXds"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2-primary rounded-lg p-3 hover:bg-primary hover: shadow-md transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary hover:text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/growthfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2-primary rounded-lg p-3 hover:bg-primary hover: shadow-md transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary hover:text-white" />
              </Link>
              <Link
                href="https://wa.me/918714412695"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2-primary rounded-lg p-3 hover:bg-primary hover: shadow-md transition-all flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-primary hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-secondary/50 rounded-lg p-8 border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-700 text-center">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance">
            Visit Our Location
          </h2>
          <div className="relative h-96 bg-secondary rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.3295!2d75.8013!3d11.2707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba45d1b5d5d5d5d%3A0x123456789abc!2sLevel+2+Venture+Arcade+Mavoor+Rd+Croma+Thondayad+Kozhikode+673016!5e0!3m2!1sen!2sin!4v1708326400000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
