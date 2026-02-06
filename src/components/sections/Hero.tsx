
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-event')

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage?.imageUrl || "https://picsum.photos/seed/sucesso-hero/1920/1080"}
          alt="Corporate event background"
          fill
          priority
          className="object-cover"
          data-ai-hint="corporate conference"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-darkGray/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          {/* Logo 1 Placement */}
          <div className="text-sm tracking-[0.4em] uppercase font-light mb-4 text-brand-canary">
            Organización de <span className="font-handwriting normal-case text-2xl lowercase tracking-normal">eventos</span> premium
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-tight mb-6">
            Cada detalle, <br />
            <span className="text-brand-canary">un sucesso.</span>
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-gray-100 mb-10">
            Creamos eventos corporativos donde cada persona se siente esperada, bienvenida y parte de algo especial.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          <Button size="lg" className="bg-brand-canary hover:bg-brand-tangerine text-brand-darkGray font-bold px-10 py-7 text-lg rounded-full">
            Agenda una reunión
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-ocean px-10 py-7 text-lg rounded-full">
            Conoce nuestros servicios
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-canary animate-[scroll_2s_infinite]" />
        </div>
      </div>
    </section>
  )
}
