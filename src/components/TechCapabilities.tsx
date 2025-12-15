import { Cpu, Box, ShieldCheck, Terminal } from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: 'API-based AI models',
    spec: 'Integration with leading LLM providers',
    details: 'GPT-4, Claude, Llama'
  },
  {
    icon: Box,
    title: 'Modular agent system',
    spec: 'Composable agent architecture',
    details: 'Task-specific agents, orchestration layer'
  },
  {
    icon: ShieldCheck,
    title: 'Secure execution',
    spec: 'Sandboxed code generation',
    details: 'No arbitrary execution, validation pipeline'
  },
  {
    icon: Terminal,
    title: 'Developer-friendly outputs',
    spec: 'Clean, documented, idiomatic code',
    details: 'TypeScript, ESLint, Prettier compatible'
  }
];

export function TechCapabilities() {
  return (
    <section className="max-w-[1440px] mx-auto px-16 py-32 border-t border-white/5">
      <h2 className="text-4xl mb-4">Tech & Capabilities</h2>
      <p className="text-gray-400 text-lg mb-20">Technical specifications and architecture</p>
      
      <div className="grid grid-cols-4 gap-6">
        {capabilities.map((capability, index) => (
          <div 
            key={index}
            className="p-6 bg-white/[0.02] border border-white/5 rounded-lg"
          >
            <capability.icon className="w-7 h-7 text-cyan-500 mb-6" strokeWidth={1.5} />
            
            <h3 className="text-base mb-2">{capability.title}</h3>
            
            <div className="space-y-3 pt-3 border-t border-white/5">
              <p className="text-xs text-cyan-500/80">{capability.spec}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{capability.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
