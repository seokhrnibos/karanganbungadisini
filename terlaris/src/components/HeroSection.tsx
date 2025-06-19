import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Karangan Bunga Papan
              <span className="text-purple-600"> Premium</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hadirkan keindahan dan makna mendalam dengan koleksi karangan bunga papan premium kami. 
              Sempurna untuk setiap momen spesial dalam hidup Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Lihat Koleksi
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all">
                Konsultasi Gratis
              </button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Happy Wedding Flower Board"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="mt-3 text-center">
                    <h3 className="font-semibold text-gray-800">Happy Wedding</h3>
                    <p className="text-sm text-gray-600">Karangan Bunga Pernikahan</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-2xl p-4 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Standing Bouquet"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="mt-3 text-center">
                    <h3 className="font-semibold text-gray-800">Standing Bouquet</h3>
                    <p className="text-sm text-gray-600">Bunga Merah Putih</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;