import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EngineeringDetails } from './components/EngineeringDetails';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-fg font-sans flex flex-col selection:bg-accent/20 selection:text-accent">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-canvas font-medium text-xs rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <EngineeringDetails />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
