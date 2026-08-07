'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin, Filter, GraduationCap } from 'lucide-react'
import UniversiteLogo from '@/components/UniversiteLogo'
import { universiteler } from '@/lib/universiteler'

export default function UniversitelerPage() {
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'Devlet' | 'Vakıf'>('all')
  const [filterCity, setFilterCity] = useState<string>('all')

  // Şehirleri unique olarak al
  const cities = Array.from(new Set(universiteler.map(u => u.city))).sort()

  // Filtreleme
  const filtered = universiteler.filter(uni => {
    const matchSearch = uni.name.toLowerCase().includes(search.toLowerCase()) ||
                       uni.city.toLowerCase().includes(search.toLowerCase())
    const matchType = filterType === 'all' || uni.type === filterType
    const matchCity = filterCity === 'all' || uni.city === filterCity
    return matchSearch && matchType && matchCity
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Türkiye Üniversiteleri
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              {universiteler.length}+ üniversite arasından sana uygun olanı bul
            </p>

            {/* Arama */}
            <div className="bg-white rounded-xl shadow-xl p-2 flex items-center max-w-xl mx-auto">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Üniversite veya şehir ara..."
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
            <Filter className="w-5 h-5 text-gray-500" />
            
            {/* Tür Filtresi */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  filterType === 'all' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Tümü
              </button>
              <button
                onClick={() => setFilterType('Devlet')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  filterType === 'Devlet' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Devlet
              </button>
              <button
                onClick={() => setFilterType('Vakıf')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  filterType === 'Vakıf' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Vakıf
              </button>
            </div>

            {/* Şehir Filtresi */}
            <select
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="bg-gray-100 border-0 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Tüm Şehirler</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            {/* Sonuç Sayısı */}
            <div className="ml-auto text-sm text-gray-600">
              <span className="font-bold text-primary-600">{filtered.length}</span> üniversite
            </div>
          </div>
        </div>
      </section>

      {/* Üniversite Kartları */}
      <section className="py-8">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sonuç Bulunamadı</h3>
              <p className="text-gray-600">Arama kriterlerini değiştirmeyi dene</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((uni) => (
                <Link 
                  key={uni.id}
                  href={`/universiteler/${uni.slug}`}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <UniversiteLogo 
                      logo={uni.logo}
                      name={uni.name}
                      size={60}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 leading-tight mb-1 line-clamp-2">
                        {uni.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                        <MapPin className="w-3 h-3" />
                        {uni.city}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      uni.type === 'Devlet' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {uni.type}
                    </span>
                    <div className="text-xs text-gray-500">
                      {uni.foundedYear}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
