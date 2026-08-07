export interface Istatistik {
  ortalama: string
  cikmaOrani: number
  onem: 'ÇOK YÜKSEK' | 'YÜKSEK' | 'ORTA' | 'DÜŞÜK'
  onemColor: string
  onemBg: string
  zorluk: 'Kolay' | 'Orta' | 'Zor'
  yillikVeri: { yil: number; soru: number }[]
  aciklama: string
}

export const konuIstatistikleri: { [key: string]: Istatistik } = {
  'sayisal-matematik-fonksiyonlar': {
    ortalama: '2-3',
    cikmaOrani: 100,
    onem: 'ÇOK YÜKSEK',
    onemColor: 'text-red-700',
    onemBg: 'bg-red-100',
    zorluk: 'Orta',
    yillikVeri: [
      { yil: 2020, soru: 3 },
      { yil: 2021, soru: 2 },
      { yil: 2022, soru: 3 },
      { yil: 2023, soru: 3 },
      { yil: 2024, soru: 2 },
    ],
    aciklama: 'Her yıl mutlaka gelen temel konu. Diğer matematik konularının temeli.',
  },
  'sayisal-matematik-turev': {
    ortalama: '2-3',
    cikmaOrani: 100,
    onem: 'ÇOK YÜKSEK',
    onemColor: 'text-red-700',
    onemBg: 'bg-red-100',
    zorluk: 'Orta',
    yillikVeri: [
      { yil: 2020, soru: 2 },
      { yil: 2021, soru: 3 },
      { yil: 2022, soru: 2 },
      { yil: 2023, soru: 3 },
      { yil: 2024, soru: 3 },
    ],
    aciklama: 'AYT\'nin en popüler konularından. Her yıl mutlaka soru gelir.',
  },
  'sayisal-matematik-integral': {
    ortalama: '2-3',
    cikmaOrani: 100,
    onem: 'ÇOK YÜKSEK',
    onemColor: 'text-red-700',
    onemBg: 'bg-red-100',
    zorluk: 'Zor',
    yillikVeri: [
      { yil: 2020, soru: 2 },
      { yil: 2021, soru: 3 },
      { yil: 2022, soru: 3 },
      { yil: 2023, soru: 2 },
      { yil: 2024, soru: 3 },
    ],
    aciklama: 'Türev ile birlikte AYT matematiğin belkemiği. Alan hesabı önemli.',
  },
  'sayisal-fizik-vektorler': {
    ortalama: '1-2',
    cikmaOrani: 85,
    onem: 'YÜKSEK',
    onemColor: 'text-orange-700',
    onemBg: 'bg-orange-100',
    zorluk: 'Kolay',
    yillikVeri: [
      { yil: 2020, soru: 1 },
      { yil: 2021, soru: 2 },
      { yil: 2022, soru: 1 },
      { yil: 2023, soru: 2 },
      { yil: 2024, soru: 1 },
    ],
    aciklama: 'Fiziğin temel konusu. Kuvvet ve hareket konularında da kullanılır.',
  },
  'sayisal-fizik-kuvvet-hareket': {
    ortalama: '2-3',
    cikmaOrani: 100,
    onem: 'ÇOK YÜKSEK',
    onemColor: 'text-red-700',
    onemBg: 'bg-red-100',
    zorluk: 'Orta',
    yillikVeri: [
      { yil: 2020, soru: 3 },
      { yil: 2021, soru: 2 },
      { yil: 2022, soru: 3 },
      { yil: 2023, soru: 3 },
      { yil: 2024, soru: 2 },
    ],
    aciklama: 'Fiziğin en önemli konusu. Newton yasaları ve dinamik burada.',
  },
  'sayisal-fizik-enerji': {
    ortalama: '2',
    cikmaOrani: 95,
    onem: 'YÜKSEK',
    onemColor: 'text-orange-700',
    onemBg: 'bg-orange-100',
    zorluk: 'Orta',
    yillikVeri: [
      { yil: 2020, soru: 2 },
      { yil: 2021, soru: 2 },
      { yil: 2022, soru: 1 },
      { yil: 2023, soru: 2 },
      { yil: 2024, soru: 2 },
    ],
    aciklama: 'İş, enerji ve güç konuları. Formül ezberi önemli.',
  },
  'sayisal-kimya-atom-yapisi': {
    ortalama: '1-2',
    cikmaOrani: 90,
    onem: 'YÜKSEK',
    onemColor: 'text-orange-700',
    onemBg: 'bg-orange-100',
    zorluk: 'Kolay',
    yillikVeri: [
      { yil: 2020, soru: 2 },
      { yil: 2021, soru: 1 },
      { yil: 2022, soru: 2 },
      { yil: 2023, soru: 1 },
      { yil: 2024, soru: 2 },
    ],
    aciklama: 'Kimyanın temeli. Atom modelleri ve elektron dağılımı önemli.',
  },
  'sayisal-kimya-periyodik-sistem': {
    ortalama: '1-2',
    cikmaOrani: 85,
    onem: 'YÜKSEK',
    onemColor: 'text-orange-700',
    onemBg: 'bg-orange-100',
    zorluk: 'Kolay',
    yillikVeri: [
      { yil: 2020, soru: 1 },
      { yil: 2021, soru: 2 },
      { yil: 2022, soru: 1 },
      { yil: 2023, soru: 2 },
      { yil: 2024, soru: 1 },
    ],
    aciklama: 'Elementlerin özellikleri. Grup ve periyot bilgisi şart.',
  },
  'sayisal-kimya-kimyasal-baglar': {
    ortalama: '1-2',
    cikmaOrani: 90,
    onem: 'YÜKSEK',
    onemColor: 'text-orange-700',
    onemBg: 'bg-orange-100',
    zorluk: 'Orta',
    yillikVeri: [
      { yil: 2020, soru: 2 },
      { yil: 2021, soru: 1 },
      { yil: 2022, soru: 2 },
      { yil: 2023, soru: 2 },
      { yil: 2024, soru: 1 },
    ],
    aciklama: 'İyonik, kovalent ve metalik bağlar. Molekül şekilleri.',
  },
}

export function getIstatistik(key: string): Istatistik | null {
  return konuIstatistikleri[key] || null
}
