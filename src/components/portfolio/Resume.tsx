import { Download, FileText, Briefcase, Code, Award } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

const resumeData = {
  summary: "Full-stack web developer. Proficient in React, TypeScript, and Node.js with a focus on creating clean, maintainable code and user-centered experiences.",
  
  technicalSkills: [
    { category: 'Frontend', skills: 'React, TypeScript, Next.js, Tailwind CSS, JavaScript (ES6+)' },
    { category: 'Backend', skills: 'Node.js, Express, REST APIs, GraphQL' },
    { category: 'Database', skills: 'PostgreSQL, MongoDB, Firebase' },
    { category: 'Tools', skills: 'Git, VS Code, Figma, Postman, Docker' }
  ],
  
  certifications: [
    'React Developer Certification - Meta',
    'Full Stack Web Development - freeCodeCamp',
    'JavaScript Algorithms and Data Structures'
  ]
};

export function Resume() {
  const ref = useScrollAnimation();

  return (
    <section id="resume" className="py-20 border-t border-gray-200 dark:border-gray-700">
      <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl dark:text-white">Resume</h2>
          <a
            href="#"
            download
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* Professional Summary */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg dark:text-white">Professional Summary</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-8">
            {resumeData.summary}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg dark:text-white">Technical Skills</h3>
          </div>
          <div className="space-y-4 pl-8">
            {resumeData.technicalSkills.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2">
                <span className="text-gray-600 dark:text-gray-400">{item.category}:</span>
                <span className="text-gray-700 dark:text-gray-300">{item.skills}</span>
              </div>
            ))}
          </div>
        </div>

       
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg dark:text-white">Certifications</h3>
          </div>
          <ul className="space-y-2 pl-8">
            {resumeData.certifications.map((cert, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
