"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Instagram, 
  Send, 
  Phone,
  CalendarCheck,
  ShoppingBag,
  MapPin
} from "lucide-react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Функция запуска видео и включения видимости
  const handleLastAnimation = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Активируем fade-in
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden text-white flex justify-center bg-black">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        /* transition-opacity задает плавность, duration-1000 — это 1 секунда */
        className={`absolute inset-0 w-full h-full object-cover brightness-75 scale-105 transition-opacity duration-1000 ease-in-out ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/bg_vid.MP4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <div className="relative w-full max-w-md px-5 py-10 z-10">

        {/* LOGO */}
        <div className="flex text-center justify-center mb-6 opacity-0 animate-fade-scale" style={{ animationFillMode: 'forwards' }}>
          <div className="w-28 h-28 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/10">
            <span className="text-4xl font-serif tracking-wider">
              MK
              <span className="block text-sm tracking-[0.4em] text-center">
                STUDIO
              </span>
            </span>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-center text-3xl font-bold mb-2 opacity-0 animate-fade-up delay-300" style={{ animationFillMode: 'forwards' }}>
          MK Studio
        </h1>

        {/* SUBTITLE */}
        <p className="text-center text-gray-200 leading-relaxed opacity-0 animate-fade-up delay-600" style={{ animationFillMode: 'forwards' }}>
          Barber in Offenbach am Main <br />
          Modern fades & beard styling <br /><br />
          We speak <br />
          🇩🇪 DE • 🇬🇧 EN • 🇺🇦 UKR • 🇷🇺 RU
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-8 mt-6 mb-8 text-gray-200 opacity-0 animate-fade-up delay-900" style={{ animationFillMode: 'forwards' }}>
          <Link href="https://instagram.com" target="_blank" className="hover:text-white transition-colors">
            <Instagram size={28} />
          </Link>
          <Link href="https://t.me" target="_blank" className="hover:text-white transition-colors">
            <Send size={28} />
          </Link>
          <Link href="https://wa.me/1234567890" target="_blank" className="hover:text-white transition-colors">
            <Phone size={28} />
          </Link>
        </div>

        {/* BUTTONS CONTAINER */}
        <div 
          className="space-y-4 opacity-0 animate-fade-up delay-[1200ms]" 
          style={{ animationFillMode: 'forwards' }}
          onAnimationEnd={handleLastAnimation}
        >
          {/* BOOK */}
          <Link
            href="https://fresha.com"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full bg-white/[0.08] backdrop-blur-[40px] border border-white/20 text-white py-5 rounded-2xl text-lg font-medium hover:bg-white/10 transition-all shadow-2xl"
          >
            <CalendarCheck size={22} />
            Book an Appointment
          </Link>

          {/* SHOP */}
          <Link
            href="#"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full bg-white/[0.08] backdrop-blur-[40px] border border-white/20 text-white py-5 rounded-2xl text-lg font-medium hover:bg-white/10 transition-all shadow-2xl"
          >
            <ShoppingBag size={22} />
            Products Shop
          </Link>

          {/* LOCATION */}
          <Link
            href="https://maps.google.com"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full bg-white/[0.08] backdrop-blur-[40px] border border-white/20 text-white py-5 rounded-2xl text-lg font-medium hover:bg-white/10 transition-all shadow-2xl"
          >
            <MapPin size={22} />
            Location on Maps
          </Link>
        </div>
      </div>
    </main>
  );
}