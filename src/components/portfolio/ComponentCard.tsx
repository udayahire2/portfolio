import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { codeToHtml } from 'shiki';

interface ComponentCardProps {
  name: string;
  description: string;
  component: React.ComponentType;
  code: string;
}

export function ComponentCard({ name, description, component: Component, code }: ComponentCardProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    // Generate syntax highlighted HTML using Shiki
    const highlightCode = async () => {
      try {
        const html = await codeToHtml(code, {
          lang: 'tsx',
          theme: 'vitesse-dark'
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error('Error highlighting code:', error);
        setHighlightedCode(`<pre><code>${code}</code></pre>`);
      }
    };

    if (activeTab === 'code') {
      highlightCode();
    }
  }, [code, activeTab]);

  const handleCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = code;
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

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-semibold dark:text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between px-6 pt-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeTab === 'preview'
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeTab === 'code'
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Code
          </button>
        </div>

        {activeTab === 'code' && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">Copy</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="relative">
        {activeTab === 'preview' ? (
          <div className="p-8 min-h-[280px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50">
            <Component />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div
              className="code-highlight text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
              style={{
                background: '#1e1e1e',
                padding: '1.5rem',
                minHeight: '280px'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
