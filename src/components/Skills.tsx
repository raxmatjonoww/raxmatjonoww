
import React from "react";
import { Progress } from "@/components/ui/progress";

const SkillItem = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React.js", percentage: 88 },
    { name: "TypeScript", percentage: 85 },
    { name: "Next.js", percentage: 80 },
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 85 },
    { name: "Express", percentage: 82 },
    { name: "MongoDB", percentage: 80 },
    { name: "SQL", percentage: 78 },
    { name: "GraphQL", percentage: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">My Skills</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-americano-navy">
                Frontend Development
              </h3>
              {frontendSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-americano-navy">
                Backend Development
              </h3>
              {backendSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-americano-navy">
              Additional Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Git",
                "Docker",
                "AWS",
                "REST API",
                "Redux",
                "Firebase",
                "UI/UX Design",
                "Responsive Design",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white py-3 px-4 rounded-md shadow-sm border border-gray-100 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
