import React from 'react';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import FilterSection from './components/FilterSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb />
      <HeroSection />
      <CategorySection />
      <FilterSection />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;