import React, { useEffect, useRef } from 'react';

interface Heart {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export const FloatingHearts: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heartsRef = useRef<Heart[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createHeart = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: Math.random() * 15 + 10,
      speed: Math.random() * 2 + 1,
      opacity: 1,
    });

    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.beginPath();
      ctx.translate(x, y);
      ctx.scale(size / 30, size / 30);
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-15, -15, -15, -7, 0, 5);
      ctx.bezierCurveTo(15, -7, 15, -15, 0, 0);
      ctx.fillStyle = `rgba(255, 182, 193, ${opacity})`;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.1) {
        heartsRef.current.push(createHeart());
      }

      heartsRef.current = heartsRef.current.filter((heart) => {
        heart.y -= heart.speed;
        heart.opacity -= 0.005;
        drawHeart(ctx, heart.x, heart.y, heart.size, heart.opacity);
        return heart.opacity > 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};