import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'auday248@outlook.com',
    href: 'mailto:auday@outlook.com'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/udayahire2',
    href: 'https://github.com/udayahire2'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/uday',
    href: 'https://linkedin.com'
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download PDF',
    href: '#'
  }
];

export function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="py-20 border-t border-gray-200 dark:border-gray-700">
      <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-2xl mb-8 dark:text-white">Contact</h2>
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <link.icon className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400">{link.label}</span>
                <span className="text-base">{link.value}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Uday. Available for freelance and full-time opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
