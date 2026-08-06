import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calculator, Atom, Beaker } from 'lucide-react'

export default function SayisalPage() {
  const dersler = [
    {
      slug: 'matematik',
      name: 'Matematik',
      icon: Calculator,
      description: 'Fonksiyonlar, Türev, İntegral',
      topics: 3,
      cards: 30,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      slug: 'fizik',
      name: 'Fizik',
      icon: Atom,
      description: 'Vektörler, Kuvvet-Hareket, Enerji',
      topics: 3,
      cards: 30,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      slug: 'kimya',
      name: 'Kimya',
      icon: Beaker,
      description: 'Atom Yapısı, Periyodik Sistem, Kimyasal Bağlar',
      topics: 3,
      cards: 30,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        {/* Geri */}
        <Link 
          href="/bilgi-kartlari"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Alan Seçimine Dön
        </Link>

        {/* Başlık */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🔬</span>
            <h1 className="text-4xl font-bold text-gray-900">Sayısal</h1>
          </div>
          <p className="text-gray-600">
            Sayısal alanına özel dersler ve konular
          </p>
        </div>

        {/* Dersler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dersler.map((ders) => (
            <Link 
              key={ders.slug}
              href={`/bilgi-kartlari/sayisal/${ders.slug}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${ders.color} p-6 text-white`}>
                <ders.icon className="w-12 h-12 mb-3" />
                <h3 className="text-2xl font-bold">{ders.name}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  {ders.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className={`${ders.bgColor} rounded-lg p-3 text-center`}>
                    <div className={`text-2xl font-bold ${ders.iconColor}`}>
                      {ders.topics}
                    </div>
                    <div className="text-xs text-gray-600">Konu</div>
                  </div>
                  <div className={`${ders.bgColor} rounded-lg p-3 text-center`}>
                    <div className={`text-2xl font-bold ${ders.iconColor}`}>
                      {ders.cards}
                    </div>
                    <div className="text-xs text-gray-600">Kart</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm font-semibold text-gray-700 group-hover:text-primary-600">
                  Konuları Gör
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
