"use client"; // Обязательно, так как используем хук

import { usePathname } from "next/navigation";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";

export default function FloatingSocials() {
  const pathname = usePathname();

  // Список путей, на которых кнопки НЕ должны отображаться
  const hiddenRoutes = ["/links"];

  // Если текущий путь есть в списке, возвращаем null (ничего не рендерим)
  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div className="fixed right-6 bottom-6 z-[9999] flex flex-col gap-4">
      {/* Instagram */}
      <a
        href="https://instagram.com/yourname"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-black border border-neutral-700 
                   flex items-center justify-center text-white
                   hover:bg-[#c13584] hover:scale-110 transition"
      >
        <FaInstagram size={20} />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/yourname"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-black border border-neutral-700 
                   flex items-center justify-center text-white
                   hover:bg-[#229ED9] hover:scale-110 transition"
      >
        <RiTelegram2Fill size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/79999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-black border border-neutral-700 
                   flex items-center justify-center text-white
                   hover:bg-[#25D366] hover:scale-110 transition"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
}