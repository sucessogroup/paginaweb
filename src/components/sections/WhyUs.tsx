
import React from 'react'
import { ShieldCheck, Heart, Users, Sparkles, MapPin } from 'lucide-react'

const features = [
  {
    title: "Atención personalizada",
    desc: "Un solo punto de contacto para todo tu evento, acompañándote paso a paso.",
    icon: Users
  },
  {
    title: "Cuidado absoluto del detalle",
    desc: "Desde la tipografía de los nombres hasta la temperatura del salón.",
    icon: Sparkles
  },
  {
    title: "Sensibilidad corporativa",
    desc: "Entendemos el lenguaje y las necesidades de las grandes organizaciones.",
    icon: Heart
  },
  {
    title: "Acompañamiento 360",
    desc: "Estamos presentes desde el primer café hasta que el último invitado se retira.",
    icon: ShieldCheck
  }
]

export const WhyUs = () => {
  return (
    <section className="py-24 bg-brand-wine text-white overflow-hidden relative">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-brand-canary font-bold tracking-widest text-sm uppercase mb-4">El valor de elegirnos</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold mb-8 leading-tight">
              Detalles que no cuestan más, pero <span className="text-brand-canary italic">valen todo.</span>
            </h3>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-white/10 p-3 rounded-lg text-brand-canary">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-headline font-bold mb-1">{f.title}</h4>
                    <p className="text-gray-300 font-light text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 p-12 rounded-[2rem] border border-white/10 backdrop-blur-sm">
               <div className="text-6xl font-headline font-bold text-brand-canary mb-4 tracking-tighter">100%</div>
               <p className="text-xl font-light mb-8 italic">Compromiso con la excelencia en cada producción.</p>
               <blockquote className="border-l-4 border-brand-canary pl-6 py-2">
                 <p className="text-lg text-gray-200 font-light mb-4">
                   "SUCESSO no solo organizó nuestro congreso anual, crearon una atmósfera donde nuestros directivos se sintieron verdaderamente valorados."
                 </p>
                 <cite className="block font-bold text-brand-canary not-italic">— Directora de Aseguradora Líder</cite>
               </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
