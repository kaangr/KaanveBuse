import React from 'react';

interface ImageSlideProps {
  src: string;
  isActive: boolean;
}

export const ImageSlide: React.FC<ImageSlideProps> = ({ src, isActive }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000 ${
      isActive ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <img
      src={src}
      alt="Love Story Moment"
      className="w-full h-full object-cover"
    />
  </div>
);