import React, { useState } from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';

const ProductGrid = () => {
  const [sortBy, setSortBy] = useState('terbaru');

  const products = [
    {
      id: 1,
      name: 'Karangan Bunga Papan Wedding Elegant',
      description: 'Karangan bunga papan premium untuk acara pernikahan dengan kombinasi mawar merah dan putih',
      price: 850000,
      originalPrice: 1200000,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      reviews: 45,
      isNew: true,
      isBestseller: false
    },
    {
      id: 2,
      name: 'Standing Flower Congratulations',
      description: 'Bunga berdiri untuk ucapan selamat dengan kombinasi bunga segar pilihan',
      price: 650000,
      originalPrice: 800000,
      image: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      reviews: 32,
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: 'Papan Bunga LED Grand Opening',
      description: 'Karangan bunga papan dengan lampu LED untuk grand opening yang mewah',
      price: 1200000,
      originalPrice: 1500000,
      image: 'https://images.pexels.com/photos/1437417/pexels-photo-1437417.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      reviews: 28,
      isNew: true,
      isBestseller: false
    },
    {
      id: 4,
      name: 'Sympathy Flower White Lily',
      description: 'Karangan bunga belasungkawa dengan lily putih dan bunga pilihan lainnya',
      price: 750000,
      originalPrice: 950000,
      image: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.6,
      reviews: 18,
      isNew: false,
      isBestseller: false
    },
    {
      id: 5,
      name: 'Birthday Flower Board Colorful',
      description: 'Karangan bunga papan ulang tahun dengan kombinasi warna-warni ceria',
      price: 550000,
      originalPrice: 700000,
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.5,
      reviews: 22,
      isNew: false,
      isBestseller: true
    },
    {
      id: 6,
      name: 'Premium Wedding Arch Flowers',
      description: 'Dekorasi bunga premium untuk altar pernikahan dengan mawar dan baby breath',
      price: 2500000,
      originalPrice: 3000000,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5.0,
      reviews: 15,
      isNew: true,
      isBestseller: true
    }
  ];

  const sortOptions = [
    { value: 'terbaru', label: 'Terbaru' },
    { value: 'terpopuler', label: 'Terpopuler' },
    { value: 'harga-tertinggi', label: 'Harga Tertinggi' },
    { value: 'harga-terendah', label: 'Harga Terendah' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Produk Karangan Bunga Papan
            </h2>
            <p className="text-gray-600">
              Menampilkan {products.length} produk
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700">
              Urutkan:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Baru
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-medium bg-yellow-500">
                      Terlaris
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors group/heart">
                  <Heart size={18} className="text-gray-600 group-hover/heart:text-red-500 transition-colors" />
                </button>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart size={18} />
                    <span>Tambah ke Keranjang</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} ulasan)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Muat Lebih Banyak Produk
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;