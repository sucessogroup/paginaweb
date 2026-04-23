
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: "Eventos Corporativos Estratégicos",
    benefit: "Cultura & Identidad",
    description: "Diseñamos encuentros que fortalecen el sentido de pertenencia y alinean a tu equipo con los valores de la organización.",
    img: "service-corp",
  },
  {
    title: "Experiencias para Clientes",
    benefit: "Crecimiento & Lealtad",
    description: "Activaciones de marca y cenas exclusivas diseñadas para convertir invitados en embajadores apasionados.",
    img: "service-clients",
  },
  {
    title: "Offsites & Leadership Retreats",
    benefit: "Claridad & Visión",
    description: "Espacios de alta gama diseñados para el pensamiento estratégico, la desconexión creativa y la toma de decisiones.",
    img: "service-offsites",
  },
  {
    title: "Lanzamientos de Marca",
    benefit: "Impacto & Mercado",
    description: "Producciones de clase mundial para presentar productos y servicios con una narrativa impecable.",
    img: "service-launch", 
  }
]

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-40 bg-card/30 text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Soluciones a Medida</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold text-foreground">
            Diseñamos <span className="italic font-light text-brand-gold opacity-90">el futuro de tu marca.</span>
          </h3>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light leading-relaxed italic">
            No organizamos logística; creamos plataformas de comunicación en vivo que generan resultados de negocio reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-24 lg:gap-16">
          {services.map((service, idx) => {
            const imgData = PlaceHolderImages.find(p => p.id === service.img)
            return (
              <div key={idx} className="group flex flex-col space-y-10">
                <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden bg-muted border border-white/5 shadow-2xl">
                  <Image 
                    src={imgData?.imageUrl || "https://picsum.photos/seed/service/1200/800"} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    data-ai-hint="premium corporate experience"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <span className="bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                      {service.benefit}
                    </span>
                  </div>
                </div>
                <div className="space-y-6 px-4">
                  <h4 className="text-2xl lg:text-3xl font-headline font-bold text-foreground group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-base lg:text-lg text-foreground/50 font-light leading-relaxed italic">
                    {service.description}
                  </p>
                  <Button variant="link" className="text-brand-gold p-0 h-auto uppercase tracking-widest text-[10px] gap-2 font-bold hover:no-underline opacity-60 group-hover:opacity-100 transition-opacity">
                    Hablemos de este proyecto <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-32 text-center">
          <Button asChild className="rounded-full bg-transparent border border-white/20 hover:border-brand-gold hover:text-brand-gold px-12 py-8 text-[11px] font-bold uppercase tracking-widest transition-all">
            <Link href="#contacto">Ver todas nuestras soluciones</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
