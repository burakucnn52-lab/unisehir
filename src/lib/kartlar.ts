export interface Kart {
  id: number
  question: string
  answer: string
  explanation: string
  example: string
  tips: string
  relatedInfo?: string
  commonMistakes?: string
}

export const kartlar: { [key: string]: Kart[] } = {
  // MATEMATİK - FONKSİYONLAR
  'sayisal-matematik-fonksiyonlar': [
    {
      id: 1,
      question: 'Fonksiyon nedir?',
      answer: 'Bir kümedeki her elemanı, başka bir kümedeki tek bir elemana eşleyen kurala fonksiyon denir.',
      explanation: 'Fonksiyon, matematiğin en temel kavramlarından biridir. A kümesindeki her elemanı, B kümesindeki bir ve YALNIZ BİR elemanla eşleştirir. Yani her girdi (input) için tek bir çıktı (output) vardır.\n\nGösterimi: f: A → B\nOkunuşu: "A kümesinden B kümesine f fonksiyonu"',
      example: 'f(x) = 2x + 1\n\n• f(1) = 2(1) + 1 = 3\n• f(2) = 2(2) + 1 = 5\n• f(3) = 2(3) + 1 = 7\n\nHer x değeri için tek bir f(x) değeri var.',
      tips: 'Bir bağıntının fonksiyon olup olmadığını anlamak için "her girdi için tek çıktı var mı?" diye sor. Aynı x değeri farklı y değerleri veriyorsa FONKSİYON DEĞİLDİR.',
      relatedInfo: 'Tanım Kümesi (Domain): Fonksiyonun tanımlı olduğu x değerleri.\nDeğer Kümesi (Range): f(x) sonuçlarının kümesi.\nGörüntü Kümesi: Fonksiyonun aldığı gerçek değerler.',
      commonMistakes: '❌ Aynı x için 2 farklı y değeri olan bağıntıya fonksiyon demek\n❌ Tanım ve değer kümesini karıştırmak',
    },
    {
      id: 2,
      question: 'Bir fonksiyonun BİRE-BİR olması ne demektir?',
      answer: 'Farklı x değerlerinin, farklı y değerlerine karşılık gelmesidir. Yani x₁ ≠ x₂ ise f(x₁) ≠ f(x₂) olmalıdır.',
      explanation: 'Bire-bir (injektif) fonksiyonlar, her farklı girdiye farklı çıktı üretir.\n\nMatematiksel olarak:\nEğer f(x₁) = f(x₂) ise x₁ = x₂ olmalıdır.\n\nGrafik testi: Yatay bir doğru çizdiğinde, grafiği en fazla 1 noktada kesiyorsa BİRE-BİR fonksiyondur.',
      example: 'f(x) = 2x + 3 → BİRE-BİR ✅\n(Her farklı x, farklı sonuç verir)\n\nf(x) = x² → BİRE-BİR DEĞİL ❌\nÇünkü f(2) = 4 ve f(-2) = 4\nFarklı x, aynı sonuç.',
      tips: 'Doğrusal fonksiyonlar (f(x) = ax+b, a≠0) her zaman BİRE-BİRDİR. Parabol gibi çift fonksiyonlar bire-bir değildir.',
      commonMistakes: '❌ x² fonksiyonunu bire-bir sanmak\n❌ Yatay doğru testini unutmak',
    },
    {
      id: 3,
      question: 'ÖRTEN (Surjektif) fonksiyon nedir?',
      answer: 'Değer kümesindeki her elemanın en az bir tanım kümesi elemanına karşılık gelmesidir. Yani görüntü kümesi = değer kümesi.',
      explanation: 'Örten fonksiyonda, hedef kümedeki (B) HER eleman, en az bir kaynak kümesi (A) elemanı tarafından "hedeflenir".\n\nHiçbir eleman boşta kalmaz!\n\nMatematiksel: ∀y∈B, ∃x∈A öyle ki f(x)=y',
      example: 'f: R → R, f(x) = x³\nÖRTEN ✅ (her reel sayıya ulaşılabilir)\n\nf: R → R, f(x) = x²\nÖRTEN DEĞİL ❌\n(Negatif sayılara ulaşılamaz, çünkü x² ≥ 0)',
      tips: 'Fonksiyonun görüntü kümesi = değer kümesi ise ÖRTEN\'dir. Değer kümesinde "kullanılmayan" eleman varsa örten değildir.',
      relatedInfo: 'Bire-bir + Örten = BİRE-BİR ÖRTEN (Bijektif)\nBu tür fonksiyonların TERSİ vardır!',
      commonMistakes: '❌ Örten ve bire-biri karıştırmak\n❌ Değer kümesini yanlış belirlemek',
    },
    {
      id: 4,
      question: 'İki fonksiyonun BİLEŞKESİ nasıl bulunur? (f o g)(x) = ?',
      answer: '(f o g)(x) = f(g(x)) - Önce g fonksiyonunu uygula, sonra sonucu f\'ye ver.',
      explanation: 'Bileşke fonksiyon, iki fonksiyonu zincirleme uygulamaktır.\n\n(f o g)(x) demek:\n1. Önce x\'i g\'ye ver: g(x) sonucunu bul\n2. Bu sonucu f\'ye ver: f(g(x))\n\nDikkat: (f o g) ≠ (g o f) genelde!',
      example: 'f(x) = x + 2 ve g(x) = 3x olsun\n\n(f o g)(x) = f(g(x))\n= f(3x)\n= 3x + 2\n\n(g o f)(x) = g(f(x))\n= g(x + 2)\n= 3(x + 2)\n= 3x + 6\n\nGörüldüğü gibi farklı!',
      tips: 'İçten dışa oku: (f o g o h)(x) → önce h, sonra g, sonra f uygula.\nBileşke sırası ÇOK ÖNEMLİDİR!',
      commonMistakes: '❌ Sırayı karıştırmak\n❌ (f o g)(x) = f(x) · g(x) sanmak (ÇARPMA DEĞİL!)',
    },
    {
      id: 5,
      question: 'Bir fonksiyonun TERSİ nasıl bulunur?',
      answer: '1) y = f(x) yazılır. 2) x ve y yer değiştirilir. 3) y yalnız bırakılır. Sonuç f⁻¹(x)\'tir.',
      explanation: 'Ters fonksiyon, orijinal fonksiyonun yaptığını "geri alan" fonksiyondur.\n\nEğer f(a) = b ise, f⁻¹(b) = a olur.\n\nKoşul: Fonksiyonun tersinin olması için BİRE-BİR ÖRTEN olmalıdır!\n\nÖzellik: f(f⁻¹(x)) = x ve f⁻¹(f(x)) = x',
      example: 'f(x) = 2x + 6 fonksiyonunun tersi:\n\n1) y = 2x + 6\n2) x = 2y + 6 (x ve y değiştir)\n3) x - 6 = 2y\n4) y = (x - 6) / 2\n\nSonuç: f⁻¹(x) = (x - 6) / 2\n\nKontrol: f(f⁻¹(x)) = 2·(x-6)/2 + 6 = x ✅',
      tips: 'Grafikte f ve f⁻¹, y=x doğrusuna göre simetriktir. Bu görsel bir kontroldür!',
      relatedInfo: 'f⁻¹(x) yazımında -1 üs değil, "ters" anlamındadır.\nf(x) = x² gibi bire-bir olmayan fonksiyonların tersi normalde yoktur.',
      commonMistakes: '❌ f⁻¹(x) = 1/f(x) sanmak (YANLIŞ!)\n❌ Tersini bulurken x-y değişimini atlamak',
    },
    {
      id: 6,
      question: 'ÇİFT ve TEK fonksiyon nedir?',
      answer: 'Çift: f(-x) = f(x) [y eksenine göre simetrik]\nTek: f(-x) = -f(x) [orijine göre simetrik]',
      explanation: 'Fonksiyonların simetri özellikleri:\n\n🔷 ÇİFT FONKSİYON:\nf(-x) = f(x)\nGrafik y-eksenine göre simetriktir\nÖrnek: f(x) = x², f(x) = cos(x)\n\n🔶 TEK FONKSİYON:\nf(-x) = -f(x)\nGrafik ORİJİNE göre simetriktir\nÖrnek: f(x) = x³, f(x) = sin(x)',
      example: 'f(x) = x² (ÇİFT)\nf(-3) = (-3)² = 9\nf(3) = 3² = 9\nf(-x) = f(x) ✅\n\ng(x) = x³ (TEK)\ng(-2) = (-2)³ = -8\ng(2) = 2³ = 8\ng(-x) = -g(x) ✅\n\nh(x) = x + 1 (NE ÇİFT NE TEK)\nh(-1) = 0, h(1) = 2',
      tips: 'Kural: x\'in çift kuvvetleri → çift fonksiyon, tek kuvvetleri → tek fonksiyon eğilimindedir. Ama sabit terim varsa bu bozulabilir!',
      commonMistakes: '❌ "Çift = pozitif, Tek = negatif" sanmak\n❌ Her fonksiyonun ya çift ya tek olması gerektiğini düşünmek',
    },
    {
      id: 7,
      question: 'BİRİM (Özdeşlik) fonksiyonu nedir?',
      answer: 'f(x) = x şeklinde tanımlanan, her elemanı kendisiyle eşleyen fonksiyondur.',
      explanation: 'Birim fonksiyon, matematikteki "hiçbir şey yapmayan" fonksiyondur.\n\nHer girdiye aynı çıktıyı verir.\n\nGösterim: I(x) = x veya f(x) = x\n\nGrafik: y = x doğrusu (45° eğimli)',
      example: 'I(x) = x\n\nI(5) = 5\nI(-3) = -3\nI(0) = 0\nI(π) = π\n\nBileşkelerde:\nf o I = f\nI o f = f\n(Birim fonksiyon çarpma işlemindeki 1 gibidir)',
      tips: 'Bir fonksiyonun tersinden kontrolü: f(f⁻¹(x)) = I(x) = x olmalı. Bu birim fonksiyonun önemli kullanımıdır.',
      commonMistakes: '❌ Birim ve sabit fonksiyonu karıştırmak\n❌ I(x) = 1 sanmak (yanlış!)',
    },
    {
      id: 8,
      question: 'SABİT fonksiyon nedir?',
      answer: 'Tanım kümesindeki tüm elemanları, değer kümesindeki tek bir elemana gönderen fonksiyondur. f(x) = c',
      explanation: 'Sabit fonksiyonda, x ne olursa olsun sonuç HEP AYNIDIR.\n\nf(x) = c (c bir sabit sayı)\n\nGrafik: Yatay bir doğru (x eksenine paralel)\n\nÖrnek: f(x) = 5 → Her x için sonuç 5',
      example: 'f(x) = 7\n\nf(1) = 7\nf(-100) = 7\nf(0) = 7\nf(1000) = 7\n\nGrafik: y = 7 yatay doğrusu',
      tips: 'Sabit fonksiyonun türevi HER ZAMAN 0\'dır. Bu, türev konusunda çok işine yarayacak!',
      relatedInfo: 'Sabit fonksiyonlar BİRE-BİR DEĞİLDİR (tüm x\'ler aynı sonuca gider). Bu yüzden TERSİ YOKTUR.',
      commonMistakes: '❌ f(x) = 0 fonksiyonunu "yok" sanmak (o da sabit fonksiyondur!)',
    },
    {
      id: 9,
      question: 'DOĞRUSAL fonksiyon nedir? Özellikleri?',
      answer: 'f(x) = ax + b şeklindeki fonksiyonlardır. Grafiği bir doğrudur.',
      explanation: 'Doğrusal (lineer) fonksiyonlar, en temel fonksiyon tipidir.\n\nGenel form: f(x) = ax + b\n\n📌 a: Eğim (slope)\n• a > 0: Artan fonksiyon ↗\n• a < 0: Azalan fonksiyon ↘\n• a = 0: Sabit fonksiyon →\n\n📌 b: y-kesim noktası\n(x=0 iken y=b)',
      example: 'f(x) = 2x + 3\n\nEğim: 2 (artan)\ny-kesim: 3\n\nf(0) = 3 → (0, 3) noktası\nf(1) = 5 → (1, 5) noktası\nf(-1) = 1 → (-1, 1) noktası\n\nBu noktalardan doğru çizilir.',
      tips: 'İki noktadan doğru geçer. Bir doğrunun denklemini bulmak için:\nEğim = (y₂-y₁)/(x₂-x₁)\nSonra y - y₁ = m(x - x₁) formülünü kullan.',
      commonMistakes: '❌ f(x) = x² fonksiyonunu doğrusal sanmak (bu KUADRATİK)\n❌ Eğimi ters hesaplamak',
    },
    {
      id: 10,
      question: 'Fonksiyonun TANIM KÜMESİ nasıl bulunur?',
      answer: 'Fonksiyonun tanımlı olduğu tüm x değerlerinin kümesidir. Paydayı sıfır yapan, karekök içini negatif yapan, log içini sıfır veya negatif yapan değerler HARİÇ.',
      explanation: 'Tanım kümesi = Fonksiyonun "çalıştığı" x değerleri.\n\n🔍 Kritik Kontroller:\n\n1️⃣ PAYDA ≠ 0\nf(x) = 1/(x-2) → x ≠ 2\n\n2️⃣ KAREKÖK İÇİ ≥ 0\nf(x) = √(x-3) → x ≥ 3\n\n3️⃣ LOG İÇİ > 0\nf(x) = log(x-1) → x > 1\n\n4️⃣ ÇİFT DERECELİ KÖK İÇİ ≥ 0\nf(x) = ⁴√(x+5) → x ≥ -5',
      example: 'f(x) = √(x-4) / (x-7)\n\n🔍 Kontroller:\n• Karekök içi ≥ 0: x - 4 ≥ 0 → x ≥ 4\n• Payda ≠ 0: x - 7 ≠ 0 → x ≠ 7\n\nTanım Kümesi: [4, 7) ∪ (7, ∞)\n\nYani x, 4\'ten büyük veya eşit, ama 7 hariç.',
      tips: 'Karışık fonksiyonlarda TÜM koşulları tek tek yaz, sonra kesişimlerini al. Sayı doğrusu kullanmak çok yardımcı!',
      relatedInfo: 'Aralık gösterimi:\n[a,b]: a ve b dahil\n(a,b): a ve b hariç\n[a,b): a dahil, b hariç',
      commonMistakes: '❌ Tek kontrolü yapıp diğerlerini unutmak\n❌ Kesişim yerine birleşim almak',
    },
  ],

  // MATEMATİK - TÜREV
  'sayisal-matematik-turev': [
    {
      id: 1,
      question: 'Türev nedir? Ne işe yarar?',
      answer: 'Bir fonksiyonun ANLIK değişim hızını veren matematiksel işlemdir. Grafikte teğetin eğimini verir.',
      explanation: 'Türev, matematiğin en güçlü araçlarından biridir!\n\n🎯 Ne İşe Yarar?\n• Bir noktadaki anlık hız (fizikte)\n• Değişim oranı\n• Maksimum/minimum noktalar\n• Grafiğin eğimi\n• Optimizasyon problemleri\n\n📐 Matematiksel Tanım:\nf\'(x) = lim(h→0) [f(x+h) - f(x)] / h\n\nAma pratikte formüllerle hesaplarız!',
      example: 'Bir arabanın konumu: s(t) = t² + 3t\n\nHızı bulmak için türev alırız:\nv(t) = s\'(t) = 2t + 3\n\nt = 2 saniyede hız:\nv(2) = 2(2) + 3 = 7 m/s\n\nİşte türev bize anlık hızı verdi!',
      tips: 'Türevi görsel düşün: Grafik ne kadar dik yükseliyor? İşte türev bu diklik!',
      relatedInfo: 'Türev fizikte:\n• Konum → Hız (1. türev)\n• Hız → İvme (2. türev)\n\nEkonomide:\n• Toplam gelir → Marjinal gelir',
      commonMistakes: '❌ Türevi sadece formül sanmak\n❌ Türevin ne işe yaradığını bilmemek',
    },
    {
      id: 2,
      question: 'x^n fonksiyonunun türevi nedir? (Kuvvet kuralı)',
      answer: 'd/dx [x^n] = n · x^(n-1) - Üssü öne al, üssü 1 azalt!',
      explanation: 'Bu türevdeki EN ÖNEMLİ kuraldır!\n\n📐 Formül:\nd/dx [x^n] = n · x^(n-1)\n\n🎯 Nasıl Uygulanır?\n1. Üstteki sayıyı (n) ÖNE al\n2. Üste yeni değer olarak (n-1) yaz\n\n✨ İSTİSNALAR:\n• d/dx [x] = 1\n• d/dx [sabit] = 0\n• d/dx [x⁰] = d/dx [1] = 0',
      example: 'ÖRNEK 1: f(x) = x⁵\nf\'(x) = 5 · x⁴ = 5x⁴\n\nÖRNEK 2: f(x) = x³\nf\'(x) = 3x²\n\nÖRNEK 3: f(x) = x¹⁰\nf\'(x) = 10x⁹\n\nÖRNEK 4: f(x) = x^(1/2) = √x\nf\'(x) = (1/2) · x^(-1/2) = 1/(2√x)\n\nÖRNEK 5: f(x) = x^(-2) = 1/x²\nf\'(x) = -2 · x^(-3) = -2/x³',
      tips: '📌 SIHIRLI CÜMLE: "Üssü öne, üstten bir azalt!"\n\nBu kural TÜM üslü ifadeler için geçerli:\n• Negatif üsler\n• Kesirli üsler\n• Kökler (kesirli üs olarak yaz)',
      relatedInfo: 'Kökleri türev alırken:\n√x = x^(1/2)\n∛x = x^(1/3)\n\nBu şekilde yazıp kuralı uygula!',
      commonMistakes: '❌ Üssü öne almayı unutmak\n❌ Üsten 1 çıkarmayı unutmak\n❌ Sabit sayının türevini x ile çarpmak',
    },
    {
      id: 3,
      question: 'Toplam ve fark fonksiyonlarının türevi nasıl alınır?',
      answer: 'Her terim ayrı ayrı türevlenir. (f + g)\' = f\' + g\' ve (f - g)\' = f\' - g\'',
      explanation: 'Türev DAĞILIR!\n\n📐 Kurallar:\n• (f + g)\' = f\' + g\'\n• (f - g)\' = f\' - g\'\n• (a·f)\' = a·f\' (a sabit)\n\nYani her terimi ayrı ayrı türev alıp, işaretlerini koruyabilirsin.',
      example: 'f(x) = 3x⁴ + 2x³ - 5x² + 7x - 9\n\nHer terimi ayrı türev al:\n\n• (3x⁴)\' = 12x³\n• (2x³)\' = 6x²\n• (-5x²)\' = -10x\n• (7x)\' = 7\n• (-9)\' = 0 (sabit!)\n\nf\'(x) = 12x³ + 6x² - 10x + 7\n\n📌 Not: Sabit terim (-9) TÜREVDE YOK OLDU!',
      tips: 'Polinomların türevi çok kolay:\n1. Her terime kuvvet kuralı uygula\n2. Sabit sayıyı sil\n3. Toplamayı koru',
      commonMistakes: '❌ Sabit sayıyı türeve dahil etmek\n❌ Katsayıyı unutmak (3x²\'nin türevi 6x, 2x değil)',
    },
    {
      id: 4,
      question: 'ÇARPIM kuralı nedir? (f·g)\' = ?',
      answer: '(f·g)\' = f\'·g + f·g\' - Birincinin türevi × ikinci + birinci × ikincinin türevi',
      explanation: 'İki fonksiyonun çarpımının türevi ÇARPIM DEĞİL!\n\n📐 FORMÜL:\n(f·g)\' = f\'·g + f·g\'\n\n🎯 EZBERLEMEK İÇİN:\n"Birincinin türevi × ikinci + birinci × ikincinin türevi"\n\n⚠️ DİKKAT:\n(f·g)\' ≠ f\'·g\' (BU YANLIŞ!)',
      example: 'f(x) = x² · sin(x)\n\nİlk fonksiyon: u = x² → u\' = 2x\nİkinci fonksiyon: v = sin(x) → v\' = cos(x)\n\nÇarpım kuralı:\nf\'(x) = u\'·v + u·v\'\n= 2x · sin(x) + x² · cos(x)\n\nSonuç: f\'(x) = 2x·sin(x) + x²·cos(x)',
      tips: '💡 KOLAY EZBERLEME:\n"Birincinin türevi ile ikinciyi çarp,\n Sonra birinci ile ikincinin türevini çarp,\n İkisini topla!"',
      relatedInfo: 'Üç fonksiyonun çarpımı için:\n(f·g·h)\' = f\'·g·h + f·g\'·h + f·g·h\'',
      commonMistakes: '❌ (f·g)\' = f\'·g\' sanmak (KESİNLİKLE YANLIŞ!)\n❌ Toplamayı unutmak',
    },
    {
      id: 5,
      question: 'BÖLÜM kuralı nedir? (f/g)\' = ?',
      answer: '(f/g)\' = (f\'·g - f·g\') / g² - Payın türevi × payda - pay × paydanın türevi / payda²',
      explanation: 'İki fonksiyonun bölümünün türevi:\n\n📐 FORMÜL:\n(f/g)\' = (f\'·g - f·g\') / g²\n\n🎯 EZBERLEMEK İÇİN:\n"Payın türevi × payda EKSİ pay × paydanın türevi, TÜMÜ payda karesine bölünür"\n\n⚠️ SIRALAMA ÖNEMLİ!\nÇarpım kuralında sıra önemli değildi (toplama), ama bölümde ÇIKARMA olduğu için sıra ÖNEMLİ!',
      example: 'f(x) = (x² + 1) / (x - 3)\n\nPay: u = x² + 1 → u\' = 2x\nPayda: v = x - 3 → v\' = 1\n\nBölüm kuralı:\nf\'(x) = (u\'·v - u·v\') / v²\n= [2x·(x-3) - (x²+1)·1] / (x-3)²\n= [2x² - 6x - x² - 1] / (x-3)²\n= (x² - 6x - 1) / (x-3)²',
      tips: '📌 EZBERLEME CÜMLESİ:\n"Alt yukarı türev al, üst aşağı türev al, aradaki ÇIKARMA, ALTIN KARESİ"',
      commonMistakes: '❌ + yerine - kullanmayı unutmak\n❌ Payda karesini almayı unutmak\n❌ Sırayı karıştırmak (u\'v - uv\' değil, uv\' - u\'v yazmak)',
    },
    {
      id: 6,
      question: 'ZİNCİR kuralı nedir? (Bileşke türev)',
      answer: 'd/dx [f(g(x))] = f\'(g(x)) · g\'(x) - Dıştan türev al, içiyle çarp!',
      explanation: 'Bileşke fonksiyonların türevi için zincir kuralı!\n\n📐 FORMÜL:\nd/dx [f(g(x))] = f\'(g(x)) · g\'(x)\n\n🎯 STRATEJİ:\n1. DIŞtaki fonksiyonun türevini al (içi aynen bırak)\n2. İÇteki fonksiyonun türeviyle ÇARP\n\n💡 Zincir gibi düşün: dıştan içe doğru türev al!',
      example: 'ÖRNEK 1: f(x) = (2x + 5)³\n\nDış: ()³ → türevi: 3()²\nİç: 2x + 5 → türevi: 2\n\nf\'(x) = 3(2x + 5)² · 2 = 6(2x + 5)²\n\n─────────────────────────\n\nÖRNEK 2: f(x) = sin(x²)\n\nDış: sin() → türevi: cos()\nİç: x² → türevi: 2x\n\nf\'(x) = cos(x²) · 2x = 2x·cos(x²)\n\n─────────────────────────\n\nÖRNEK 3: f(x) = √(3x + 1)\n\nDış: √() = ()^(1/2) → türevi: (1/2)()^(-1/2)\nİç: 3x + 1 → türevi: 3\n\nf\'(x) = (1/2)(3x+1)^(-1/2) · 3\n= 3 / (2√(3x+1))',
      tips: '💡 EZBERLEME CÜMLESİ:\n"Dıştan türev, içi aynen, iç türev ile ÇARP"\n\n📌 Karmaşık fonksiyonlarda zincir kuralı KAÇINILMAZ!',
      relatedInfo: 'Çift zincir de olabilir:\nd/dx [f(g(h(x)))] = f\'(g(h(x))) · g\'(h(x)) · h\'(x)',
      commonMistakes: '❌ İç türevle çarpmayı unutmak (EN ÇOK YAPILAN HATA!)\n❌ Dış türevi alırken içi de türevlemek',
    },
    {
      id: 7,
      question: 'Trigonometrik fonksiyonların türevleri nelerdir?',
      answer: 'sin\'(x) = cos(x)\ncos\'(x) = -sin(x)\ntan\'(x) = sec²(x) = 1/cos²(x)',
      explanation: '🔷 Temel Trigonometrik Türevler:\n\n1. d/dx [sin(x)] = cos(x)\n2. d/dx [cos(x)] = -sin(x) ⚠️ EKSİ!\n3. d/dx [tan(x)] = sec²(x) = 1/cos²(x)\n4. d/dx [cot(x)] = -csc²(x) = -1/sin²(x)\n5. d/dx [sec(x)] = sec(x)·tan(x)\n6. d/dx [csc(x)] = -csc(x)·cot(x)\n\n💡 KOLAY EZBERLEME:\n"Ko" ile başlayanların (cos, cot, csc) türevleri NEGATİF olur!',
      example: 'ÖRNEK 1: f(x) = sin(3x)\n\nZincir kuralı:\nf\'(x) = cos(3x) · 3 = 3cos(3x)\n\n─────────────────────────\n\nÖRNEK 2: f(x) = cos(x²)\n\nf\'(x) = -sin(x²) · 2x = -2x·sin(x²)\n\n─────────────────────────\n\nÖRNEK 3: f(x) = x·sin(x) [ÇARPIM!]\n\nu = x → u\' = 1\nv = sin(x) → v\' = cos(x)\n\nf\'(x) = 1·sin(x) + x·cos(x)\n= sin(x) + x·cos(x)',
      tips: '📌 EZBERLE:\n• sin → cos (POZİTİF)\n• cos → sin (NEGATİF)\n\n🎯 Trigonometrik fonksiyonlar hep zincir kuralıyla gelir. İç türevi UNUTMA!',
      commonMistakes: '❌ cos\'un türevinde eksiyi unutmak\n❌ İç türevi çarpmayı unutmak\n❌ sin ve cos\'u karıştırmak',
    },
    {
      id: 8,
      question: 'Üstel fonksiyonun türevi nedir? d/dx [eˣ] = ?',
      answer: 'd/dx [eˣ] = eˣ (Kendisi!)\nd/dx [aˣ] = aˣ · ln(a)',
      explanation: 'Üstel fonksiyonlar özeldir!\n\n🔷 e^x (Doğal Üstel):\nd/dx [eˣ] = eˣ\n\nEvet, DOĞRU okudun! eˣ\'in türevi KENDİSİDİR!\nMatematikteki en özel fonksiyondur.\n\n🔷 aˣ (Genel Üstel):\nd/dx [aˣ] = aˣ · ln(a)\n\n💡 e sayısı ≈ 2.718...\nln(e) = 1 olduğu için türevde ln(a) kaybolur.',
      example: 'ÖRNEK 1: f(x) = e^x\nf\'(x) = e^x\n\n─────────────────────────\n\nÖRNEK 2: f(x) = e^(3x)\nZincir kuralı:\nf\'(x) = e^(3x) · 3 = 3e^(3x)\n\n─────────────────────────\n\nÖRNEK 3: f(x) = 2^x\nf\'(x) = 2^x · ln(2)\n\n─────────────────────────\n\nÖRNEK 4: f(x) = e^(x²)\nf\'(x) = e^(x²) · 2x = 2x·e^(x²)',
      tips: '🎯 e^x fonksiyonu tüm matematiğin en özel fonksiyonudur çünkü:\n• Kendisi = Türevi\n• İntegrali de kendisi\n\nBu yüzden analizin en sevilen fonksiyonudur!',
      relatedInfo: 'e sayısı = 2.71828... (irrasyonel)\nJacob Bernoulli tarafından bulundu.\nDoğada, biyolojide, ekonomide her yerde karşımıza çıkar.',
      commonMistakes: '❌ e^x\'in türevini x·e^(x-1) sanmak (YANLIŞ! Bu kuvvet kuralı, üstel değil!)\n❌ Zincir kuralında iç türevi unutmak',
    },
    {
      id: 9,
      question: 'Logaritma fonksiyonunun türevi nedir?',
      answer: 'd/dx [ln(x)] = 1/x\nd/dx [log_a(x)] = 1 / (x · ln(a))',
      explanation: '🔷 Doğal Logaritma (ln):\nd/dx [ln(x)] = 1/x\n\nBu çok temiz bir formül!\n\n🔷 Genel Logaritma:\nd/dx [logₐ(x)] = 1 / (x · ln(a))\n\n💡 Zincir Kuralı ile:\nd/dx [ln(u)] = u\'/u',
      example: 'ÖRNEK 1: f(x) = ln(x)\nf\'(x) = 1/x\n\n─────────────────────────\n\nÖRNEK 2: f(x) = ln(x²)\nİç: x² → türev: 2x\nf\'(x) = 2x / x² = 2/x\n\n─────────────────────────\n\nÖRNEK 3: f(x) = ln(3x + 5)\nİç türev: 3\nf\'(x) = 3 / (3x + 5)\n\n─────────────────────────\n\nÖRNEK 4: f(x) = log₂(x)\nf\'(x) = 1 / (x · ln(2))',
      tips: '💡 KISA YOL:\nln(u) fonksiyonunun türevi = (u\'nun türevi) / u\n\nBu formülü ezberlersen çok hızlı türev alırsın!',
      relatedInfo: 'ln = "logaritma naturel" = doğal logaritma = e tabanında logaritma\n\nln(x) = log_e(x)\n\nHer alanda kullanılır çünkü e sayısı özel!',
      commonMistakes: '❌ ln(x)\'in türevini ln(x)/x sanmak\n❌ Zincir kuralında iç türevi unutmak',
    },
    {
      id: 10,
      question: 'Bir fonksiyonun MAKSİMUM ve MİNİMUM noktaları nasıl bulunur?',
      answer: '1) f\'(x) = 0 yap, kritik noktaları bul. 2) f\'\'(x) işaretine bak: pozitifse min, negatifse max.',
      explanation: 'Türev, fonksiyonun tepe ve çukurlarını bulmada kullanılır!\n\n📐 ADIMLAR:\n\n1️⃣ BİRİNCİ TÜREV = 0\nf\'(x) = 0 denklemini çöz\nBulduğun x değerlerine "KRİTİK NOKTA" denir\n\n2️⃣ İKİNCİ TÜREVİ AL\nf\'\'(x) hesapla\n\n3️⃣ KRİTİK NOKTALARDA KONTROL ET:\n• f\'\'(x) > 0 ise → MİNİMUM\n• f\'\'(x) < 0 ise → MAKSİMUM\n• f\'\'(x) = 0 ise → BÜKÜM noktası olabilir\n\n💡 SEZGİSEL:\n• Grafiği gülüyorsa (U şekli) → minimum\n• Grafiği somurtuyorsa (∩ şekli) → maksimum',
      example: 'f(x) = x³ - 3x² + 5\n\n1️⃣ Birinci türev = 0:\nf\'(x) = 3x² - 6x\n3x² - 6x = 0\n3x(x - 2) = 0\nx = 0 veya x = 2\n\n2️⃣ İkinci türev:\nf\'\'(x) = 6x - 6\n\n3️⃣ Kontrol:\n• x = 0 için: f\'\'(0) = -6 < 0 → MAKSİMUM\n• x = 2 için: f\'\'(2) = 6 > 0 → MİNİMUM\n\n📊 SONUÇ:\nMax noktası: (0, 5)\nMin noktası: (2, 1)',
      tips: '💡 GERÇEK HAYAT KULLANIMI:\n• Kâr maksimizasyonu\n• Malzeme minimizasyonu\n• Optimal fiyatlandırma\n• Yol/rota optimizasyonu\n\nMühendislik ve ekonomide vazgeçilmez!',
      relatedInfo: 'BÜKÜM NOKTASI: Grafiğin dış/iç bükeylik değiştirdiği nokta.\nf\'\'(x) = 0 ise büküm olabilir (kontrol gerekir).',
      commonMistakes: '❌ Sadece f\'(x) = 0 bakıp max/min ayırt etmemek\n❌ İkinci türevin işaretini yanlış yorumlamak\n❌ Sınır değerleri kontrol etmemek',
    },
  ],
}

export function getKartlar(alan: string, ders: string, konu: string): Kart[] {
  const key = `${alan}-${ders}-${konu}`
  return kartlar[key] || []
}
