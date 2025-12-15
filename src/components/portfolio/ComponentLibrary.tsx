import { useState } from 'react';
import { ComponentSidebar } from './ComponentSidebar';
import { ComponentViewer } from './ComponentViewer';
import { componentLibraryData } from './componentLibraryData';

export function ComponentLibrary() {
  // Get first component from first category as default
  const firstComponent = componentLibraryData[0]?.components[0];
  const [activeComponentId, setActiveComponentId] = useState(firstComponent?.id || '');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Find active component across all categories
  const activeComponent = componentLibraryData
    .flatMap(category => category.components)
    .find(c => c.id === activeComponentId);

  const handleSelectComponent = (id: string) => {
    setActiveComponentId(id);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <ComponentSidebar
          categories={componentLibraryData}
          activeId={activeComponentId}
          onSelect={handleSelectComponent}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 w-full">
          {activeComponent && (
            <ComponentViewer
              name={activeComponent.name}
              description={activeComponent.description}
              component={activeComponent.component}
              code={activeComponent.code}
              codeJsx={activeComponent.codeJsx}
              onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          )}
        </main>
      </div>
    </div>
  );
}
