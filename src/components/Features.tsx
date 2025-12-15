import { Code2, Layout, Workflow, Brain } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Code Generation',
    description: 'Generate production-ready code across multiple languages and frameworks with context-aware AI.'
  },
  {
    icon: Layout,
    title: 'UI Layout Creation',
    description: 'Transform design requirements into complete UI components with proper structure and styling.'
  },
  {
    icon: Workflow,
    title: 'Task Automation',
    description: 'Automate repetitive development tasks, boilerplate generation, and workflow orchestration.'
  },
  {
    icon: Brain,
    title: 'Context & Memory',
    description: 'Maintains project context and learns from your codebase to provide consistent, relevant outputs.'
  }
];

export function Features() {
  return (
    <section id="product" className="max-w-[1440px] mx-auto px-16 py-32 border-t border-white/5">
      <div className="grid grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-8 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.04] transition-colors"
          >
            <feature.icon className="w-8 h-8 text-cyan-500 mb-6" strokeWidth={1.5} />
            <h3 className="text-lg mb-3">{feature.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
