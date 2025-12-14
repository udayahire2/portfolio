import { Terminal, GitBranch, FileCode, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Terminal,
    number: '01',
    title: 'Write your task in plain English',
    description: 'Describe what you need in natural language. No configuration files or complex setup required.'
  },
  {
    icon: GitBranch,
    number: '02',
    title: 'Agent plans execution',
    description: 'UDROID analyzes requirements, breaks down tasks, and creates an execution strategy.'
  },
  {
    icon: FileCode,
    number: '03',
    title: 'Code & UI generated',
    description: 'Complete code and interfaces are generated with proper structure, dependencies, and documentation.'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Review and deploy',
    description: 'Inspect the output, make adjustments if needed, and deploy with confidence.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-[1440px] mx-auto px-16 py-32 border-t border-white/5">
      <h2 className="text-4xl mb-20">How It Works</h2>
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-12 items-start group">
            <div className="flex items-center gap-6 min-w-[200px]">
              <span className="text-5xl text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors">
                {step.number}
              </span>
              <step.icon className="w-10 h-10 text-cyan-500" strokeWidth={1.5} />
            </div>
            
            <div className="flex-1 pt-2">
              <h3 className="text-2xl mb-3">{step.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-[600px]">
                {step.description}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="absolute left-[133px] mt-20 w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
