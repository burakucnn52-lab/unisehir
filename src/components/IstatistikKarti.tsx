import { Istatistik } from '@/lib/istatistik'
import { TrendingUp, Target, AlertCircle } from 'lucide-react'

export default function IstatistikKarti({ istatistik, konuAdi }: { 
  istatistik: Istatistik
  konuAdi: string 
}) {
  const maxSoru = Math.max(...istatistik.yillikVeri.map(v => v.soru))

  const zorlukColors = {
    'Kolay': 'bg-green-100 text-green-700',
    'Orta': 'bg-yellow-100 text-yellow-700',
    'Zor': 'bg-red-100 text-red-700',
  }

  return (
    <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-200 rounded-2xl p-6 mb-6">
      {/* Üst Kısım */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl">
            📊
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Sınav İstatistiği</h3>
            <p className="text-sm text-gray-600">Son 5 yılın verileri (2020-2024)</p>
          </div>
        </div>
        <span className={`${istatistik.onemBg} ${istatistik.onemColor} text-xs font-bold px-3 py-1.5 rounded-full`}>
          ÖNEM: {istatistik.onem}
        </span>
      </div>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-primary-600">{istatistik.ortalama}</div>
          <div className="text-xs text-gray-500 mt-1">Yıllık ortalama</div>
        </div>
        <div className="bg-white rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-green-600">%{istatistik.cikmaOrani}</div>
          <div className="text-xs text-gray-500 mt-1">Çıkma oranı</div>
        </div>
        <div className="bg-white rounded-lg p-3 text-center">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${zorlukColors[istatistik.zorluk]}`}>
            {istatistik.zorluk}
          </span>
          <div className="text-xs text-gray-500 mt-2">Zorluk</div>
        </div>
      </div>

      {/* Yıllık Grafik */}
      <div className="bg-white rounded-lg p-4 mb-3">
        <div className="text-sm text-gray-600 mb-3 font-semibold flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Yıllara göre soru sayısı
        </div>
        <div className="flex items-end justify-between gap-2 h-24">
          {istatistik.yillikVeri.map((veri) => (
            <div key={veri.yil} className="flex-1 flex flex-col items-center gap-1">
              <div className="text-xs font-bold text-primary-600">{veri.soru}</div>
              <div 
                className="w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-t transition-all hover:from-primary-600 hover:to-primary-500"
                style={{ height: `${(veri.soru / maxSoru) * 100}%`, minHeight: '20px' }}
              />
              <div className="text-xs text-gray-500 font-medium">
                {veri.yil}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Açıklama */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
        <div className="flex gap-2">
          <Target className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-blue-900 font-semibold">{konuAdi} Hakkında</p>
            <p className="text-sm text-blue-800">{istatistik.aciklama}</p>
          </div>
        </div>
      </div>

      {/* Uyarı */}
      <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
        <AlertCircle className="w-3 h-3" />
        Veriler tahminidir. Kaynak: Genel konu analizleri
      </div>
    </div>
  )
}
