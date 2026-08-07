'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Calendar, 
  Globe, 
  Star,
  Building2,
  GraduationCap,
  Award,
  Coffee,
  BookOpen,
  Home,
  Bus,
  Sparkles,
  Wifi
} from 'lucide-react'
import UniversiteLogo from '@/components/UniversiteLogo'
import { getUniversite } from '@/lib/universiteler'

export default function UniversiteDetayPage() {
  const params = useParams()
  const slug = params.slug as string
  const universite = getUniversite(slug)

  if (!universite) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Üniversite Bulunamadı</h1>
          <p className="text-gray-600 mb-6">Aradığın üniversite henüz eklenmemiş olabilir.</p>
          <Link 
            href="/universiteler"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Üniversitelere Dön
          </Link>
        </div>
      </div>
    )
  }

  const kategoriPuanlari = [
    { name: 'Kantin', icon: Coffee, puan: 4.2, oy: 234 },
    { name: 'Kütüphane', icon: BookOpen, puan: 4.5, oy: 189 },
    { name: 'Akademisyenler', icon: GraduationCap, puan: 4.3, oy: 456 },
    { name: 'Yurt', icon: Home, puan: 3.8, oy: 123 },
    { name: 'Ulaşım', icon: Bus, puan: 4.0, oy: 267 },
    { name: 'Sosyal Hayat', icon: Sparkles, puan: 4.4, oy: 345 },
    { name: 'Wifi/Teknoloji', icon: Wifi, puan: 4.1, oy: 198 },
    { name: 'Kampüs', icon: Building2, puan: 4.6, oy: 412 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white pt-8 pb-16">
        <div className="container-custom">
          {/* Geri */}
          <Link 
            href="/universiteler"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Üniversitelere Dön
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Logo */}
            <div className="bg-white p-4 rounded-2xl">
              <UniversiteLogo 
                logo={universite.logo}
                name={universite.name}
                size={120}
              />
            </div>

            {/* Bilgiler */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  universite.type === 'Devlet' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-purple-500 text-white'
                }`}>
                  {universite.type}
                </span>
                {universite.rating && (
                  <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold">{universite.rating}</span>
                    <span className="text-sm opacity-80">/ 5.0</span>
                  </div>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">
                {universite.name}
              </h1>
              <div className="flex items-center gap-2 text-primary-100">
                <MapPin className="w-5 h-5" />
                <Link 
                  href={`/sehirler/${universite.citySlug}`}
                  className="hover:text-white underline"
                >
                  {universite.city}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{universite.foundedYear}</div>
              <div className="text-sm text-gray-500">Kuruluş Yılı</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {universite.studentCount.toLocaleString('tr-TR')}
              </div>
              <div className="text-sm text-gray-500">Öğrenci</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {new Date().getFullYear() - universite.foundedYear}
              </div>
              <div className="text-sm text-gray-500">Yıllık Deneyim</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <a 
                href={universite.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold text-sm break-all"
              >
                Web Sitesi →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol: Ana İçerik */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hakkında */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📖</span>
                Hakkında
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {universite.description}
              </p>
            </div>

            {/* Kampüs Fotoğrafları */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📸</span>
                Kampüs Fotoğrafları
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[1,2,3,4,5,6].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center hover:from-primary-200 hover:to-primary-300 transition-colors cursor-pointer group"
                  >
                    <Building2 className="w-12 h-12 text-primary-400 group-hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                  📸 Fotoğraf Yükle
                </button>
              </div>
            </div>

            {/* Yorumlar */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  Öğrenci Yorumları
                </h2>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Yorum Yaz
                </button>
              </div>

              <div className="text-center py-12">
                <div className="text-6xl mb-3">💭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Henüz Yorum Yok
                </h3>
                <p className="text-gray-600 mb-4">
                  İlk yorumu sen yaparak diğer öğrencilere yardımcı ol!
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold">
                  İlk Yorumu Yaz
                </button>
              </div>
            </div>
          </div>

          {/* Sağ: Puanlamalar */}
          <div className="space-y-6">
            {/* Kategori Puanları */}
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                Kategori Puanları
              </h3>
              <div className="space-y-3">
                {kategoriPuanlari.map((kategori) => (
                  <div key={kategori.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <kategori.icon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{kategori.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-gray-900">{kategori.puan}</span>
                      <span className="text-xs text-gray-400">({kategori.oy})</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-2">Genel Puan</div>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold text-gray-900">
                    {universite.rating || 'N/A'}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <Star 
                          key={i}
                          className={`w-3 h-3 ${
                            i <= Math.floor(universite.rating || 0)
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      Değerlendirme
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold text-sm">
                Puan Ver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
