// ==========================================
// DEMO COMPONENTS
// ==========================================

// Cards Category
const BasicCard = () => (
  <div className="w-80 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">A simple, clean card component with minimal styling and smooth hover effects.</p>
  </div>
);

const HoverCard = () => (
  <div className="w-80 h-64 bg-gray-900 rounded-xl p-6 relative overflow-hidden group cursor-pointer border border-gray-800">
    <div className="relative z-10">
      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Hover Card</h3>
      <p className="text-gray-400 text-sm">Beautiful gradient on hover</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const ThreeDCard = () => (
  <div className="perspective-1000">
    <div className="w-80 h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-2">3D Card</h3>
      <p className="text-indigo-100">Hover to see the transform effect</p>
    </div>
  </div>
);

const GlassCard = () => (
  <div className="relative w-80 h-48 rounded-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
    <div className="absolute inset-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6">
      <h3 className="text-2xl font-bold text-white mb-2">Glass Card</h3>
      <p className="text-white/90 text-sm">Glassmorphism design style</p>
    </div>
  </div>
);

// Buttons Category
const PrimaryButton = () => (
  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm">
    Primary Button
  </button>
);

const IconButton = () => (
  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-medium transition-colors">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
    Icon Button
  </button>
);

const GradientButton = () => (
  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
    Gradient Button
  </button>
);

const LoadingButton = () => (
  <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium opacity-70 cursor-not-allowed">
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Loading...
  </button>
);

// Inputs Category
const TextInput = () => (
  <input 
    type="text" 
    placeholder="Enter your name" 
    className="w-80 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-all"
  />
);

const SearchInput = () => (
  <div className="relative w-80">
    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input 
      type="search" 
      placeholder="Search..." 
      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
    />
  </div>
);

// Text Category
const GradientText = () => (
  <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    Gradient Text
  </h1>
);

const AnimatedText = () => (
  <h2 className="text-4xl font-bold text-gray-900 dark:text-white animate-pulse">
    Animated Text
  </h2>
);

// ==========================================
// CATEGORIZED DATA STRUCTURE
// ==========================================

export interface ComponentItem {
  id: string;
  name: string;
  description: string;
  isNew?: boolean;
  component: React.ComponentType;
  code: string;
  codeJsx?: string;
}

export interface ComponentCategory {
  categoryName: string;
  categoryId: string;
  components: ComponentItem[];
}

export const componentLibraryData: ComponentCategory[] = [
  {
    categoryName: "Buttons",
    categoryId: "buttons",
    components: [
      {
        id: "primary-button",
        name: "Primary Button",
        description: "A standard primary action button with hover effects and clean styling.",
        component: PrimaryButton,
        code: `const PrimaryButton = () => {
  return (
    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm">
      Primary Button
    </button>
  );
};

export default PrimaryButton;`
      },
      {
        id: "icon-button",
        name: "Icon Button",
        description: "Button with an integrated icon for enhanced visual communication.",
        component: IconButton,
        code: `const IconButton = () => {
  return (
    <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-medium transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
      Icon Button
    </button>
  );
};

export default IconButton;`
      },
      {
        id: "gradient-button",
        name: "Gradient Button",
        description: "Eye-catching button with gradient background and hover effects.",
        isNew: true,
        component: GradientButton,
        code: `const GradientButton = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
      Gradient Button
    </button>
  );
};

export default GradientButton;`
      },
      {
        id: "loading-button",
        name: "Loading Button",
        description: "Button with loading spinner state for async operations.",
        component: LoadingButton,
        code: `const LoadingButton = () => {
  return (
    <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium opacity-70 cursor-not-allowed">
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading...
    </button>
  );
};

export default LoadingButton;`
      }
    ]
  },
  {
    categoryName: "Inputs & Forms",
    categoryId: "inputs-forms",
    components: [
      {
        id: "text-input",
        name: "Text Input",
        description: "Clean text input with focus states and dark mode support.",
        component: TextInput,
        code: `const TextInput = () => {
  return (
    <input 
      type="text" 
      placeholder="Enter your name" 
      className="w-80 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-all"
    />
  );
};

export default TextInput;`
      },
      {
        id: "search-input",
        name: "Search Input",
        description: "Search input with integrated icon and modern styling.",
        isNew: true,
        component: SearchInput,
        code: `const SearchInput = () => {
  return (
    <div className="relative w-80">
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input 
        type="search" 
        placeholder="Search..." 
        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
      />
    </div>
  );
};

export default SearchInput;`
      }
    ]
  },
  {
    categoryName: "Cards",
    categoryId: "cards",
    components: [
      {
        id: "basic-card",
        name: "Basic Card",
        description: "A simple, clean card component with minimal styling and smooth hover effects.",
        component: BasicCard,
        code: `const BasicCard = () => {
  return (
    <div className="w-80 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">A simple, clean card component with minimal styling and smooth hover effects.</p>
    </div>
  );
};

export default BasicCard;`
      },
      {
        id: "hover-card",
        name: "Hover Card",
        description: "A sleek card with gradient overlay on hover. Clean and modern design for feature highlights.",
        component: HoverCard,
        code: `const HoverCard = () => {
  return (
    <div className="w-80 h-64 bg-gray-900 rounded-xl p-6 relative overflow-hidden group cursor-pointer border border-gray-800">
      <div className="relative z-10">
        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Hover Card</h3>
        <p className="text-gray-400 text-sm">Beautiful gradient on hover</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default HoverCard;`
      },
      {
        id: "3d-card",
        name: "3D Card",
        description: "An interactive card with 3D transform effects on hover. Creates depth and engagement in your UI.",
        isNew: true,
        component: ThreeDCard,
        code: `const ThreeDCard = () => {
  return (
    <div className="perspective-1000">
      <div className="w-80 h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-2">3D Card</h3>
        <p className="text-indigo-100">Hover to see the transform effect</p>
      </div>
    </div>
  );
};

export default ThreeDCard;`
      },
      {
        id: "glass-card",
        name: "Glass Card",
        description: "Glassmorphism design with backdrop blur. Modern, elegant, and perfect for overlays.",
        isNew: true,
        component: GlassCard,
        code: `const GlassCard = () => {
  return (
    <div className="relative w-80 h-48 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
      <div className="absolute inset-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-white mb-2">Glass Card</h3>
        <p className="text-white/90 text-sm">Glassmorphism design style</p>
      </div>
    </div>
  );
};

export default GlassCard;`
      }
    ]
  },
  {
    categoryName: "Text & Typography",
    categoryId: "text-typography",
    components: [
      {
        id: "gradient-text",
        name: "Gradient Text",
        description: "Text with gradient color effect using background-clip technique.",
        component: GradientText,
        code: `const GradientText = () => {
  return (
    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Gradient Text
    </h1>
  );
};

export default GradientText;`
      },
      {
        id: "animated-text",
        name: "Animated Text",
        description: "Text with subtle pulse animation for emphasis.",
        component: AnimatedText,
        code: `const AnimatedText = () => {
  return (
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white animate-pulse">
      Animated Text
    </h2>
  );
};

export default AnimatedText;`
      }
    ]
  }
];
