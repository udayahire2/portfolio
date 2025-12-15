import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Search, Command } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { componentLibraryData } from './componentLibraryData';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const isComponentsPage = location.pathname === '/components';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    // If we're on components page, navigate to home first
    if (isComponentsPage) {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleLogoClick = () => {
    if (isComponentsPage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleComponentsClick = () => {
    navigate('/components');
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Project', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
    { label: 'Components', id: 'components', isRoute: true }
  ];

  // Flatten all components from categories
  const allComponents = componentLibraryData.flatMap(category => 
    category.components.map(comp => ({
      label: comp.name,
      id: comp.id,
      type: 'component' as const,
      category: category.categoryName,
      keywords: [comp.name.toLowerCase(), category.categoryName.toLowerCase(), comp.description.toLowerCase()]
    }))
  );

  const searchableContent = [
    { label: 'About', id: 'about', type: 'section' as const, keywords: ['about', 'introduction', 'developer', 'web developer'] },
    { label: 'Skills', id: 'skills', type: 'section' as const, keywords: ['skills', 'technologies', 'frontend', 'react', 'javascript'] },
    { label: 'Projects', id: 'projects', type: 'section' as const, keywords: ['projects', 'work', 'portfolio', 'applications'] },
    { label: 'Experience', id: 'experience', type: 'section' as const, keywords: ['experience', 'work history', 'jobs', 'career'] },
    { label: 'Resume', id: 'resume', type: 'section' as const, keywords: ['resume', 'cv', 'download', 'pdf'] },
    { label: 'Contact', id: 'contact', type: 'section' as const, keywords: ['contact', 'email', 'reach out', 'get in touch'] },
    ...allComponents
  ];

  const filteredResults = searchableContent.filter(item => 
    searchQuery && (
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some(keyword => keyword.includes(searchQuery.toLowerCase()))
    )
  );

  const handleSearchResultClick = (result: typeof searchableContent[0]) => {
    if (result.type === 'component') {
      navigate('/components');
      setIsSearchOpen(false);
      setSearchQuery('');
      // TODO: Select the component in the sidebar
    } else {
      scrollToSection(result.id);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-white dark:bg-gray-900'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="text-2xl font-normal hover:opacity-70 transition-opacity dark:text-white"
              style={{ fontFamily: 'Calibri, sans-serif' }}
            >
              Uday Ahire
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-11">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => link.isRoute ? handleComponentsClick() : scrollToSection(link.id)}
                  className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
                  style={{ letterSpacing: '0.01em' }}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Search Bar - Desktop Only */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">Search</span>
                <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                  <Command className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">K</span>
                </div>
              </button>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
              >
                {isDark ? (
                  <Moon className="w-6 h-6" />
                ) : (
                  <Sun className="w-6 h-6" />
                )}
                <span className="hidden sm:inline text-lg">
                  {isDark ? 'Dark' : 'Light'}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors dark:text-gray-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-4 py-4 border-t border-gray-200 dark:border-gray-700">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => link.isRoute ? handleComponentsClick() : scrollToSection(link.id)}
                  className="text-lg text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={() => {
            setIsSearchOpen(false);
            setSearchQuery('');
          }}
        >
          <div 
            className="w-full max-w-2xl bg-[#2a3441] rounded-xl shadow-2xl overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-700">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-base text-gray-300 placeholder:text-gray-500"
                autoFocus
              />
              <div className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-400">
                ESC
              </div>
            </div>

            {/* Search Results */}
            <div className="min-h-[200px] max-h-96 overflow-y-auto">
              {searchQuery === '' ? (
                <div className="px-6 py-16 text-center text-gray-400 text-sm">
                  Type to search through portfolio sections
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="py-2">
                  {filteredResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleSearchResultClick(result)}
                      className="w-full px-6 py-3 text-left hover:bg-gray-700/40 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center">
                          <span className="text-blue-400 text-sm font-medium">
                            {result.label[0]}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-200">{result.label}</div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {result.type === 'component' ? `Component · ${'category' in result ? result.category : ''}` : 'Section'}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">↵</div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-16 text-center text-gray-400 text-sm">
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-[#242b36] border-t border-gray-700">
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-700/50 rounded text-gray-400">↵</kbd>
                  <span>to select</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-700/50 rounded text-gray-400">ESC</kbd>
                  <span>to close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}