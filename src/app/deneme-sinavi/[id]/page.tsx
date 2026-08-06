'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Clock, ChevronLeft, ChevronRight, Flag, CheckCircle2, AlertTriangle, X, Home } from 'lucide-react'

// Örnek sorular (gerçek uygulamada Supabase'den gelecek)
const sampleQuestions = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  question: `Soru ${i + 1}: Bu bir örnek sorudur. Gerçek sınav soruları eklenecektir.`,
  options: [
    { letter: 'A', text: 'Seçenek A metni burada yer alır' },
    { letter: 'B', text: 'Seçenek B metni burada yer alır' },
    { letter: 'C', text: 'Seçenek C metni burada yer alır' },
    { letter: 'D', text: 'Seçenek D metni burada yer alır' },
    { letter: 'E', text: 'Seçenek E metni burada yer alır' },
  ],
  correctAnswer: 'A',
  subject: ['Türkçe', 'Matematik', 'Fen', 'Sosyal'][Math.floor(i / 10)],
}))

export default function DenemePage() {
  const params = useParams()
  const denemeId = params.id as string

  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [markedQuestions, setMarkedQuestions] = useState<Set<number>>(new Set())
  const [timeLeft, setTimeLeft] = useState(40 * 60) // 40 dakika
  const [showResult, setShowResult] = useState(false)
  const [showConfirmFinish, setShowConfirmFinish] = useState(false)

  useEffect(() => {
    if (started && !showResult) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setShowResult(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [started, showResult])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleAnswer = (letter: string) => {
    setAnswers({ ...answers, [currentQuestion]: letter })
  }

  const toggleMark = () => {
    const newMarked = new Set(markedQuestions)
    if (newMarked.has(currentQuestion)) {
      newMarked.delete(currentQuestion)
    } else {
      newMarked.add(currentQuestion)
    }
    setMarkedQuestions(newMarked)
  }

  const calculateResults = () => {
    let correct = 0
    let wrong = 0
    let empty = 0

    sampleQuestions.forEach((q, i) => {
      if (!answers[i]) empty++
      else if (answers[i] === q.correctAnswer) correct++
      else wrong++
    })

    const net = correct - wrong / 4
    const puan = Math.max(0, Math.round((net * 3.3 + 100) * 10) / 10)

    return { correct, wrong, empty, net: net.toFixed(2), puan }
  }

  // Başlangıç Ekranı
  if (!started) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-primary-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Deneme Sınavına Hoş Geldin!
              </h1>
              <p className="text-gray-600">
                Sınavı başlatmadan önce lütfen aşağıdaki bilgileri oku.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-900 mb-1">📋 Sınav Kuralları</h3>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Toplam 40 soru, 40 dakika süre</li>
                  <li>Her yanlış cevap 1/4 doğruyu götürür</li>
                  <li>Süre bitince sınav otomatik biter</li>
                  <li>Soruları işaretleyebilir, geri dönebilirsin</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-yellow-900 mb-1">⚠️ Dikkat</h3>
                <p className="text-sm text-yellow-800">
                  Başladıktan sonra süre işlemeye başlar. Sekmeyi kapatırsan sınav sıfırlanır.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-1">✨ İpuçları</h3>
                <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                  <li>Emin olmadığın soruları işaretle, sonra dön</li>
                  <li>Zamanı iyi yönet, her soruya ~1 dakika</li>
                  <li>Boş bırakmak, yanlış yapmaktan iyidir</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <Link 
                href="/deneme-sinavi"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold text-center transition-colors"
              >
                Geri Dön
              </Link>
              <button
                onClick={() => setStarted(true)}
                className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
              >
                🚀 Sınavı Başlat
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Sonuç Ekranı
  if (showResult) {
    const results = calculateResults()
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Sınav Tamamlandı! 🎉
              </h1>
              <p className="text-gray-600">İşte detaylı sonuçların</p>
            </div>

            {/* Puan Kartı */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-8 mb-8 text-center">
              <p className="text-primary-100 mb-2">Tahmini TYT Puanın</p>
              <div className="text-6xl font-bold mb-2">{results.puan}</div>
              <p className="text-sm text-primary-200">
                * Bu tahmini bir hesaplamadır
              </p>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-600">{results.correct}</div>
                <div className="text-sm text-green-700 mt-1">Doğru</div>
              </div>
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-red-600">{results.wrong}</div>
                <div className="text-sm text-red-700 mt-1">Yanlış</div>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-gray-600">{results.empty}</div>
                <div className="text-sm text-gray-700 mt-1">Boş</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">{results.net}</div>
                <div className="text-sm text-blue-700 mt-1">Net</div>
              </div>
            </div>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/deneme-sinavi"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold text-center transition-colors"
              >
                Yeni Deneme
              </Link>
              <Link 
                href="/"
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold text-center transition-colors"
              >
                Ana Sayfa
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Sınav Ekranı
  const question = sampleQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Üst Bar - Zamanlayıcı */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                <Home className="w-5 h-5" />
              </Link>
              <div className="text-sm text-gray-600">
                Soru <span className="font-bold text-gray-900">{currentQuestion + 1}</span> / {sampleQuestions.length}
              </div>
            </div>

            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold ${
              timeLeft < 300 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-primary-100 text-primary-700'
            }`}>
              <Clock className="w-5 h-5" />
              <span className="text-lg">{formatTime(timeLeft)}</span>
            </div>

            <button
              onClick={() => setShowConfirmFinish(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Sınavı Bitir
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sol: Soru Alanı */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              {/* Ders Etiketi */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {question.subject}
                </span>
                <button
                  onClick={toggleMark}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    markedQuestions.has(currentQuestion)
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Flag className="w-3 h-3" />
                  {markedQuestions.has(currentQuestion) ? 'İşaretli' : 'İşaretle'}
                </button>
              </div>

              {/* Soru */}
              <div className="mb-6">
                <p className="text-lg text-gray-900 leading-relaxed">
                  {question.question}
                </p>
              </div>

              {/* Seçenekler */}
              <div className="space-y-3 mb-6">
                {question.options.map((option) => (
                  <button
                    key={option.letter}
                    onClick={() => handleAnswer(option.letter)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      answers[currentQuestion] === option.letter
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                        answers[currentQuestion] === option.letter
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {option.letter}
                      </div>
                      <span className="text-gray-700 pt-1">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigasyon */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Önceki
                </button>

                <div className="text-sm text-gray-500">
                  {Object.keys(answers).length} / {sampleQuestions.length} cevaplandı
                </div>

                <button
                  onClick={() => setCurrentQuestion(Math.min(sampleQuestions.length - 1, currentQuestion + 1))}
                  disabled={currentQuestion === sampleQuestions.length - 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Sonraki
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sağ: Soru Haritası */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-4 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Soru Haritası</h3>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {sampleQuestions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentQuestion(i)}
                    className={`aspect-square rounded-lg text-xs font-semibold transition-all ${
                      i === currentQuestion
                        ? 'bg-primary-600 text-white ring-2 ring-primary-300 ring-offset-1'
                        : answers[i]
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : markedQuestions.has(i)
                        ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-600 rounded"></div>
                  <span className="text-gray-600">Aktif</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-100 rounded"></div>
                  <span className="text-gray-600">Cevaplandı</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-100 rounded"></div>
                  <span className="text-gray-600">İşaretli</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-100 rounded"></div>
                  <span className="text-gray-600">Boş</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bitirme Onayı Modal */}
      {showConfirmFinish && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              <h3 className="text-xl font-bold text-gray-900">Sınavı Bitirmek İstiyor Musun?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              {sampleQuestions.length - Object.keys(answers).length} soru boş kaldı. 
              Bitirdikten sonra geri dönemezsin.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmFinish(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold"
              >
                Devam Et
              </button>
              <button
                onClick={() => {
                  setShowConfirmFinish(false)
                  setShowResult(true)
                }}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
              >
                Bitir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
