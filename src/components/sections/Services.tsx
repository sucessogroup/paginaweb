
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const services = [
  {
    title: "Corporativos Internos",
    description: "Fortalecemos la cultura organizacional a través de experiencias que inspiran y motivan a tu capital más valioso.",
    img: "service-internal",
  },
  {
    title: "Corporativos Externos",
    description: "Diseñamos lanzamientos y activaciones de alto impacto que posicionan tu marca en la mente de tus clientes estratégicos.",
    img: "service-congress",
  },
  {
    title: "Académicos y Profesionales",
    description: "Gestión impecable de congresos y seminarios donde el conocimiento fluye en un entorno de excelencia operativa.",
    img: "service-custom",
  },
  {
    title: "Protocolarios e Institucionales",
    description: "Respeto absoluto por las formas y la jerarquía en eventos que requieren una sobriedad y elegancia sin fisuras.",
    img: "service-internal", 
  },
  {
    title: "Virtuales e Híbridos",
    description: "Tecnología de vanguardia al servicio de la conexión global, rompiendo barreras físicas sin perder la calidez humana.",
    img: "service-congress",
  },
  {
    title: "Experienciales y Creativos",
    description: "Momentos disruptivos diseñados para sorprender, donde la creatividad se convierte en un activo de negocio.",
    img: "service-custom",
  }
]

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-40 bg-brand-darkGray text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-canary font-bold">Expertise Estratégico</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold">Soluciones <span className="font-handwriting font-normal text-brand-canary text-6xl lowercase">especializadas.</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed italic opacity-80">
            Diseñamos y producimos momentos significativos para marcas que buscan trascender a través de la excelencia y la estrategia.
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
                    data-ai-hint={imgData?.imageHint || "elegant event"}
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
