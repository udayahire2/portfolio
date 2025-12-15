export function AIVisualization() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Central node */}
      <div className="absolute w-32 h-32 bg-cyan-500/10 border-2 border-cyan-500 rounded-lg flex items-center justify-center backdrop-blur-sm">
        <div className="w-20 h-20 bg-cyan-500/20 border border-cyan-500 rounded flex items-center justify-center">
          <span className="text-cyan-500 text-2xl">AI</span>
        </div>
      </div>

      {/* Orbiting nodes */}
      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0B0F14] border border-cyan-500/30 rounded flex items-center justify-center">
          <span className="text-xs text-cyan-500/70">&lt;/&gt;</span>
        </div>
      </div>

      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0B0F14] border border-cyan-500/30 rounded flex items-center justify-center">
          <span className="text-xs text-cyan-500/70">UI</span>
        </div>
      </div>

      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '22s' }}>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 bg-[#0B0F14] border border-cyan-500/30 rounded flex items-center justify-center">
          <span className="text-xs text-cyan-500/70">API</span>
        </div>
      </div>

      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 bg-[#0B0F14] border border-cyan-500/30 rounded flex items-center justify-center">
          <span className="text-xs text-cyan-500/70">DB</span>
        </div>
      </div>

      {/* Connection lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <circle cx="50%" cy="50%" r="180" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="4 4" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
