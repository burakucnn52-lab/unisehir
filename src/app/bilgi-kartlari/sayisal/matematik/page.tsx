import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Brain, Calculator } from 'lucide-react'

export default function MatematikPage() {
  const konular = [
    {
      slug: 'fonksiyonlar',
      name: 'Fonksiyonlar',
      description: 'Fonksiyon kavramı, çeşitleri ve özellikleri',
      cards: 10,
      difficulty: 'Kolay',
      difficultyColor: 'bg-green-100 text-green-700',
    },
    {
      slug: 'turev',
      name: 'Türev',
      description: 'Türev kuralları ve uygulamaları',
      cards: 10,
      difficulty: 'Orta',
      difficultyColor: 'bg-yellow-100 text-yellow-700',
    },
    {
      slug: 'integral',
      name: 'İntegral',
      description: 'İntegral hesaplama ve alan bulma',
      cards: 10,
      difficulty: 'Zor',
      difficultyColor: 'bg-red-100 text-red-700',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        {/* Geri */}
        <Link 
          href="/bilgi-kartlari/sayisal"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Ders Seçimine Dön
        </Link>

        {/* Başlık */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Calculator className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Matematik</h1>
          </div>
          <p className="text-gray-600">
            Matematik konularını seç ve öğrenmeye başla
          </p>
        </div>

        {/* Konular */}
        <div className="space-y-4 max-w-4xl">
          {konular.map((konu, index) => (
            <div 
              key={konu.slug}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl font-bold text-blue-600 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900">
                        {konu.name}
                      </h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${konu.difficultyColor}`}>
                        {konu.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {konu.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {konu.cards} Kart
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                <Link 
                  href={`/bilgi-kartlari/sayisal/matematik/${konu.slug}`}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Öğrenmeye Başla
                </Link>
                <Link 
                  href={`/bilgi-kartlari/sayisal/matematik/${konu.slug}/test`}
                  className="flex-1 bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-xl font-semibold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Brain className="w-4 h-4" />
                  Test Yap
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
