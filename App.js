import './App.css';

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';

import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';

function Homepage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        {/* <Testimonials /> */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;