
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const services = [
  {
    title: "Eventos Corporativos",
    description: "Lanzamientos de marca, networking y experiencias diseñadas para impactar y conectar.",
    img: "service-internal",
  },
  {
    title: "Convenciones y Congresos",
    description: "Gestión logística integral para reuniones profesionales de alto perfil y gran escala.",
    img: "service-congress",
  },
  {
    title: "Experiencias de Incentivo",
    description: "Viajes y cenas exclusivas diseñadas para premiar y motivar a tus equipos de alto desempeño.",
    img: "service-custom",
  }
]

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-40 bg-brand-darkGray text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-canary font-bold">Qué Hacemos</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold">Soluciones <span className="font-handwriting font-normal text-brand-canary text-6xl lowercase">estratégicas.</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed italic opacity-80">
            Expertos en la producción de momentos significativos para marcas que buscan excelencia y cero complicaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, idx) => {
            const imgData = PlaceHolderImages.find(p => p.id === service.img)
            return (
              <div key={idx} className="group flex flex-col space-y-8">
                <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden">
                  <Image 
                    src={imgData?.imageUrl || "https://picsum.photos/seed/service/800/1000"} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    data-ai-hint={imgData?.imageHint || "elegant event"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGray via-transparent to-transparent opacity-60" />
                </div>
                <div className="space-y-4 px-4">
                  <h4 className="text-2xl font-headline font-bold text-brand-canary">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 font-light leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="w-10 h-[1px] bg-white/20 transition-all duration-500 group-hover:w-full group-hover:bg-brand-canary" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
