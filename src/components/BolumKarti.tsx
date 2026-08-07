import Link from 'next/link'
import { Bolum, puanTuruRengi } from '@/lib/bolumler'
import { TrendingUp, TrendingDown, Users, Target, Calendar } from 'lucide-react'

export default function BolumKarti({ bolum, universiteSlug }: { 
  bolum: Bolum
  universiteSlug: string 
}) {
  const sonPuan = bolum.puanlar[0]
  const oncekiPuan = bolum.puanlar[1]
  const puanFarki = oncekiPuan ? sonPuan.puan - oncekiPuan.puan : 0

  return (
    <Link
      href={`/universiteler/${universiteSlug}/bolumler/${bolum.slug}`}
      className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 group"
    >
      {/* Üst: Bölüm adı ve puan türü */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {bolum.bolumAdi}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{bolum.fakulte}</p>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-md ${puanTuruRengi(bolum.puanTuru)}`}>
          {bolum.puanTuru}
        </span>
      </div>

      {/* 2024 Verileri */}
      <div className="bg-gray-50 rounded-lg p-3 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-600 font-semibold flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {sonPuan.yil} Verileri
          </span>
          {puanFarki !== 0 && (
            <span className={`text-xs font-bold flex items-center gap-1 ${
              puanFarki > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {puanFarki > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {Math.abs(puanFarki).toFixed(2)}
            </span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <div className="text-lg font-bold text-primary-600">{sonPuan.puan.toFixed(2)}</div>
            <div className="text-xs text-gray-500">Taban</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900 flex items-center gap-1">
              <Target className="w-3 h-3" />
              {sonPuan.siralama.toLocaleString('tr-TR')}
            </div>
            <div className="text-xs text-gray-500">Sıralama</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900 flex items-center gap-1">
              <Users className="w-3 h-3" />
              {sonPuan.kontenjan}
            </div>
            <div className="text-xs text-gray-500">Kontenjan</div>
          </div>
        </div>
      </div>

      {/* Alt: Süre + Detay */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{bolum.sure} yıllık</span>
        <span className="text-primary-600 font-semibold group-hover:translate-x-1 transition-transform">
          Detaylar →
        </span>
      </div>
    </Link>
  )
}
