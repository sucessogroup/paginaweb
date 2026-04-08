
"use client"

import React from 'react'
import LogoVideo from '@/components/LogoVideo'

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[850px] flex flex-col items-center justify-center overflow-hidden bg-[#19373E]">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center pt-24 pb-12">
        {/* Contenedor del Logo Video con espacio superior e inferior mejorado */}
        <div className="mb-20 mt-12 transform scale-110 md:scale-125 transition-transform duration-1000">
          <LogoVideo />
        </div>

        <div className="space-y-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight">
            Diseñamos, coordinamos y ejecutamos. <br />
            <span className="italic font-light text-brand-canary">Tú solo disfruta el éxito.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed text-white/60 italic">
            Nos encargamos de cada milímetro de tu evento corporativo para que tu única preocupación sea atender a tus invitados.
          </p>
        </div>
      </div>
    </section>
  )
}
