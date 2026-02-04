"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./lib/firebase";

interface Service {
  id: string;
  service: string;
  description: string;
  price: number;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "services"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Service[];

      setServices(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="services" className="py-10 pb-30 px-6 md:px-12 lg:px-24 bg-black text-white">
      {/* Header */}
      <div className="text-center mb-24">
        <p className="tracking-widest text-sm text-neutral-400 mb-3">
          SERVICE LIST
        </p>
        <h2 className="text-4xl md:text-5xl font-serif uppercase">
          Our Popular Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-x-24 gap-y-16 max-w-6xl mx-auto">
        {services.map((s) => (
          <div key={s.id}>
            {/* Title row */}
            <div className="flex items-center gap-4 mb-3">
              <h3 className="uppercase tracking-wide text-sm font-semibold whitespace-nowrap">
                {s.service}
              </h3>

              {/* dotted line */}
              <span className="flex-1 border-b border-dotted border-neutral-600"></span>

              {/* price */}
              <span className="text-lg text-yellow-100 font-bold whitespace-nowrap">
                €{s.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              {s.description}
            </p>
          </div>
        ))}
      </div>

      {/* Fancy Book Button */}
      <div className="flex justify-center mt-20">
        <a
          href="https://fresha.com/"
          className="group relative inline-flex items-center gap-2 px-6 py-3 text-lg font-bold uppercase tracking-wider border-2 border-[#c8a46e]/50 bg-transparent text-[#c8a46e] overflow-hidden"
        >
          <span>BOOK NOW</span>
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          
          {/* Hover background */}
          <div className="absolute inset-0 bg-white text-black opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Border glow */}
          <div className="absolute inset-0 border-2 border-[#c8a46e] opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
}
