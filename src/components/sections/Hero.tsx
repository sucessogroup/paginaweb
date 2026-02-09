
"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-darkGray">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-32">
        <div className={cn(
          "transition-all duration-1000",
          isScrolled ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        )}>
          <div className="text-sm tracking-[0.4em] uppercase font-light mb-8 text-brand-canary">
            Organización de <span className="font-handwriting normal-case text-2xl lowercase tracking-normal">eventos</span> premium
          </div>
          
          {/* Espacio para el logo que viene de la Navbar */}
          <div className="h-[20vh] md:h-[30vh]" />

          <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-gray-100 mb-12 italic opacity-80">
            “Cada detalle, un sucesso.”
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-brand-canary hover:bg-brand-tangerine text-brand-darkGray font-bold px-12 py-8 text-lg rounded-full shadow-2xl shadow-brand-canary/10">
              Agenda una reunión
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-brand-ocean px-12 py-8 text-lg rounded-full backdrop-blur-sm">
              Conoce nuestros servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={cn(
        "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500",
        isScrolled ? "opacity-0" : "opacity-40"
      )}>
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2">Desliza</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-canary animate-[scroll_2s_infinite]" />
        </div>
      </div>
    </section>
  )
}

// Helper to handle dynamic classes
import { cn } from '@/lib/utils'
