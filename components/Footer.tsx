// components/Footer.tsx
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTelegramFill } from "react-icons/ri"; // RiTelegram2Fill -> RiTelegramFill (стандартный)

export default function Footer() {
  return (
    <footer id="contacts" className="py-16 bg-neutral-800 text-white/60 px-5 md:px-12 lg:px-24 text-center text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Book Appointment Button */}
        <div className="mb-12">
          <a
            href="#book" // или href="https://wa.me/49123456789" для WhatsApp
            className="inline-block bg-[#c8a46e] hover:bg-[#b8945a] text-black font-bold py-4 px-8 text-lg uppercase tracking-wider border-0 transition-colors duration-300"
          >
            Book Appointment
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <a
            href="https://t.me/your_mkstudio" // замени на реальный
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity w-6 h-6"
            aria-label="Telegram"
          >
            <RiTelegramFill className="w-full h-full" />
          </a>

          <a
            href="https://instagram.com/mk_studio_offenbach" // замени на реальный
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity w-6 h-6"
            aria-label="Instagram"
          >
            <FaInstagram className="w-full h-full" />
          </a>

          <a
            href="https://wa.me/49123456789" // замени номер на реальный MK Studio
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity w-6 h-6"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-full h-full" />
          </a>
        </div>

        {/* Copyright */}
        <p className="opacity-60">
          © 2026 MK Studio · All rights reserved · Developed by Daniel Bianco
        </p>
      </div>
    </footer>
  );
}
