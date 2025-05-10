
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillCategory = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: { name: string; level: number }[] 
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  const frontendSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'TypeScript', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 82 },
    { name: 'Python', level: 75 },
    { name: 'PHP', level: 70 },
  ];

  const databaseSkills = [
    { name: 'MongoDB', level: 88 },
    { name: 'MySQL', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Redis', level: 75 },
  ];

  const toolsSkills = [
    { name: 'Git', level: 92 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'CI/CD', level: 78 },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              <SkillCategory 
                title={t('skills.frontend')} 
                skills={frontendSkills} 
              />
            </CardContent>
          </Card>
          
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              <SkillCategory 
                title={t('skills.backend')} 
                skills={backendSkills} 
              />
            </CardContent>
          </Card>
          
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              <SkillCategory 
                title={t('skills.database')} 
                skills={databaseSkills} 
              />
            </CardContent>
          </Card>
          
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              <SkillCategory 
                title={t('skills.tools')} 
                skills={toolsSkills} 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
