export interface Sehir {
  id: number
  slug: string
  name: string
  region: string
  population: string
  climate: string
  livingCost: 'Düşük' | 'Orta' | 'Yüksek'
  description: string
  history: string
  studentLife: string
  transportation: string
  famousFor: string[]
  image: string
}

export const sehirler: Sehir[] = [
  {
    id: 1,
    slug: 'istanbul',
    name: 'İstanbul',
    region: 'Marmara',
    population: '15.9 milyon',
    climate: 'Akdeniz iklimi',
    livingCost: 'Yüksek',
    description: 'İki kıtayı birleştiren, tarihi ve modern hayatın iç içe geçtiği metropol.',
    history: 'İstanbul, 2600 yılı aşkın bir geçmişe sahip, dünya tarihinin en önemli şehirlerinden biridir. Bizans ve Osmanlı imparatorluklarına başkentlik yapmış, kültürlerin, dinlerin ve medeniyetlerin buluşma noktası olmuştur. Boğaziçi\'nin iki yakasında Avrupa ve Asya kıtalarını birleştiren şehir, tarihi yarımadasında Ayasofya, Sultanahmet Camii ve Topkapı Sarayı gibi dünya mirası eserlere ev sahipliği yapar. Modern hayatın da merkezi olan İstanbul, sanat, iş dünyası ve akademik yaşamın kalbi konumundadır.',
    studentLife: 'İstanbul, öğrenci hayatı için Türkiye\'nin en canlı şehirlerinden biridir. 60\'tan fazla üniversitesi, sayısız kütüphane, müze, kafe ve etkinlik alanı ile öğrencilere zengin bir sosyal yaşam sunar. Kadıköy, Beşiktaş, Beyoğlu ve Bakırköy gibi bölgeler öğrenciler için popülerdir. Ancak yüksek yaşam maliyeti dikkat gerektirir.',
    transportation: 'Metro, tramvay, otobüs, minibüs, deniz otobüsü ve vapur ile ulaşım oldukça gelişmiştir. Öğrenci kartı ile büyük indirimler mevcuttur. Trafik yoğunluğu şehrin en büyük sorunlarından biridir.',
    famousFor: ['Boğaz', 'Tarihi Yarımada', 'Kadıköy', 'İstiklal Caddesi', 'Adalar'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Bosphorus_Bridge_2007.jpg/1280px-Bosphorus_Bridge_2007.jpg',
  },
  {
    id: 2,
    slug: 'ankara',
    name: 'Ankara',
    region: 'İç Anadolu',
    population: '5.7 milyon',
    climate: 'Karasal iklim',
    livingCost: 'Orta',
    description: 'Türkiye Cumhuriyeti\'nin başkenti, siyasetin ve akademinin merkezi.',
    history: 'Ankara\'nın tarihi Hitit medeniyetine kadar uzanır. Frigya, Lidya, Pers, Roma ve Bizans dönemlerinde önemli bir merkez olan şehir, Osmanlı döneminde Ankara Sancağı olarak yönetilmiştir. Kurtuluş Savaşı\'nın kalbi olan Ankara, 13 Ekim 1923\'te Türkiye Cumhuriyeti\'nin başkenti ilan edilmiştir. Atatürk\'ün "Modern Türkiye"nin sembolü olarak seçtiği şehir, planlı bir başkent olarak inşa edilmiştir. Anıtkabir, Ulus, Kızılay gibi bölgeler Cumhuriyet tarihinin izlerini taşır.',
    studentLife: 'Ankara, ODTÜ, Hacettepe, Bilkent, Gazi gibi köklü üniversitelere ev sahipliği yapar. Kızılay ve Tunalı Hilmi bölgeleri öğrencilerin buluşma noktasıdır. Kütüphaneler, kültür merkezleri ve konferanslar açısından zengin bir şehir. İstanbul\'a göre daha sakin ve yaşam maliyeti daha uygundur.',
    transportation: 'Ankaray, metro ve otobüs ağı ile ulaşım kolaydır. Şehir içi ulaşım sistematiktir. Öğrenciler için indirimli kartlar mevcuttur. Şehir dışına ise otogar ve tren garı üzerinden ulaşım sağlanır.',
    famousFor: ['Anıtkabir', 'Kızılay', 'Ankara Kalesi', 'Beypazarı', 'Kuğulu Park'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/An%C4%B1tkabir_from_Aslanl%C4%B1_Yol.jpg/1280px-An%C4%B1tkabir_from_Aslanl%C4%B1_Yol.jpg',
  },
  {
    id: 3,
    slug: 'izmir',
    name: 'İzmir',
    region: 'Ege',
    population: '4.5 milyon',
    climate: 'Akdeniz iklimi',
    livingCost: 'Orta',
    description: 'Ege\'nin incisi, modern ve özgür yaşamın merkezi.',
    history: 'İzmir\'in tarihi M.Ö. 3000\'lere dayanır. Eski adı "Smyrna" olan şehir, İyonya medeniyetinin önemli merkezlerinden biriydi. Roma, Bizans ve Osmanlı dönemlerinde önemli bir liman kenti olarak kalan İzmir, 9 Eylül 1922\'de Kurtuluş Savaşı\'nın zaferle sonuçlandığı şehirdir. Modern Türkiye\'nin en Batılı şehri olarak bilinen İzmir, sanat, ticaret ve eğitim alanlarında öne çıkar. Kordon, Konak, Alsancak gibi bölgeler şehrin sembolüdür.',
    studentLife: 'İzmir, Ege ve Dokuz Eylül gibi büyük üniversitelere sahiptir. Alsancak ve Bornova bölgeleri öğrenci hayatının merkezidir. Deniz, güzel hava ve rahat yaşam tarzı ile öğrencilere büyük avantaj sağlar. Kültürel etkinlikler ve festivaller yıl boyunca devam eder.',
    transportation: 'Metro, tramvay, otobüs ve İZBAN banliyö treni ile ulaşım rahattır. Vapur ile Karşıyaka-Konak arası ulaşım keyiflidir. Bisiklet yolları da yaygındır.',
    famousFor: ['Kordon', 'Kemeraltı', 'Alsancak', 'Efes Antik Kenti', 'Çeşme'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Izmir_Konak_Square.jpg/1280px-Izmir_Konak_Square.jpg',
  },
  {
    id: 4,
    slug: 'eskisehir',
    name: 'Eskişehir',
    region: 'İç Anadolu',
    population: '900 bin',
    climate: 'Karasal iklim',
    livingCost: 'Düşük',
    description: 'Öğrenci şehri, modern yaşamın Anadolu\'daki temsilcisi.',
    history: 'Eskişehir\'in tarihi Frigya medeniyetine dayanır. "Dorylaion" adıyla bilinen şehir, önemli bir yerleşim yeri olmuştur. Osmanlı döneminde de önemli bir demiryolu kavşağı olan Eskişehir, Cumhuriyet döneminde sanayi ve eğitim merkezi haline gelmiştir. 1926\'da Türkiye\'nin ilk uçak fabrikası burada kurulmuştur. Anadolu Üniversitesi ile Türkiye\'nin en büyük öğrenci şehirlerinden biri olmuştur.',
    studentLife: 'Eskişehir, Türkiye\'nin öğrenci başkenti olarak bilinir. Anadolu Üniversitesi ve Eskişehir Osmangazi Üniversitesi\'nin varlığı şehri canlı tutar. Porsuk Nehri kenarında yürüyüş yolları, kafeler ve modern yaşam alanları bulunur. Yaşam maliyeti düşük, sosyal olanaklar bol.',
    transportation: 'Tramvay hattı şehrin ana ulaşım aracıdır. Kompakt yapısı sayesinde her yere kolay ulaşılır. Bisiklet dostu bir şehirdir.',
    famousFor: ['Porsuk Nehri', 'Odunpazarı', 'Sazova Parkı', 'Lületaşı', 'Kentpark'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Odunpazar%C4%B1_evleri.jpg/1280px-Odunpazar%C4%B1_evleri.jpg',
  },
  {
    id: 5,
    slug: 'trabzon',
    name: 'Trabzon',
    region: 'Karadeniz',
    population: '815 bin',
    climate: 'Karadeniz iklimi',
    livingCost: 'Düşük',
    description: 'Karadeniz\'in incisi, doğa ve tarih iç içe.',
    history: 'Trabzon\'un tarihi M.Ö. 8. yüzyıla kadar uzanır. Antik dönemde "Trapezus" adıyla bilinen şehir, önemli bir ticaret merkeziydi. Bizans döneminde Trabzon İmparatorluğu\'na başkentlik yapmıştır. 1461\'de Fatih Sultan Mehmet tarafından Osmanlı topraklarına katılmıştır. Kanuni Sultan Süleyman\'ın burada doğmuş olması şehrin önemini artırmıştır. Ayasofya Camii, Atatürk Köşkü, Sümela Manastırı gibi tarihi eserlere sahiptir.',
    studentLife: 'Karadeniz Teknik Üniversitesi\'nin varlığıyla canlı bir öğrenci hayatı vardır. Deniz manzarası, yeşil doğa ve samimi insan ilişkileri ile öne çıkar. Uzungöl, Sümela Manastırı gibi doğal ve tarihi güzelliklere yakınlık avantajdır.',
    transportation: 'Şehir içi ulaşım genelde dolmuş ve otobüslerle sağlanır. Havalimanı şehir merkezine yakındır.',
    famousFor: ['Uzungöl', 'Sümela Manastırı', 'Ayasofya', 'Boztepe', 'Hamsi'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sumela_Monastery.jpg/1280px-Sumela_Monastery.jpg',
  },
  {
    id: 6,
    slug: 'adana',
    name: 'Adana',
    region: 'Akdeniz',
    population: '2.3 milyon',
    climate: 'Akdeniz iklimi',
    livingCost: 'Orta',
    description: 'Sıcak insanları, kebabı ve tarımı ile ünlü Güney şehri.',
    history: 'Adana\'nın tarihi M.Ö. 6000\'lere dayanır. Hitit, Asur, Pers, Roma ve Bizans dönemlerinde önemli bir merkez olmuştur. Osmanlı döneminde 1517\'de Yavuz Sultan Selim tarafından fethedilmiştir. Ramazanoğulları Beyliği\'nin başkenti olan şehir, tarım ve ticaret açısından her zaman önemli olmuştur. Çukurova\'nın kalbi olan Adana, pamuk üretimiyle bilinir. Taş Köprü, Sabancı Merkez Camii, Ulu Cami gibi tarihi eserlere sahiptir.',
    studentLife: 'Çukurova Üniversitesi ile öğrenci hayatı canlıdır. Balcalı Kampüsü Türkiye\'nin en büyük kampüslerinden biridir. Sıcak iklim, misafirperver insanlar ve zengin mutfak öğrencilere avantaj sağlar. Adana kebabı, şalgam suyu, biberli ekmek gibi lezzetler meşhurdur.',
    transportation: 'Metro hattı, otobüs ve dolmuş ile ulaşım kolaydır. Şehir düz bir arazide olduğu için ulaşım rahatça sağlanır.',
    famousFor: ['Adana Kebabı', 'Taş Köprü', 'Sabancı Camii', 'Çukurova', 'Şalgam'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sabanci_Central_Mosque.jpg/1280px-Sabanci_Central_Mosque.jpg',
  },
  {
    id: 7,
    slug: 'mardin',
    name: 'Mardin',
    region: 'Güneydoğu Anadolu',
    population: '870 bin',
    climate: 'Karasal iklim',
    livingCost: 'Düşük',
    description: 'Taşın şiiri, kültürlerin buluşma noktası.',
    history: 'Mardin\'in tarihi M.Ö. 4500\'lere dayanır. Sümer, Akad, Asur, Roma, Bizans, Selçuklu ve Osmanlı medeniyetlerine ev sahipliği yapmıştır. "Merdo" olarak bilinen şehir, adını Süryanice "kaleler" anlamına gelen kelimeden alır. Mezopotamya\'nın kuzey sınırında yer alan Mardin, farklı din ve kültürlerin barış içinde yaşadığı bir şehir olarak öne çıkar. Süryani, Arap, Kürt, Türk kültürlerinin bir arada bulunduğu şehir, taş mimarisi ile UNESCO Dünya Mirası listesindedir. Deyrulzafaran Manastırı, Ulu Cami, Kasımiye Medresesi gibi tarihi yapılara sahiptir.',
    studentLife: 'Mardin Artuklu Üniversitesi ile genç bir üniversite şehri olmuştur. Tarihi dokusu ve kültürel zenginliği öğrencilere eşsiz bir deneyim sunar. Yaşam maliyeti düşük, insanlar samimi. Süryanice, Arapça, Kürtçe gibi diller öğrenilebilir.',
    transportation: 'Şehir içi ulaşım dolmuş ve otobüslerle sağlanır. Tarihi Mardin\'in dar sokakları yürüyerek gezilir. Yakın şehirlere karayolu ile ulaşım mümkündür.',
    famousFor: ['Taş Evleri', 'Deyrulzafaran', 'Mezopotamya Manzarası', 'Süryani Kültürü', 'Kırklar Kilisesi'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Mardin_evleri.jpg/1280px-Mardin_evleri.jpg',
  },
]

export function getSehir(slug: string): Sehir | undefined {
  return sehirler.find(s => s.slug === slug)
}
