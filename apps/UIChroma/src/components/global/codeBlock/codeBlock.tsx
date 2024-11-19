import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string
}

export function CodeBlock ({  code }: CodeBlockProps ) {
  return (
    <SyntaxHighlighter language="jsx"
    style={vscDarkPlus}
    customStyle={{
      maxWidth: '100%',
      width: '100%',
      height: '100%',
      padding: '22px',
      borderRadius: '12px',
      background: 'none',
      scrollbarWidth: 'thin',
      scrollbarColor: 'unset',
      color: 'white',
      colorRendering: 'optimizeQuality',
      fontFamily: "'JetBrains Mono', monospace", 
    }}
    showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};


