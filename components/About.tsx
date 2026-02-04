"use client";

import { motion } from "framer-motion";
import { GiRazor } from "react-icons/gi";
import { FaRedhat } from "react-icons/fa";
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
      icon: FaRedhat,
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

  return (
    <section id="about" className="py-24 md:py-40 px-6 bg-black text-white overflow-hidden">
      {/* Small title with line */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-6"
      >
        <p className="text-sm tracking-[0.4em] text-[#c8a46e] uppercase mb-4">
          Services
        </p>
        <div className="h-[1px] w-12 bg-[#c8a46e]/50"></div>
      </motion.div>

      {/* Main title */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center text-3xl md:text-5xl lg:text-6xl font-serif uppercase mb-20 md:mb-32 max-w-4xl mx-auto leading-tight"
      >
        The Best Service & <br className="hidden md:block" /> Haircuts in Town.
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0a0a0a] border border-white/5 p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-[#c8a46e]/30"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-[#c8a46e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="w-20 h-20 mb-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 group-hover:border-[#c8a46e]/50 transition-colors duration-500">
                <Icon size={32} className="text-[#c8a46e] transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 text-white group-hover:text-[#c8a46e] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-500 leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
                {service.description}
              </p>

              {/* Decorative Corner (Optional, for "Expensive" feel) */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-[#c8a46e]/0 group-hover:w-4 group-hover:h-4 group-hover:border-[#c8a46e]/40 transition-all duration-500" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}