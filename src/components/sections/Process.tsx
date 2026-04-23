
"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Brief Estratégico",
    desc: "Construimos una base sólida alineada a los objetivos de negocio y la identidad de tu marca.",
  },
  {
    number: "02",
    title: "Diseño Sensorial",
    desc: "Traducimos la estrategia en una propuesta estética y emocional de alto impacto.",
  },
  {
    number: "03",
    title: "Ingeniería Logística",
    desc: "Ejecutamos con precisión absoluta, eliminando fricciones y asegurando la excelencia operativa.",
  },
  {
    number: "04",
    title: "Impacto & Valor",
    desc: "Medimos el retorno y el impacto emocional para asegurar que cada evento sea un suceso memorable.",
  }
]

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} id="proceso" className="relative h-[450vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Barra de Progreso Lateral */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 h-48 w-[1px] bg-white/5 hidden md:block rounded-full overflow-hidden">
           <motion.div 
             className="w-full bg-brand-gold origin-top"
             style={{ scaleY: smoothProgress, height: '100%' }}
           />
        </div>

        {/* Título de Sección */}
        <div className="absolute top-12 md:top-24 text-center z-20 px-6">
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold mb-4"
           >
             Nuestro Método
           </motion.p>
           <h3 className="text-3xl md:text-5xl font-headline font-bold text-foreground">
             Orden que genera <span className="italic font-light text-brand-gold opacity-90">confianza.</span>
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
  // Ajuste de rangos para asegurar visibilidad inmediata del Step 01
  const start = index / total
  const end = (index + 1) / total
  
  // El primer paso debe ser visible desde el inicio (0)
  const opacityStart = index === 0 ? 0 : start
  const opacityEnd = end

  const opacity = useTransform(
    progress,
    [opacityStart, start + 0.05, end - 0.05, end],
    [index === 0 ? 1 : 0, 1, 1, 0]
  )
  
  const scale = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [0.98, 1, 0.98]
  )
  
  const y = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [index === 0 ? 0 : 30, 0, -30]
  )

  const blur = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [index === 0 ? "blur(0px)" : "blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]
  )

  return (
    <motion.div
      style={{ opacity, scale, y, filter: blur }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
    >
      <span className="absolute text-[16rem] md:text-[28rem] font-headline font-bold text-foreground/5 select-none -z-10 leading-none">
        {step.number}
      </span>

      <div className="space-y-8 max-w-3xl pointer-events-auto px-4">
        <div className="space-y-3">
           <span className="text-brand-gold/60 font-headline font-bold text-lg md:text-xl tracking-widest uppercase">Paso {step.number}</span>
           <h4 className="text-4xl md:text-7xl font-headline font-bold text-foreground tracking-tight">
             {step.title}
           </h4>
        </div>
        <p className="text-lg md:text-2xl text-foreground/60 font-light leading-relaxed italic max-w-2xl mx-auto">
          {step.desc}
        </p>
      </div>
    </motion.div>
  )
}
