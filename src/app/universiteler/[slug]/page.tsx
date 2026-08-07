'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
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
import BolumKarti from '@/components/BolumKarti'
import { getUniversite } from '@/lib/universiteler'
import { getBolumlerByUniversite, getFakulteler } from '@/lib/bolumler'

export default function UniversiteDetayPage() {
  const params = useParams()
  const slug = params.slug as string
  const universite = getUniversite(slug)
  const bolumler = getBolumlerByUniversite(slug)
  const fakulteler = getFakulteler(slug)
  
  const [aktifTab, setAktifTab] = useState<'hakkinda' | 'bolumler' | 'yorumlar'>('hakkinda')
  const [seciliFakulte, setSeciliFakulte] = useState<string>('all')

  if (!universite) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Üniversite Bulunamadı</h1>
          <Link 
            href="/universiteler"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold mt-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Üniversitelere Dön
          </Link>
        </div>
      </div>
    )
  }

  const kategoriPuanlari = [
    { name: 'Kantin', icon: Coffee, puan: 4.2 },
    { name: 'Kütüphane', icon: BookOpen, puan: 4.5 },
    { name: 'Akademisyenler', icon: GraduationCap, puan: 4.3 },
    { name: 'Yurt', icon: Home, puan: 3.8 },
    { name: 'Ulaşım', icon: Bus, puan: 4.0 },
    { name: 'Sosyal Hayat', icon: Sparkles, puan: 4.4 },
  ]

  const filtreliBolumler = seciliFakulte === 'all' 
    ? bolumler 
    : bolumler.filter(b => b.fakulte === seciliFakulte)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white pt-8 pb-16">
        <div className="container-custom">
          <Link 
            href="/universiteler"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Üniversitelere Dön
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-white p-4 rounded-2xl">
              <UniversiteLogo logo={universite.logo} name={universite.name} size={120} />
            </div>

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
                {bolumler.length > 0 && (
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {bolumler.length} Bölüm
                  </span>
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
              <div className="text-sm text-gray-500">Kuruluş</div>
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
                <BookOpen className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{bolumler.length}</div>
              <div className="text-sm text-gray-500">Kayıtlı Bölüm</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <a 
                href={universite.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
              >
                Web Sitesi →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TAB BAR */}
      <section className="bg-white border-b border-gray-200 sticky top-24 z-30">
        <div className="container-custom">
          <div className="flex gap-1">
            <button
              onClick={() => setAktifTab('hakkinda')}
              className={`px-6 py-4 font-semibold text-sm transition-colors border-b-2 ${
                aktifTab === 'hakkinda'
                  ? 'text-primary-600 border-primary-600'
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              📖 Hakkında
            </button>
            <button
              onClick={() => setAktifTab('bolumler')}
              className={`px-6 py-4 font-semibold text-sm transition-colors border-b-2 ${
                aktifTab === 'bolumler'
                  ? 'text-primary-600 border-primary-600'
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              📚 Bölümler ({bolumler.length})
            </button>
            <button
              onClick={() => setAktifTab('yorumlar')}
              className={`px-6 py-4 font-semibold text-sm transition-colors border-b-2 ${
                aktifTab === 'yorumlar'
                  ? 'text-primary-600 border-primary-600'
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              💬 Yorumlar
            </button>
          </div>
        </div>
      </section>

      <div className="container-custom py-8">
        {/* HAKKINDA TAB */}
        {aktifTab === 'hakkinda' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">📖 Hakkında</h2>
                <p className="text-gray-700 leading-relaxed">
                  {universite.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">📸 Kampüs Fotoğrafları</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[1,2,3,4,5,6].map((i) => (
                    <div 
                      key={i}
                      className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center"
                    >
                      <Building2 className="w-12 h-12 text-primary-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-44">
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
                        <span className="text-sm font-bold">{kategori.puan}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BÖLÜMLER TAB */}
        {aktifTab === 'bolumler' && (
          <div>
            {bolumler.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bölümler Yakında</h3>
                <p className="text-gray-600">
                  Bu üniversitenin bölüm bilgileri yakında eklenecek.
                </p>
              </div>
            ) : (
              <>
                {/* Fakülte Filtresi */}
                <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-gray-700 mr-2">Fakülte:</span>
                    <button
                      onClick={() => setSeciliFakulte('all')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        seciliFakulte === 'all'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Tümü ({bolumler.length})
                    </button>
                    {fakulteler.map(fakulte => {
                      const count = bolumler.filter(b => b.fakulte === fakulte).length
                      return (
                        <button
                          key={fakulte}
                          onClick={() => setSeciliFakulte(fakulte)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                            seciliFakulte === fakulte
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {fakulte} ({count})
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Bölüm Kartları */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtreliBolumler.map(bolum => (
                    <BolumKarti key={bolum.id} bolum={bolum} universiteSlug={slug} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* YORUMLAR TAB */}
        {aktifTab === 'yorumlar' && (
          <div className="bg-white rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Henüz Yorum Yok</h3>
            <p className="text-gray-600 mb-4">
              İlk yorumu sen yaparak diğer öğrencilere yardımcı ol!
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold">
              Yorum Yaz
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
