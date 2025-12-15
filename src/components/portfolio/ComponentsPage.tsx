import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ComponentLibrary } from './ComponentLibrary';

export function ComponentsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between max-w-[1800px] mx-auto">
          {/* Left: Back Link */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Back to Portfolio</span>
            <span className="text-sm font-medium sm:hidden">Back</span>
          </Link>

          {/* Right: Go to Portfolio Button */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
          >
            <span>Go to Portfolio</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16">
        <ComponentLibrary />
      </div>
    </div>
  );
}