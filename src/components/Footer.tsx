import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-8">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="mb-4 md:mb-0 text-sm text-muted-foreground">
            © {currentYear} Jahongir Raxmatjonov. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-primary transition-colors">
              {t('nav.home')}
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
