
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('about.title')}
        </h2>
        
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg">
                  {t('about.description')}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-primary mb-2">Name</h3>
                    <p>Jahongir Raxmatjonov</p>
                  </div>
                  {/* <div>
                    <h3 className="font-medium text-primary mb-2">Email</h3>
                    <p>raxmatjonoww@gmail.com</p>
                  </div> */}
                  <div>
                    <h3 className="font-medium text-primary mb-2">Phone</h3>
                    <p>+998 90 825 7503</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary mb-2">Location</h3>
                    <p>Tashkent, Uzbekistan</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Full Stack Developer</h4>
                      <span className="text-sm text-muted-foreground">2020 - 2025</span>
                    </div>
                    <p className="text-muted-foreground">
                      Working on developing full-stack web applications using modern technologies.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Frontend Developer</h4>
                      <span className="text-sm text-muted-foreground">2018 - 2020</span>
                    </div>
                    <p className="text-muted-foreground">
                      Focused on creating responsive and interactive user interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
