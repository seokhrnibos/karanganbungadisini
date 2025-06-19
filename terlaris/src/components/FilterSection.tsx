import React, { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';

const FilterSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filterOptions = [
    {
      label: 'Lokasi Pengiriman',
      options: ['Semua Lokasi', 'Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Semarang']
    },
    {
      label: 'Jenis Bunga',
      options: ['Semua Jenis', 'Mawar', 'Anggrek', 'Krisan', 'Lily', 'Carnation']
    },
    {
      label: 'Gaya',
      options: ['Semua Gaya', 'Modern', 'Klasik', 'Minimalis', 'Elegant', 'Luxury']
    },
    {
      label: 'Acara',
      options: ['Semua Acara', 'Pernikahan', 'Ulang Tahun', 'Belasungkawa', 'Congratulations', 'Grand Opening']
    },
    {
      label: 'Warna',
      options: ['Semua Warna', 'Merah', 'Putih', 'Pink', 'Kuning', 'Ungu', 'Mixed']
    }
  ];

  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            <Filter size={20} />
            <span>Filter Produk</span>
            <ChevronDown
              size={16}
              className={`transform transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isExpanded && (
            <div className="mt-6 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {filterOptions.map((filter, index) => (
                  <div key={index} className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {filter.label}
                    </label>
                    <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors">
                      {filter.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                  Terapkan Filter
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Reset Filter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterSection;