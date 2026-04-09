
"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: "01",
    title: "Brief estratégico",
    desc: "Definimos objetivos, audiencia y mensaje clave para construir una base sólida.",
  },
  {
    number: "02",
    title: "Diseño de experiencia",
    desc: "Traducimos la estrategia en una experiencia sensorial, personalizada y memorable.",
  },
  {
    number: "03",
    title: "Coordinación y logística",
    desc: "Ejecutamos con precisión cada detalle, alineando proveedores, tiempos y operación.",
  },
  {
    number: "04",
    title: "Cierre con impacto",
    desc: "Medimos resultados, recopilamos aprendizajes y aseguramos valor para futuros eventos.",
  },
  {
    number: "05",
    title: "Sucessos memorables",
    desc: "Creamos momentos que conectan emocionalmente y dejan huella en la marca.",
  }
]

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Suavizado de la barra de progreso
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} id="proceso" className="relative h-[450vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Barra de Progreso Lateral Sutil */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-brand-darkGray/5 hidden md:block rounded-full">
           <motion.div 
             className="w-full bg-brand-canary origin-top rounded-full"
             style={{ scaleY: smoothProgress, height: '100%' }}
           />
        </div>

        {/* Título de Sección Fijo */}
        <div className="absolute top-12 md:top-20 text-center z-20 px-6">
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="text-[10px] uppercase tracking-[0.5em] text-brand-canary font-bold mb-4"
           >
             Nuestro Método
           </motion.p>
           <h3 className="text-3xl md:text-5xl font-headline font-bold text-brand-darkGray">
             Orden que genera <span className="italic font-light text-brand-canary">confianza.</span>
           </h3>
        </div>

        {/* Contenedor de Escenas */}
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center px-6">
          {steps.map((step, index) => (
            <StepScene 
              key={index} 
              step={step} 
              index={index} 
              total={steps.length} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const StepScene = ({ step, index, total, progress }: { step: any, index: number, total: number, progress: any }) => {
  // Definimos los rangos de activación para cada paso
  const start = index / total
  const end = (index + 1) / total
  const middle = (start + end) / 2

  // Animaciones basadas en el progreso del scroll
  const opacity = useTransform(
    progress,
    [start - 0.05, start, middle, end, end + 0.05],
    [0, 0.25, 1, 0.25, 0]
  )
  
  const scale = useTransform(
    progress,
    [start, middle, end],
    [0.98, 1, 0.98]
  )
  
  const y = useTransform(
    progress,
    [start, middle, end],
    [40, 0, -40]
  )

  const blur = useTransform(
    progress,
    [start, middle, end],
    ["blur(8px)", "blur(0px)", "blur(8px)"]
  )

  const numberOpacity = useTransform(
    progress,
    [start, middle, end],
    [0.01, 0.04, 0.01]
  )

  return (
    <motion.div
      style={{ opacity, scale, y, filter: blur }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
    >
      {/* Número de fondo editorial */}
      <motion.span 
        style={{ opacity: numberOpacity }}
        className="absolute text-[18rem] md:text-[35rem] font-headline font-bold text-brand-darkGray select-none -z-10 leading-none"
      >
        {step.number}
      </motion.span>

      <div className="space-y-8 max-w-3xl pointer-events-auto">
        <div className="space-y-2">
           <span className="text-brand-canary font-headline font-bold text-lg md:text-xl">0{index + 1}.</span>
           <h4 className="text-4xl md:text-7xl font-headline font-bold text-brand-darkGray leading-tight tracking-tight">
             {step.title}
           </h4>
        </div>
        <p className="text-lg md:text-2xl text-brand-darkGray/60 font-light leading-relaxed italic max-w-2xl mx-auto">
          {step.desc}
        </p>
      </div>
    </motion.div>
  )
}
