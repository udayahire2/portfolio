import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function ComponentsPage() {
  const navigate = useNavigate();
  
  const components = [
    {
      id: 'button',
      name: 'Button Component',
      description: 'Reusable button with multiple variants',
      category: 'UI Elements'
    },
    {
      id: 'card',
      name: 'Card Component',
      description: 'Flexible card layout for content display',
      category: 'Layouts'
    },
    {
      id: 'form',
      name: 'Form Component',
      description: 'Form with validation and accessibility',
      category: 'Forms'
    },
    {
      id: 'modal',
      name: 'Modal Component',
      description: 'Accessible modal dialog with animations',
      category: 'Overlays'
    },
    {
      id: 'navigation',
      name: 'Navigation Component',
      description: 'Responsive navigation with dark mode',
      category: 'Navigation'
    },
    {
      id: 'accordion',
      name: 'Accordion Component',
      description: 'Expandable content sections',
      category: 'UI Elements'
    }
  ];

  const categories = ['UI Elements', 'Layouts', 'Forms', 'Overlays', 'Navigation'];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-32">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl mb-4 dark:text-white">Component Library</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A collection of reusable React components built with TypeScript and Tailwind CSS
          </p>
        </div>

        {/* Components Grid */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl mb-6 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {components
                  .filter((comp) => comp.category === category)
                  .map((component) => (
                    <div
                      key={component.name}
                      onClick={() => navigate(`/components/${component.id}`)}
                      className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer group"
                    >
                      <h3 className="text-lg mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {component.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {component.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Component Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl mb-2 dark:text-white">{components.length}</div>
            <div className="text-gray-600 dark:text-gray-400">Total Components</div>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl mb-2 dark:text-white">100%</div>
            <div className="text-gray-600 dark:text-gray-400">TypeScript Coverage</div>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl mb-2 dark:text-white">A11y</div>
            <div className="text-gray-600 dark:text-gray-400">Accessible Components</div>
          </div>
        </div>
      </div>
    </div>
  );
}