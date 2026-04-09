
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const About = () => {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-main')

  return (
    <section id="nosotros" className="py-24 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-canary font-bold">Nuestra Filosofía</h2>
              <h3 className="text-4xl md:text-6xl font-headline font-bold text-brand-darkGray leading-tight">
                Eventos con alma, <br />
                <span className="text-brand-canary italic font-light">historias que perduran.</span>
              </h3>
              <div className="w-20 h-[1px] bg-brand-canary" />
              <p className="text-xl md:text-2xl font-light text-brand-darkGray/80 leading-relaxed italic">
                “Nacimos para transformar encuentros empresariales en experiencias humanas memorables. En SUCESSO, entendemos que detrás de cada evento hay un propósito mayor: conectar voluntades y fortalecer vínculos a través del cuidado absoluto de cada detalle.”
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 pt-8 border-t border-brand-darkGray/10">
              <div className="space-y-3">
                <h4 className="text-lg font-headline font-bold text-brand-darkGray">Precisión</h4>
                <p className="text-sm text-brand-darkGray/60 font-light leading-relaxed">
                  Planificación con rigor técnico y sensibilidad estética para asegurar que la esencia de tu marca respire en cada rincón.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-headline font-bold text-brand-darkGray">Conexión</h4>
                <p className="text-sm text-brand-darkGray/60 font-light leading-relaxed">
                  Diseñamos entornos donde la interacción humana fluye de manera natural, convirtiendo un evento en un activo estratégico.
                </p>
              </div>
            </div>
          </div>

          <div className="relative sticky top-32">
            <div className="absolute -inset-4 bg-brand-darkGray/5 rounded-[3rem] -rotate-2" />
            <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-darkGray/10">
              <Image 
                src={aboutImage?.imageUrl || "https://picsum.photos/seed/sucesso-luxury-event/800/1000"}
                alt="Detalle de evento premium"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                data-ai-hint={aboutImage?.imageHint || "luxury tableset"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
