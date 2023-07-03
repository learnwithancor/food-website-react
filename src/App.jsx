import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero';
import HeadlineCards from './components/Navbar/HeadlineCards';
import Food from './components/Navbar/Food';
import Category from './components/Navbar/Category';
import Footer from './components/Navbar/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
        <Footer />
    </div>
  );
}

export default App;
