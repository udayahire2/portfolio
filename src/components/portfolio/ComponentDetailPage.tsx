import { useState } from 'react';
import { ArrowLeft, Copy, Check, ChevronRight } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CodeEditor } from './CodeEditor';
import { LivePreview } from './LivePreview';

// Component data
const componentCategories = {
  'ui-elements': {
    name: 'UI Elements',
    components: ['button', 'badge', 'tooltip', 'accordion']
  },
  'layouts': {
    name: 'Layouts',
    components: ['card', 'grid']
  },
  'forms': {
    name: 'Forms',
    components: ['form', 'input']
  },
  'overlays': {
    name: 'Overlays',
    components: ['modal', 'dropdown']
  },
  'navigation': {
    name: 'Navigation',
    components: ['navigation', 'tabs']
  }
};

const componentData: Record<string, {
  name: string;
  description: string;
  category: string;
  tags: string[];
  isNew?: boolean;
  html: string;
  css: string;
  javascript: string;
  tsx: string;
}> = {
  'button': {
    name: 'Button Component',
    description: 'A collection of button styles and variants for different use cases.',
    category: 'UI Elements',
    tags: ['Button', 'Interactive'],
    isNew: true,
    html: `<div class="button-container">
  <button class="btn btn-primary">Primary Button</button>
  <button class="btn btn-secondary">Secondary Button</button>
  <button class="btn btn-outline">Outline Button</button>
</div>`,
    css: `.button-container {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #2563eb;
  color: white;
}

.btn-primary:hover {
  background: #1d4ed8;
}

.btn-secondary {
  background: #e5e7eb;
  color: #1f2937;
}

.btn-secondary:hover {
  background: #d1d5db;
}

.btn-outline {
  background: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
}

.btn-outline:hover {
  background: #eff6ff;
}`,
    javascript: `// Add click handlers
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', (e) => {
    console.log('Button clicked:', e.target.textContent);
  });
});`,
    tsx: `const Button = ({ variant = 'primary', children, ...props }) => {
  const variants = {
    primary: 'px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700',
    secondary: 'px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300',
    outline: 'px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50'
  };

  return (
    <button className={\`\${variants[variant]} transition-colors\`} {...props}>
      {children}
    </button>
  );
};

export default Button;`
  },
  'card': {
    name: 'Card Hover Effect',
    description: 'Hover over the cards and the effect slides to the currently hovered card.',
    category: 'Layouts',
    tags: ['Card', 'Special'],
    html: `<div class="card-container">
  <div class="card">
    <h3>Stripe</h3>
    <p>A technology company that builds economic infrastructure for the internet.</p>
  </div>
  <div class="card">
    <h3>Netflix</h3>
    <p>A streaming service that offers a wide variety of TV shows and movies.</p>
  </div>
  <div class="card">
    <h3>Google</h3>
    <p>A multinational technology company that specializes in Internet-related services.</p>
  </div>
</div>`,
    css: `.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: #000;
  color: white;
  padding: 40px 30px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s ease;
}

.card:hover::before {
  left: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.card h3 {
  font-size: 24px;
  margin-bottom: 12px;
}

.card p {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.8;
}`,
    javascript: `// Add interactive hover tracking
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => c.style.opacity = c === card ? '1' : '0.5');
  });
});

document.querySelector('.card-container').addEventListener('mouseleave', () => {
  cards.forEach(c => c.style.opacity = '1');
});`,
    tsx: `const CardHoverEffect = () => {
  const cards = [
    { title: 'Stripe', description: 'A technology company that builds economic infrastructure for the internet.' },
    { title: 'Netflix', description: 'A streaming service that offers a wide variety of TV shows and movies.' },
    { title: 'Google', description: 'A multinational technology company that specializes in Internet-related services.' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-black text-white p-10 rounded-xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl group"
        >
          <h3 className="text-2xl mb-3">{card.title}</h3>
          <p className="text-sm opacity-80">{card.description}</p>
        </div>
      ))}
    </div>
  );
};`
  },
  'modal': {
    name: 'Modal Dialog',
    description: 'An accessible modal dialog with backdrop blur and smooth animations.',
    category: 'Overlays',
    tags: ['Modal', 'Dialog'],
    html: `<button class="open-modal-btn">Open Modal</button>

<div class="modal-backdrop" id="modalBackdrop">
  <div class="modal">
    <h3>Modal Title</h3>
    <p>This is a modal dialog with animations and backdrop blur.</p>
    <div class="modal-actions">
      <button class="btn-close">Close</button>
      <button class="btn-confirm">Confirm</button>
    </div>
  </div>
</div>`,
    css: `.modal-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

.modal-backdrop.active {
  display: flex;
}

.modal {
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  animation: slideUp 0.3s ease;
}

.modal h3 {
  font-size: 20px;
  margin-bottom: 12px;
}

.modal p {
  color: #6b7280;
  margin-bottom: 20px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.btn-close, .btn-confirm {
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.btn-close {
  background: #e5e7eb;
  color: #1f2937;
}

.btn-confirm {
  background: #2563eb;
  color: white;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    javascript: `const backdrop = document.getElementById('modalBackdrop');
const openBtn = document.querySelector('.open-modal-btn');
const closeBtn = document.querySelector('.btn-close');

openBtn.addEventListener('click', () => {
  backdrop.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  backdrop.classList.remove('active');
});

backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) {
    backdrop.classList.remove('active');
  }
});`,
    tsx: `import { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
        Open Modal
      </button>
      
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl mb-3">Modal Title</h3>
            <p className="text-gray-600 mb-5">This is a modal dialog with animations.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-200 rounded-lg">Close</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};`
  },
  'accordion': {
    name: 'Accordion Component',
    description: 'Expandable content sections with smooth animations.',
    category: 'UI Elements',
    tags: ['Accordion', 'Collapse'],
    html: `<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">What is this?</button>
    <div class="accordion-content">
      <p>This is an accordion component that expands and collapses content.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">How does it work?</button>
    <div class="accordion-content">
      <p>Click on any section header to expand or collapse that section.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">Can I customize it?</button>
    <div class="accordion-content">
      <p>Yes! The component is fully customizable with your own styles.</p>
    </div>
  </div>
</div>`,
    css: `.accordion {
  max-width: 600px;
  margin: 0 auto;
}

.accordion-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}

.accordion-header {
  width: 100%;
  padding: 16px;
  background: #f9fafb;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.2s;
}

.accordion-header:hover {
  background: #f3f4f6;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-content p {
  padding: 16px;
  margin: 0;
  color: #6b7280;
}

.accordion-item.active .accordion-content {
  max-height: 200px;
}`,
    javascript: `document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const wasActive = item.classList.contains('active');
    
    // Close all items
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!wasActive) {
      item.classList.add('active');
    }
  });
});`,
    tsx: `import { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const items = [
    { title: 'What is this?', content: 'This is an accordion component.' },
    { title: 'How does it work?', content: 'Click on any section header.' },
    { title: 'Can I customize it?', content: 'Yes! Fully customizable.' }
  ];
  
  return (
    <div className="max-w-2xl space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100"
          >
            {item.title}
          </button>
          {openIndex === i && (
            <div className="px-4 py-3 text-gray-600">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};`
  }
};

