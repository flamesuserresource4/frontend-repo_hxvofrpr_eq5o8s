import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Showcase from './components/Showcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-fuchsia-900 text-white">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
