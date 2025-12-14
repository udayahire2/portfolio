import { useScrollAnimation } from './useScrollAnimation';

const experience = [
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Develop and maintain customer-facing web applications using React and TypeScript. Collaborate with design and backend teams to implement new features.'
  },
  {
    title: 'Junior Web Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Built responsive websites and landing pages for clients. Worked with WordPress, JavaScript, and modern CSS frameworks.'
  }
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University Name',
    period: '2016 - 2020'
  }
];

export function Experience() {
  const ref = useScrollAnimation();

  return (
    <section id="education" className="py-20 border-t border-gray-200 dark:border-gray-700">
      <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700">
        <div className="mb-16">
          <h2 className="text-2xl mb-8 dark:text-white">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg dark:text-white">{job.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{job.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl mb-8 dark:text-white">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg dark:text-white">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}