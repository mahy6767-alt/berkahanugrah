import { Card, CardContent } from '@/components/ui/card'
import { Shield, Eye, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-gray-900">CV BERKAH ANUGRA CATERING</span>
            </Link>
            <Link href="/" className="text-orange-600 hover:text-orange-700">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Privasi</span>
          </h1>
          <p className="text-xl text-gray-600">
            Kami menjaga privasi dan keamanan data pelanggan dengan serius
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Pengantar</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Di CV BERKAH ANUGRA CATERING, kami memahami bahwa privasi Anda adalah hal yang penting. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
                dan membagikan informasi pribadi Anda saat menggunakan layanan catering kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan kami, Anda setuju dengan praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Informasi yang Kami Kumpulkan</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon</li>
                    <li>Alamat email</li>
                    <li>Alamat lengkap pengiriman</li>
                    <li>Informasi acara (tanggal, jenis, jumlah tamu)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Transaksi</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Detail pesanan catering</li>
                    <li>Informasi pembayaran</li>
                    <li>Riwayat pesanan sebelumnya</li>
                    <li>Preferensi menu dan diet khusus</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Waktu akses website</li>
                    <li>Halaman yang dikunjungi</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Cara Kami Menggunakan Informasi</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Untuk Menyediakan Layanan</h3>
                  <p className="text-gray-700">
                    Memproses pesanan catering Anda, mengatur pengiriman, dan memberikan layanan pelanggan.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Untuk Komunikasi</h3>
                  <p className="text-gray-700">
                    Mengirim konfirmasi pesanan, update pengiriman, dan informasi penting terkait layanan.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Untuk Peningkatan Layanan</h3>
                  <p className="text-gray-700">
                    Menganalisis kebutuhan pelanggan untuk meningkatkan kualitas menu dan layanan kami.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Untuk Keamanan</h3>
                  <p className="text-gray-700">
                    Melindungi dari penipuan dan memastikan keamanan transaksi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Keamanan Data</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menerapkan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas kepada informasi pribadi</li>
                <li>Server aman dengan firewall</li>
                <li>Update keamanan berkala</li>
                <li>Training staf tentang keamanan data</li>
              </ul>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-6">
                <p className="text-green-800">
                  <strong>Komitmen Kami:</strong> Kami tidak akan pernah menjual, menyewakan, atau membagikan 
                  informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Anda</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hak Akses</h3>
                  <p className="text-gray-700">
                    Anda berhak mengetahui informasi pribadi yang kami simpan tentang Anda.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hak Koreksi</h3>
                  <p className="text-gray-700">
                    Anda dapat memperbarui atau mengkoreksi informasi pribadi yang tidak akurat.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hak Penghapusan</h3>
                  <p className="text-gray-700">
                    Anda dapat meminta penghapusan informasi pribadi Anda dari sistem kami.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hak Pembatasan</h3>
                  <p className="text-gray-700">
                    Anda dapat membatasi cara kami menggunakan informasi pribadi Anda.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kebijakan Cookies</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file teks kecil 
                yang disimpan di browser Anda. Kami menggunakan:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                <li><strong>Cookies Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                <li><strong>Cookies Fungsional:</strong> Mengingat preferensi Anda</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="p-8 bg-gradient-to-r from-orange-50 to-red-50">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hubungi Kami</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau cara kami menangani informasi pribadi Anda, 
                silakan hubungi kami:
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@berkahanugrahcatering.com</p>
                <p><strong>Telepon:</strong> 0852-8570-3515</p>
                <p><strong>Alamat:</strong> Jl. Mastr I Nomor 09, Ganung Kidul, Nganjuk, Jawa Timur</p>
              </div>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-gray-600 pt-8 border-t">
            <p>Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}</p>
          </div>
        </div>
      </main>
    </div>
  )
}