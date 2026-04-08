"use client"

import React from 'react'
import { Search, Palette, Zap, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: "Entendemos",
    desc: "Escuchamos tus objetivos y la esencia de tu marca para diseñar una estrategia a medida.",
    icon: Search
  },
  {
    title: "Diseñamos",
    desc: "Creamos un concepto visual y logístico que impacte y comunique el mensaje correcto.",
    icon: Palette
  },
  {
    title: "Ejecutamos",
    desc: "Coordinamos cada proveedor y detalle técnico bajo los más altos estándares de calidad.",
    icon: Zap
  },
  {
    title: "Tú disfrutas",
    desc: "Llegas a tu evento y todo funciona. Sin sorpresas, solo resultados impecables.",
    icon: CheckCircle2
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative p-10 bg-brand-darkGray/[0.02] rounded-[2.5rem] border border-brand-darkGray/5 hover:bg-brand-darkGray/[0.04] transition-all duration-500">
              <div className="mb-8 w-16 h-16 rounded-2xl bg-brand-canary/10 flex items-center justify-center text-brand-canary group-hover:bg-brand-canary group-hover:text-white transition-all duration-500">
                <step.icon size={32} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-brand-canary font-headline font-bold text-xl">0{idx + 1}.</span>
                  <h4 className="text-xl font-headline font-bold text-brand-darkGray">{step.title}</h4>
                </div>
                <p className="text-sm text-brand-darkGray/50 font-light leading-relaxed">
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
