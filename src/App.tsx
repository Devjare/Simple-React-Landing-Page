import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Analytics from './components/analytics';
import Newsletter from './components/newsletter';
import Cards from './components/Cards';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 h-full">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
