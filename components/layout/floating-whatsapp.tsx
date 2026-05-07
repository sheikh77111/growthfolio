import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappLink = 'https://wa.me/918714412695';

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  );
}
