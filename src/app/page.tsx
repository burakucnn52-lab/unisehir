import Link from 'next/link'
import { GraduationCap, Building2, Star, Users, Search, Sparkles, MapPin, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        {/* Dekoratif Şekiller */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="container-custom relative z-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent-500" />
              <span className="text-sm font-medium">Türkiye'nin Yeni Nesil Üniversite Rehberi</span>
            </div>

            {/* Ana Başlık */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Üniversitenin İzini Sür,<br />
              <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                Şehri Keşfet
              </span>
            </h1>

            {/* Alt Başlık */}
            <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Türkiye'nin en kapsamlı üniversite ve şehir rehberi. 
              <br className="hidden md:block" />
              Gerçek öğrenci yorumları, kampüs fotoğrafları ve deneyimler burada.
            </p>

            {/* Arama Kutusu */}
            <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center max-w-2xl mx-auto mb-6">
              <Search className="w-5 h-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Üniversite, şehir veya bölüm ara..."
                className="flex-1 px-4 py-4 text-gray-700 outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg">
                Ara
              </button>
            </div>

            {/* Popüler Aramalar */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-primary-200">Popüler:</span>
              {['Boğaziçi', 'ODTÜ', 'İstanbul', 'Ankara', 'Mardin'].map((tag) => (
                <Link 
                  key={tag}
                  href="#"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full transition-colors border border-white/10"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* Alt Butonlar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link 
                href="/universiteler"
                className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl"
              >
                <GraduationCap className="w-5 h-5" />
                Üniversiteleri Keşfet
              </Link>
              <Link 
                href="/sehirler"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 px-8 py-4 rounded-xl font-semibold transition-all"
              >
                <MapPin className="w-5 h-5" />
                Şehirleri Gez
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Güven Rozetleri */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-primary-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-400" />
                <span>Ücretsiz Kullanım</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-400" />
                <span>Doğrulanmış Yorumlar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-400" />
                <span>Güncel Bilgiler</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Dalga */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
            <path 
              fill="#F9FAFB" 
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary-200 group-hover:to-primary-300 transition-colors">
                <Building2 className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">25+</div>
              <div className="text-sm text-gray-500 font-medium">Üniversite</div>
            </div>

            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">8+</div>
              <div className="text-sm text-gray-500 font-medium">Şehir</div>
            </div>

            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-sm text-gray-500 font-medium">Yorum</div>
            </div>

            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-sm text-gray-500 font-medium">Öğrenci</div>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Neden ÜniŞehir?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tercihini Kolayca Yap
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Doğru üniversiteyi seçmek artık daha kolay. 
              Tüm bilgiler tek çatı altında.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: 'Detaylı Üniversite Bilgisi',
                desc: 'Bölümler, puanlar, tarihçe ve daha fazlası her üniversite için.',
                color: 'primary'
              },
              {
                icon: MapPin,
                title: 'Şehir Rehberi',
                desc: 'Yaşayacağın şehri önceden tanı. Tarih, kültür ve yaşam bilgileri.',
                color: 'accent'
              },
              {
                icon: Star,
                title: 'Gerçek Öğrenci Yorumları',
                desc: 'Kantinden hocalara kadar her şey öğrenci gözünden.',
                color: 'yellow'
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popüler Şehirler */}
      <section className="py-16 bg-white">
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
            <Link href="/sehirler" className="text-primary-600 hover:text-primary-700 font-medium hidden md:flex items-center gap-1">
              Tümünü Gör <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'İstanbul', slug: 'istanbul', uni: '15 Üniversite' },
              { name: 'Ankara', slug: 'ankara', uni: '8 Üniversite' },
              { name: 'İzmir', slug: 'izmir', uni: '5 Üniversite' },
              { name: 'Mardin', slug: 'mardin', uni: '1 Üniversite' },
            ].map((city) => (
              <Link 
                key={city.slug}
                href={`/sehirler/${city.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 flex items-end p-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium">
                    {city.uni}
                  </div>
                  <div className="text-white relative z-10">
                    <MapPin className="w-6 h-6 mb-2 opacity-80" />
                    <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                    <p className="text-sm text-primary-100 flex items-center gap-1">
                      Keşfet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Üniversiteler */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 rounded-full px-4 py-1 text-sm font-medium mb-3">
                <TrendingUp className="w-4 h-4" />
                Trend Olan
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Öne Çıkan Üniversiteler
              </h2>
              <p className="text-gray-600">
                Öğrencilerin en çok tercih ettiği üniversiteler
              </p>
            </div>
            <Link href="/universiteler" className="text-primary-600 hover:text-primary-700 font-medium hidden md:flex items-center gap-1">
              Tümünü Gör <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Boğaziçi Üniversitesi', city: 'İstanbul', rating: 4.8, type: 'Devlet' },
              { name: 'ODTÜ', city: 'Ankara', rating: 4.7, type: 'Devlet' },
              { name: 'İTÜ', city: 'İstanbul', rating: 4.6, type: 'Devlet' },
              { name: 'Bilkent Üniversitesi', city: 'Ankara', rating: 4.5, type: 'Vakıf' },
              { name: 'Hacettepe', city: 'Ankara', rating: 4.4, type: 'Devlet' },
              { name: 'Mardin Artuklu', city: 'Mardin', rating: 4.2, type: 'Devlet' },
            ].map((uni) => (
              <div 
                key={uni.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary-600" />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    uni.type === 'Devlet' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {uni.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {uni.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {uni.city}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">{uni.rating}</span>
                    <span className="text-sm text-gray-500">/ 5.0</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium">Topluluğa Katıl</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Kendi Deneyimini Paylaş
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Üniversiten hakkında yorum yaz, fotoğraf paylaş, 
              gelecek öğrencilere yardımcı ol. Sen de bir öğrenci elçisi ol!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/giris"
                className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Hemen Başla
              </Link>
              <Link 
                href="/hakkimizda"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
