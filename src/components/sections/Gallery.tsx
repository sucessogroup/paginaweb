
"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'))

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

      {/* Cinturón de fotos moviéndose a la derecha */}
      <div className="relative flex">
        <motion.div 
          className="flex gap-6 pointer-events-auto"
          animate={{ x: [0, -100 * galleryImages.length] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ x: 0 }}
        >
          {infiniteImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-[280px] md:w-[400px] aspect-[4/5] flex-shrink-0 rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5 shadow-2xl"
              onClick={() => openLightbox(idx % galleryImages.length)}
            >
              <Image 
                src={img.imageUrl} 
                alt={img.description} 
                fill 
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                data-ai-hint={img.imageHint}
              />
              <div className="absolute inset-0 bg-brand-petrol/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 backdrop-blur-sm">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                  <Maximize2 className="text-white" size={20} />
                </div>
                <p className="text-white font-headline font-bold text-xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Dialog */}
      <Dialog open={selectedIdx !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-w-[95vw] md:max-w-[80vw] h-[85vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center overflow-visible">
          <DialogTitle>
            <VisuallyHidden>Galería de imágenes SUCESSO</VisuallyHidden>
          </DialogTitle>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all"
            >
              <X size={24} />
            </button>

            <button 
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all"
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all"
            >
              <ChevronRight size={32} />
            </button>

            <AnimatePresence mode="wait">
              {selectedIdx !== null && (
                <motion.div 
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full flex flex-col items-center justify-center"
                >
                  <div className="relative w-full h-[70vh] rounded-[2.5rem] overflow-hidden">
                    <Image 
                      src={galleryImages[selectedIdx].imageUrl} 
                      alt={galleryImages[selectedIdx].description} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-8 text-center text-white space-y-2">
                    <h4 className="text-2xl font-headline italic font-light tracking-wide">{galleryImages[selectedIdx].description}</h4>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">
                      {selectedIdx + 1} / {galleryImages.length}
                    </p>
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
