import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useScrollAnimation } from './useScrollAnimation';

const projects = [
  {
    title: 'Gram panchayat',
    description: 'Management of Taxes, Certificates, Notices, Meetings, Schemes, and Meetings. Built with HTML, CSS, JavaScript, PHP, and MySQL.',
    image: 'https://udayahire2.github.io/uday-portfolio/gram.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP','MySQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Devtool',
    description: 'Hero Section UI With GSAP Animation',
    image: 'https://udayahire2.github.io/uday-portfolio/Frame%2055.png',
    tech: ['React', 'CSS', 'JavaScript', 'GSAP'],
    liveUrl: '#',
    githubUrl: '#'
  },
];

export function Projects() {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="py-20 border-t border-gray-200 dark:border-gray-700">
      <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-2xl mb-12 dark:text-white">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="mb-4 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <h3 className="text-xl mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-50 dark:bg-gray-800">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.liveUrl}
                  className="text-sm text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Site
                </a>
                <a 
                  href={project.githubUrl}
                  className="text-sm text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}