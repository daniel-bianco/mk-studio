// components/Hero.tsx
import { FaLocationDot } from "react-icons/fa6";


export default function Hero() {
  return (
    <section className="hero relative h-screen flex items-center px-5 md:px-10 lg:px-20">
      {/* Видео на фоне */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://black-jackbarbershop.com/wp-content/uploads/2024/07/Blackjack-Barber-Dubai.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {/* Темный градиент поверх видео */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Контент поверх видео */}
      <div className="relative max-w-lg text-white z-10">
        <h1 className="text-6xl font-serif mb-6" style={{ textShadow: "0 0 20px rgba(255,255,255,0.2)" }}>
          Пространство мужского стиля
          <span className='mt-2 flex text-lg align-center'><FaLocationDot className='mt-1 text-lg mr-3'/> Offenbach am Main</span>
        </h1>
        <p className="text-lg opacity-90 mb-10">
          Стрижки, бритьё и уход, где каждая деталь имеет значение
        </p>
        <a
          href="https://fresha.com/"
          className="inline-block px-10 py-4 text-xs border border-white rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
        >
          ЗАПИСАТЬСЯ
        </a>
      </div>
    </section>
  );
}