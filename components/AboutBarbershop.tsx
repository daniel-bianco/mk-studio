"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/brbshppic1.png", // Исправлен путь
    headline: "The Beginning",
    text: "Our barbershop opened its doors in Offenbach with a clear mission — uncompromising quality.",
  },
  {
    image: "/brbshppic2.png",
    headline: "Craft & Precision",
    text: "We refine our techniques daily, combining tradition with modern barbering.",
  },
  {
    image: "/brbshppic3.png",
    headline: "More Than a Cut",
    text: "A great barbershop is built on people, passion, and trust.",
  },
]

const SLIDE_DURATION = 4000

export default function AboutBarbershop() {
  const [index, setIndex] = useState(0)
  const [progressKey, setProgressKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
      setProgressKey((k) => k + 1)
    }, SLIDE_DURATION)

    return () => clearInterval(timer)
  }, [progressKey])

  const handleDotClick = (i: number) => {
    setIndex(i)
    setProgressKey((k) => k + 1)
  }

  const currentSlide = slides[index]

  return (
    <section
      id="about"
      className="bg-black text-white py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        
        {/* LEFT — CAROUSEL (Адаптивная высота) */}
        <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[720px] overflow-hidden rounded-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.headline}
                className="w-full h-full object-cover brightness-75"
              />
            </motion.div>
          </AnimatePresence>

          {/* Progress bars (Чуть изящнее) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 bg-black/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="w-8 md:w-12 h-1 bg-white/20 rounded-full overflow-hidden relative"
              >
                <motion.div
                  className="absolute inset-0 bg-[#c8a46e] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: i === index ? 1 : 0 }}
                  transition={i === index ? { duration: SLIDE_DURATION / 1000, ease: "linear" } : { duration: 0 }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-neutral-500 mb-6"
          >
            MK Studio Story
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="font-serif uppercase text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
                {currentSlide.headline.split(" ").map((word, i) => (
                  <span key={i} className={i === 0 ? "text-white" : "text-[#c8a46e] italic"}>
                    {word}{" "}
                  </span>
                ))}
              </h2>

              <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-md font-light">
                {currentSlide.text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Декоративная подпись (опционально для "дорогого" вида) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            className="mt-12 h-[1px] w-24 bg-[#c8a46e]"
          />
        </div>
      </div>
    </section>
  )
}