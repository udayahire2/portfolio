import { useScrollAnimation } from './useScrollAnimation';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS',
  'Git',
  'REST APIs',
  'GraphQL'
];

export function Skills() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 border-t border-gray-200 dark:border-gray-700">
      <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-2xl mb-8 dark:text-white">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}