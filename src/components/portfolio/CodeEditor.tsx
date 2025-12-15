import { useState, useEffect } from 'react';

interface CodeEditorProps {
  code: string;
  language: 'html' | 'css' | 'javascript' | 'tsx' | 'jsx';
  onChange: (code: string) => void;
  readOnly?: boolean;
}

export function CodeEditor({ code, language, onChange, readOnly = false }: CodeEditorProps) {
  const [value, setValue] = useState(code);

  useEffect(() => {
    setValue(code);
    }, [code]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="relative h-full">
      <textarea
        value={value}
        onChange={handleChange}
        readOnly={readOnly}
        className="w-full h-full p-6 bg-[#1e1e1e] text-gray-100 font-mono text-sm leading-6 resize-none focus:outline-none"
        spellCheck={false}
        style={{
          tabSize: 2,
          minHeight: '400px'
        }}
      />
    </div>
  );
}