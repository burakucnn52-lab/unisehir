'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Search, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { sehirler } from '@/lib/sehirler'
import { universiteler } from '@/lib/universiteler'

export default function SehirlerPage() {
  const [search, setSearch] = useState('')
  const [filterRegion, setFilterRegion] = useState<string>('all')

  const regions = Array.from(new Set(sehirler.map(s => s.region))).sort()

  const filtered = sehirler.filter(sehir => {
    const matchSearch = sehir.name.toLowerCase().includes(search.toLowerCase())
    const matchRegion = filterRegion === 'all' || sehir.region === filterRegion
    return matchSearch && matchRegion
  })

  const getUniCount = (citySlug: string) => {
    return universiteler.filter(u => u.citySlug === citySlug).length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Türkiye'nin Öğrenci Şehirleri
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Yaşayacağın şehri önceden tanı, doğru kararı ver
            </p>

            {/* Arama */}
            <div className="bg-white rounded-xl shadow-xl p-2 flex items-center max-w-xl mx-auto">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Şehir ara..."
                className="flex-1 px-4 py-3 text-gray-700 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filtreler */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-24 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-gray-700">Bölge:</span>
            <button
              onClick={() => setFilterRegion('all')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                filterRegion === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tümü
            </button>
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setFilterRegion(region)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  filterRegion === region 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
            <div className="ml-auto text-sm text-gray-600">
              <span className="font-bold text-primary-600">{filtered.length}</span> şehir
            </div>
          </div>
        </div>
      </section>

      {/* Şehir Kartları */}
      <section className="py-12">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sonuç Bulunamadı</h3>
              <p className="text-gray-600">Arama kriterlerini değiştirmeyi dene</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((sehir) => {
                const uniCount = getUniCount(sehir.slug)
                return (
                  <Link
                    key={sehir.id}
                    href={`/sehirler/${sehir.slug}`}
                    className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 bg-white"
                  >
                    {/* Görsel */}
                    <div className="aspect-video bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-primary-700">
                        {sehir.region}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-5 h-5" />
                          <h3 className="text-2xl font-bold">{sehir.name}</h3>
                        </div>
                        <p className="text-sm opacity-90 line-clamp-1">{sehir.description}</p>
                      </div>
                    </div>

                    {/* Bilgiler */}
                    <div className="p-5">
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary-600">{uniCount}</div>
                          <div className="text-xs text-gray-500">Üniversite</div>
                        </div>
                        <div className="text-center border-x border-gray-100">
                          <div className="text-lg font-bold text-gray-900">{sehir.population.split(' ')[0]}</div>
                          <div className="text-xs text-gray-500">Nüfus</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-xs font-bold px-2 py-1 rounded-full inline-block ${
                            sehir.livingCost === 'Düşük' ? 'bg-green-100 text-green-700' :
                            sehir.livingCost === 'Orta' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {sehir.livingCost}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Yaşam</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-sm text-gray-600">Şehri Keşfet</span>
                        <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
