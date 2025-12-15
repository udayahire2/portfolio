import { ArrowRight } from 'lucide-react';
import { AIVisualization } from './AIVisualization';

export function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-16 pt-40 pb-32">
      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl leading-tight tracking-tight">
            UDROID — Autonomous AI Agent for Software Development
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Generate code, design interfaces, and automate development workflows using intelligent AI agents.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="px-8 py-4 bg-cyan-500 text-[#0B0F14] rounded hover:bg-cyan-400 transition-colors flex items-center gap-2">
              Launch Agent
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-white/10 text-white rounded hover:bg-white/5 transition-colors">
              View Demo
            </button>
          </div>
        </div>

        <div className="relative">
          <AIVisualization />
        </div>
      </div>
    </section>
  );
}
