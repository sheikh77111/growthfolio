import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const contactInfo = {
    phone: '+91 87144 12695',
    phoneLink: 'tel:+918714412695',
    email: 'hellogrowthfolio@gmail.com',
    emailLink: 'mailto:hellogrowthfolio@gmail.com',
    address: 'Level 2, Venture Arcade, Mavoor Rd, above Croma, Thondayad, Kozhikode, Kerala 673016',
    whatsapp: 'https://wa.me/918714412695',
  };

  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-40 h-24">
                <Image
                  src="/logo.png"
                  alt="Growthfolio"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm opacity-90">
              Leading outdoor advertising agency in Kerala specializing in innovative media solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link href="/services" className="block hover:opacity-80 transition-opacity">
                Services
              </Link>
              <Link href="/gallery" className="block hover:opacity-80 transition-opacity">
                Gallery
              </Link>
              <Link href="/campaigns" className="block hover:opacity-80 transition-opacity">
                Campaigns
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <Link href={contactInfo.phoneLink} className="hover:opacity-80 transition-opacity">
                    {contactInfo.phone}
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <Link href={contactInfo.emailLink} className="hover:opacity-80 transition-opacity">
                    {contactInfo.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
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
                href={contactInfo.whatsapp}
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

        {/* Address */}
        <div className="border-t border-black/10 pt-8 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold mb-2">Address</p>
              <p className="text-sm opacity-90">{contactInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 pt-8 text-center text-sm opacity-75">
          <p><span className="font-semibold">GrowthFolio</span> &copy; 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
