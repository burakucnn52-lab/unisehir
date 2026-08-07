'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  Calendar,
  BookOpen,
  Award,
  AlertCircle
} from 'lucide-react'
import { getBolum, puanTuruRengi } from '@/lib/bolumler'
import { getUniversite } from '@/lib/universiteler'
import UniversiteLogo from '@/components/UniversiteLogo'

export default function BolumDetayPage() {
  const params = useParams()
  const universiteSlug = params.slug as string
  const bolumSlug = params.bolumSlug as string

  const universite = getUniversite(universiteSlug)
  const bolum = getBolum(universiteSlug, bolumSlug)

  if (!universite || !bolum) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Bölüm Bulunamadı</h1>
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

  const sonPuan = bolum.puanlar[0]
  const maxPuan = Math.max(...bolum.puanlar.map(p => p.puan))
  const minPuan = Math.min(...bolum.puanlar.map(p => p.puan))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12">
        <div className="container-custom">
          <Link 
            href={`/universiteler/${universiteSlug}`}
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {universite.name}'ne Dön
          </Link>

          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-xl">
              <UniversiteLogo logo={universite.logo} name={universite.name} size={80} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${puanTuruRengi(bolum.puanTuru)}`}>
                  {bolum.puanTuru}
                </span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {bolum.sure} Yıllık
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {bolum.bolumAdi}
              </h1>
              <p className="text-primary-100">
                {bolum.fakulte} • {universite.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-8">
        {/* Ana İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{sonPuan.puan.toFixed(2)}</div>
                <div className="text-sm text-gray-500">{sonPuan.yil} Taban Puanı</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  {sonPuan.siralama.toLocaleString('tr-TR')}
                </div>
                <div className="text-sm text-gray-500">Başarı Sıralaması</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{sonPuan.kontenjan}</div>
                <div className="text-sm text-gray-500">Kontenjan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Yıllık Karşılaştırma */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary-600" />
            Yıllara Göre Karşılaştırma
          </h2>

          {/* Grafik */}
          <div className="mb-6">
            <div className="text-sm text-gray-600 mb-3">Taban Puanları</div>
            <div className="flex items-end justify-around gap-4 h-48 bg-gray-50 rounded-lg p-4">
              {bolum.puanlar.slice().reverse().map((veri) => {
                const yukseklik = ((veri.puan - minPuan) / (maxPuan - minPuan)) * 80 + 20
                return (
                  <div key={veri.yil} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-sm font-bold text-primary-600">
                      {veri.puan.toFixed(2)}
                    </div>
                    <div 
                      className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg transition-all hover:from-primary-700"
                      style={{ height: `${yukseklik}%` }}
                    />
                    <div className="text-sm font-semibold text-gray-700">{veri.yil}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Detaylı Tablo */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Yıl</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Taban Puan</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Sıralama</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Kontenjan</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Yerleşen</th>
                </tr>
              </thead>
              <tbody>
                {bolum.puanlar.map((veri, i) => {
                  const oncekiVeri = bolum.puanlar[i + 1]
                  const puanFarki = oncekiVeri ? veri.puan - oncekiVeri.puan : 0
                  return (
                    <tr key={veri.yil} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-gray-900">{veri.yil}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <span className="font-bold text-gray-900">{veri.puan.toFixed(2)}</span>
                          {puanFarki !== 0 && (
                            <span className={`text-xs flex items-center gap-0.5 ${
                              puanFarki > 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {puanFarki > 0 ? '▲' : '▼'}
                              {Math.abs(puanFarki).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right text-gray-700">
                        {veri.siralama.toLocaleString('tr-TR')}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-700">{veri.kontenjan}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-green-600 font-semibold">{veri.yerlesen}</span>
                        <span className="text-gray-400 text-xs ml-1">
                          ({((veri.yerlesen / veri.kontenjan) * 100).toFixed(0)}%)
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Uyarı */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <p className="font-semibold mb-1">Bilgilendirme</p>
            <p>
              Bu veriler YÖK Atlas ve ÖSYM kaynaklarından derlenmiştir. 
              Kesin bilgi için <a href="https://yokatlas.yok.gov.tr" target="_blank" className="underline font-semibold">yokatlas.yok.gov.tr</a> adresini ziyaret edin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
