
"use client"

import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { cn } from '@/lib/utils'

const galleryItems = [
  { id: 'gallery-1', span: 'md:col-span-1 md:row-span-2' },
  { id: 'gallery-2', span: 'md:col-span-1 md:row-span-1' },
  { id: 'gallery-3', span: 'md:col-span-2 md:row-span-1' },
  { id: 'gallery-1', span: 'md:col-span-1 md:row-span-1' }, // Reusando ID para completar grid si faltan fotos
  { id: 'gallery-2', span: 'md:col-span-1 md:row-span-1' },
]

export const Gallery = () => {
  return (
    <section id="experiencias" className="py-24 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">Portafolio</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold text-foreground">
            Sucesos que <span className="italic font-light text-accent opacity-90">trascienden.</span>
          </h3>
          <div className="w-16 h-[1px] bg-accent/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-[900px]">
          {galleryItems.map((item, idx) => {
            const imgData = PlaceHolderImages.find(p => p.id === item.id)
            return (
              <div 
                key={idx} 
                className={cn(
                  "relative overflow-hidden rounded-[2.5rem] group border border-white/5 shadow-2xl",
                  item.span
                )}
              >
                <Image 
                  src={imgData?.imageUrl || "https://picsum.photos/seed/gallery/800/600"}
                  alt={imgData?.description || "Gallery image"}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  data-ai-hint={imgData?.imageHint || "luxury event"}
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 backdrop-blur-sm">
                  <p className="text-foreground font-headline font-bold text-2xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    {imgData?.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
