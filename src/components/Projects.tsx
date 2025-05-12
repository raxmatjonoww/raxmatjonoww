
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment processing and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com/raxmatjonoww",
    liveLink: "#",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media accounts with data visualization.",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Firebase"],
    githubLink: "https://github.com/raxmatjonoww",
    liveLink: "#",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Real-time task management application for teams with Kanban boards.",
    technologies: ["React", "Redux", "Node.js", "Socket.io"],
    githubLink: "https://github.com/raxmatjonoww",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-americano-blue/10 text-americano-blue text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            asChild
          >
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-1" /> Code
            </a>
          </Button>
          {project.liveLink && (
            <Button
              size="sm"
              className="flex-1 bg-americano-blue hover:bg-americano-blue/90"
              asChild
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-1" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Recent Projects</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button 
              className="bg-americano-navy hover:bg-americano-navy/90"
              asChild
            >
              <a 
                href="https://github.com/raxmatjonoww" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={18} className="mr-2" />
                View More Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
