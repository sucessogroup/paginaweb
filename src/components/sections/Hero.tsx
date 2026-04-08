
"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-darkGray">
      {/* Overlay sutil para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* Imagen de fondo opcional o gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darkGray via-brand-darkGray/80 to-brand-darkGray z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-20">
        <div className={cn(
          "transition-all duration-1000 ease-out",
          isScrolled ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        )}>
          <div className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold mb-12 text-brand-canary">
            Organización de <span className="font-handwriting normal-case text-2xl lowercase tracking-normal ml-2">eventos</span> premium
          </div>
          
          {/* Espacio para el logo que baja de la Navbar */}
          <div className="h-[25vh] md:h-[30vh] flex items-center justify-center mb-12" />

          <div className="space-y-8 mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight">
              Diseñamos, coordinamos y ejecutamos. <br />
              <span className="italic font-light text-brand-canary">Tú solo disfruta el éxito.</span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed text-gray-300 italic opacity-80">
              Nos encargamos de cada milímetro de tu evento corporativo para que tu única preocupación sea atender a tus invitados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-brand-canary hover:bg-brand-tangerine text-brand-darkGray font-bold px-12 py-8 text-sm uppercase tracking-widest rounded-full shadow-2xl transition-all duration-500 hover:scale-105">
              Agendar una reunión
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white/20 text-white hover:bg-white hover:text-brand-ocean px-12 py-8 text-sm uppercase tracking-widest rounded-full backdrop-blur-sm transition-all duration-500"
            >
              Ver portafolio
            </Button>
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
