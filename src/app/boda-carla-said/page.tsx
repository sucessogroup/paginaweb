
"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Literata, Dancing_Script } from 'next/font/google'
import { MapPin, Calendar, Clock, Hotel, Gift, MessageCircle, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const serif = Literata({ subsets: ['latin'], weight: ['300', '400', '600'] })
const script = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] })

const translations = {
  es: {
    seAcabo: "Se acabó el tiempo",
    dias: "Días",
    horas: "Horas",
    minutos: "Minutos",
    segundos: "Segundos",
    invitacion: "Con enorme alegría los invitamos a celebrar nuestro matrimonio.",
    ceremonia: "Ceremonia",
    cena: "Cena",
    fiesta: "Fiesta",
    ubicacion: "Ubicación",
    verMapa: "Ver ubicación",
    itinerario: "Itinerario",
    coctel: "Cóctel",
    recepcion: "Recepción",
    hospedaje: "Hospedaje",
    reservar: "Reservar",
    regalos: "Mesa de Regalos",
    textoRegalos: "Vuestra presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros, aquí tienen nuestras opciones.",
    transferencia: "Transferencia bancaria",
    confirmar: "Confirmar asistencia",
    fraseFinal: "L'amore accorcia le distanze e unisce mondi lontani",
    zihua: "Zihuatanejo, Guerrero, México",
    domingo: "Domingo, 20 de diciembre de 2026"
  },
  it: {
    seAcabo: "Il tempo è finito",
    dias: "Giorni",
    horas: "Ore",
    minutos: "Minuti",
    segundos: "Secondi",
    invitacion: "Con immensa gioia vi invitiamo a celebrare il nostro matrimonio.",
    ceremonia: "Cerimonia",
    cena: "Cena",
    fiesta: "Festa",
    ubicacion: "Posizione",
    verMapa: "Ver ubicación",
    itinerario: "Itinerario",
    coctel: "Cocktail",
    recepcion: "Ricevimento",
    hospedaje: "Alloggio",
    reservar: "Prenotare",
    regalos: "Lista Nozze",
    textoRegalos: "La vostra presenza è il nostro regalo più bello, ma se desiderate farci un pensiero, ecco le nostre opzioni.",
    transferencia: "Bonifico bancario",
    confirmar: "Conferma la partecipazione",
    fraseFinal: "L'amore accorcia le distanze e unisce mondi lontani",
    zihua: "Zihuatanejo, Guerrero, Messico",
    domingo: "Domenica, 20 dicembre 2026"
  }
}

