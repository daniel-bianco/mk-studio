"use client";

import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Небольшая задержка перед началом анимации для плавности
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex items-center px-6 md:px-12 lg:px-24 overflow-hidden bg-black">
      
      {/* 🎥 Background Video с плавным Fade-in */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.6]"
        >
          <source src="/bg_vid.MP4" type="video/mp4" />
        </video>
        {/* Градиент для глубины и читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* 🖋 Content Container */}
      <div className="relative z-10 max-w-2xl text-white">
        
        {/* Локация с анимацией "снизу-вверх" */}
        <div className={`flex items-center gap-2 mb-6 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-60' : 'translate-y-4 opacity-0'}`}>
          <FaLocationDot className="text-yellow-500" />
          <span className="text-sm md:text-base tracking-[0.3em] uppercase font-light">
            Offenbach am Main
          </span>
        </div>

        {/* Заголовок с элегантным появлением */}
        <h1 
          className={`text-5xl md:text-7xl font-serif leading-[1.1] mb-8 transition-all duration-[1200ms] delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
        >
          Пространство <br />
          <span className="italic text-yellow-500/90">мужского</span> стиля
        </h1>

        {/* Описание */}
        <p className={`text-lg md:text-xl font-light text-white/70 max-w-md mb-12 transition-all duration-[1200ms] delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Стрижки, бритьё и уход, где каждая деталь имеет значение для вашего образа.
        </p>

        {/* Кнопка с эффектом при наведении */}
        <div className={`transition-all duration-[1200ms] delay-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <a
            href="https://fresha.com/"
            className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden border border-white/10 bg-yellow-500 text-black font-bold tracking-widest text-sm transition-all duration-500 hover:bg-yellow-600 active:scale-95 shadow-2xl shadow-yellow-500/20"
          >
            <span className="relative z-10">ЗАПИСАТЬСЯ</span>
            {/* Блик на кнопке при наведении */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        </div>
      </div>

      {/* Элемент декора (тонкая вертикальная линия) */}
      <div className={`absolute bottom-0 right-10 md:right-20 h-32 w-[1px] bg-gradient-to-t from-yellow-500 to-transparent transition-all duration-[2000ms] delay-[1500ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}></div>
    </section>
  );
}