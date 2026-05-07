import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const gillory = Poppins({ weight: ['700'], subsets: ['latin'], variable: '--font-gillory' });


export const metadata: Metadata = {
  title: 'Growthfolio - Outdoor Advertising & Media Solutions',
  description: 'Leading outdoor advertising agency specializing in digital billboards, hoardings, video production, and integrated marketing campaigns in Kerala',
  generator: 'Growthfolio',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        <main className="pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
