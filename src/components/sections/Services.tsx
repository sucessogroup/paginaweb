import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const services = [
  {
    title: "Eventos Corporativos Internos",
    description: "Experiencias diseñadas para equipos y colaboradores: integraciones, celebraciones y lanzamientos internos.",
    img: "service-internal",
  },
  {
    title: "Eventos Corporativos Externos",
    description: "Activaciones, lanzamientos y experiencias para clientes que fortalecen relaciones y posicionamiento.",
    img: "service-congress",
  },
  {
    title: "Congresos y Convenciones",
    description: "Planeación y ejecución de encuentros académicos y seminarios de alto nivel.",
    img: "service-custom",
  },
  {
    title: "Eventos Protocolarios",
    description: "Ceremonias y eventos formales para empresas, asociaciones o entidades de gobierno.",
    img: "service-internal", 
  },
  {
    title: "Eventos Virtuales e Híbridos",
    description: "Soluciones tecnológicas que conectan audiencias a distancia sin perder impacto.",
    img: "service-congress",
  },
  {
    title: "Experiencias de Marca",
    description: "Conceptos únicos diseñados para generar impacto sensorial y recordación emocional.",
    img: "service-custom",
  }
]

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-40 bg-card/30 text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Expertise Estratégico</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold text-foreground">Qué <span className="font-handwriting font-normal text-brand-gold text-6xl lowercase opacity-90">hacemos.</span></h3>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light leading-relaxed italic">
            Diseñamos y producimos eventos corporativos que responden a los momentos clave de cada organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
          {services.map((service, idx) => {
            const imgData = PlaceHolderImages.find(p => p.id === service.img)
            return (
              <div key={idx} className="group flex flex-col space-y-8">
                <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden bg-muted">
                  <Image 
                    src={imgData?.imageUrl || "https://picsum.photos/seed/service/800/1000"} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    data-ai-hint="premium corporate service"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </div>
                <div className="space-y-4 px-2">
                  <h4 className="text-xl lg:text-2xl font-headline font-bold text-brand-gold">
                    {service.title}
                  </h4>
                  <p className="text-sm lg:text-base text-foreground/50 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="w-10 h-[1px] bg-white/10 transition-all duration-700 group-hover:w-full group-hover:bg-brand-gold/40" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}