export function ComponentDetailPage() {
  const { componentId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [activeLanguage, setActiveLanguage] = useState<'html' | 'css' | 'javascript' | 'tsx'>('html');
  const [copied, setCopied] = useState(false);
  
  // Editor state for live preview
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const component = componentId ? componentData[componentId] : null;

  // Initialize code when component changes
  useState(() => {
    if (component) {
      setHtmlCode(component.html);
      setCssCode(component.css);
      setJsCode(component.javascript);
    }
  });

  if (!component) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/components"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Components
          </Link>
          <h1 className="text-4xl dark:text-white">Component not found</h1>
        </div>
      </div>
    );
  }

  const getCurrentCode = () => {
    switch (activeLanguage) {
      case 'html': return component.html;
      case 'css': return component.css;
      case 'javascript': return component.javascript;
      case 'tsx': return component.tsx;
      default: return '';
    }
  };

  const handleCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = getCurrentCode();
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
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
  };

  // Get all components for sidebar
  const allComponents = Object.entries(componentData);
  const categorizedComponents = Object.entries(componentCategories).map(([key, cat]) => ({
    ...cat,
    items: allComponents.filter(([id]) => cat.components.includes(id))
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 pt-20">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 dark:border-gray-800 min-h-screen pt-12 px-6 pb-12 overflow-y-auto">
          <Link 
            to="/components"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All Components
          </Link>

          {categorizedComponents.map((category) => (
            <div key={category.name} className="mb-6">
              <h3 className="text-xs uppercase text-gray-500 dark:text-gray-500 mb-2 tracking-wide">
                {category.name}
              </h3>
              <div className="space-y-1">
                {category.items.map(([id, comp]) => (
                  <button
                    key={id}
                    onClick={() => navigate(`/components/${id}`)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                      componentId === id
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <span>{comp.name.replace(' Component', '').replace(' Effect', '')}</span>
                    {comp.isNew && (
                      <span className="px-2 py-0.5 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded">
                        New
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-12 px-8 pb-12 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl mb-2 dark:text-white">{component.name}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {component.description}
            </p>
            <div className="flex gap-2">
              {component.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tab Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'preview'
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'code'
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                Code
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm hover:opacity-90 transition-opacity"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy prompt</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Language Selector (only visible in Code tab) */}
          {activeTab === 'code' && (
            <div className="flex gap-2 mb-4">
              {(['html', 'css', 'javascript', 'tsx'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLanguage(lang)}
                  className={`px-3 py-1.5 rounded text-xs uppercase tracking-wide transition-colors ${
                    activeLanguage === lang
                      ? 'bg-gray-900 dark:bg-gray-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}

          {/* Content Area */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            {activeTab === 'preview' ? (
              <div className="p-12 bg-gray-50 dark:bg-gray-900/50 min-h-[500px]">
                <LivePreview 
                  html={htmlCode} 
                  css={cssCode} 
                  javascript={jsCode} 
                />
              </div>
            ) : (
              <div className="bg-[#1e1e1e] overflow-hidden" style={{ height: '500px' }}>
                <CodeEditor
                  code={getCurrentCode()}
                  language={activeLanguage}
                  onChange={() => {}}
                  readOnly={true}
                />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
