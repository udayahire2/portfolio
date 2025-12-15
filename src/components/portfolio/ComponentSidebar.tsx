import { ComponentCategory } from './componentLibraryData';
import { X } from 'lucide-react';

interface ComponentSidebarProps {
  categories: ComponentCategory[];
  activeId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function ComponentSidebar({ categories, activeId, onSelect, isOpen, onToggle }: ComponentSidebarProps) {
  return (
    <aside className={`fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto z-50 transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      {/* Mobile Close Button */}
      <div className="lg:hidden sticky top-0 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between z-10">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Components
        </h2>
        <button
          onClick={onToggle}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      <div className="p-4 sm:p-6">
        {/* Header - Hidden on mobile (shown in sticky header) */}
        <div className="mb-8 hidden lg:block">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            Components
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Production-ready components
          </p>
        </div>

        {/* Categories */}
        <nav className="space-y-6">
          {categories.map((category) => (
            <div key={category.categoryId}>
              {/* Category Header */}
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2 px-3">
                {category.categoryName}
              </h3>

              {/* Component List */}
              <div className="space-y-0.5">
                {category.components.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => onSelect(component.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${
                      activeId === component.id
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <span>{component.name}</span>
                    {component.isNew && (
                      <span className="px-2 py-0.5 text-[10px] font-medium bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 rounded-full">
                        New
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}