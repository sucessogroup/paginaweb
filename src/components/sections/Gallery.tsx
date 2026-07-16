
"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const galleryImages = [
  { imageUrl: '/GALERIA/1.jpeg', description: 'SUCESSO Event Detail 01' },
  { imageUrl: '/GALERIA/2.jpeg', description: 'SUCESSO Event Detail 02' },
  { imageUrl: '/GALERIA/3.jpeg', description: 'SUCESSO Event Detail 03' },
  { imageUrl: '/GALERIA/4.jpeg', description: 'SUCESSO Event Detail 04' },
  { imageUrl: '/GALERIA/5.jpeg', description: 'SUCESSO Event Detail 05' },
  { imageUrl: '/GALERIA/6.jpeg', description: 'SUCESSO Event Detail 06' },
  { imageUrl: '/GALERIA/7.jpeg', description: 'SUCESSO Event Detail 07' },
  { imageUrl: '/GALERIA/8.jpeg', description: 'SUCESSO Event Detail 08' },
  { imageUrl: '/GALERIA/9.jpeg', description: 'SUCESSO Event Detail 09' },
  { imageUrl: '/GALERIA/10.jpeg', description: 'SUCESSO Event Detail 10' },
  { imageUrl: '/GALERIA/11.jpeg', description: 'SUCESSO Event Detail 11' },
  { imageUrl: '/GALERIA/12.jpeg', description: 'SUCESSO Event Detail 12' },
]

export const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const openLightbox = (idx: number) => setSelectedIdx(idx)
  const closeLightbox = () => setSelectedIdx(null)
  const showNext = () => setSelectedIdx((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))
  const showPrev = () => setSelectedIdx((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null))

  // Duplicamos las imágenes para el loop infinito suave
  const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages]

  return (
    <section className="py-24 md:py-40 bg-background overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center space-y-4">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Portafolio</h2>
        <h3 className="text-4xl md:text-6xl font-headline font-bold text-foreground">
          Experiencias que <span className="italic font-light text-brand-gold opacity-90">trascienden.</span>
        </h3>
        <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto" />
      </div>

      {/* Cinturón de fotos moviéndose a la derecha - 80s para un movimiento elegante */}
      <div className="relative flex">
        <motion.div 
          className="flex gap-6 pointer-events-auto"
          animate={{ x: [0, -100 * galleryImages.length + "%"] }}
          transition={{
            duration: 80, 
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ x: 0 }}
        >
          {infiniteImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative h-[300px] md:h-[500px] w-auto flex-shrink-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5 shadow-2xl bg-white/5"
              onClick={() => openLightbox(idx % galleryImages.length)}
            >
              <img 
                src={img.imageUrl} 
                alt={img.description} 
                className="h-full w-auto object-contain transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-petrol/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <Maximize2 className="text-white" size={18} />
                </div>
                <p className="text-white font-headline font-bold text-lg tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Dialog */}
      <Dialog open={selectedIdx !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-w-[100vw] h-[100vh] p-0 bg-black/95 border-none shadow-none flex items-center justify-center overflow-hidden z-[100]">
          <DialogTitle>
            <VisuallyHidden>Galería de imágenes SUCESSO</VisuallyHidden>
          </DialogTitle>
          
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            
            {/* Botón de Cierre (Tache) - Mejorado */}
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 z-[110] p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md text-white/70 hover:text-white transition-all border border-white/10 shadow-xl"
              aria-label="Cerrar galería"
            >
              <X size={28} />
            </button>

            {/* Flecha Anterior - Mejorada */}
            <button 
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] p-5 rounded-full bg-white/5 hover:bg-brand-gold backdrop-blur-md text-white/70 hover:text-background transition-all border border-white/10 shadow-xl group"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={36} className="transition-transform group-hover:-translate-x-1" />
            </button>

            {/* Flecha Siguiente - Mejorada */}
            <button 
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] p-5 rounded-full bg-white/5 hover:bg-brand-gold backdrop-blur-md text-white/70 hover:text-background transition-all border border-white/10 shadow-xl group"
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={36} className="transition-transform group-hover:translate-x-1" />
            </button>

            {/* Contenido de la imagen */}
            <AnimatePresence mode="wait">
              {selectedIdx !== null && (
                <motion.div 
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 lg:p-24"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={galleryImages[selectedIdx].imageUrl} 
                      alt={galleryImages[selectedIdx].description} 
                      className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                  
                  {/* Pie de foto en el lightbox */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white space-y-3 z-[110] px-6 w-full">
                    <h4 className="text-xl md:text-2xl font-headline italic font-light tracking-wide drop-shadow-lg">
                      {galleryImages[selectedIdx].description}
                    </h4>
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-[1px] w-8 bg-brand-gold/30" />
                      <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold opacity-80">
                        {selectedIdx + 1} de {galleryImages.length}
                      </p>
                      <div className="h-[1px] w-8 bg-brand-gold/30" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
