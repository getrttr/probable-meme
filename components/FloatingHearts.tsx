
import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * (40 - 15) + 15,
      duration: Math.random() * (10 - 5) + 5,
      delay: Math.random() * 5
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <style>{`
        @keyframes float {
          0% { transform: translateY(110vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 text-[#ff4d6d]"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            animation: `float ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
            opacity: 0,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};
