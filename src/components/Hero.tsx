
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="py-20 lg:py-32 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-lg font-medium text-primary mb-2">{t('hero.greeting')}</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Jahongir Raxmatjonov</h1>
            <p className="text-2xl md:text-3xl font-semibold mb-6">{t('hero.role')}</p>
            <p className="text-muted-foreground mb-8 max-w-lg text-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">{t('contact.title')}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">{t('projects.title')}</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src="/lovable-uploads/a3318689-9f32-4318-af45-e62cba5367f1.png" 
                alt="Jahongir Raxmatjonov" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
