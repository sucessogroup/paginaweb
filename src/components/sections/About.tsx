
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const About = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Logo 2 Sello placement */}
            <div className="absolute -top-12 -left-12 w-32 h-32 md:w-48 md:h-48 border border-brand-canary/30 rounded-full flex items-center justify-center animate-pulse">
               <div className="text-brand-ocean font-headline font-bold text-lg text-center opacity-30 select-none">
                  SUCESSO<br/>SELLO
               </div>
            </div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-brand-ocean">
                Diseñamos eventos <br />
                <span className="text-brand-paradise">con alma.</span>
              </h2>
              <div className="w-20 h-1 bg-brand-canary" />
              <p className="text-xl md:text-2xl font-light text-brand-darkGray leading-relaxed italic">
                “En SUCESSO diseñamos y producimos eventos corporativos con alma. Creemos que los detalles —cuando se hacen con intención— transforman un evento en una experiencia que deja huella.”
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="font-headline font-bold text-brand-ocean text-lg mb-2">Hospitalidad</h4>
                  <p className="text-sm text-gray-600">Cada invitado es el centro de nuestra atención estratégica.</p>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-brand-ocean text-lg mb-2">Impecabilidad</h4>
                  <p className="text-sm text-gray-600">Ejecución perfecta cuidando hasta el milímetro del proceso.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-ocean/5 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-1" />
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/sucesso-team/800/1000"
                alt="Our essence"
                fill
                className="object-cover"
                data-ai-hint="elegant event setup"
              />
            </div>
            {/* Logo 2 small sticker/stamp style */}
            <div className="absolute bottom-8 right-8 bg-brand-canary p-4 rounded-full shadow-lg transform rotate-12">
               <span className="text-brand-darkGray font-headline font-bold text-xs">CALIDAD SUCESSO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
