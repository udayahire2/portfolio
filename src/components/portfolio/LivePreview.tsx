import { useMemo } from 'react';

interface LivePreviewProps {
  html: string;
  css: string;
  javascript: string;
}

export function LivePreview({ html, css, javascript }: LivePreviewProps) {
  const srcDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              padding: 20px;
            }
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${javascript}
            } catch (error) {
              console.error('JavaScript Error:', error);
            }
          </script>
        </body>
      </html>
    `;
  }, [html, css, javascript]);

  return (
    <iframe
      srcDoc={srcDoc}
      className="w-full h-full border-0 bg-white"
      title="Live Preview"
      sandbox="allow-scripts"
    />
  );
}