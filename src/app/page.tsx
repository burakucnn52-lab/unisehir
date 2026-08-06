import Link from 'next/link'
import { GraduationCap, Building2, Star, Users, Search } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Üniversitenin İzini Sür,<br />
              <span className="text-accent-500">Şehri Keşfet</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Türkiye'nin en kapsamlı üniversite ve şehir rehberi.
              Gerçek öğrenci yorumları ve deneyimler burada.
            </p>

            {/* Arama */}
            <div className="bg-white rounded-lg shadow-xl p-2 flex items-center max-w-2xl mx-auto">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Üniversite, şehir veya bölüm ara..."
                className="flex-1 px-4 py-3 text-gray-700 outline-none"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium">
                Ara
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <div className="text-sm text-gray-500">Üniversite</div>
            </div>
            <div className="text-center">
              <GraduationCap className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">8+</div>
              <div className="text-sm text-gray-500">Şehir</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-500">Yorum</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-500">Öğrenci</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popüler Şehirler */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Popüler Şehirler
              </h2>
              <p className="text-gray-600">
                Türkiye'nin öğrenci dostu şehirlerini keşfet
              </p>
            </div>
            <Link href="/sehirler" className="text-primary-600 hover:text-primary-700 font-medium hidden md:block">
              Tümünü Gör →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Istanbul', 'Ankara', 'Izmir', 'Mardin'].map((city) => (
              <Link 
                key={city}
                href={`/sehirler/${city.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-400 to-primary-700 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-1">{city}</h3>
                    <p className="text-sm text-primary-100">
                      Üniversiteleri keşfet
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Üniversiteler */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Öne Çıkan Üniversiteler
              </h2>
              <p className="text-gray-600">
                Öğrencilerin en çok tercih ettiği üniversiteler
              </p>
            </div>
            <Link href="/universiteler" className="text-primary-600 hover:text-primary-700 font-medium hidden md:block">
              Tümünü Gör →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Boğaziçi Üniversitesi', city: 'İstanbul', rating: 4.8 },
              { name: 'ODTÜ', city: 'Ankara', rating: 4.7 },
              { name: 'İTÜ', city: 'İstanbul', rating: 4.6 },
              { name: 'Mardin Artuklu', city: 'Mardin', rating: 4.2 },
              { name: 'Bilkent Üniversitesi', city: 'Ankara', rating: 4.5 },
              { name: 'Hacettepe', city: 'Ankara', rating: 4.4 },
            ].map((uni) => (
              <div 
                key={uni.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {uni.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{uni.city}</p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{uni.rating}</span>
                  <span className="text-sm text-gray-500">/ 5.0</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kendi Deneyimini Paylaş
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Üniversiten hakkında yorum yaz, fotoğraf paylaş, 
            gelecek öğrencilere yardımcı ol.
          </p>
          <Link 
            href="/giris"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium"
          >
            Hemen Başla
          </Link>
        </div>
      </section>
    </div>
  )
}
