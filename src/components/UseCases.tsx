const useCases = [
  {
    title: 'Landing page generation',
    description: 'Create complete landing pages with responsive design, optimized layouts, and conversion-focused components.'
  },
  {
    title: 'React component creation',
    description: 'Build reusable React components with proper TypeScript types, hooks, and best practices built-in.'
  },
  {
    title: 'MVP development',
    description: 'Rapidly prototype and build minimum viable products with full-stack code generation capabilities.'
  },
  {
    title: 'Learning & experimentation',
    description: 'Explore new frameworks, patterns, and technologies with AI-assisted code examples and explanations.'
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="max-w-[1440px] mx-auto px-16 py-32 border-t border-white/5">
      <h2 className="text-4xl mb-20">Use Cases</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {useCases.map((useCase, index) => (
          <div 
            key={index}
            className="p-10 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.04] transition-colors"
          >
            <h3 className="text-xl mb-4">{useCase.title}</h3>
            <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
