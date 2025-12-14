import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="max-w-[1440px] mx-auto px-16 py-32 border-t border-white/5">
      <div className="text-center max-w-[800px] mx-auto space-y-10">
        <h2 className="text-5xl leading-tight">
          Build Faster. Think Less About Boilerplate.
        </h2>
        
        <button className="px-10 py-5 bg-cyan-500 text-[#0B0F14] rounded hover:bg-cyan-400 transition-colors flex items-center gap-3 mx-auto text-lg">
          Start with UDROID
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
