
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const About = () => {
  const sealLogo = PlaceHolderImages.find(img => img.id === 'logo-seal')

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Secondary Logo as Section Header */}
        <div className="flex flex-col items-center justify-center mb-24">
          {sealLogo ? (
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image 
                src={sealLogo.imageUrl} 
                alt="Sello SUCESSO" 
                fill 
                className="object-contain" 
                data-ai-hint="quality seal" 
              />
            </div>
          ) : (
            <div className="w-48 h-48 border-4 border-brand-canary rounded-full flex items-center justify-center text-brand-ocean font-headline font-bold text-2xl text-center">
              CALIDAD<br/>SUCESSO
            </div>
          )}
          <div className="mt-8 text-center">
            <h2 className="text-sm uppercase tracking-[0.5em] text-brand-ocean font-bold">Sello de Excelencia</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-brand-ocean leading-tight">
              Diseñamos eventos <br />
              <span className="text-brand-paradise">con alma.</span>
            </h2>
            <div className="w-24 h-1 bg-brand-canary" />
            <p className="text-xl md:text-3xl font-light text-brand-darkGray leading-relaxed italic">
              “En SUCESSO diseñamos y producimos eventos corporativos con alma. Creemos que los detalles —cuando se hacen con intención— transforman un evento en una experiencia que deja huella.”
            </p>
            <div className="grid grid-cols-2 gap-10 pt-8">
              <div>
                <h4 className="font-headline font-bold text-brand-ocean text-xl mb-3">Hospitalidad</h4>
                <p className="text-base text-gray-600 font-light">Cada invitado es el centro de nuestra atención estratégica y cuidado personal.</p>
              </div>
              <div>
                <h4 className="font-headline font-bold text-brand-ocean text-xl mb-3">Impecabilidad</h4>
                <p className="text-base text-gray-600 font-light">Ejecución perfecta cuidando hasta el último milímetro de cada proceso operativo.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-6 bg-brand-ocean/5 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-1" />
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/sucesso-team/800/1000"
                alt="Nuestra esencia"
                fill
                className="object-cover"
                data-ai-hint="elegant event setup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
