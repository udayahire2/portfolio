export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-16 py-16">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                <span className="text-[#0B0F14] text-sm font-bold">U</span>
              </div>
              <span className="text-xl tracking-tight">UDROID</span>
            </div>
            <p className="text-sm text-gray-500">AI Agents for Real Developers</p>
          </div>

          <div className="flex gap-12">
            <a href="#docs" className="text-sm text-gray-400 hover:text-white transition-colors">
              Docs
            </a>
            <a href="#github" className="text-sm text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600">
            © 2025 UDROID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
