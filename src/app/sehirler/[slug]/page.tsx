'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Cloud, 
  Bus, 
  Star, 
  GraduationCap,
  Coffee,
  Home,
  Sparkles,
  ArrowRight,
  Camera
} from 'lucide-react'
import UniversiteLogo from '@/components/UniversiteLogo'
import { getSehir } from '@/lib/sehirler'
import { getUniversitelerByCity } from '@/lib/universiteler'

export default function SehirDetayPage() {
  const params = useParams()
  const slug = params.slug as string
  const sehir = getSehir(slug)
  const sehirUniversiteleri = getUniversitelerByCity(slug)

  if (!sehir) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🏙️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Şehir Bulunamadı</h1>
          <p className="text-gray-600 mb-6">Aradığın şehir henüz eklenmemiş olabilir.</p>
          <Link 
            href="/sehirler"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Şehirlere Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero - Büyük Görsel */}
      <section className="relative h-96 bg-gradient-to-br from-primary-600 to-primary-900 overflow-hidden">
        <img 
          src={sehir.image}
          alt={sehir.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="container-custom relative h-full flex flex-col justify-end pb-8">
          <Link 
            href="/sehirler"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            Şehirlere Dön
          </Link>

          <div className="text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                {sehir.region}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                sehir.livingCost === 'Düşük' ? 'bg-green-500' :
                sehir.livingCost === 'Orta' ? 'bg-yellow-500' :
                'bg-red-500'
              }`}>
                Yaşam: {sehir.livingCost}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-8 h-8 md:w-10 md:h-10" />
              <h1 className="text-4xl md:text-6xl font-bold">{sehir.name}</h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {sehir.description}
            </p>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{sehir.population}</div>
              <div className="text-sm text-gray-500">Nüfus</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{sehirUniversiteleri.length}</div>
              <div className="text-sm text-gray-500">Üniversite</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Cloud className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-sm font-bold text-gray-900">{sehir.climate}</div>
              <div className="text-sm text-gray-500">İklim</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Bus className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-sm font-bold text-gray-900">Gelişmiş</div>
              <div className="text-sm text-gray-500">Ulaşım</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol: Ana İçerik */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tarihçe */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📖</span>
                Tarihçe
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {sehir.history}
              </p>
            </div>

            {/* Öğrenci Hayatı */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Öğrenci Hayatı
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {sehir.studentLife}
              </p>
            </div>

            {/* Ulaşım */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚌</span>
                Ulaşım
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {sehir.transportation}
              </p>
            </div>

            {/* Şehirdeki Üniversiteler */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏛️</span>
                {sehir.name}'daki Üniversiteler ({sehirUniversiteleri.length})
              </h2>
              
              {sehirUniversiteleri.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Bu şehirde henüz kayıtlı üniversite yok.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {sehirUniversiteleri.map((uni) => (
                    <Link
                      key={uni.id}
                      href={`/universiteler/${uni.slug}`}
                      className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-primary-50 rounded-xl transition-colors group"
                    >
                      <UniversiteLogo logo={uni.logo} name={uni.name} size={56} />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">{uni.name}</h3>
                        <div className="flex items-center gap-3 text-sm">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            uni.type === 'Devlet' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {uni.type}
                          </span>
                          {uni.rating && (
                            <div className="flex items-center gap-1 text-yellow-600">
                              <Star className="w-3 h-3 fill-current" />
                              <span className="font-semibold">{uni.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Fotoğraflar */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📸</span>
                Şehir Fotoğrafları
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[1,2,3,4,5,6].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center hover:from-primary-200 hover:to-primary-300 transition-colors cursor-pointer group"
                  >
                    <Camera className="w-10 h-10 text-primary-400 group-hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                  📸 Fotoğraf Yükle
                </button>
              </div>
            </div>
          </div>

          {/* Sağ: Yan Panel */}
          <div className="space-y-6">
            {/* Meşhur Olduğu Şeyler */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-600" />
                Neyle Meşhur?
              </h3>
              <div className="space-y-2">
                {sehir.famousFor.map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary-200">
                <h4 className="font-semibold text-gray-900 mb-3">Hızlı Bilgiler</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bölge:</span>
                    <span className="font-semibold">{sehir.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">İklim:</span>
                    <span className="font-semibold">{sehir.climate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Yaşam Maliyeti:</span>
                    <span className={`font-semibold ${
                      sehir.livingCost === 'Düşük' ? 'text-green-600' :
                      sehir.livingCost === 'Orta' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>{sehir.livingCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nüfus:</span>
                    <span className="font-semibold">{sehir.population}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
