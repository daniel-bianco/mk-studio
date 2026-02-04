"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Импорт иконок
import { 
  FaInstagram, 
  FaTelegramPlane, 
  FaWhatsapp 
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { 
  CalendarCheck, 
  ShoppingBag, 
  MapPin 
} from "lucide-react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleLastAnimation = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(true));
    }
  };

  return (
    <main className="h-[100dvh] w-full relative overflow-hidden text-white flex flex-col items-center justify-center bg-black font-sans">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover brightness-[0.55] transition-opacity duration-[1500ms] ease-in-out ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/bg_vid.MP4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <div className="relative w-full max-w-md px-6 z-10 flex flex-col h-full justify-center py-8">

        {/* LOGO IMAGE */}
        <div className="flex justify-center mb-6 opacity-0 animate-fade-scale" style={{ animationFillMode: 'forwards' }}>
          <div className="relative w-28 h-28 rounded-full overflow-hidden bg-black/40 backdrop-blur-xl shadow-2xl border border-white/10">
            <Image
              src="/logo_brand.jpeg" // Путь к вашему файлу в public/
              alt="MK Studio Logo"
              fill
              className="object-cover"
              priority // Загружать сразу
            />
          </div>
        </div>

        {/* TITLE & SUBTITLE */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 opacity-0 animate-fade-up delay-300" style={{ animationFillMode: 'forwards' }}>
            MK Studio
          </h1>
          <p className="text-sm text-gray-200 leading-snug opacity-0 animate-fade-up delay-500" style={{ animationFillMode: 'forwards' }}>
            Barber in Offenbach am Main <br />
            Modern fades & beard styling <br /><br />
            <span className="text-[10px] opacity-60 uppercase tracking-[0.2em]">We speak</span><br />
            🇩🇪 DE • 🇬🇧 EN • 🇺🇦 UKR • 🇷🇺 RU
          </p>
        </div>

        {/* 📱 SOCIAL ICONS */}
        <div className="flex justify-center items-center gap-7 mb-10 opacity-0 animate-fade-up delay-700" style={{ animationFillMode: 'forwards' }}>
          <Link href="https://instagram.com" target="_blank" className="p-2 text-gray-200 hover:text-white transition-all active:scale-90">
            <FaInstagram size={24} />
          </Link>

          <Link href="https://t.me" target="_blank" className="p-2 text-gray-200 hover:text-white transition-all active:scale-90">
            <FaTelegramPlane size={24} />
          </Link>

          <Link href="https://wa.me" target="_blank" className="p-2 text-gray-200 hover:text-white transition-all active:scale-90">
            <FaWhatsapp size={24} />
          </Link>

          <Link href="https://yourwebsite.com" target="_blank" className="p-2 text-gray-200 hover:text-white transition-all active:scale-90">
            <FiGlobe size={24} />
          </Link>
        </div>

        {/* 🔗 BUTTONS */}
        <div 
          className="space-y-3.5 opacity-0 animate-fade-up delay-[1000ms]" 
          style={{ animationFillMode: 'forwards' }}
          onAnimationEnd={handleLastAnimation}
        >
          <Link
            href="https://fresha.com"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full bg-white/15 backdrop-blur-2xl border border-white/20 text-white py-4 rounded-2xl text-lg font-semibold active:scale-[0.98] transition-all shadow-xl"
          >
            <CalendarCheck size={20} />
            Book an Appointment
          </Link>

          <Link
            href="#"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full bg-white/[0.06] backdrop-blur-xl border border-white/10 text-white py-4 rounded-2xl text-base font-medium active:scale-[0.98] transition-all"
          >
            <ShoppingBag size={20} />
            Products Shop
          </Link>

          <Link
            href="https://maps.google.com"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full bg-white/[0.06] backdrop-blur-xl border border-white/10 text-white py-4 rounded-2xl text-base font-medium active:scale-[0.98] transition-all"
          >
            <MapPin size={20} />
            Location on Maps
          </Link>
        </div>
      </div>
    </main>
  );
}