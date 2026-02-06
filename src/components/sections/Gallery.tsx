
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const galleryItems = [
  { id: 'gallery-1', span: 'md:col-span-1 md:row-span-2' },
  { id: 'gallery-2', span: 'md:col-span-1 md:row-span-1' },
  { id: 'gallery-3', span: 'md:col-span-2 md:row-span-1' },
  { id: 'gallery-4', span: 'md:col-span-1 md:row-span-1' },
  { id: 'gallery-5', span: 'md:col-span-1 md:row-span-1' },
]

export const Gallery = () => {
  return (
    <section id="experiencias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-brand-darkGray mb-4">Experiencias</h2>
          <div className="w-16 h-1 bg-brand-paradise mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {galleryItems.map((item, idx) => {
            const imgData = PlaceHolderImages.find(p => p.id === item.id)
            return (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-xl group ${item.span}`}
              >
                <Image 
                  src={imgData?.imageUrl || "https://picsum.photos/seed/gallery/800/600"}
                  alt={imgData?.description || "Gallery image"}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint={imgData?.imageHint || "luxury event"}
                />
                <div className="absolute inset-0 bg-brand-ocean/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white font-headline font-bold text-xl">{imgData?.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
