import React, { useState } from 'react';
import { Button } from './Button';
import { ImageSlide } from './ImageSlide';
import { FadeInText } from './FadeInText';
import { FireplaceEnding } from './FireplaceEnding';
import { FloatingHearts } from './FloatingHearts';

const messages = [
  "Birlikte güzel anılar biriktiriyoruz",
  "İkea yeni evimiz",
  "Seninle paylaştığım her an özel...",
  "Gülüşünü Yicem AAAAA...",
];

const images = [
  "/KaanveBuse/images/couple1.jpg",
  "/KaanveBuse/images/couple2.jpg",
  "/KaanveBuse/images/couple3.jpg",
  "/KaanveBuse/images/couple4.jpg",
];

export const LoveStory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  if (!isStarted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
        <FloatingHearts />
        <Button onClick={handleStart}>Tiktok Kaydırmayı Bıraktıysan Başlayalım</Button>
      </div>
    );
  }

  if (currentIndex === images.length - 1) {
    return <FireplaceEnding />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center p-4">
      <FloatingHearts />
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative h-96">
          {images.map((src, index) => (
            <ImageSlide
              key={src}
              src={src}
              isActive={index === currentIndex}
            />
          ))}
        </div>
        <div className="p-8 text-center">
          <div className="text-2xl mb-8">
            <FadeInText
              text={messages[currentIndex]}
              delay={300}
            />
          </div>
          <Button onClick={handleNext}>İlerle</Button>
        </div>
      </div>
    </div>
  );
};