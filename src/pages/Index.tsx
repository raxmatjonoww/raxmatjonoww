
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Header />
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Index;
