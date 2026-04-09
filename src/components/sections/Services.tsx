
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const services = [
  {
    title: "Eventos Corporativos Internos",
    description: "Experiencias diseñadas para equipos y colaboradores: integraciones, celebraciones, reconocimientos y lanzamientos internos.",
    img: "service-internal",
  },
  {
    title: "Eventos Corporativos Externos",
    description: "Activaciones, lanzamientos y experiencias para clientes, aliados y stakeholders que fortalecen relaciones y posicionamiento.",
    img: "service-congress",
  },
  {
    title: "Congresos y Eventos Profesionales",
    description: "Planeación y ejecución de encuentros académicos, convenciones y seminarios de alto nivel.",
    img: "service-custom",
  },
  {
    title: "Eventos Protocolarios e Institucionales",
    description: "Ceremonias, aniversarios y eventos formales para empresas, asociaciones o entidades de gobierno.",
    img: "service-internal", 
  },
  {
    title: "Eventos Virtuales e Híbridos",
    description: "Soluciones tecnológicas que conectan audiencias a distancia sin perder impacto ni emoción.",
    img: "service-congress",
  },
  {
    title: "Experiencias Creativas y de Marca",
    description: "Conceptos únicos diseñados para generar impacto sensorial, emocional y recordación.",
    img: "service-custom",
  }
]

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-40 bg-brand-darkGray text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-canary font-bold">Expertise Estratégico</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold">Qué <span className="font-handwriting font-normal text-brand-canary text-6xl lowercase">hacemos.</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed italic opacity-80">
            Diseñamos y producimos eventos corporativos que responden a distintos objetivos, audiencias y momentos clave de cada organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
          {services.map((service, idx) => {
            const imgData = PlaceHolderImages.find(p => p.id === service.img)
            return (
              <div key={idx} className="group flex flex-col space-y-8">
                <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden">
                  <Image 
                    src={imgData?.imageUrl || "https://picsum.photos/seed/service/800/1000"} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    data-ai-hint="premium corporate service"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGray via-transparent to-transparent opacity-60" />
                </div>
                <div className="space-y-4 px-4">
                  <h4 className="text-xl lg:text-2xl font-headline font-bold text-brand-canary">
                    {service.title}
                  </h4>
                  <p className="text-sm lg:text-base text-gray-400 font-light leading-relaxed">
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
