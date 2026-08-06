import Link from 'next/link'
import { BookOpen, Calculator, Beaker, Atom, ArrowRight, Sparkles, TrendingUp } from 'lucide-react'

export default function BilgiKartlariPage() {
  const alanlar = [
    {
      slug: 'sayisal',
      name: 'SAYISAL',
      icon: '🔬',
      description: 'Matematik, Fizik, Kimya, Biyoloji',
      subjects: 3,
      cards: 90,
      gradient: 'from-blue-500 to-cyan-600',
      active: true,
    },
    {
      slug: 'esit-agirlik',
      name: 'EŞİT AĞIRLIK',
      icon: '⚖️',
      description: 'Matematik, Edebiyat, Tarih, Coğrafya',
      subjects: 0,
      cards: 0,
      gradient: 'from-purple-500 to-pink-600',
      active: false,
    },
    {
      slug: 'sozel',
      name: 'SÖZEL',
      icon: '📖',
      description: 'Edebiyat, Tarih, Coğrafya, Felsefe',
      subjects: 0,
      cards: 0,
      gradient: 'from-orange-500 to-red-600',
      active: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium">Öğren, Anla, Test Et</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bilgi Kartları
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Konuları detaylı öğren, kendini test et. 
              Sadece ezber değil, gerçek anlayış!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent-400" />
                <span>Detaylı Açıklamalar</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent-400" />
                <span>İlerleme Takibi</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-400" />
                <span>Mini Testler</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alan Seçimi */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Alanını Seç
            </h2>
            <p className="text-gray-600">
              Hangi alanda çalışmak istiyorsun?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {alanlar.map((alan) => (
              <div key={alan.slug}>
                {alan.active ? (
                  <Link 
                    href={`/bilgi-kartlari/${alan.slug}`}
                    className="block group"
                  >
                    <div className={`bg-gradient-to-br ${alan.gradient} rounded-2xl p-8 text-white h-full hover:shadow-2xl transition-all hover:-translate-y-1`}>
                      <div className="text-6xl mb-4">{alan.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{alan.name}</h3>
                      <p className="text-white/90 text-sm mb-6">{alan.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <div className="flex gap-4 text-sm">
                          <div>
                            <div className="font-bold text-lg">{alan.subjects}</div>
                            <div className="text-xs opacity-80">Ders</div>
                          </div>
                          <div>
                            <div className="font-bold text-lg">{alan.cards}+</div>
                            <div className="text-xs opacity-80">Kart</div>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${alan.gradient} rounded-2xl p-8 text-white h-full opacity-50 cursor-not-allowed`}>
                      <div className="text-6xl mb-4">{alan.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{alan.name}</h3>
                      <p className="text-white/90 text-sm mb-6">{alan.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <div className="text-sm font-semibold">
                          Yakında Eklenecek
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                      YAKINDA
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nasıl Çalışır */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Nasıl Çalışır?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Alanı Seç</h3>
              <p className="text-gray-600 text-sm">
                Sayısal, Eşit Ağırlık veya Sözel alanını seç
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-600">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Konuyu Öğren</h3>
              <p className="text-gray-600 text-sm">
                Detaylı bilgi kartlarıyla konuyu anla
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-yellow-600">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Test Et</h3>
              <p className="text-gray-600 text-sm">
                Mini testlerle bilgini pekiştir
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
