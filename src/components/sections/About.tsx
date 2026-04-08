
import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-6xl font-headline font-bold text-brand-darkGray leading-tight">
                La esencia de <br />
                <span className="text-brand-canary italic font-light">Sucesso Group.</span>
              </h3>
            </div>
            
            <div className="w-20 h-[1px] bg-brand-canary" />
            
            <p className="text-xl md:text-2xl font-light text-brand-darkGray/80 leading-relaxed italic">
              Transformamos visiones en realidades memorables, cuidando cada aspecto para que el resultado sea, simplemente, un suceso.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-darkGray/5 rounded-[3rem] -rotate-2" />
            <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-darkGray/10">
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
