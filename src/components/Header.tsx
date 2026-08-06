'use client'

import Link from 'next/link'
import { GraduationCap, Search } from 'lucide-react'

export default function Header() {
  return (
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
  )
}
