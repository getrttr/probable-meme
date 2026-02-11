
import React, { useState, useCallback } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { Celebration } from './components/Celebration';

const NO_PHRASES = [
  "Точно не хочешь?",
  "Подумай еще раз!",
  "А если я попрошу очень сильно?",
  "Кнопка сломалась, жми Да!",
  "Даже не пытайся!",
  "Вика, ну хватит!",
  "Пожалуйста...",
];

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonText, setNoButtonText] = useState("Нет");
  const [noScale, setNoScale] = useState(1);
  const [yesScale, setYesScale] = useState(1);

  const handleNoClick = useCallback(() => {
    // Decrease No button size (min 0.05)
    setNoScale((prev) => Math.max(0.05, prev - 0.15));
    
    // Increase Yes button size
    setYesScale((prev) => prev + 0.4);
    
    // Change phrase
    const randomPhrase = NO_PHRASES[Math.floor(Math.random() * NO_PHRASES.length)];
    setNoButtonText(randomPhrase);
  }, []);

  const handleYes = () => {
    setIsAccepted(true);
    // Trigger confetti from the global script
    if ((window as any).confetti) {
      (window as any).confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffffff']
      });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#fff0f3]">
      <FloatingHearts />

      {!isAccepted ? (
        <div className="z-10 text-center px-4 w-full flex flex-col items-center animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-6xl font-pacifico text-[#ff4d6d] mb-16 drop-shadow-sm px-4">
            Вика, ты будешь моей валентинкой?
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-12 items-center justify-center min-h-[400px] w-full max-w-5xl px-4 overflow-visible">
            <button
              onClick={handleYes}
              style={{ 
                transform: `scale(${yesScale})`, 
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
              }}
              className="px-10 py-4 bg-[#ff4d6d] hover:bg-[#ff758f] text-white rounded-full text-2xl font-bold shadow-xl z-20 whitespace-nowrap active:scale-95"
            >
              ДА! ❤️
            </button>

            <button
              onClick={handleNoClick}
              style={{ 
                transform: `scale(${noScale})`, 
                transition: 'transform 0.2s ease-out',
                opacity: noScale < 0.2 ? 0.5 : 1
              }}
              className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-full text-sm font-medium shadow-md z-10 whitespace-nowrap active:scale-75"
            >
              {noButtonText}
            </button>
          </div>
        </div>
      ) : (
        <Celebration />
      )}
    </div>
  );
};

export default App;
