import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Tentang Kami',
    'Cara Pemesanan',
    'Kebijakan Privasi',
    'Syarat & Ketentuan',
    'FAQ',
    'Hubungi Kami'
  ];

  const serviceAreas = [
    'Jakarta',
    'Bandung',
    'Surabaya',
    'Medan',
    'Semarang',
    'Yogyakarta'
  ];

  const productCategories = [
    'Karangan Bunga Papan',
    'Standing Flower',
    'Bunga Pernikahan',
    'Bunga Belasungkawa',
    'Bunga Ulang Tahun',
    'Hampers & Gifts'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              OUTERBLOOM
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Spesialis karangan bunga papan premium dengan layanan terpercaya 
              dan kualitas terbaik untuk setiap momen spesial Anda.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-purple-400" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-400" />
                <span className="text-gray-300">info@outerbloom.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-purple-400" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-purple-400" />
                <span className="text-gray-300">24/7 Customer Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kategori Produk</h4>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Area Layanan</h4>
            <ul className="space-y-2 mb-6">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-3">Ikuti Kami</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">
              Dapatkan Penawaran Terbaru
            </h4>
            <p className="text-gray-300 mb-6">
              Berlangganan newsletter kami untuk mendapatkan informasi produk terbaru dan penawaran menarik
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 OUTERBLOOM. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Syarat Layanan
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;