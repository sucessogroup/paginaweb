
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const About = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-ocean font-bold">Nuestra Filosofía</h2>
              <h3 className="text-4xl md:text-6xl font-headline font-bold text-brand-darkGray leading-tight">
                Eventos impecables, <br />
                <span className="text-brand-canary italic font-light">cero estrés para ti.</span>
              </h3>
            </div>
            
            <div className="w-20 h-[1px] bg-brand-canary" />
            
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed italic">
              "En SUCESSO creemos que un gran evento no debería ser una carga para quien lo organiza. Nuestra misión es absorber toda la complejidad operativa para que tú puedas concentrarte en lo que realmente importa: tus objetivos y tus invitados."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
              <div className="space-y-3">
                <h4 className="font-headline font-bold text-brand-ocean text-lg uppercase tracking-wide">Precisión</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">Cada detalle es planeado con rigor técnico y sensibilidad estética.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-headline font-bold text-brand-ocean text-lg uppercase tracking-wide">Tranquilidad</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">Reportes claros y ejecución autónoma para que no tengas que supervisar nada.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-canary/5 rounded-[3rem] -rotate-2" />
            <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/sucesso-luxury-event/800/1000"
                alt="Detalle de evento premium"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                data-ai-hint="luxury tableset"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
