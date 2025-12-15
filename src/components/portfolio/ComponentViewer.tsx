import { useState, useEffect, useRef } from 'react';
import { Copy, Check, ChevronDown, Menu } from 'lucide-react';
import { codeToHtml } from 'shiki';

interface ComponentViewerProps {
  name: string;
  description: string;
  component: React.ComponentType;
  code: string;
  codeJsx?: string;
  onToggleSidebar: () => void;
}

type Language = 'tsx' | 'jsx';

export function ComponentViewer({ name, description, component: Component, code, codeJsx, onToggleSidebar }: ComponentViewerProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('tsx');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const currentCode = selectedLanguage === 'tsx' ? code : (codeJsx || code);
        const html = await codeToHtml(currentCode, {
          lang: selectedLanguage,
          theme: 'vitesse-dark'
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error('Error highlighting code:', error);
        const currentCode = selectedLanguage === 'tsx' ? code : (codeJsx || code);
        setHighlightedCode(`<pre><code>${currentCode}</code></pre>`);
      }
    };

    if (activeTab === 'code') {
      highlightCode();
    }
  }, [code, codeJsx, activeTab, selectedLanguage]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentCode = selectedLanguage === 'tsx' ? code : (codeJsx || code);
    const textArea = document.createElement('textarea');
    textArea.value = currentCode;
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

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (lang: Language, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
  };

  const languages = [
    { value: 'tsx' as Language, label: 'TypeScript', icon: 'TS' },
    { value: 'jsx' as Language, label: 'JavaScript', icon: 'JS' }
  ];

  const currentLanguage = languages.find(lang => lang.value === selectedLanguage);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Mobile Menu Button */}
      <button
        onClick={onToggleSidebar}
        className="lg:hidden fixed top-20 left-4 z-30 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">{name}</h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800 mb-4 sm:mb-6">
        <div className="flex gap-4 sm:gap-6">
          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-2 sm:pb-3 px-1 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'preview'
                ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white'
                : 'border-transparent text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`pb-2 sm:pb-3 px-1 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white'
                : 'border-transparent text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Code
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'preview' ? (
          <div className="relative rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 p-6 sm:p-8 lg:p-12 min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-x-auto">
            <Component />
          </div>
        ) : (
          <div className="relative rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-[#1e1e1e]">
            {/* Code Header with Language Selector */}
            <div className="bg-gray-50 dark:bg-[#1e1e1e] border-b border-gray-200 dark:border-gray-800 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between flex-wrap gap-2">
              {/* Language Selector Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={handleDropdownToggle}
                  className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                    selectedLanguage === 'tsx' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {currentLanguage?.icon}
                  </span>
                  <span className="text-xs text-gray-700 dark:text-gray-300 hidden sm:inline">{currentLanguage?.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-500 dark:text-gray-400 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-40 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl overflow-hidden z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.value}
                        onClick={(e) => handleLanguageSelect(lang.value, e)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-[#252525] transition-colors text-left ${
                          selectedLanguage === lang.value ? 'bg-gray-50 dark:bg-[#252525]' : ''
                        }`}
                      >
                        <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                          lang.value === 'tsx' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-yellow-500 text-black'
                        }`}>
                          {lang.icon}
                        </span>
                        <span className="text-xs text-gray-700 dark:text-gray-300">{lang.label}</span>
                        {selectedLanguage === lang.value && (
                          <Check className="w-3.5 h-3.5 text-emerald-400 ml-auto" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 hidden sm:inline">Copy code</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content */}
            <div
              className="code-highlight overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
              style={{
                background: '#1e1e1e',
                padding: '1rem',
                minHeight: '300px',
                maxHeight: '500px',
                overflowY: 'auto',
                fontSize: '13px'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}