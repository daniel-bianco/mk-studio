"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./lib/firebase";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  id: string;
  service: string;
  description: string;
  price: number;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "services"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Service[];
      setServices(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section id="services" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-black text-white overflow-hidden">
      
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} // Срабатывает чуть раньше скролла
        className="text-center mb-24"
      >
        <p className="tracking-[0.4em] text-xs md:text-sm text-[#c8a46e] mb-4 uppercase font-light">
          Service Menu
        </p>
        <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tight">
          Our Popular Services
        </h2>
        <div className="h-[1px] w-20 bg-[#c8a46e]/40 mx-auto mt-8"></div>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-28 gap-y-12 max-w-7xl mx-auto min-h-[400px]">
        <AnimatePresence>
          {!loading && services.map((s, index) => (
            <motion.div 
              key={s.id}
              // Используем статичную анимацию вместо whileInView для каждого элемента, 
              // чтобы избежать дергания при быстром скролле
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.05, // Уменьшил задержку для большей отзывчивости
                duration: 0.5,
                ease: "easeOut" 
              }}
              className="group cursor-default"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <h3 className="uppercase tracking-[0.15em] text-sm md:text-base font-bold text-neutral-100 group-hover:text-[#c8a46e] transition-colors duration-300">
                  {s.service}
                </h3>
                <span className="flex-1 border-b border-dotted border-neutral-800 group-hover:border-[#c8a46e]/30 transition-colors duration-500"></span>
                <span className="text-xl text-[#c8a46e] font-serif italic">
                  €{s.price}
                </span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed font-light max-w-md group-hover:text-neutral-400 transition-colors duration-300">
                {s.description}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* BUTTON */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-24"
      >
        <a
          href="https://fresha.com/"
          className="group relative inline-flex items-center gap-4 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] border border-[#c8a46e] text-[#c8a46e] transition-all duration-500 hover:text-black overflow-hidden"
        >
          <span className="relative z-10">Book an Appointment</span>
          <span className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
          <div className="absolute inset-0 bg-[#c8a46e] translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-out" />
        </a>
      </motion.div>
    </section>
  );
}