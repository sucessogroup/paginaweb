
"use client"

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import LogoVideo from '@/components/LogoVideo'

export const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#19373e]">
      {/* Overlay sutil para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/20 z-0" />
      
      {/* Fondo base oscuro para asegurar que mix-blend-screen funcione correctamente */}
      <div className="absolute inset-0 bg-[#19373e] z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-20">
        <div className={cn(
          "transition-all duration-1000 ease-out",
          isScrolled ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        )}>
          {/* Espacio para el logo dinámico que baja de la Navbar */}
          <div className="h-[30vh] md:h-[40vh] flex items-center justify-center mb-8">
             {/* El logo se renderiza aquí visualmente aunque la lógica de scroll lo mantenga en la Navbar */}
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight">
              Diseñamos, coordinamos y ejecutamos. <br />
              <span className="italic font-light text-brand-canary">Tú solo disfruta el éxito.</span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed text-gray-300 italic opacity-80">
              Nos encargamos de cada milímetro de tu evento corporativo para que tu única preocupación sea atender a tus invitados.
            </p>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={cn(
        "absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-1000",
        isScrolled ? "opacity-0" : "opacity-30"
      )}>
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Desliza</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-canary to-transparent" />
      </div>
    </section>
  )
}
