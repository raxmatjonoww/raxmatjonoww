import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

// 🖼 Rasm import
import chillProImage from '../../public/lovable-uploads/1.jpg';
import chillProImage2 from '../../public/lovable-uploads/2.jpg';
import chillProImage3 from '../../public/lovable-uploads/3.jpg';
import chillProImage4 from '../../public/lovable-uploads/4.jpg';

type Project = {
  id: number;
  title: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  codeUrl: string;
};

const Projects = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: 'ChillPro',
      image: chillProImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://www.chillpro.uz/',
      codeUrl: 'https://www.chillpro.uz/'
    },
    {
      id: 2,
      title: 'KIA',
      image: chillProImage2,
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
      liveUrl: 'https://kia.uz/ru',
      codeUrl: 'https://kia.uz/ru'
    },
    {
      id: 3,
      title: 'Tomato',
      image: chillProImage3,
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      liveUrl: 'https://tomato-cafe.vercel.app/',
      codeUrl: 'https://tomato-cafe.vercel.app/'
    },
    {
      id: 4,
      title: 'Fasten',
      image: chillProImage4,
      technologies: ['Angular', 'Express.js', 'MySQL', 'D3.js'],
      liveUrl: 'https://fasten.com/ru_uz',
      codeUrl: 'https://fasten.com/ru_uz'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('projects.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border shadow hover:shadow-md transition-shadow">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    {t('projects.viewLive')}
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={16} />
                    {t('projects.viewCode')}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
