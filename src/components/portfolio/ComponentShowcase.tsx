import { ComponentCard } from './ComponentCard';

// Example demo components
const DemoButton = () => (
  <div className="flex flex-wrap gap-3">
    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
      Primary
    </button>
    <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
      Secondary
    </button>
    <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium">
      Outline
    </button>
  </div>
);

const DemoCard = () => (
  <div className="max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2 dark:text-white">Feature Card</h3>
    <p className="text-gray-600 dark:text-gray-400">
      A beautiful card component with icon, title, and description. Perfect for feature highlights.
    </p>
  </div>
);

const DemoBadge = () => (
  <div className="flex flex-wrap gap-3">
    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
      New
    </span>
    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
      Success
    </span>
    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium">
      Warning
    </span>
    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-medium">
      Error
    </span>
  </div>
);

const DemoInput = () => (
  <div className="max-w-sm space-y-4">
    <div>
      <label className="block text-sm font-medium mb-2 dark:text-gray-300">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2 dark:text-gray-300">Message</label>
      <textarea
        placeholder="Type your message..."
        rows={3}
        className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
      />
    </div>
  </div>
);

const DemoToggle = () => (
  <div className="flex items-center gap-3">
    <button className="relative w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors">
      <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md" />
    </button>
    <button className="relative w-14 h-7 bg-blue-600 rounded-full transition-colors">
      <span className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md" />
    </button>
  </div>
);

const DemoProgress = () => (
  <div className="max-w-sm space-y-4">
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="dark:text-gray-300">Progress</span>
        <span className="dark:text-gray-400">75%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-blue-600 rounded-full" />
      </div>
    </div>
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="dark:text-gray-300">Loading</span>
        <span className="dark:text-gray-400">45%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full w-[45%] bg-emerald-600 rounded-full" />
      </div>
    </div>
  </div>
);

// Component data with code strings
export const componentShowcaseData = [
  {
    id: 'button',
    name: 'Button',
    description: 'Multiple button variants with hover states and transitions',
    component: DemoButton,
    code: `const Button = ({ variant = 'primary', children }) => {
  const variants = {
    primary: 'px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700',
    secondary: 'px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300',
    outline: 'px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50'
  };

  return (
    <button className={\`\${variants[variant]} transition-colors font-medium\`}>
      {children}
    </button>
  );
};

export default Button;`
  },
  {
    id: 'card',
    name: 'Feature Card',
    description: 'Card component with icon, title, and description for feature highlights',
    component: DemoCard,
    code: `const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;`
  },
  {
    id: 'badge',
    name: 'Badge',
    description: 'Status badges with multiple color variants for different states',
    component: DemoBadge,
    code: `const Badge = ({ variant = 'default', children }) => {
  const variants = {
    default: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    success: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
    error: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
  };

  return (
    <span className={\`px-3 py-1 \${variants[variant]} rounded-full text-sm font-medium\`}>
      {children}
    </span>
  );
};

export default Badge;`
  },
  {
    id: 'input',
    name: 'Input Field',
    description: 'Form input components with labels and focus states',
    component: DemoInput,
    code: `const Input = ({ label, type = 'text', placeholder, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
        {...props}
      />
    </div>
  );
};

export default Input;`
  },
  {
    id: 'toggle',
    name: 'Toggle Switch',
    description: 'Interactive toggle switches for boolean states',
    component: DemoToggle,
    code: `const Toggle = ({ checked, onChange }) => {
  return (
    <button
      onClick={onChange}
      className={\`relative w-14 h-7 rounded-full transition-colors \${
        checked ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'
      }\`}
    >
      <span
        className={\`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md \${
          checked ? 'right-1' : 'left-1'
        }\`}
      />
    </button>
  );
};

export default Toggle;`
  },
  {
    id: 'progress',
    name: 'Progress Bar',
    description: 'Progress indicators with percentage display',
    component: DemoProgress,
    code: `const Progress = ({ label, value, max = 100 }) => {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="dark:text-gray-300">{label}</span>
        <span className="dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all"
          style={{ width: \`\${percentage}%\` }}
        />
      </div>
    </div>
  );
};

export default Progress;`
  }
];

export function ComponentShowcase() {
  return (
    <section className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-3 dark:text-white">Component Library</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          A collection of reusable React components built with TypeScript and Tailwind CSS. 
          Production-ready, accessible, and fully customizable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {componentShowcaseData.map((component) => (
          <ComponentCard
            key={component.id}
            name={component.name}
            description={component.description}
            component={component.component}
            code={component.code}
          />
        ))}
      </div>
    </section>
  );
}
