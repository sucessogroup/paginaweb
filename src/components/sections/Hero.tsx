"use client"

import React from 'react'
import LogoVideo from '@/components/LogoVideo'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[850px] flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--brand-bg)' }}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center pt-24 pb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mb-16 mt-8 transform transition-transform duration-1000"
        >
          <LogoVideo />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight tracking-tight text-foreground">
            Diseñamos, coordinamos y ejecutamos. <br />
            <span className="italic font-light text-brand-gold opacity-90">Tú solo disfruta el éxito.</span>
          </h1>
        </motion.div>
      </div>
      
      {/* Sutil degradado de profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
    </section>
  )
}