import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold text-white">
                Üni<span className="text-accent-500">Şehir</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Türkiye'nin en kapsamlı üniversite ve şehir rehberi. 
              Öğrenci deneyimleri, kampüs fotoğrafları ve doğru bilgi için.
            </p>
          </div>

          {/* Bağlantılar */}
          <div>
            <h3 className="text-white font-semibold mb-4">Keşfet</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sehirler" className="hover:text-white">Şehirler</Link></li>
              <li><Link href="/universiteler" className="hover:text-white">Üniversiteler</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li>info@unisehir.com</li>
              <li><Link href="/iletisim" className="hover:text-white">Bize Ulaşın</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2025 ÜniŞehir. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
