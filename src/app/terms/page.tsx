import { Card, CardContent } from '@/components/ui/card'
import { FileText, AlertCircle, CheckCircle, Clock, Shield, Users } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
            Syarat & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Ketentuan</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ketentuan penggunaan layanan catering CV BERKAH ANUGRA CATERING
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Pengantar</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di CV BERKAH ANUGRA CATERING. Syarat dan Ketentuan ini mengatur penggunaan 
                layanan catering yang kami sediakan. Dengan menggunakan layanan kami, Anda menyetujui 
                untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Harap baca dengan seksama sebelum melakukan pemesanan. Jika Anda tidak setuju dengan 
                bagian mana pun dari syarat dan ketentuan ini, jangan menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Layanan Kami</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Jenis Layanan</h3>
                  <p className="text-gray-700 mb-3">
                    CV BERKAH ANUGRA CATERING menyediakan layanan:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Catering untuk acara pernikahan</li>
                    <li>Catering untuk acara korporat (meeting, seminar, gathering)</li>
                    <li>Catering untuk acara keluarga (ulang tahun, arisan, reuni)</li>
                    <li>Catering untuk acara khusus (sunatan, selamatan, dll)</li>
                    <li>Menu Nasi Tumpeng</li>
                    <li>Snack Box dan Coffee Break</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Area Layanan</h3>
                  <p className="text-gray-700">
                    Kami melayani area Nganjuk dan sekitarnya. Untuk area di luar jangkauan kami, 
                    silakan hubungi untuk diskusi lebih lanjut.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ordering Process */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Proses Pemesanan</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">1. Konsultasi & Pemilihan Menu</h3>
                  <p className="text-gray-700">
                    Hubungi kami untuk konsultasi kebutuhan catering Anda. Pilih menu yang sesuai 
                    dengan budget dan preferensi Anda.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">2. Konfirmasi & DP</h3>
                  <p className="text-gray-700">
                    Setelah deal, konfirmasi pemesanan dengan membayar uang muka minimal 50% dari total biaya.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">3. Persiapan</h3>
                  <p className="text-gray-700">
                    Kami akan mempersiapkan segala kebutuhan sesuai dengan pesanan Anda.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">4. Pelaksanaan</h3>
                  <p className="text-gray-700">
                    Tim kami akan datang tepat waktu untuk menyiapkan dan melayani catering di lokasi acara.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">5. Pelunasan</h3>
                  <p className="text-gray-700">
                    Pelunasan dilakukan pada saat acara berakhir atau sesuai kesepakatan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Syarat Pembayaran</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Uang Muka (DP)</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Minimal 50% dari total biaya</li>
                    <li>Dibayarkan saat konfirmasi pemesanan</li>
                    <li>DP tidak dapat dikembalikan jika pembatalan dari pihak klien</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pelunasan</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Dilunasi saat acara berakhir</li>
                    <li>Bisa juga dilakukan H-1 sebelum acara</li>
                    <li>Dapat dilakukan via transfer atau tunai</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Metode Pembayaran</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Transfer Bank (BCA, BRI, Mandiri)</li>
                    <li>Tunai</li>
                    <li>E-Wallet (OVO, GoPay, DANA)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation Policy */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Kebijakan Pembatalan</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Pembatalan dari Pihak Klien:</h3>
                  <ul className="list-disc list-inside text-red-700 space-y-1">
                    <li><strong>H-7 atau lebih:</strong> DP dikembalikan 50%</li>
                    <li><strong>H-3 sampai H-6:</strong> DP dikembalikan 25%</li>
                    <li><strong>H-1 atau H-day:</strong> DP hangus (tidak dikembalikan)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Pembatalan dari Pihak Kami:</h3>
                  <ul className="list-disc list-inside text-yellow-700 space-y-1">
                    <li>DP 100% dikembalikan</li>
                    <li>Memberikan alternatif tanggal jika memungkinkan</li>
                    <li>Membantu mencari vendor pengganti jika diperlukan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kewajiban Klien</h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Informasi Akurat</h3>
                  <p className="text-blue-700">
                    Memberikan informasi yang akurat mengenai tanggal, waktu, lokasi, dan jumlah tamu.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Fasilitas Pendukung</h3>
                  <p className="text-blue-700">
                    Menyediakan fasilitas pendukung seperti meja, listrik, dan area yang memadai untuk tim catering.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Keamanan</h3>
                  <p className="text-blue-700">
                    Menjamin keamanan tim dan peralatan catering selama acara berlangsung.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Konfirmasi Final</h3>
                  <p className="text-blue-700">
                    Melakukan konfirmasi final jumlah tamu H-2 sebelum acara.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Responsibilities */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Kewajiban Kami</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Kualitas Makanan</h3>
                  <p className="text-green-700">
                    Menyediakan makanan yang berkualitas, halal, dan higienis sesuai standar kami.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Pelayanan Profesional</h3>
                  <p className="text-green-700">
                    Memberikan pelayanan yang ramah, profesional, dan tepat waktu.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Peralatan Memadai</h3>
                  <p className="text-green-700">
                    Menyediakan peralatan catering yang bersih dan memadai sesuai pesanan.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Tim Berpengalaman</h3>
                  <p className="text-green-700">
                    Menugaskan tim yang berpengalaman dan terlatih untuk setiap acara.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Batasan Tanggung Jawab</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  CV BERKAH ANUGRA CATERING tidak bertanggung jawab atas:
                </p>
                
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Kerusakan atau kehilangan barang pribadi klien selama acara</li>
                  <li>Acara yang dibatalkan karena force majeure (bencana alam, kerusuhan, dll)</li>
                  <li>Konsumsi makanan yang melebihi kapasitas yang dipesan</li>
                  <li>Alergi atau reaksi medis terhadap makanan yang telah diinformasikan sebelumnya</li>
                  <li>Keterlambatan akibat kemacetan lalu lintas yang ekstrem</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <p className="text-yellow-800">
                    <strong>Catatan:</strong> Kami selalu berusaha memberikan pelayanan terbaik dan 
                    akan bertanggung jawab atas kesalahan yang disebabkan oleh pihak kami.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Semua konten di website ini termasuk teks, gambar, logo, dan desain adalah 
                milik CV BERKAH ANUGRA CATERING dan dilindungi oleh hukum hak cipta. 
                Dilarang menyalin, mendistribusikan, atau menggunakan konten tanpa izin tertulis.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Syarat & Ketentuan</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan 
                berlaku efektif setelah dipublikasikan di website ini. Penggunaan layanan 
                yang berkelanjutan setelah perubahan berarti Anda menyetujui syarat dan ketentuan yang baru.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="p-8 bg-gradient-to-r from-orange-50 to-red-50">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hubungi Kami</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@berkahanugrahcatering.com</p>
                <p><strong>Telepon:</strong> 0852-8570-3515</p>
                <p><strong>Alamat:</strong> Jl. Mastr I Nomor 09, Ganung Kidul, Nganjuk, Jawa Timur</p>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="p-8">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hukum yang Berlaku</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                Republik Indonesia. Setiap sengketa akan diselesaikan secara musyawarah 
                terlebih dahulu, dan jika tidak达成 kesepakatan, akan diselesaikan melalui 
                pengadilan yang berwenang di Nganjuk.
              </p>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-gray-600 pt-8 border-t">
            <p>Syarat & Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
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