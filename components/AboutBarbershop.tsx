"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "../brbshppic1.png",
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
      setIndex((prev) => {
        const next = (prev + 1) % slides.length
        setProgressKey((k) => k + 1)
        return next
      })
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
      id="master"
      className="bg-black text-white py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
        {/* LEFT — CAROUSEL */}
        <div className="relative w-full h-[720px] overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide.headline}
              src={currentSlide.image}
              alt={currentSlide.headline}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Progress bars */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="w-12 h-1.5 bg-white/20 rounded-full overflow-hidden relative group"
              >
                <div
                  key={progressKey + "-" + i}
                  className={`
                    absolute inset-0 bg-[#c8a46e] 
                    transition-transform ease-linear origin-left
                    ${i === index ? "scale-x-100 duration-[4000ms]" : "scale-x-0 duration-0"}
                  `}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div>
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-6">
            MK Studio
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.headline}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              <motion.h2
                className="font-serif uppercase text-4xl md:text-5xl leading-tight mb-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                {currentSlide.headline}
              </motion.h2>

              <motion.p
                className="text-lg text-neutral-300 leading-relaxed max-w-md"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {currentSlide.text}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
