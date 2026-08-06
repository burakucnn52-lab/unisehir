'use client'

import Link from 'next/link'
import { Clock, BookOpen, Calculator, Beaker, Globe, Target, ChevronRight, PlayCircle, Award, AlertCircle } from 'lucide-react'

export default function DenemeSinaviPage() {
  const denemeler = [
    {
      id: 'tyt-tam',
      title: 'TYT Tam Deneme',
      subtitle: '120 Soru • 165 Dakika',
      description: 'Türkçe, Matematik, Fen, Sosyal - Tam TYT deneyimi',
      duration: 165,
      questions: 120,
      icon: BookOpen,
      color: 'primary',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      id: 'ayt-sayisal',
      title: 'AYT Sayısal',
      subtitle: '80 Soru • 180 Dakika',
      description: 'Matematik, Fizik, Kimya, Biyoloji',
      duration: 180,
      questions: 80,
      icon: Calculator,
      color: 'accent',
      gradient: 'from-emerald-500 to-emerald-700',
    },
    {
      id: 'ayt-esit-agirlik',
      title: 'AYT Eşit Ağırlık',
      subtitle: '80 Soru • 180 Dakika',
      description: 'Matematik, Edebiyat, Tarih, Coğrafya',
      duration: 180,
      questions: 80,
      icon: Globe,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      id: 'ayt-sozel',
      title: 'AYT Sözel',
      subtitle: '80 Soru • 180 Dakika',
      description: 'Edebiyat, Tarih, Coğrafya, Felsefe, Din',
      duration: 180,
      questions: 80,
      icon: BookOpen,
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      id: 'tyt-turkce',
      title: 'TYT Türkçe Mini',
      subtitle: '40 Soru • 40 Dakika',
      description: 'Sadece Türkçe hızlı deneme',
      duration: 40,
      questions: 40,
      icon: BookOpen,
      color: 'red',
      gradient: 'from-red-500 to-red-700',
    },
    {
      id: 'tyt-matematik',
      title: 'TYT Matematik Mini',
      subtitle: '40 Soru • 60 Dakika',
      description: 'Sadece Matematik hızlı deneme',
      duration: 60,
      questions: 40,
      icon: Calculator,
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-700',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium">Gerçek Sınav Deneyimi</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Deneme Sınavı Modu
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Gerçek sınav ortamında kendini test et. Zamanlayıcı, cevap kağıdı ve detaylı analiz.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-400" />
                <span>Gerçek Zamanlayıcı</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-accent-400" />
                <span>Detaylı Analiz</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent-400" />
                <span>Puan Hesaplama</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uyarı Kutusu */}
      <div className="container-custom mt-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-yellow-800 mb-1">Bilgilendirme</p>
            <p className="text-yellow-700">
              Deneme sınavları eğitim amaçlıdır. ÖSYM'nin resmi sınav soruları değildir. 
              Puan hesaplamaları tahminidir.
            </p>
          </div>
        </div>
      </div>

      {/* Deneme Kartları */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Deneme Türünü Seç
            </h2>
            <p className="text-gray-600">
              Kendini geliştirmek istediğin alanı seç ve başla
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {denemeler.map((deneme) => (
              <div
                key={deneme.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden group"
              >
                {/* Kart Üstü */}
                <div className={`bg-gradient-to-br ${deneme.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <deneme.icon className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <deneme.icon className="w-10 h-10 mb-3" />
                    <h3 className="text-xl font-bold mb-1">{deneme.title}</h3>
                    <p className="text-sm opacity-90">{deneme.subtitle}</p>
                  </div>
                </div>

                {/* Kart İçi */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {deneme.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                        <Target className="w-3 h-3" />
                        Soru
                      </div>
                      <div className="font-bold text-gray-900">{deneme.questions}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                        <Clock className="w-3 h-3" />
                        Süre
                      </div>
                      <div className="font-bold text-gray-900">{deneme.duration} dk</div>
                    </div>
                  </div>

                  <Link
                    href={`/deneme-sinavi/${deneme.id}`}
                    className={`w-full bg-gradient-to-r ${deneme.gradient} text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all group-hover:scale-105`}
                  >
                    <PlayCircle className="w-5 h-5" />
                    Denemeyi Başlat
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Neden ÜniŞehir Denemeleri?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Gerçekçi Zamanlayıcı</h3>
              <p className="text-gray-600 text-sm">
                Gerçek sınavda olduğu gibi kronometre çalışır. Kendini baskı altında dene.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Detaylı Analiz</h3>
              <p className="text-gray-600 text-sm">
                Hangi konuda güçlü, hangi konuda zayıfsın? Detaylı rapor al.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Puan Tahmini</h3>
              <p className="text-gray-600 text-sm">
                Yaklaşık YKS puanını gör. Hangi üniversiteye girebilirsin?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
