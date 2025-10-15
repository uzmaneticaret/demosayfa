'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Heart, Flame, Star, Users, MessageCircle, Camera } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-pink-600 to-purple-600">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6 gap-4">
              <Flame className="h-12 w-12 text-yellow-300 animate-pulse" />
              <Users className="h-12 w-12 text-white animate-pulse" />
              <Flame className="h-12 w-12 text-yellow-300 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                Erkek Erkeğe Özel Anlar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Tutkulu ve sınırsız anlar için buradayız 🔥💋
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white border-2 border-white/30 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Flame className="mr-2 h-5 w-5" />
                Hemen Ara
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-pink-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <MessageCircle className="mr-2 h-5 w-5" />
                Mesaj Gönder
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="flex items-center justify-center gap-2">
              <Star className="h-8 w-8 text-yellow-300" />
              Yakışıklı Partnerler
              <Star className="h-8 w-8 text-yellow-300" />
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border-2 border-white/20">
              <CardContent className="p-8 text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-400 rounded-full animate-pulse"></div>
                  <img
                    src="https://z-cdn-media.chatglm.cn/files/31be8a75-f611-498a-9e6c-4cd64fa4880f_rara.jpeg?auth_key=1792079869-ddb1a02f347d4bda90625b531b125c82-0-30f430e200dec111bf005687f19a4bac"
                    alt="Rami - Aktif Partner"
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 animate-bounce">
                    <Flame className="h-4 w-4" />
                  </div>
                  <div className="absolute -bottom-2 left-2 bg-purple-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                    HOT
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Rami
                </h3>
                <p className="text-lg text-pink-200 mb-2 font-semibold">
                  Aktif & Dominant
                </p>
                <p className="text-white/80 mb-4">
                  Dış mekanlarda ateşli anlar 💪🔥
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="bg-red-500/20 text-red-200 px-3 py-1 rounded-full text-xs">25 yaş</span>
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-xs">Atletik</span>
                  <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs">Aktif</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-pink-600 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Phone className="h-4 w-4" />
                  <span>+905428273347</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border-2 border-white/20">
              <CardContent className="p-8 text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-400 rounded-full animate-pulse"></div>
                  <img
                    src="https://z-cdn-media.chatglm.cn/files/b99a4b10-a47a-4a6c-956c-d92f46cfea24_rrr.jpeg?auth_key=1792079869-27ea88d1c07e477fa785df45e5e28546-0-33f342291d618ebc2b4c497056285595"
                    alt="Reso - Pasif Partner"
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 animate-bounce">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div className="absolute -bottom-2 left-2 bg-purple-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                    NEW
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Reso
                </h3>
                <p className="text-lg text-yellow-200 mb-2 font-semibold">
                  Pasif & Tatlı
                </p>
                <p className="text-white/80 mb-4">
                  Gizli anlar ve özel heyecanlar 💕
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="bg-red-500/20 text-red-200 px-3 py-1 rounded-full text-xs">23 yaş</span>
                  <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-xs">Tatlı</span>
                  <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs">Pasif</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-600 to-red-600 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Phone className="h-4 w-4" />
                  <span>+905465382252</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="flex items-center justify-center gap-2">
              <Camera className="h-8 w-8 text-yellow-300" />
              Özel Hizmetler
              <Camera className="h-8 w-8 text-yellow-300" />
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/10 backdrop-blur-md border-2 border-white/20">
              <Users className="h-12 w-12 text-red-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Grup Randevuları
              </h3>
              <p className="text-white/80 text-sm">
                Çoklu partnerlerle grup anları 🔥
              </p>
            </Card>
            <Card className="text-center p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/10 backdrop-blur-md border-2 border-white/20">
              <Camera className="h-12 w-12 text-pink-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Fotoğraf Çekimi
              </h3>
              <p className="text-white/80 text-sm">
                Özel fotoğraf seansları ve videolar 📸
              </p>
            </Card>
            <Card className="text-center p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/10 backdrop-blur-md border-2 border-white/20">
              <MessageCircle className="h-12 w-12 text-purple-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Online Sohbet
              </h3>
              <p className="text-white/80 text-sm">
                Gizli online görüşmeler 💬
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-md rounded-3xl p-12 border-2 border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="flex items-center justify-center gap-3">
                <Flame className="h-8 w-8 text-red-400 animate-pulse" />
                Sınırsız Anlar İçin Hemen Ara
                <Flame className="h-8 w-8 text-red-400 animate-pulse" />
              </span>
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Gizlilik ve kalite garantisiyle unutulmaz anılar 💕🔥
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white border-2 border-white/30 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-pink-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-900/50 to-pink-900/50 backdrop-blur-md text-white py-8 border-t border-white/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 mb-4">
            © 2024 Erkek Erkeğe Özel. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-white/60">
            Gizlilik önceliğimizdir 💕 24/7 Ulaşılabilir
          </p>
        </div>
      </footer>
    </div>
  )
}