
import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar.tsx';
import Footer from './components/Layout/Footer.tsx';
import Hero from './components/Sections/Hero.tsx';
import About from './components/Sections/About.tsx';
import Experience from './components/Sections/Experience.tsx';
import Science from './components/Sections/Science.tsx';
import Market from './components/Sections/Market.tsx';
import Contact from './components/Sections/Contact.tsx';
import Intro from './components/Sections/Intro.tsx';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <Intro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-space-950 text-white font-sans selection:bg-gold-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Science />
        <Market />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
