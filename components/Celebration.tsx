
import React from 'react';

export const Celebration: React.FC = () => {
  return (
    <div className="z-10 text-center flex flex-col items-center justify-center p-6 animate-in zoom-in duration-500">
      <div className="mb-8 relative">
        {/* Cute cat/love gif placeholder */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src="besos.gif"
            alt="Cute Cat"
            className="w-full max-w-xs md:max-w-md h-auto"
          />
        </div>
        <div className="absolute -top-6 -right-6 text-5xl animate-bounce">💖</div>
        <div className="absolute -bottom-6 -left-6 text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>💝</div>
      </div>

      <h1 className="text-5xl md:text-7xl font-pacifico text-[#ff4d6d] mb-4 drop-shadow-md">
        Ура-а-а! 
      </h1>
      <h2 className="text-3xl md:text-5xl font-pacifico text-[#ff4d6d] mb-8">
        Я тебя люблю! ❤️
      </h2>
      
      <p className="text-[#ff4d6d] text-lg font-medium max-w-md italic">
        Ты мой самый любимый пупсеныш!!!!!!!!!
      </p>
    </div>
  );
};
