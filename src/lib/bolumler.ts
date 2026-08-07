export interface BolumPuan {
  yil: number
  puan: number
  siralama: number
  kontenjan: number
  yerlesen: number
}

export interface Bolum {
  id: number
  universiteSlug: string
  fakulte: string
  bolumAdi: string
  slug: string
  puanTuru: 'SAY' | 'EA' | 'SÖZ' | 'DİL' | 'TYT'
  sure: number // yıl
  puanlar: BolumPuan[]
}

export const bolumler: Bolum[] = [
  // ═══════════════════════════════════════
  // BOĞAZİÇİ ÜNİVERSİTESİ
  // ═══════════════════════════════════════
  {
    id: 1,
    universiteSlug: 'bogazici-universitesi',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Bilgisayar Mühendisliği',
    slug: 'bilgisayar-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 555.12, siralama: 217, kontenjan: 100, yerlesen: 100 },
      { yil: 2023, puan: 549.89, siralama: 285, kontenjan: 100, yerlesen: 100 },
      { yil: 2022, puan: 543.21, siralama: 320, kontenjan: 100, yerlesen: 100 },
    ],
  },
  {
    id: 2,
    universiteSlug: 'bogazici-universitesi',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Elektrik-Elektronik Mühendisliği',
    slug: 'elektrik-elektronik-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 540.55, siralama: 1250, kontenjan: 100, yerlesen: 100 },
      { yil: 2023, puan: 535.20, siralama: 1450, kontenjan: 100, yerlesen: 100 },
      { yil: 2022, puan: 528.90, siralama: 1580, kontenjan: 100, yerlesen: 100 },
    ],
  },
  {
    id: 3,
    universiteSlug: 'bogazici-universitesi',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Endüstri Mühendisliği',
    slug: 'endustri-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 536.80, siralama: 1580, kontenjan: 80, yerlesen: 80 },
      { yil: 2023, puan: 531.45, siralama: 1720, kontenjan: 80, yerlesen: 80 },
      { yil: 2022, puan: 525.10, siralama: 1890, kontenjan: 80, yerlesen: 80 },
    ],
  },
  {
    id: 4,
    universiteSlug: 'bogazici-universitesi',
    fakulte: 'İktisadi ve İdari Bilimler Fakültesi',
    bolumAdi: 'İşletme',
    slug: 'isletme',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 520.30, siralama: 890, kontenjan: 120, yerlesen: 120 },
      { yil: 2023, puan: 515.60, siralama: 970, kontenjan: 120, yerlesen: 120 },
      { yil: 2022, puan: 510.20, siralama: 1050, kontenjan: 120, yerlesen: 120 },
    ],
  },
  {
    id: 5,
    universiteSlug: 'bogazici-universitesi',
    fakulte: 'İktisadi ve İdari Bilimler Fakültesi',
    bolumAdi: 'İktisat',
    slug: 'iktisat',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 515.80, siralama: 980, kontenjan: 100, yerlesen: 100 },
      { yil: 2023, puan: 511.25, siralama: 1070, kontenjan: 100, yerlesen: 100 },
      { yil: 2022, puan: 505.90, siralama: 1150, kontenjan: 100, yerlesen: 100 },
    ],
  },
  {
    id: 6,
    universiteSlug: 'bogazici-universitesi',
    fakulte: 'Fen-Edebiyat Fakültesi',
    bolumAdi: 'Psikoloji',
    slug: 'psikoloji',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 512.40, siralama: 1080, kontenjan: 60, yerlesen: 60 },
      { yil: 2023, puan: 508.15, siralama: 1180, kontenjan: 60, yerlesen: 60 },
      { yil: 2022, puan: 502.80, siralama: 1290, kontenjan: 60, yerlesen: 60 },
    ],
  },
  {
    id: 7,
    universiteSlug: 'bogazici-universitesi',
    fakulte: 'Eğitim Fakültesi',
    bolumAdi: 'Rehberlik ve Psikolojik Danışmanlık',
    slug: 'rehberlik-ve-psikolojik-danismanlik',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 495.20, siralama: 2450, kontenjan: 50, yerlesen: 50 },
      { yil: 2023, puan: 490.80, siralama: 2680, kontenjan: 50, yerlesen: 50 },
      { yil: 2022, puan: 485.30, siralama: 2890, kontenjan: 50, yerlesen: 50 },
    ],
  },

  // ═══════════════════════════════════════
  // ODTÜ (Orta Doğu Teknik Üniversitesi)
  // ═══════════════════════════════════════
  {
    id: 8,
    universiteSlug: 'odtu',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Bilgisayar Mühendisliği',
    slug: 'bilgisayar-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 551.25, siralama: 380, kontenjan: 165, yerlesen: 165 },
      { yil: 2023, puan: 545.80, siralama: 450, kontenjan: 165, yerlesen: 165 },
      { yil: 2022, puan: 539.30, siralama: 520, kontenjan: 165, yerlesen: 165 },
    ],
  },
  {
    id: 9,
    universiteSlug: 'odtu',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Elektrik-Elektronik Mühendisliği',
    slug: 'elektrik-elektronik-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 538.90, siralama: 1420, kontenjan: 150, yerlesen: 150 },
      { yil: 2023, puan: 533.45, siralama: 1580, kontenjan: 150, yerlesen: 150 },
      { yil: 2022, puan: 527.10, siralama: 1720, kontenjan: 150, yerlesen: 150 },
    ],
  },
  {
    id: 10,
    universiteSlug: 'odtu',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Endüstri Mühendisliği',
    slug: 'endustri-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 534.20, siralama: 1780, kontenjan: 130, yerlesen: 130 },
      { yil: 2023, puan: 529.15, siralama: 1920, kontenjan: 130, yerlesen: 130 },
      { yil: 2022, puan: 523.40, siralama: 2050, kontenjan: 130, yerlesen: 130 },
    ],
  },
  {
    id: 11,
    universiteSlug: 'odtu',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Makine Mühendisliği',
    slug: 'makine-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 530.80, siralama: 2100, kontenjan: 120, yerlesen: 120 },
      { yil: 2023, puan: 525.40, siralama: 2280, kontenjan: 120, yerlesen: 120 },
      { yil: 2022, puan: 519.60, siralama: 2450, kontenjan: 120, yerlesen: 120 },
    ],
  },
  {
    id: 12,
    universiteSlug: 'odtu',
    fakulte: 'İktisadi ve İdari Bilimler Fakültesi',
    bolumAdi: 'İşletme',
    slug: 'isletme',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 518.50, siralama: 940, kontenjan: 130, yerlesen: 130 },
      { yil: 2023, puan: 513.20, siralama: 1030, kontenjan: 130, yerlesen: 130 },
      { yil: 2022, puan: 507.80, siralama: 1120, kontenjan: 130, yerlesen: 130 },
    ],
  },
  {
    id: 13,
    universiteSlug: 'odtu',
    fakulte: 'İktisadi ve İdari Bilimler Fakültesi',
    bolumAdi: 'İktisat',
    slug: 'iktisat',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 514.30, siralama: 1020, kontenjan: 120, yerlesen: 120 },
      { yil: 2023, puan: 509.75, siralama: 1120, kontenjan: 120, yerlesen: 120 },
      { yil: 2022, puan: 504.20, siralama: 1210, kontenjan: 120, yerlesen: 120 },
    ],
  },

  // ═══════════════════════════════════════
  // İTÜ (İstanbul Teknik Üniversitesi)
  // ═══════════════════════════════════════
  {
    id: 14,
    universiteSlug: 'itu',
    fakulte: 'Bilgisayar ve Bilişim Fakültesi',
    bolumAdi: 'Bilgisayar Mühendisliği',
    slug: 'bilgisayar-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 548.90, siralama: 590, kontenjan: 150, yerlesen: 150 },
      { yil: 2023, puan: 543.25, siralama: 680, kontenjan: 150, yerlesen: 150 },
      { yil: 2022, puan: 537.80, siralama: 780, kontenjan: 150, yerlesen: 150 },
    ],
  },
  {
    id: 15,
    universiteSlug: 'itu',
    fakulte: 'Elektrik-Elektronik Fakültesi',
    bolumAdi: 'Elektrik Mühendisliği',
    slug: 'elektrik-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 532.60, siralama: 1950, kontenjan: 130, yerlesen: 130 },
      { yil: 2023, puan: 527.30, siralama: 2100, kontenjan: 130, yerlesen: 130 },
      { yil: 2022, puan: 521.80, siralama: 2280, kontenjan: 130, yerlesen: 130 },
    ],
  },
  {
    id: 16,
    universiteSlug: 'itu',
    fakulte: 'Elektrik-Elektronik Fakültesi',
    bolumAdi: 'Elektronik ve Haberleşme Mühendisliği',
    slug: 'elektronik-ve-haberlesme-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 530.15, siralama: 2150, kontenjan: 120, yerlesen: 120 },
      { yil: 2023, puan: 524.80, siralama: 2320, kontenjan: 120, yerlesen: 120 },
      { yil: 2022, puan: 519.20, siralama: 2480, kontenjan: 120, yerlesen: 120 },
    ],
  },
  {
    id: 17,
    universiteSlug: 'itu',
    fakulte: 'Makine Fakültesi',
    bolumAdi: 'Makine Mühendisliği',
    slug: 'makine-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 527.40, siralama: 2380, kontenjan: 200, yerlesen: 200 },
      { yil: 2023, puan: 522.10, siralama: 2560, kontenjan: 200, yerlesen: 200 },
      { yil: 2022, puan: 516.50, siralama: 2720, kontenjan: 200, yerlesen: 200 },
    ],
  },
  {
    id: 18,
    universiteSlug: 'itu',
    fakulte: 'İnşaat Fakültesi',
    bolumAdi: 'İnşaat Mühendisliği',
    slug: 'insaat-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 490.20, siralama: 8500, kontenjan: 180, yerlesen: 180 },
      { yil: 2023, puan: 485.60, siralama: 9200, kontenjan: 180, yerlesen: 180 },
      { yil: 2022, puan: 480.30, siralama: 9800, kontenjan: 180, yerlesen: 180 },
    ],
  },
  {
    id: 19,
    universiteSlug: 'itu',
    fakulte: 'Mimarlık Fakültesi',
    bolumAdi: 'Mimarlık',
    slug: 'mimarlik',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 495.80, siralama: 7800, kontenjan: 150, yerlesen: 150 },
      { yil: 2023, puan: 491.20, siralama: 8400, kontenjan: 150, yerlesen: 150 },
      { yil: 2022, puan: 486.50, siralama: 8950, kontenjan: 150, yerlesen: 150 },
    ],
  },

  // ═══════════════════════════════════════
  // HACETTEPE ÜNİVERSİTESİ
  // ═══════════════════════════════════════
  {
    id: 20,
    universiteSlug: 'hacettepe',
    fakulte: 'Tıp Fakültesi',
    bolumAdi: 'Tıp (İngilizce)',
    slug: 'tip-ingilizce',
    puanTuru: 'SAY',
    sure: 6,
    puanlar: [
      { yil: 2024, puan: 559.35, siralama: 145, kontenjan: 70, yerlesen: 70 },
      { yil: 2023, puan: 554.80, siralama: 180, kontenjan: 70, yerlesen: 70 },
      { yil: 2022, puan: 548.90, siralama: 215, kontenjan: 70, yerlesen: 70 },
    ],
  },
  {
    id: 21,
    universiteSlug: 'hacettepe',
    fakulte: 'Tıp Fakültesi',
    bolumAdi: 'Tıp (Türkçe)',
    slug: 'tip-turkce',
    puanTuru: 'SAY',
    sure: 6,
    puanlar: [
      { yil: 2024, puan: 552.80, siralama: 320, kontenjan: 250, yerlesen: 250 },
      { yil: 2023, puan: 547.60, siralama: 390, kontenjan: 250, yerlesen: 250 },
      { yil: 2022, puan: 541.30, siralama: 470, kontenjan: 250, yerlesen: 250 },
    ],
  },
  {
    id: 22,
    universiteSlug: 'hacettepe',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Bilgisayar Mühendisliği',
    slug: 'bilgisayar-muhendisligi',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 528.90, siralama: 2280, kontenjan: 80, yerlesen: 80 },
      { yil: 2023, puan: 523.50, siralama: 2450, kontenjan: 80, yerlesen: 80 },
      { yil: 2022, puan: 517.80, siralama: 2620, kontenjan: 80, yerlesen: 80 },
    ],
  },
  {
    id: 23,
    universiteSlug: 'hacettepe',
    fakulte: 'Diş Hekimliği Fakültesi',
    bolumAdi: 'Diş Hekimliği',
    slug: 'dis-hekimligi',
    puanTuru: 'SAY',
    sure: 5,
    puanlar: [
      { yil: 2024, puan: 522.40, siralama: 3200, kontenjan: 100, yerlesen: 100 },
      { yil: 2023, puan: 517.80, siralama: 3450, kontenjan: 100, yerlesen: 100 },
      { yil: 2022, puan: 512.30, siralama: 3680, kontenjan: 100, yerlesen: 100 },
    ],
  },
  {
    id: 24,
    universiteSlug: 'hacettepe',
    fakulte: 'Eczacılık Fakültesi',
    bolumAdi: 'Eczacılık',
    slug: 'eczacilik',
    puanTuru: 'SAY',
    sure: 5,
    puanlar: [
      { yil: 2024, puan: 500.20, siralama: 5800, kontenjan: 120, yerlesen: 120 },
      { yil: 2023, puan: 495.60, siralama: 6200, kontenjan: 120, yerlesen: 120 },
      { yil: 2022, puan: 490.10, siralama: 6650, kontenjan: 120, yerlesen: 120 },
    ],
  },
  {
    id: 25,
    universiteSlug: 'hacettepe',
    fakulte: 'İktisadi ve İdari Bilimler Fakültesi',
    bolumAdi: 'İşletme',
    slug: 'isletme',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 480.30, siralama: 5200, kontenjan: 100, yerlesen: 100 },
      { yil: 2023, puan: 475.80, siralama: 5580, kontenjan: 100, yerlesen: 100 },
      { yil: 2022, puan: 470.40, siralama: 5950, kontenjan: 100, yerlesen: 100 },
    ],
  },

  // ═══════════════════════════════════════
  // BİLKENT ÜNİVERSİTESİ
  // ═══════════════════════════════════════
  {
    id: 26,
    universiteSlug: 'bilkent',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Bilgisayar Mühendisliği (İngilizce) (Burslu)',
    slug: 'bilgisayar-muhendisligi-burslu',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 550.80, siralama: 410, kontenjan: 10, yerlesen: 10 },
      { yil: 2023, puan: 545.30, siralama: 495, kontenjan: 10, yerlesen: 10 },
      { yil: 2022, puan: 539.50, siralama: 580, kontenjan: 10, yerlesen: 10 },
    ],
  },
  {
    id: 27,
    universiteSlug: 'bilkent',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Bilgisayar Mühendisliği (İngilizce) (%50 Burslu)',
    slug: 'bilgisayar-muhendisligi-yarim-burslu',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 525.40, siralama: 2680, kontenjan: 45, yerlesen: 45 },
      { yil: 2023, puan: 520.10, siralama: 2850, kontenjan: 45, yerlesen: 45 },
      { yil: 2022, puan: 514.60, siralama: 3020, kontenjan: 45, yerlesen: 45 },
    ],
  },
  {
    id: 28,
    universiteSlug: 'bilkent',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Elektrik-Elektronik Mühendisliği (Burslu)',
    slug: 'elektrik-elektronik-burslu',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 540.20, siralama: 1230, kontenjan: 8, yerlesen: 8 },
      { yil: 2023, puan: 534.90, siralama: 1380, kontenjan: 8, yerlesen: 8 },
      { yil: 2022, puan: 529.30, siralama: 1520, kontenjan: 8, yerlesen: 8 },
    ],
  },
  {
    id: 29,
    universiteSlug: 'bilkent',
    fakulte: 'İşletme Fakültesi',
    bolumAdi: 'İşletme (İngilizce) (Burslu)',
    slug: 'isletme-burslu',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 515.60, siralama: 970, kontenjan: 8, yerlesen: 8 },
      { yil: 2023, puan: 511.20, siralama: 1050, kontenjan: 8, yerlesen: 8 },
      { yil: 2022, puan: 505.80, siralama: 1150, kontenjan: 8, yerlesen: 8 },
    ],
  },
  {
    id: 30,
    universiteSlug: 'bilkent',
    fakulte: 'Hukuk Fakültesi',
    bolumAdi: 'Hukuk (Burslu)',
    slug: 'hukuk-burslu',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 495.80, siralama: 2350, kontenjan: 10, yerlesen: 10 },
      { yil: 2023, puan: 491.20, siralama: 2530, kontenjan: 10, yerlesen: 10 },
      { yil: 2022, puan: 486.50, siralama: 2720, kontenjan: 10, yerlesen: 10 },
    ],
  },

  // ═══════════════════════════════════════
  // KOÇ ÜNİVERSİTESİ
  // ═══════════════════════════════════════
  {
    id: 31,
    universiteSlug: 'koc',
    fakulte: 'Mühendislik Fakültesi',
    bolumAdi: 'Bilgisayar Mühendisliği (İngilizce) (Burslu)',
    slug: 'bilgisayar-muhendisligi-burslu',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 552.30, siralama: 340, kontenjan: 5, yerlesen: 5 },
      { yil: 2023, puan: 547.10, siralama: 410, kontenjan: 5, yerlesen: 5 },
      { yil: 2022, puan: 541.60, siralama: 490, kontenjan: 5, yerlesen: 5 },
    ],
  },
  {
    id: 32,
    universiteSlug: 'koc',
    fakulte: 'Tıp Fakültesi',
    bolumAdi: 'Tıp (İngilizce) (Burslu)',
    slug: 'tip-burslu',
    puanTuru: 'SAY',
    sure: 6,
    puanlar: [
      { yil: 2024, puan: 561.20, siralama: 110, kontenjan: 15, yerlesen: 15 },
      { yil: 2023, puan: 556.40, siralama: 145, kontenjan: 15, yerlesen: 15 },
      { yil: 2022, puan: 550.80, siralama: 180, kontenjan: 15, yerlesen: 15 },
    ],
  },
  {
    id: 33,
    universiteSlug: 'koc',
    fakulte: 'Hukuk Fakültesi',
    bolumAdi: 'Hukuk (Burslu)',
    slug: 'hukuk-burslu',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 498.50, siralama: 2180, kontenjan: 5, yerlesen: 5 },
      { yil: 2023, puan: 494.10, siralama: 2350, kontenjan: 5, yerlesen: 5 },
      { yil: 2022, puan: 489.20, siralama: 2520, kontenjan: 5, yerlesen: 5 },
    ],
  },

  // ═══════════════════════════════════════
  // SABANCI ÜNİVERSİTESİ
  // ═══════════════════════════════════════
  {
    id: 34,
    universiteSlug: 'sabanci',
    fakulte: 'Mühendislik ve Doğa Bilimleri Fakültesi',
    bolumAdi: 'Bilgisayar Bilimi ve Mühendisliği (Burslu)',
    slug: 'bilgisayar-bilimi-burslu',
    puanTuru: 'SAY',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 549.60, siralama: 520, kontenjan: 5, yerlesen: 5 },
      { yil: 2023, puan: 544.30, siralama: 620, kontenjan: 5, yerlesen: 5 },
      { yil: 2022, puan: 538.90, siralama: 720, kontenjan: 5, yerlesen: 5 },
    ],
  },
  {
    id: 35,
    universiteSlug: 'sabanci',
    fakulte: 'Yönetim Bilimleri Fakültesi',
    bolumAdi: 'İşletme (İngilizce) (Burslu)',
    slug: 'isletme-burslu',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 510.30, siralama: 1250, kontenjan: 5, yerlesen: 5 },
      { yil: 2023, puan: 505.80, siralama: 1350, kontenjan: 5, yerlesen: 5 },
      { yil: 2022, puan: 500.40, siralama: 1450, kontenjan: 5, yerlesen: 5 },
    ],
  },

  // ═══════════════════════════════════════
  // ANKARA ÜNİVERSİTESİ
  // ═══════════════════════════════════════
  {
    id: 36,
    universiteSlug: 'ankara-universitesi',
    fakulte: 'Tıp Fakültesi',
    bolumAdi: 'Tıp',
    slug: 'tip',
    puanTuru: 'SAY',
    sure: 6,
    puanlar: [
      { yil: 2024, puan: 549.80, siralama: 490, kontenjan: 400, yerlesen: 400 },
      { yil: 2023, puan: 544.20, siralama: 580, kontenjan: 400, yerlesen: 400 },
      { yil: 2022, puan: 538.60, siralama: 680, kontenjan: 400, yerlesen: 400 },
    ],
  },
  {
    id: 37,
    universiteSlug: 'ankara-universitesi',
    fakulte: 'Hukuk Fakültesi',
    bolumAdi: 'Hukuk',
    slug: 'hukuk',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 470.20, siralama: 7500, kontenjan: 350, yerlesen: 350 },
      { yil: 2023, puan: 465.80, siralama: 8100, kontenjan: 350, yerlesen: 350 },
      { yil: 2022, puan: 460.30, siralama: 8700, kontenjan: 350, yerlesen: 350 },
    ],
  },
  {
    id: 38,
    universiteSlug: 'ankara-universitesi',
    fakulte: 'Siyasal Bilgiler Fakültesi',
    bolumAdi: 'Uluslararası İlişkiler',
    slug: 'uluslararasi-iliskiler',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 455.60, siralama: 9800, kontenjan: 180, yerlesen: 180 },
      { yil: 2023, puan: 450.20, siralama: 10500, kontenjan: 180, yerlesen: 180 },
      { yil: 2022, puan: 445.80, siralama: 11200, kontenjan: 180, yerlesen: 180 },
    ],
  },

  // ═══════════════════════════════════════
  // İSTANBUL ÜNİVERSİTESİ
  // ═══════════════════════════════════════
  {
    id: 39,
    universiteSlug: 'istanbul-universitesi',
    fakulte: 'İstanbul Tıp Fakültesi',
    bolumAdi: 'Tıp',
    slug: 'tip',
    puanTuru: 'SAY',
    sure: 6,
    puanlar: [
      { yil: 2024, puan: 545.60, siralama: 720, kontenjan: 450, yerlesen: 450 },
      { yil: 2023, puan: 540.30, siralama: 820, kontenjan: 450, yerlesen: 450 },
      { yil: 2022, puan: 534.80, siralama: 950, kontenjan: 450, yerlesen: 450 },
    ],
  },
  {
    id: 40,
    universiteSlug: 'istanbul-universitesi',
    fakulte: 'Hukuk Fakültesi',
    bolumAdi: 'Hukuk',
    slug: 'hukuk',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 468.30, siralama: 7800, kontenjan: 400, yerlesen: 400 },
      { yil: 2023, puan: 463.90, siralama: 8400, kontenjan: 400, yerlesen: 400 },
      { yil: 2022, puan: 458.60, siralama: 9000, kontenjan: 400, yerlesen: 400 },
    ],
  },
  {
    id: 41,
    universiteSlug: 'istanbul-universitesi',
    fakulte: 'İşletme Fakültesi',
    bolumAdi: 'İşletme',
    slug: 'isletme',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 425.80, siralama: 15200, kontenjan: 250, yerlesen: 250 },
      { yil: 2023, puan: 420.60, siralama: 16100, kontenjan: 250, yerlesen: 250 },
      { yil: 2022, puan: 415.30, siralama: 17000, kontenjan: 250, yerlesen: 250 },
    ],
  },

  // ═══════════════════════════════════════
  // MARMARA ÜNİVERSİTESİ
  // ═══════════════════════════════════════
  {
    id: 42,
    universiteSlug: 'marmara',
    fakulte: 'Tıp Fakültesi',
    bolumAdi: 'Tıp (İngilizce)',
    slug: 'tip-ingilizce',
    puanTuru: 'SAY',
    sure: 6,
    puanlar: [
      { yil: 2024, puan: 553.20, siralama: 280, kontenjan: 100, yerlesen: 100 },
      { yil: 2023, puan: 548.60, siralama: 340, kontenjan: 100, yerlesen: 100 },
      { yil: 2022, puan: 542.90, siralama: 410, kontenjan: 100, yerlesen: 100 },
    ],
  },
  {
    id: 43,
    universiteSlug: 'marmara',
    fakulte: 'Hukuk Fakültesi',
    bolumAdi: 'Hukuk',
    slug: 'hukuk',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 466.80, siralama: 7900, kontenjan: 380, yerlesen: 380 },
      { yil: 2023, puan: 462.30, siralama: 8500, kontenjan: 380, yerlesen: 380 },
      { yil: 2022, puan: 457.10, siralama: 9100, kontenjan: 380, yerlesen: 380 },
    ],
  },
  {
    id: 44,
    universiteSlug: 'marmara',
    fakulte: 'İktisat Fakültesi',
    bolumAdi: 'İktisat',
    slug: 'iktisat',
    puanTuru: 'EA',
    sure: 4,
    puanlar: [
      { yil: 2024, puan: 415.20, siralama: 18500, kontenjan: 200, yerlesen: 200 },
      { yil: 2023, puan: 410.60, siralama: 19500, kontenjan: 200, yerlesen: 200 },
      { yil: 2022, puan: 405.30, siralama: 20500, kontenjan: 200, yerlesen: 200 },
    ],
  },
]

// Yardımcı fonksiyonlar
export function getBolumlerByUniversite(universiteSlug: string): Bolum[] {
  return bolumler.filter(b => b.universiteSlug === universiteSlug)
}

export function getBolum(universiteSlug: string, bolumSlug: string): Bolum | undefined {
  return bolumler.find(b => b.universiteSlug === universiteSlug && b.slug === bolumSlug)
}

export function getFakulteler(universiteSlug: string): string[] {
  const uniBolumleri = getBolumlerByUniversite(universiteSlug)
  return Array.from(new Set(uniBolumleri.map(b => b.fakulte)))
}

export function puanTuruRengi(puanTuru: string): string {
  switch(puanTuru) {
    case 'SAY': return 'bg-blue-100 text-blue-700'
    case 'EA': return 'bg-green-100 text-green-700'
    case 'SÖZ': return 'bg-purple-100 text-purple-700'
    case 'DİL': return 'bg-pink-100 text-pink-700'
    case 'TYT': return 'bg-yellow-100 text-yellow-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}
