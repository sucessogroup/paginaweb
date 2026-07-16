
"use client"

import React from 'react'
import LogoVideo from '@/components/LogoVideo'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 md:py-32" style={{ backgroundColor: '#19373E' }}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="mb-8 md:mb-14"
        >
          <LogoVideo />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="space-y-8 md:space-y-10 max-w-4xl"
        >
          <div className="space-y-4 md:space-y-6">
            <p className="text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] text-brand-gold font-bold">
              Planeación • Diseño • Producción • Experiencias
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-[1.2] md:leading-[1.1] tracking-tight text-white">
              Firma de diseño de <br className="hidden sm:block" />
              <span className="italic font-light text-brand-gold opacity-90">experiencias corporativas.</span>
            </h1>
          </div>
          
          <p className="text-base md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed px-4">
            En SUCESSO diseñamos y producimos eventos corporativos con alma. Creemos que los detalles transforman un evento en una experiencia que deja huella.
          </p>

          <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild className="rounded-full bg-brand-gold hover:bg-brand-gold/80 text-white px-8 md:px-10 py-6 md:py-8 text-[10px] md:text-[11px] font-bold uppercase tracking-widest shadow-2xl shadow-brand-gold/10 group w-full sm:w-auto">
              <Link href="#contacto">
                Agenda una llamada <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/5 pointer-events-none" />
    </section>
  )
}
