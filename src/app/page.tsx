'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  Utensils,
  Star,
  CheckCircle,
  Calendar,
  ChefHat,
  Award,
  Instagram,
  Facebook,
  ChevronRight
} from 'lucide-react'

export default function BerkahAnugrahCatering() {
  const [activeService, setActiveService] = useState('wedding')

  const services = [
    {
      id: 'wedding',
      title: 'Pernikahan',
      description: 'Paket lengkap untuk hari spesial Anda dengan menu mewah dan presentasi elegan',
      icon: <Heart className="w-8 h-8" />,
      features: ['Menu Premium', 'Dekorasi Mewah', 'Pelayanan Prima', 'Free Tasting Session']
    },
    {
      id: 'corporate',
      title: 'Korporat',
      description: 'Solusi catering profesional untuk meeting, seminar, dan acara bisnis',
      icon: <Users className="w-8 h-8" />,
      features: ['Menu Business', 'Paket Hemat', 'Delivery On-Time', 'Custom Menu']
    },
    {
      id: 'family',
      title: 'Family Gathering',
      description: 'Hangat dan kekeluargaan untuk acara keluarga, arisan, dan reuni',
      icon: <HomeIcon className="w-8 h-8" />,
      features: ['Menu Rumahan', 'Porsi Melimpah', 'Harga Terjangkau', 'Free Delivery']
    },
    {
      id: 'special',
      title: 'Event Khusus',
      description: 'Catering untuk ulang tahun, sunatan, dan acara special lainnya',
      icon: <Calendar className="w-8 h-8" />,
      features: ['Theme Party', 'Custom Decoration', 'Entertainment Package', 'Photo Booth']
    }
  ]

  const menuCategories = [
    {
      name: 'Nasi Tumpeng',
      description: 'Nasi tumpeng komplit dengan lauk pauk tradisional',
      price: 'Mulai Rp 500.000'
    },
    {
      name: 'Prasmanan',
      description: 'Menu prasmanan variatif dengan pilihan internasional dan tradisional',
      price: 'Mulai Rp 75.000/porsi'
    },
    {
      name: 'Snack Box',
      description: 'Aneka snack box untuk meeting dan acara informal',
      price: 'Mulai Rp 25.000/box'
    },
    {
      name: 'Coffee Break',
      description: 'Paket coffee break dengan kue dan minuman variatif',
      price: 'Mulai Rp 35.000/pax'
    }
  ]

  const testimonials = [
    {
      name: 'Budi Santoso',
      event: 'Pernikahan',
      comment: 'Makanan enak, pelayanan memuaskan. Tamu-tamu kami sangat puas dengan hidangan dari Berkah Anugrah Catering.',
      rating: 5
    },
    {
      name: 'Siti Nurhaliza',
      event: 'Meeting Kantor',
      comment: 'Profesional dan tepat waktu. Menu yang disajikan sesuai dengan budget dan selera karyawan kami.',
      rating: 5
    },
    {
      name: 'Ahmad Wijaya',
      event: 'Ulang Tahun Anak',
      comment: 'Anak-anak suka sekali dengan menunya. Dekorasi colorful dan pelayanannya ramah.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">CV BERKAH ANUGRA CATERING</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Layanan</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors">Menu</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">Testimoni</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 w-fit">
                  <Award className="w-4 h-4 mr-1" />
                  Terpercaya Sejak 2020
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Solusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Catering</span> Terbaik untuk Setiap Acara Spesial Anda
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  CV BERKAH ANUGRA CATERING - Partner terpercaya untuk jasa boga profesional di Nganjuk dan sekitarnya. 
                  Nikmati hidangan lezat dengan pelayanan prima untuk membuat acara Anda tak terlupakan.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-gray-600">Acara Sukses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-gray-600">Menu Variatif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">5★</div>
                  <div className="text-gray-600">Rating Pelanggan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/hero-catering.jpg" 
                  alt="Catering Presentation" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Halal Certified</div>
                    <div className="text-sm text-gray-600">Makanan Terjamin Halal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Unggulan</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai paket catering yang dapat disesuaikan dengan kebutuhan dan budget Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeService === service.id 
                    ? 'ring-2 ring-orange-500 shadow-lg transform -translate-y-2' 
                    : 'hover:transform hover:-translate-y-1'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Menu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Pilihan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai pilihan menu lezat yang dapat disesuaikan dengan selera dan kebutuhan acara Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center">
                  <Utensils className="w-16 h-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">{category.price}</span>
                    <Button variant="outline" size="sm">
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Lihat Menu Lengkap
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Pelanggan</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.event}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Membuat Acara Anda Tak Terlupakan?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Konsultasikan kebutuhan catering Anda dengan tim profesional kami. Dapatkan penawaran terbaik sekarang!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              0852-8570-3515
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600">
              Kami siap membantu mewujudkan acara impian Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Alamat</div>
                      <div className="text-gray-600">
                        Jl. Mastr I Nomor 09, Desa/Kelurahan Ganung Kidul, Kec. Nganjuk, Kab. Nganjuk, Prov. Jawa Timur
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Telepon</div>
                      <div className="text-gray-600">0852-8570-3515</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@berkahanugrahcatering.com</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Jam Operasional</div>
                      <div className="text-gray-600">
                        Senin - Sabtu: 08:00 - 20:00<br />
                        Minggu: 09:00 - 18:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Acara</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Pilih jenis acara</option>
                    <option>Pernikahan</option>
                    <option>Meeting Kantor</option>
                    <option>Ulang Tahun</option>
                    <option>Family Gathering</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Acara</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Ceritakan detail acara Anda..."
                  ></textarea>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-lg">CV BERKAH ANUGRA CATERING</span>
              </div>
              <p className="text-gray-400">
                Partner terpercaya untuk jasa boga profesional di Nganjuk dan sekitarnya.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Catering Pernikahan</li>
                <li>Catering Kantor</li>
                <li>Catering Family Gathering</li>
                <li>Catering Event Khusus</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Nasi Tumpeng</li>
                <li>Menu Prasmanan</li>
                <li>Snack Box</li>
                <li>Coffee Break</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>0852-8570-3515</li>
                <li>info@berkahanugrahcatering.com</li>
                <li>Nganjuk, Jawa Timur</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 CV BERKAH ANUGRA CATERING. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Heart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  )
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}