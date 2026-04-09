
"use client"

import React from 'react'
import { Target, Palette, Box, Zap, Heart } from 'lucide-react'

const steps = [
  {
    title: "Brief estratégico",
    desc: "Definimos objetivos, audiencia y mensaje clave para construir una base sólida.",
    icon: Target
  },
  {
    title: "Diseño de experiencia",
    desc: "Traducimos la estrategia en una experiencia sensorial, personalizada y memorable.",
    icon: Palette
  },
  {
    title: "Coordinación y logística",
    desc: "Ejecutamos con precisión cada detalle, alineando proveedores, tiempos y operación.",
    icon: Box
  },
  {
    title: "Cierre con impacto",
    desc: "Medimos resultados, recopilamos aprendizajes y aseguramos valor para futuros eventos.",
    icon: Zap
  },
  {
    title: "Sucessos memorables",
    desc: "Creamos momentos que conectan emocionalmente y dejan huella en la marca.",
    icon: Heart
  }
]

export const Process = () => {
  return (
    <section id="proceso" className="py-24 md:py-40 bg-white border-t border-brand-darkGray/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-canary font-bold">Nuestro Método</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold text-brand-darkGray">Orden que genera <span className="italic font-light text-brand-canary">confianza.</span></h3>
          <div className="w-20 h-[1px] bg-brand-canary mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative p-8 bg-brand-darkGray/[0.02] rounded-[2.5rem] border border-brand-darkGray/5 hover:bg-brand-darkGray/[0.04] transition-all duration-500">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-brand-canary/10 flex items-center justify-center text-brand-canary group-hover:bg-brand-canary group-hover:text-white transition-all duration-500">
                <step.icon size={28} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-brand-canary font-headline font-bold text-lg">0{idx + 1}.</span>
                  <h4 className="text-lg font-headline font-bold text-brand-darkGray leading-tight">{step.title}</h4>
                </div>
                <p className="text-xs lg:text-sm text-brand-darkGray/50 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
