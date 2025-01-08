import React, { useState, useEffect } from 'react';
import { FadeInText } from './FadeInText';
import { FireplaceEffect } from './FireplaceEffect';

export const FireplaceEnding: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<'fireplace' | 'snow' | 'custom'>('fireplace');

  // Video ve metin eşleştirmeleri
  const content = {
    fireplace: {
      video: "https://cdn.pixabay.com/video/2023/11/26/190776-888535446_large.mp4",
      text: "Soğuk bir kış gününde şurada uzanıp gülüşmemiz dileğiyle <3 "
    },
    snow: {
      video: "https://cdn.pixabay.com/video/2022/12/11/142579-780232342_large.mp4",
      text: "Kar da yağsın artık hadi "
    },
    custom: {
      video: "/KaanveBuse/videos/video.mp4",
      text: "İstediğimiz yerde de Uno'muzu oynarız"
    }
  };

  // Video ön belleğe alma
  useEffect(() => {
    Object.values(content).forEach(({ video }) => {
      const preloadVideo = document.createElement('video');
      preloadVideo.src = video;
      preloadVideo.preload = 'auto';
    });
  }, []);

  const handleVideoChange = () => {
    setCurrentVideo(current => {
      if (current === 'fireplace') return 'snow';
      if (current === 'snow') return 'custom';
      return 'fireplace';
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <video
          key={currentVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={content[currentVideo].video} type="video/mp4" />
        </video>
      </div>
      <div className={`absolute inset-0 ${currentVideo === 'snow' ? 'bg-black/10' : 'bg-black/30'} backdrop-blur-[1px] transition-all duration-1000`}>
        <div className="h-full flex flex-col items-center justify-center">
          <div 
            className={`font-display text-3xl md:text-4xl text-center px-4 max-w-3xl mb-8 
            text-neutral-900
            transition-colors duration-[2000ms]
            ${currentVideo === 'snow' ? 'text-neutral-900' : 'text-white'}`}
          >
            <FadeInText
              text={content[currentVideo].text}
              delay={500}
            />
          </div>
          
          <button
            onClick={handleVideoChange}
            className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 text-white border border-white/50 hover:scale-105"
          >
            Manzarayı Değiştir
          </button>
        </div>
      </div>
      {currentVideo === 'fireplace' && <FireplaceEffect />}
    </div>
  );
};
