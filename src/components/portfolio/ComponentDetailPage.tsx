import { useState, type JSX } from 'react';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Example Components
const ButtonExample = () => (
  <div className="flex flex-wrap gap-4">
    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
      Primary Button
    </button>
    <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
      Secondary Button
    </button>
    <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
      Outline Button
    </button>
  </div>
);

const CardExample = () => (
  <div className="max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
    <h3 className="text-xl mb-2 dark:text-white">Card Title</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      This is a flexible card component that can display content with proper spacing and styling.
    </p>
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
      Learn More
    </button>
  </div>
);

const FormExample = () => (
  <form className="max-w-md space-y-4" onSubmit={(e) => e.preventDefault()}>
    <div>
      <label className="block text-sm mb-2 dark:text-white">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-sm mb-2 dark:text-white">Password</label>
      <input
        type="password"
        placeholder="Enter password"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button
      type="submit"
      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Submit
    </button>
  </form>
);

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Open Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl mb-4 dark:text-white">Modal Title</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This is a modal dialog with animations and backdrop blur.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:text-white"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const AccordionExample = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const items = [
    { title: 'What is this?', content: 'This is an accordion component that expands and collapses content.' },
    { title: 'How does it work?', content: 'Click on any section header to expand or collapse that section.' },
    { title: 'Can I customize it?', content: 'Yes! The component is fully customizable with your own styles and content.' }
  ];
  
  return (
    <div className="max-w-2xl space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const NavigationExample = () => (
  <nav className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-xl dark:text-white">Logo</div>
      <div className="flex gap-6">
        <a href="#" className="dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
        <a href="#" className="dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
        <a href="#" className="dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

// Component data with code examples
const componentData: Record<string, { name: string; preview: JSX.Element; code: string }> = {
  'button': {
    name: 'Button Component',
    preview: <ButtonExample />,
    code: `const Button = ({ variant = 'primary', children, ...props }) => {
  const variants = {
    primary: 'px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700',
    secondary: 'px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300',
    outline: 'px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50'
  };

  return (
    <button className={\`\${variants[variant]} transition-colors\`} {...props}>
      {children}
    </button>
  );
};

// Usage
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>`
  },
  'card': {
    name: 'Card Component',
    preview: <CardExample />,
    code: `const Card = ({ title, description, buttonText }) => {
  return (
    <div className="max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
      <h3 className="text-xl mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        {buttonText}
      </button>
    </div>
  );
};

// Usage
<Card 
  title="Card Title"
  description="This is a flexible card component..."
  buttonText="Learn More"
/>`
  },
  'form': {
    name: 'Form Component',
    preview: <FormExample />,
    code: `const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-4">
      <div>
        <label className="block text-sm mb-2 dark:text-white">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm mb-2 dark:text-white">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Submit
      </button>
    </form>
  );
};`
  },
  'modal': {
    name: 'Modal Component',
    preview: <ModalExample />,
    code: `const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-xl mb-4 dark:text-white">{title}</h3>
        <div className="text-gray-600 dark:text-gray-400 mb-6">
          {children}
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:text-white"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

// Usage
const [isOpen, setIsOpen] = useState(false);
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
  This is a modal dialog with animations and backdrop blur.
</Modal>`
  },
  'accordion': {
    name: 'Accordion Component',
    preview: <AccordionExample />,
    code: `const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-2xl space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Usage
const items = [
  { title: 'What is this?', content: 'This is an accordion component...' },
  { title: 'How does it work?', content: 'Click on any section header...' }
];
<Accordion items={items} />`
  },
  'navigation': {
    name: 'Navigation Component',
    preview: <NavigationExample />,
    code: `const Navigation = ({ logo, links }) => {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl dark:text-white">{logo}</div>
        <div className="flex gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Usage
<Navigation 
  logo="Logo"
  links={[
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' }
  ]}
/>`
  }
};

export function ComponentDetailPage() {
  const { componentId } = useParams<{ componentId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  // Handle case when componentId is undefined
  if (!componentId) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <Link 
            to="/components"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Components
          </Link>
          <h1 className="text-4xl dark:text-white">Component ID not provided</h1>
        </div>
      </div>
    );
  }

  const component = componentData[componentId];

  if (!component) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <Link 
            to="/components"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Components
          </Link>
          <h1 className="text-4xl dark:text-white">Component not found</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Component "{componentId}" does not exist.
          </p>
        </div>
      </div>
    );
  }

  const handleCopy = async () => {
    try {
      // Try using the Clipboard API
      await navigator.clipboard.writeText(component.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = component.code;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-32">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Components
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2 dark:text-white">{component.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Live preview and code example
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                activeTab === 'preview'
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                activeTab === 'code'
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Code
            </button>
          </div>

          {activeTab === 'code' && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors self-start sm:self-auto"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          {activeTab === 'preview' ? (
            <div className="p-4 sm:p-8 md:p-12 bg-gray-50 dark:bg-gray-800/50 min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
              <div className="w-full max-w-4xl">
                {component.preview}
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="bg-[#1e1e1e] text-gray-100 p-4 sm:p-6 overflow-x-auto">
                <pre className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                  <code>{component.code}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Usage Notes */}
        <div className="mt-8 p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="text-lg font-medium dark:text-white mb-2">How to use</h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2 list-disc pl-5">
            <li>Copy the code from the Code tab</li>
            <li>Paste it into your React project</li>
            <li>Make sure you have Tailwind CSS installed and configured</li>
            <li>Customize the component as needed for your use case</li>
            <li>For dark mode support, ensure your Tailwind config includes dark mode</li>
          </ul>
        </div>
      </div>
    </div>
  );
}