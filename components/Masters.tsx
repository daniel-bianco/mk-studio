"use client";

import { motion } from "framer-motion";

export default function Masters() {
  return (
    <section
      id="master"
      className="bg-black text-white py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        
        {/* LEFT — IMAGE (С плавным появлением и зум-эффектом) */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[720px] rounded-sm overflow-hidden shadow-2xl relative group"
        >
          <img
            src="/owner_pic.png"
            alt="Master barber"
            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
          />
          {/* Тонкий градиент поверх фото для премиальности */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <div className="flex flex-col items-start">
          {/* Small label */}
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#c8a46e] mb-4 md:mb-6 font-light"
          >
            Our Philosophy
          </motion.p>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif uppercase text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-6 md:mb-10"
          >
            Crafting <span className="text-[#c8a46e] italic">Timeless</span> <br className="hidden md:block" />
            Styles and Elevating <br className="hidden md:block" />
            Your Look
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-md mb-8 md:mb-12 font-light"
          >
            Our barber is an artisan when it comes to hair. We use only the
            finest products available in the industry, while staying up to
            date with the latest trends to ensure you are always happy.
          </motion.p>

          {/* Button (в стиле "Золотой слайд") */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#about"
              className="group relative inline-flex items-center gap-4 px-10 py-5 border border-[#c8a46e] text-[#c8a46e] uppercase tracking-[0.2em] text-xs md:text-sm font-bold transition-all duration-500 hover:text-black overflow-hidden"
            >
              <span className="relative z-10">About Us</span>
              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
              
              {/* Эффект заливки золотом */}
              <div className="absolute inset-0 bg-[#c8a46e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}