export default function WeddingPage() {
  const [lang, setLang] = useState<'es' | 'it'>('es')
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const t = translations[lang]

  useEffect(() => {
    const targetDate = new Date('2026-12-20T17:00:00').getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now
      if (distance < 0) {
        clearInterval(timer)
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const weddingHero = PlaceHolderImages.find(img => img.id === 'wedding-hero')
  const weddingCouple = PlaceHolderImages.find(img => img.id === 'wedding-couple')

  return (
    <div className="bg-[#fcfaf7] text-[#5c6b5c] overflow-hidden">
      {/* Sticky Language Selector */}
      <div className="fixed top-6 right-6 z-[100] flex gap-2">
        <Button 
          variant="ghost" 
          onClick={() => setLang('es')}
          className={cn("rounded-full px-4 text-xs tracking-widest uppercase border border-[#5c6b5c]/10 bg-white/50 backdrop-blur-md", lang === 'es' ? "bg-white text-[#8a9a5b]" : "opacity-60")}
        >
          ES
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => setLang('it')}
          className={cn("rounded-full px-4 text-xs tracking-widest uppercase border border-[#5c6b5c]/10 bg-white/50 backdrop-blur-md", lang === 'it' ? "bg-white text-[#8a9a5b]" : "opacity-60")}
        >
          IT
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 pt-32 md:pt-20">
        <div className="text-center space-y-8 animate-in fade-in duration-1000">
          <div className="flex flex-col items-center">
             <div className="w-16 h-16 border border-[#c5a059] rounded-full flex items-center justify-center mb-10">
               <span className={cn(script.className, "text-2xl text-[#c5a059]")}>CS</span>
             </div>
             <p className="text-xs tracking-[0.6em] uppercase text-[#8a9a5b] mb-4">Save the Date</p>
             <h1 className={cn(script.className, "text-7xl md:text-9xl text-[#5c6b5c] leading-tight")}>
               Carla & Said
             </h1>
          </div>

          <div className="space-y-4">
            <p className={cn(serif.className, "text-lg md:text-2xl tracking-widest uppercase opacity-80 italic")}>{t.domingo}</p>
            <p className="text-sm tracking-[0.4em] uppercase font-light">{t.zihua}</p>
          </div>

          <div className="pt-12 max-w-lg mx-auto">
            <p className={cn(script.className, "text-2xl md:text-3xl text-[#8a9a5b] leading-relaxed")}>
              “{t.fraseFinal}”
            </p>
          </div>

          {/* Countdown */}
          <div className="pt-20">
            <p className="text-[10px] tracking-[0.8em] uppercase mb-8 opacity-40">{t.seAcabo}</p>
            <div className="flex justify-center gap-6 md:gap-12">
              {[
                { val: timeLeft.days, label: t.dias },
                { val: timeLeft.hours, label: t.horas },
                { val: timeLeft.minutes, label: t.minutos },
                { val: timeLeft.seconds, label: t.segundos }
              ].map((unit, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className={cn(serif.className, "text-3xl md:text-5xl font-light mb-1")}>{unit.val.toString().padStart(2, '0')}</span>
                  <span className="text-[8px] uppercase tracking-[0.3em] opacity-50">{unit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-[1px] h-16 bg-[#5c6b5c]" />
        </div>
      </section>

      {/* Gallery Section - Editorial Scroll */}
      <section className="py-24 max-w-5xl mx-auto px-6 space-y-24">
        <div className="relative aspect-[3/4] md:aspect-video w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in duration-1000 slide-in-from-bottom-10">
          <Image 
            src={weddingHero?.imageUrl || "https://picsum.photos/seed/cs1/1200/800"} 
            alt="Hero" 
            fill 
            className="object-cover grayscale-[20%]"
            data-ai-hint="romantic sunset beach"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-2 md:order-1">
             <div className="w-12 h-[1px] bg-[#c5a059]" />
             <p className={cn(serif.className, "text-3xl md:text-4xl italic leading-relaxed text-[#5c6b5c]")}>
               {t.invitacion}
             </p>
          </div>
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden order-1 md:order-2">
            <Image 
              src={weddingCouple?.imageUrl || "https://picsum.photos/seed/cs2/800/1000"} 
              alt="Couple" 
              fill 
              className="object-cover"
              data-ai-hint="couple in white"
            />
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section className="py-32 bg-[#f5f0e6]/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[10px] tracking-[1em] uppercase mb-16 opacity-40">{t.itinerario}</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { time: "17:00", label: t.ceremonia, icon: Calendar },
              { time: "19:00", label: t.cena, icon: Clock },
              { time: "21:30", label: t.fiesta, icon: Globe }
            ].map((step, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#5c6b5c]/10 flex items-center justify-center">
                    <step.icon size={18} className="text-[#8a9a5b]" />
                  </div>
                </div>
                <p className={cn(serif.className, "text-xl tracking-widest")}>{step.time}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8a9a5b]">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <h3 className={cn(serif.className, "text-4xl italic")}>{t.ubicacion}</h3>
               <div className="space-y-2">
                 <p className="text-lg text-[#5c6b5c]">{t.zihua}</p>
                 <p className="text-sm opacity-60 font-light">Zihuatanejo, Guerrero</p>
               </div>
               <Button className="rounded-none px-12 py-7 bg-transparent border border-[#5c6b5c] text-[#5c6b5c] hover:bg-[#5c6b5c] hover:text-white transition-all uppercase tracking-widest text-xs">
                 {t.verMapa}
               </Button>
             </div>
             <div className="h-[400px] w-full bg-[#f4f1ea] rounded-2xl relative overflow-hidden grayscale">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.471597560863!2d-101.5582967!3d17.6407044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84351639d997233f%3A0x6283b3e21e10695!2sZihuatanejo%2C%20Guerrero!5e0!3m2!1ses!2smx!4v1711234567890!5m2!1ses!2smx" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 loading="lazy"
               />
             </div>
           </div>
        </div>
      </section>

      {/* Lodging */}
      <section className="py-32 bg-[#fcfaf7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[10px] tracking-[1em] uppercase mb-4 opacity-40">{t.hospedaje}</h2>
            <div className="w-10 h-[1px] bg-[#c5a059] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { id: 'hotel-1', title: 'Hotel 1 - Boutique Zihua' },
              { id: 'hotel-2', title: 'Hotel 2 - Casa del Mar' }
            ].map((hotel, idx) => {
              const img = PlaceHolderImages.find(p => p.id === hotel.id)
              return (
                <Card key={idx} className="border-none bg-transparent shadow-none">
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden mb-6 group">
                    <Image src={img?.imageUrl || "https://picsum.photos/seed/h/800/600"} alt={hotel.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <CardContent className="p-0 space-y-4">
                    <h4 className={cn(serif.className, "text-2xl italic")}>{hotel.title}</h4>
                    <div className="flex gap-4">
                      <Button variant="link" className="text-xs uppercase tracking-widest p-0 text-[#8a9a5b] h-auto">{t.reservar}</Button>
                      <Button variant="link" className="text-xs uppercase tracking-widest p-0 text-[#8a9a5b] h-auto">Google Maps</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gifts */}
      <section className="py-32 bg-[#9dbce3]/10">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-10">
           <Gift size={40} strokeWidth={0.5} className="mx-auto text-[#c5a059]" />
           <h2 className={cn(serif.className, "text-4xl italic")}>{t.regalos}</h2>
           <p className="text-lg font-light leading-relaxed opacity-80">
             {t.textoRegalos}
           </p>
           <div className="flex flex-col gap-4 max-w-xs mx-auto">
             <Button className="rounded-none py-8 border border-[#5c6b5c] bg-white text-[#5c6b5c] hover:bg-[#5c6b5c] hover:text-white uppercase tracking-widest text-xs">
               Liverpool Nozze
             </Button>
             <Button className="rounded-none py-8 border border-[#5c6b5c] bg-[#5c6b5c] text-white hover:bg-black uppercase tracking-widest text-xs">
               {t.transferencia}
             </Button>
           </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-40 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center space-y-12">
           <h2 className={cn(script.className, "text-6xl md:text-8xl")}>RSVP</h2>
           <div className="w-12 h-[1px] bg-[#c5a059] mx-auto" />
           <p className="text-sm tracking-[0.4em] uppercase opacity-40">RSVP antes del 1 de Noviembre</p>
           <Button className="rounded-full px-12 py-8 bg-[#8a9a5b] hover:bg-[#5c6b5c] text-white flex items-center gap-4 mx-auto group transition-all duration-500">
             <MessageCircle className="group-hover:scale-110 transition-transform" />
             <span className="uppercase tracking-widest text-sm font-bold">{t.confirmar}</span>
           </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-[#5c6b5c]/5">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
           <div className={cn(script.className, "text-4xl")}>Carla & Said</div>
           <p className="text-xs tracking-[0.5em] uppercase opacity-40">20.12.2026</p>
           <p className={cn(serif.className, "text-xl italic text-[#8a9a5b]")}>“{t.fraseFinal}”</p>
           
           <div className="pt-10 flex justify-center gap-6 text-[10px] tracking-widest uppercase opacity-40">
             <span>ESP</span>
             <span>•</span>
             <span>ITA</span>
           </div>
        </div>
      </footer>
    </div>
  )
}
