import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ÜniŞehir - Türkiye Üniversite Rehberi',
  description: 'Türkiye\'nin en kapsamlı üniversite ve şehir rehberi. Öğrenci yorumları, kampüs fotoğrafları ve daha fazlası.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
