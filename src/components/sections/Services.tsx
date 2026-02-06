
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const services = [
  {
    title: "Eventos corporativos internos",
    description: "Fortalecemos la cultura de tu empresa con experiencias diseñadas para conectar y motivar a tus equipos.",
    img: "service-internal",
    color: "bg-brand-ocean/10"
  },
  {
    title: "Eventos corporativos externos",
    description: "Lanzamientos, networking y experiencias que posicionan tu marca ante clientes y socios estratégicos.",
    img: "service-external",
    color: "bg-brand-canary/10"
  },
  {
    title: "Congresos y encuentros",
    description: "Gestión integral de logística y contenido para reuniones profesionales de alto impacto.",
    img: "service-congress",
    color: "bg-brand-paradise/10"
  },
  {
    title: "Eventos institucionales",
    description: "Protocolo riguroso y atención al detalle para eventos gubernamentales y de alta dirección.",
    img: "service-institutional",
    color: "bg-brand-jade/10"
  },
  {
    title: "Eventos virtuales e híbridos",
    description: "Tecnología de vanguardia para conectar audiencias globales sin perder la cercanía y calidad.",
    img: "service-virtual",
    color: "bg-brand-ocean/10"
  },
  {
    title: "Experiencias personalizadas",
    description: "Viajes de incentivo, cenas exclusivas y detalles únicos adaptados a la visión de tu marca.",
    img: "service-custom",
    color: "bg-brand-wine/10"
  }
]

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-brand-darkGray text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-widest text-brand-canary mb-4">Nuestra Experticia</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6">Servicios <span className="font-handwriting font-normal text-brand-canary text-6xl lowercase">sucessos</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Especializados en crear momentos significativos para asociaciones, aseguradoras y empresas de prestigio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const imgData = PlaceHolderImages.find(p => p.id === service.img)
            return (
              <Card key={idx} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={imgData?.imageUrl || "https://picsum.photos/seed/service/800/600"} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={imgData?.imageHint || "event card"}
                  />
                  <div className="absolute inset-0 bg-brand-ocean/20 mix-blend-multiply" />
                </div>
                <CardContent className="p-8">
                  <h4 className="text-xl font-headline font-bold mb-4 text-brand-canary group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
