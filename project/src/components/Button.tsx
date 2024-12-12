import React from 'react';
import { Heart } from 'lucide-react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-8 py-4 text-xl font-display text-white bg-gradient-to-r from-red-400 to-pink-500 rounded-xl hover:from-red-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3"
  >
    <Heart className="w-6 h-6" />
    {children}
  </button>
);