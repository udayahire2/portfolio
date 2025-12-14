import { Download, FileText, Briefcase, Code, Award } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

const resumeData = {
  summary: "Full-stack web developer with 4+ years of experience building modern web applications. Proficient in React, TypeScript, and Node.js with a focus on creating clean, maintainable code and user-centered experiences.",
  
  technicalSkills: [
    { category: 'Frontend', skills: 'React, TypeScript, Next.js, Tailwind CSS, JavaScript (ES6+)' },
    { category: 'Backend', skills: 'Node.js, Express, REST APIs, GraphQL' },
    { category: 'Database', skills: 'PostgreSQL, MongoDB, Firebase' },
    { category: 'Tools', skills: 'Git, VS Code, Figma, Postman, Docker' }
  ],
  
  certifications: [
    'Web Developement Certification - Sumago Infotech'
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
            href=""
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

        {/* Work Experience - Reference from Experience component */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg dark:text-white">Work Experience</h3>
          </div>
          <div className="space-y-6 pl-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h4 className="dark:text-white">Frontend Developer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tech Solutions Inc.</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Developed and maintained customer-facing web applications using React and TypeScript</li>
                <li>Collaborated with design and backend teams to implement new features</li>
                <li>Improved application performance by 40% through code optimization</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h4 className="dark:text-white">Junior Web Developer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Digital Agency</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2020 - 2022</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Built responsive websites and landing pages for 20+ clients</li>
                <li>Worked with WordPress, JavaScript, and modern CSS frameworks</li>
                <li>Participated in agile development process and code reviews</li>
              </ul>
            </div>
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
