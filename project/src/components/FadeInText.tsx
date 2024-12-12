import React from 'react';

interface FadeInTextProps {
  text: string;
  delay?: number;
}

export const FadeInText: React.FC<FadeInTextProps> = ({ text, delay = 0 }) => (
  <div
    className="opacity-0 animate-fadeIn font-display tracking-wide"
    style={{ 
      animationDelay: `${delay}ms`,
      textShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }}
  >
    {text}
  </div>
);