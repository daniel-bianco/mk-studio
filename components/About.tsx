"use client";

import { motion } from "framer-motion";
import { GiRazor, GiScissors, GiComb } from "react-icons/gi"; 
import { HiBadgeCheck } from "react-icons/hi";
import { SlMustache } from "react-icons/sl";

export default function About() {
  const services = [
    {
      title: "Trims and Fades",
      description: "Our barbers are specialists in providing the cleanest fades.",
      icon: HiBadgeCheck,
    },
    {
      title: "Classic Haircut",
      description: "Step into MK Studio. Our master barbers can give you the perfect classic haircut.",
      icon: HiBadgeCheck,
    },
    {
      title: "Straight Razor Shave",
      description: "A fresh clean shave to leave you feeling and looking absolutely amazing.",
      icon: GiRazor,
    },
    {
      title: "Aesthetic Styling",
      description: "Pompadour or slickback — our barbers are masters at the art of styling.",
      icon: SlMustache,
    },
  ];

  // Константа для идеального бесшовного цикла (4 полосы по 40px = 160px)
  const poleStep = 160;

  return (
    <section id="about" className="relative py-24 md:py-40 px-6 bg-[#030303] text-white overflow-hidden">
      
      {/* 🏁 СЕТКА С ПЛАВНЫМ ЗАТУХАНИЕМ */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#c8a46e 0.5px, transparent 0.5px), linear-gradient(90deg, #c8a46e 0.5px, transparent 0.5px)`, 
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
        }} 
      />

      {/* 🌫️ МЯГКИЙ ШУМ */}
      <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* 💈 БЕСШОВНЫЕ БОКОВЫЕ BARBER POLES (СИНЕ-КРАСНО-БЕЛЫЕ) */}
      <div className="absolute top-0 left-0 w-[4px] h-full bg-[#111] hidden lg:block overflow-hidden border-r border-white/5 shadow-[2px_0_15px_rgba(0,0,0,0.5)]">
        <div className="w-full h-[calc(100%+160px)] animate-[poleFlow_4s_linear_infinite]" 
             style={{ 
               background: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 40px, #d12d2d 40px, #d12d2d 80px, #ffffff 80px, #ffffff 120px, #1a4ba1 120px, #1a4ba1 160px)',
               backgroundSize: `100% ${poleStep}px`
             }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      <div className="absolute top-0 right-0 w-[4px] h-full bg-[#111] hidden lg:block overflow-hidden border-l border-white/5 shadow-[-2px_0_15px_rgba(0,0,0,0.5)]">
        <div className="w-full h-[calc(100%+160px)] animate-[poleFlow_4s_linear_infinite]" 
             style={{ 
               background: 'repeating-linear-gradient(-45deg, #ffffff 0px, #ffffff 40px, #d12d2d 40px, #d12d2d 80px, #ffffff 80px, #ffffff 120px, #1a4ba1 120px, #1a4ba1 160px)',
               backgroundSize: `100% ${poleStep}px`
             }} />
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-black/50" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="flex flex-col items-center mb-24 text-center">
          {/* Горизонтальный Barber Pole под заголовком */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "160px", opacity: 1 }}
            className="h-[4px] mb-10 overflow-hidden relative rounded-full border border-white/10"
          >
             <div className="absolute inset-0 w-[200%] h-full animate-[stripeMove_2s_linear_infinite]" 
                  style={{ background: 'repeating-linear-gradient(90deg, #d12d2d 0px, #d12d2d 20px, #fff 20px, #fff 40px, #1a4ba1 40px, #1a4ba1 60px, #fff 60px, #fff 80px)' }} />
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-serif uppercase leading-[0.85] tracking-tighter mb-4">
            The Art of <br /> <span className="text-[#c8a46e]">Barbering</span>
          </h2>
          <p className="text-[10px] tracking-[0.8em] text-neutral-500 uppercase font-light">Heritage & Precision</p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#080808]/40 backdrop-blur-sm border border-white/5 p-12 flex flex-col items-center text-center transition-all duration-500 hover:border-[#c8a46e]/30"
              >
                <div className="mb-8 text-[#c8a46e] group-hover:scale-110 transition-transform duration-500">
                  <Icon size={32} />
                </div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {service.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c8a46e]/60 group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes poleFlow {
          from { transform: translateY(0); }
          /* Смещение ровно на 160px (высота полного цикла всех 4-х цветов) */
          to { transform: translateY(-${poleStep}px); }
        }
        @keyframes stripeMove {
          from { transform: translateX(-80px); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}