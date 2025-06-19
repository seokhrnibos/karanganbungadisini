import React from 'react';

const CategorySection = () => {
  const categories = [
    {
      title: 'CONGRATULATIONS',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ucapan selamat'
    },
    {
      title: 'SYMPATHY & FUNERAL',
      image: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Belasungkawa'
    },
    {
      title: 'WEDDING',
      image: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Pernikahan'
    },
    {
      title: 'STANDING FLOWER',
      image: 'https://images.pexels.com/photos/1437417/pexels-photo-1437417.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Bunga berdiri'
    },
    {
      title: 'PAPAN BUNGA LAMPU LED',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dengan lampu LED'
    },
    {
      title: 'HAMPERS',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Paket hadiah'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kategori Produk
          </h2>
          <p className="text-lg text-gray-600">
            Pilih kategori sesuai dengan kebutuhan acara Anda
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-xs md:text-sm text-gray-800 mb-1 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;