"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import { Oswald } from "next/font/google";

// Подключаем шрифт Oswald
const oswald = Oswald({ subsets: ["latin"], weight: ["400","500","700"] });

const LANGUAGES = ["ENG", "RUS", "DE"];

export default function Header() {
  const [activeLang, setActiveLang] = useState("DE");
  const [langOpen, setLangOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Плавное открытие/закрытие Dropdown
  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setLangOpen(true);
  };

  const handleMouseLeave = () => {
    setHoverTimeout(
      setTimeout(() => {
        setLangOpen(false);
      }, 300)
    );
  };

  return (
    <header
      className={`${oswald.className} fixed top-0 left-0 w-full h-30 flex items-center justify-between px-20 py-4 z-50 
      bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg`}
    >
      {/* Логотип слева */}
      <div className="text-3xl font-serif tracking-widest text-white">MK Studio</div>

      {/* Навигация по центру */}
      <nav className="flex-1 flex justify-center gap-10 pl-20">
        <a href="#about" className="text-md font-medium text-white hover:text-yellow-400 transition-colors duration-300">
          О нас
        </a>
        <a href="#services" className="text-md font-medium text-white hover:text-yellow-400 transition-colors duration-300">
          Услуги
        </a>
        <a href="#masters" className="text-md font-medium text-white hover:text-yellow-400 transition-colors duration-300">
          Мастера
        </a>
        <a href="#contacts" className="text-md font-medium text-white hover:text-yellow-400 transition-colors duration-300">
          Контакты
        </a>
      </nav>

      {/* Кнопка "Записаться" и Dropdown языков справа */}
      <div className="flex items-center gap-4">
        {/* Кнопка "Записаться" с большой стрелкой */}
        <a
          href="#"
          className="flex items-center gap-3 px-5 py-2 text-sm border border-white/30 bg-yellow-500 text-black font-bold transition-all duration-300 hover:bg-yellow-600"
        >
          ЗАПИСАТЬСЯ
            <FaArrowRight />

        </a>

        {/* Dropdown языков */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center gap-2 px-3 py-2 text-white font-semibold border border-white/20 rounded-md hover:bg-white/10 transition-all duration-300">
            {activeLang}
            <span className={`inline-block transform transition-transform duration-300 ${langOpen ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>

          {/* Список языков */}
          <ul
            className={`absolute right-0 mt-2 w-28 bg-black/70 border border-white/20 rounded-md overflow-hidden shadow-lg transition-all duration-300 
              ${langOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
          >
            {LANGUAGES.filter((lang) => lang !== activeLang).map((lang) => (
              <li
                key={lang}
                className="px-4 py-2 text-white hover:bg-yellow-500 hover:text-black cursor-pointer transition-colors duration-300"
                onClick={() => setActiveLang(lang)}
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}