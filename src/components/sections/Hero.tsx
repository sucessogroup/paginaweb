"use client"

import React from 'react'
import LogoVideo from '@/components/LogoVideo'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: '#1F4A4D' }}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center pt-24 pb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="mb-12 md:mb-16 mt-4"
        >
          <LogoVideo />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="space-y-10 max-w-4xl"
        >
          <div className="space-y-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Experiencias de Impacto Global</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-[1.1] tracking-tight text-white">
              Firma de diseño estratégico <br />
              <span className="italic font-light text-brand-gold opacity-90">que eleva tu marca.</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Diseñamos experiencias corporativas personalizadas que transforman la cultura organizacional y proyectan una imagen impecable ante el mundo.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild className="rounded-full bg-brand-gold hover:bg-brand-gold/80 text-white px-10 py-7 text-[11px] font-bold uppercase tracking-widest shadow-2xl shadow-brand-gold/10 group">
              <Link href="#contacto">
                Agenda una llamada <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-white/60 hover:text-white text-[11px] uppercase tracking-widest transition-colors font-bold">
              <Link href="#servicios">Diseñemos tu evento</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/5 pointer-events-none" />
    </section>
  )
}
