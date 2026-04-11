import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const About = () => {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-main')

  return (
    <section id="nosotros" className="py-24 lg:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Nuestra Filosofía</h2>
              <h3 className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight">
                Eventos impecables, <br />
                <span className="text-brand-gold italic font-light">cero estrés para ti.</span>
              </h3>
              <div className="w-20 h-[1px] bg-brand-gold/30" />
              <div className="text-lg md:text-xl font-light text-foreground/80 leading-relaxed italic space-y-6">
                <p>
                  “En SUCESSO creemos que un gran evento no solo debe ejecutarse bien, debe sentirse.”
                </p>
                <p>
                  Creamos experiencias donde cada persona se siente esperada, bienvenida y parte de algo especial. Diseñamos encuentros que generan conexión, significado y recuerdos que permanecen.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 pt-10 border-t border-white/5">
              <div className="space-y-3">
                <h4 className="text-lg font-headline font-bold text-foreground">Precisión</h4>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">
                  Cada detalle es pensado estratégicamente y ejecutado con sensibilidad estética para lograr un resultado impecable.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-headline font-bold text-foreground">Tranquilidad</h4>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">
                  Te acompañamos en todo momento con claridad y control, para que vivas el proceso con confianza y sin fricción.
                </p>
              </div>
            </div>
          </div>

          <div className="relative sticky top-32">
            <div className="absolute -inset-4 bg-white/[0.02] rounded-[3rem] -rotate-2" />
            <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
              <Image 
                src={aboutImage?.imageUrl || "/foto1.webp"}
                alt="Detalle de evento premium SUCESSO"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                data-ai-hint="luxury event detail"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}