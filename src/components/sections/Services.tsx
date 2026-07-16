
"use client"

import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const services = [
  {
    title: "Congresos",
    benefit: "Networking & Autoridad",
    description: "Diseñamos foros de alto nivel para el intercambio de conocimiento y posicionamiento estratégico ante audiencias especializadas.",
    img: "/EVENTOS/congresos.jpg",
  },
  {
    title: "Eventos Protocolarios",
    benefit: "Crecimiento & Lealtad",
    description: "Activaciones de marca y cenas exclusivas diseñadas para convertir invitados en embajadores apasionados.",
    img: "/EVENTOS/protocolarios.jpg",
  },
  {
    title: "Offsites & Leadership Retreats",
    benefit: "Claridad & Visión",
    description: "Espacios de alta gama diseñados para el pensamiento estratégico, la desconexión creativa y la toma de decisiones.",
    img: "/EVENTOS/offsite.jpg",
  },
  {
    title: "Convenciones",
    benefit: "Cultura & Identidad",
    description: "Creamos encuentros masivos que fortalecen el sentido de pertenencia y alinean a los equipos con los objetivos de la organización.",
    img: "/EVENTOS/convenciones.jpg",
  },
  {
    title: "Experiencias",
    benefit: "Emoción & Conexión",
    description: "Tu escoges la experiencia y nosotros la adaptamos a ti.",
    img: "https://picsum.photos/seed/exp-mem/800/1000",
  },
  {
    title: "Tu sueña nosotros lo hacemos realidad",
    benefit: "Experiencias ilimitadas",
    description: "Juntos hacemos realidad tu sueño convirtiéndolo en un SUCESSO",
    img: "/EVENTOS/sueña.jpg",
  }
]

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-40 bg-card/30 text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Soluciones a Medida</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold text-foreground">
            Cada detalle <span className="italic font-light text-brand-gold opacity-90">un SUCESSO.</span>
          </h3>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light leading-relaxed italic">
            No organizamos logística; creamos plataformas de comunicación en vivo que generan resultados de negocio reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => {
            const imgData = PlaceHolderImages.find(p => p.id === service.img)
            const imgSrc = service.img.startsWith('/') ? service.img : (imgData?.imageUrl || service.img)
            
            return (
              <div key={idx} className="group flex flex-col space-y-8">
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-muted border border-white/5 shadow-2xl transition-all duration-700">
                  <Image 
                    src={imgSrc} 
                    fill
                    alt={service.title}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    data-ai-hint="premium corporate experience"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 text-brand-gold text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                      {service.benefit}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <h4 className="text-2xl font-headline font-bold text-foreground group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-foreground/50 font-light leading-relaxed italic text-base">
                    {service.description}
                  </p>
                  <Button variant="link" className="text-brand-gold p-0 h-auto uppercase tracking-widest text-[9px] gap-2 font-bold hover:no-underline opacity-60 group-hover:opacity-100 transition-opacity">
                    Hablemos de este proyecto <ArrowRight size={12} />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-32 text-center">
          <Button asChild className="rounded-full bg-brand-gold hover:bg-brand-gold/80 text-white px-12 py-8 text-[11px] font-bold uppercase tracking-widest transition-all shadow-xl shadow-brand-gold/10">
            <Link href="#contacto">Agenda una llamada</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
