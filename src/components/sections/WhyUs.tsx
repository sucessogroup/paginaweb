
"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const differentiators = [
  {
    title: "Personalización Extrema",
    desc: "Cada detalle es un reflejo fiel de tu ADN corporativo. No usamos plantillas, diseñamos SUCESSOS."
  },
  {
    title: "Impacto Estratégico",
    desc: "Alineamos cada momento del evento con tus objetivos de KPI, ROI y comunicación de marca."
  },
  {
    title: "Atención al Detalle",
    desc: "Nuestra obsesión es la perfección. Desde la acústica hasta la temperatura, nada queda al azar."
  },
  {
    title: "Ejecución Impecable",
    desc: "Logística invisible que permite que tu única preocupación sea disfrutar del éxito con tus invitados."
  }
]

const brandLogos = [
  { id: 1, src: '/MARCAS/1.png', alt: 'Marca Aliada 1' },
  { id: 2, src: '/MARCAS/2.png', alt: 'Marca Aliada 2' },
  { id: 3, src: '/MARCAS/3.png', alt: 'Marca Aliada 3' },
  { id: 4, src: '/MARCAS/4.png', alt: 'Marca Aliada 4' },
  { id: 5, src: '/MARCAS/5.png', alt: 'Marca Aliada 5' },
]

export const WhyUs = () => {
  return (
    <section className="py-24 md:py-40 bg-background text-foreground overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-10 sticky top-32">
            <h2 className="text-brand-gold font-bold tracking-[0.5em] text-[10px] uppercase">¿Qué hace único a un SUCESSO?</h2>
            <h3 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
              Detalles que no cuestan más, <br /> <span className="text-brand-gold italic font-light">pero lo valen todo.</span>
            </h3>
            <p className="text-lg text-foreground/60 font-light max-w-lg leading-relaxed italic">
              “En SUCESSO no solo organizamos eventos, diseñamos experiencias empresariales estratégicas que generan conexiones reales y resultados tangibles.”
            </p>
            <div className="pt-8">
              <div className="flex items-center gap-6">
                 <div className="h-16 w-16 rounded-full border border-brand-gold/30 flex items-center justify-center">
                    <span className="text-brand-gold font-headline italic text-2xl">S</span>
                 </div>
                 <div>
                    <p className="font-bold text-foreground">Sello de Calidad SUCESSO</p>
                    <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">Garantía de Excelencia Corporativa</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {differentiators.map((d, i) => (
              <div key={i} className="group bg-white/[0.01] p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.03] transition-all duration-700">
                <h4 className="text-2xl font-headline font-bold mb-4 text-foreground group-hover:text-brand-gold transition-colors">{d.title}</h4>
                <p className="text-foreground/50 font-light text-lg leading-relaxed italic">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-40 max-w-6xl mx-auto text-center border-t border-white/5 pt-24 space-y-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Confianza de Líderes</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
             {brandLogos.map((logo) => (
               <motion.div 
                 key={logo.id} 
                 initial={{ filter: "grayscale(100%)", opacity: 0.3 }}
                 whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
                 transition={{ duration: 1.8, ease: "easeOut", delay: logo.id * 0.1 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="relative h-12 md:h-16 w-full flex items-center justify-center p-2"
               >
                 <Image 
                   src={logo.src} 
                   alt={logo.alt} 
                   fill 
                   className="object-contain"
                   sizes="(max-width: 768px) 100px, 150px"
                 />
               </motion.div>
             ))}
          </div>
          
          <blockquote className="space-y-10 pt-16">
            <p className="text-2xl md:text-4xl font-light italic leading-relaxed text-foreground/70">
              "Elevaron nuestro congreso anual a una categoría superior. SUCESSO dota de alma a la identidad de nuestra organización."
            </p>
            <footer className="space-y-4">
              <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto" />
              <cite className="block font-bold text-brand-gold not-italic text-sm tracking-[0.3em] uppercase opacity-80">— Dirección de Relaciones Institucionales</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
