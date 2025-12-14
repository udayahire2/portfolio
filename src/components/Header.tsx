export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F14]/80 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-[1440px] mx-auto px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
            <span className="text-[#0B0F14] text-sm font-bold">U</span>
          </div>
          <span className="text-xl tracking-tight">UDROID</span>
        </div>
        
        <div className="flex items-center gap-12">
          <a href="#product" className="text-sm text-gray-400 hover:text-white transition-colors">
            Product
          </a>
          <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">
            How it Works
          </a>
          <a href="#use-cases" className="text-sm text-gray-400 hover:text-white transition-colors">
            Use Cases
          </a>
          <a href="#docs" className="text-sm text-gray-400 hover:text-white transition-colors">
            Docs
          </a>
        </div>

        <button className="px-6 py-2.5 bg-cyan-500 text-[#0B0F14] rounded hover:bg-cyan-400 transition-colors">
          Launch Agent
        </button>
      </nav>
    </header>
  );
}
