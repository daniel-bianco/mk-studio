"use client";

import { useState, useEffect } from "react"; // Добавили useEffect
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

const LANGUAGES = ["ENG", "DE", "FA", "RUS", "UKR"];

export default function Header() {
  const [activeLang, setActiveLang] = useState("DE");
  const [langOpen, setLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- БЛОКИРОВКА СКРОЛЛА ---
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Чистим эффект при размонтировании компонента
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`${oswald.className} fixed top-0 left-0 w-full h-20 md:h-24 flex items-center justify-between px-6 md:px-12 lg:px-20 z-[100] 
      bg-black/40 backdrop-blur-lg border-b border-white/10 shadow-lg`}
    >
      {/* Логотип */}
      <Link href="/" className="relative z-[110] flex items-center group">
        <div className="w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/logo_nobg.png"
            alt="MK Studio Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Навигация десктоп */}
      <nav className="hidden lg:flex flex-1 justify-center gap-10">
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

      {/* Правая часть */}
      <div className="flex items-center gap-3 md:gap-4 z-[110]">
        {/* Языки */}
        <div 
          className="relative"
          onMouseEnter={() => setLangOpen(true)}
          onMouseLeave={() => setLangOpen(false)}
        >
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm text-white font-semibold border border-white/20 rounded-md hover:bg-white/10 transition-all">
            {activeLang}
            <span className={`text-[10px] transition-transform duration-300 ${langOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
          </button>
          
          <ul className={`absolute right-0 mt-2 w-24 bg-black/90 backdrop-blur-md border border-white/20 rounded-md overflow-hidden transition-all duration-300 shadow-2xl
            ${langOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
            {LANGUAGES.filter(l => l !== activeLang).map((lang) => (
              <li 
                key={lang} 
                onClick={() => { setActiveLang(lang); setLangOpen(false); }}
                className="px-4 py-2 text-sm text-white hover:bg-yellow-500 hover:text-black cursor-pointer transition-colors"
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>

        {/* Кнопка записи */}
        <Link
          href="/booking"
          className="hidden sm:flex items-center gap-3 px-6 py-2.5 text-sm bg-yellow-500 text-black font-bold transition-all hover:bg-yellow-600 active:scale-95 shadow-lg shadow-yellow-500/20"
        >
          ЗАПИСАТЬСЯ <FaArrowRight className="text-xs" />
        </Link>

        {/* Бургер */}
        <button 
          className="lg:hidden text-white text-2xl p-2 active:scale-90 transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={`fixed top-0 left-0 w-full h-[100dvh] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 transition-transform duration-500 z-[105] lg:hidden
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <nav className="flex flex-col items-center gap-8 text-3xl font-bold tracking-widest uppercase">
          <a href="#about" onClick={closeMenu} className="text-white hover:text-yellow-500 transition-colors">О нас</a>
          <a href="#services" onClick={closeMenu} className="text-white hover:text-yellow-500 transition-colors">Услуги</a>
          <a href="#masters" onClick={closeMenu} className="text-white hover:text-yellow-500 transition-colors">Мастера</a>
          <a href="#contacts" onClick={closeMenu} className="text-white hover:text-yellow-500 transition-colors">Контакты</a>
        </nav>

        <Link
          href="/booking"
          onClick={closeMenu}
          className="flex items-center gap-4 px-10 py-5 bg-yellow-500 text-black font-black text-lg tracking-tight active:scale-95 transition-all mt-6 shadow-xl"
        >
          ЗАПИСАТЬСЯ <FaArrowRight />
        </Link>
      </div>
    </header>
  );
}