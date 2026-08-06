'use client'

import Link from 'next/link'
import { GraduationCap, Search, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // 2026 YKS Tarihi (Tahmini: 20 Haziran 2026)
    const yksDate = new Date('2026-06-20T10:15:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = yksDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* YKS Sayacı - Üst Banner */}
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 md:gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 animate-pulse" />
              <span className="font-semibold">2026 YKS'ye:</span>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                <span className="font-bold">{timeLeft.days}</span>
                <span className="text-xs ml-1 opacity-80">gün</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                <span className="font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs ml-1 opacity-80">sa</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                <span className="font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs ml-1 opacity-80">dk</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                <span className="font-bold text-accent-300">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs ml-1 opacity-80">sn</span>
              </div>
            </div>
            <Link 
              href="/deneme-sinavi"
              className="hidden md:inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs font-semibold transition-colors"
            >
              🎯 Deneme Yap
            </Link>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-primary-900">
                Üni<span className="text-accent-500">Şehir</span>
              </span>
            </Link>

            {/* Menu */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/sehirler" className="text-gray-700 hover:text-primary-600 font-medium">
                Şehirler
              </Link>
              <Link href="/universiteler" className="text-gray-700 hover:text-primary-600 font-medium">
                Üniversiteler
              </Link>
              <Link href="/deneme-sinavi" className="text-gray-700 hover:text-primary-600 font-medium flex items-center gap-1">
                Deneme Sınavı
                <span className="bg-accent-500 text-white text-xs px-2 py-0.5 rounded-full">YENİ</span>
              </Link>
              <Link href="/hakkimizda" className="text-gray-700 hover:text-primary-600 font-medium">
                Hakkımızda
              </Link>
            </nav>

            {/* Arama */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input 
                type="text"
                placeholder="Ara..."
                className="bg-transparent outline-none px-2 text-sm w-40"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
