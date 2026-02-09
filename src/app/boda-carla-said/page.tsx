
"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Literata, Dancing_Script } from 'next/font/google'
import { MapPin, Calendar, Clock, Hotel, Gift, MessageCircle, Globe, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
    itinerario: "Itinerario del Evento",
    ceremonia: "Ceremonia",
    coctel: "Cóctel de Bienvenida",
    recepcion: "Recepción y Cena",
    ubicacion: "Ubicación",
    verMapa: "Ver ubicación en mapa",
    hospedaje: "Sugerencias de Hospedaje",
    reservar: "Reservar ahora",
    regalos: "Mesa de Regalos",
    textoRegalos: "Vuestra presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros, aquí tienen nuestras opciones.",
    transferencia: "Datos para transferencia",
    confirmar: "Confirmar asistencia",
    rsvpTexto: "Favor de confirmar antes del 1 de Noviembre",
    fraseFinal: "L'amore accorcia le distanze e unisce mondi lontani",
    zihua: "Zihuatanejo, Guerrero, México",
    domingo: "Domingo, 20 de diciembre de 2026",
    loading: "Cargando..."
  },
  it: {
    seAcabo: "Il tempo è finito",
    dias: "Giorni",
    horas: "Ore",
    minutos: "Minuti",
    segundos: "Secondi",
    invitacion: "Con immensa gioia vi invitiamo a celebrare il nostro matrimonio.",
    itinerario: "Itinerario dell'Evento",
    ceremonia: "Cerimonia",
    coctel: "Cocktail di Benvenuto",
    recepcion: "Ricevimento e Cena",
    ubicacion: "Posizione",
    verMapa: "Visualizza posizione",
    hospedaje: "Alloggio",
    reservar: "Prenota ora",
    regalos: "Lista Nozze",
    textoRegalos: "La vostra presencia è il nuestro regalo más bello, ma se desiderate farci un pensiero, ecco le nostre opzioni.",
    transferencia: "Dati per il bonifico",
    confirmar: "Conferma participación",
    rsvpTexto: "Si prega de confermare entro il 1 novembre",
    fraseFinal: "L'amore accorcia le distanze e unisce mondi lontani",
    zihua: "Zihuatanejo, Guerrero, Messico",
    domingo: "Domenica, 20 de diciembre de 2026",
    loading: "Caricamento..."
  }
}

export default function WeddingPage() {
  const [lang, setLang] = useState<'es' | 'it'>('es')
  const [isFinished, setIsFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const t = translations[lang]

  useEffect(() => {
    const targetDate = new Date('2026-12-20T17:00:00').getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now
      if (distance < 0) {
        setIsFinished(true)
        clearInterval(timer)
      } else {
        setIsFinished(false)
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

  const weddingCouple = PlaceHolderImages.find(img => img.id === 'wedding-couple')
  const details1 = PlaceHolderImages.find(img => img.id === 'wedding-details-1')
  const details2 = PlaceHolderImages.find(img => img.id === 'wedding-details-2')

  return (
    <div className="bg-[#fcfaf7] text-[#5c6b5c] font-body overflow-x-hidden">
      {/* Selector de Idioma Sticky */}
      <div className="fixed top-8 right-8 z-[100] flex gap-4">
        {['es', 'it'].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l as 'es' | 'it')}
            className={cn(
              "text-[10px] tracking-[0.3em] uppercase transition-all duration-500 border-b pb-1",
              lang === l ? "border-[#c5a059] text-[#5c6b5c] font-bold" : "border-transparent opacity-40 hover:opacity-100"
            )}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Hero Premium Full-Screen */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#B7CCE0] via-[#B7CCE0] to-[#F4F0EA]">
        {/* Foto de fondo principal */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/foto1.png" 
            alt="Carla & Said Wedding Illustration" 
            fill
            className="object-cover object-center pointer-events-none"
            priority
          />
        </div>

        {/* Overlay sutil para unificar colores */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#B7CCE0]/14 via-transparent to-transparent pointer-events-none" />
        
        {/* Contenido del Hero */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-between py-24 px-6 text-center animate-in fade-in duration-1000">
          {/* Info Superior */}
          <div className="space-y-6 pt-12">
            <h1 className={cn(script.className, "text-7xl md:text-[9.5rem] text-[#5c6b5c] leading-none tracking-tight drop-shadow-sm")}>
              Carla & Said
            </h1>
            <div className="space-y-1">
              <p className={cn(serif.className, "text-lg md:text-xl tracking-widest uppercase italic text-[#c5a059] font-medium")}>{t.domingo}</p>
              <p className="text-[9px] tracking-[0.4em] uppercase font-light opacity-60 text-[#5c6b5c]">{t.zihua}</p>
            </div>
          </div>

          {/* Cita y Contador Inferior */}
          <div className="space-y-12 pb-12">
            <div className="max-w-2xl mx-auto px-4">
              <p className={cn(script.className, "text-xl md:text-3xl text-[#5c6b5c] opacity-80 leading-relaxed italic")}>
                “{t.fraseFinal}”
              </p>
            </div>

            {/* Contador Minimalista */}
            <div className="min-h-[80px] flex items-center justify-center">
              {isFinished ? (
                <h2 className={cn(serif.className, "text-4xl md:text-6xl italic animate-bounce text-[#c5a059] drop-shadow-sm")}>
                  {t.seAcabo}
                </h2>
              ) : (
                <div className="flex justify-center gap-8 md:gap-16">
                  {[
                    { val: timeLeft.days, label: t.dias },
                    { val: timeLeft.hours, label: t.horas },
                    { val: timeLeft.minutes, label: t.minutos },
                    { val: timeLeft.seconds, label: t.segundos }
                  ].map((unit, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className={cn(serif.className, "text-3xl md:text-5xl font-light text-[#5c6b5c]")}>
                        {unit.val.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[8px] uppercase tracking-[0.4em] opacity-40 text-[#5c6b5c] mt-2">{unit.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Narrativa */}
      <section className="py-32 max-w-6xl mx-auto px-6 space-y-32">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 order-2 md:order-1 px-4">
             <div className="w-16 h-[1px] bg-[#c5a059]" />
             <p className={cn(serif.className, "text-3xl md:text-5xl italic leading-[1.4] text-[#5c6b5c]")}>
               {t.invitacion}
             </p>
             <p className="text-sm font-light leading-relaxed opacity-60 uppercase tracking-widest">
               Contenido provisional para la historia romántica. Este texto será reemplazado por la narrativa final de la pareja.
             </p>
          </div>
          <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden order-1 md:order-2 shadow-lg bg-white/50">
            <Image 
              src={weddingCouple?.imageUrl || "https://picsum.photos/seed/cs-couple/800/1200"} 
              alt="The Couple" 
              fill 
              className="object-cover grayscale-[30%]"
              data-ai-hint="romantic couple"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
           <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
             <Image src={details1?.imageUrl || "https://picsum.photos/seed/det1/600/600"} alt="Detail" fill className="object-cover" />
           </div>
           <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hidden md:block">
             <div className="w-full h-full bg-[#f5f0e6] flex items-center justify-center p-8 text-center">
               <span className={cn(script.className, "text-2xl text-[#8a9a5b]")}>L'amore è un viaggio</span>
             </div>
           </div>
           <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
             <Image src={details2?.imageUrl || "https://picsum.photos/seed/det2/600/600"} alt="Detail" fill className="object-cover" />
           </div>
        </div>
      </section>

      {/* Itinerario */}
      <section className="py-40 bg-[#f5f0e6]/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] tracking-[1em] uppercase mb-16 block opacity-40">{t.itinerario}</span>
          
          <div className="relative space-y-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-[#c5a059]/20 hidden md:block" />
            
            {[
              { time: "17:00", label: t.ceremonia, location: "Lugar por confirmar", icon: Globe },
              { time: "18:30", label: t.coctel, location: "Lugar por confirmar", icon: Navigation },
              { time: "20:00", label: t.recepcion, location: "Lugar por confirmar", icon: Calendar }
            ].map((step, idx) => (
              <div key={idx} className={cn(
                "relative flex flex-col md:flex-row items-center gap-10 md:gap-20",
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                <div className="flex-1 text-center md:text-right w-full">
                  <div className={cn("md:px-10", idx % 2 !== 0 && "md:text-left")}>
                    <p className={cn(serif.className, "text-3xl tracking-widest text-[#c5a059] mb-2")}>{step.time}</p>
                    <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-[#5c6b5c]">{step.label}</h3>
                  </div>
                </div>

                <div className="z-10 bg-[#fcfaf7] w-12 h-12 rounded-full border border-[#c5a059]/30 flex items-center justify-center shadow-sm">
                  <step.icon size={16} className="text-[#8a9a5b]" />
                </div>

                <div className="flex-1 text-center md:text-left w-full">
                  <div className={cn("md:px-10", idx % 2 === 0 && "md:text-left")}>
                    <p className="text-xs uppercase tracking-widest opacity-60 mb-4">{step.location}</p>
                    <Button variant="link" className="text-[10px] uppercase tracking-[0.3em] text-[#8a9a5b] p-0 h-auto border-b border-[#8a9a5b]/20">
                      {t.verMapa}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación / Mapa */}
      <section className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
               <h3 className={cn(serif.className, "text-5xl italic text-[#5c6b5c]")}>{t.ubicacion}</h3>
               <div className="space-y-4">
                 <p className="text-2xl font-light text-[#8a9a5b]">{t.zihua}</p>
                 <p className="text-sm opacity-60 leading-relaxed max-w-sm">
                   Descripción provisional del lugar. Aquí se incluirán detalles específicos para ayudar a los invitados a llegar.
                 </p>
               </div>
               <Button className="rounded-none px-12 py-8 bg-transparent border border-[#5c6b5c] text-[#5c6b5c] hover:bg-[#5c6b5c] hover:text-white transition-all duration-700 uppercase tracking-[0.4em] text-[10px]">
                 {t.verMapa}
               </Button>
             </div>
             <div className="h-[500px] w-full bg-[#f4f1ea] rounded-[2.5rem] relative overflow-hidden grayscale-[50%] shadow-2xl">
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

      {/* Hospedaje */}
      <section className="py-40 bg-[#fcfaf7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] tracking-[1em] uppercase mb-4 block opacity-40">{t.hospedaje}</span>
            <div className="w-12 h-[1px] bg-[#c5a059] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { id: 'hotel-1', title: 'Hotel Boutique 1', price: '$$$' },
              { id: 'hotel-2', title: 'Resort 2', price: '$$$$' }
            ].map((hotel, idx) => {
              const img = PlaceHolderImages.find(p => p.id === hotel.id)
              return (
                <div key={idx} className="group cursor-pointer">
                  <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                    <Image 
                      src={img?.imageUrl || "https://picsum.photos/seed/h/1000/750"} 
                      alt={hotel.title} 
                      fill 
                      className="object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="space-y-4 px-4">
                    <div className="flex justify-between items-end">
                      <h4 className={cn(serif.className, "text-3xl italic")}>{hotel.title}</h4>
                      <span className="text-[10px] tracking-widest opacity-40">{hotel.price}</span>
                    </div>
                    <div className="flex gap-8">
                      <Button variant="link" className="text-[10px] uppercase tracking-widest p-0 text-[#8a9a5b] h-auto hover:text-[#5c6b5c]">{t.reservar}</Button>
                      <Button variant="link" className="text-[10px] uppercase tracking-widest p-0 text-[#5c6b5c] h-auto opacity-40 hover:opacity-100">Maps</Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regalos */}
      <section className="py-40 bg-[#9dbce3]/5 border-y border-[#9dbce3]/10">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-12">
           <div className="flex justify-center">
             <div className="w-20 h-20 rounded-full border border-[#c5a059]/20 flex items-center justify-center">
               <Gift size={32} strokeWidth={0.5} className="text-[#c5a059]" />
             </div>
           </div>
           <h2 className={cn(serif.className, "text-5xl italic text-[#5c6b5c]")}>{t.regalos}</h2>
           <p className="text-lg font-light leading-relaxed opacity-70">
             {t.textoRegalos}
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
             <Button className="rounded-none h-16 px-10 border border-[#c5a059] bg-white text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition-all uppercase tracking-[0.3em] text-[10px]">
               Mesa de Regalos Provisional
             </Button>
             <Button className="rounded-none h-16 px-10 border border-[#5c6b5c] bg-[#5c6b5c] text-white hover:bg-black transition-all uppercase tracking-[0.3em] text-[10px]">
               {t.transferencia}
             </Button>
           </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f5f0e6]/30 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-xl mx-auto px-6 text-center space-y-16">
           <div className="space-y-6">
             <h2 className={cn(script.className, "text-8xl md:text-[12rem] text-[#5c6b5c] leading-none")}>RSVP</h2>
             <div className="w-20 h-[1px] bg-[#c5a059] mx-auto" />
           </div>
           <p className="text-[10px] tracking-[0.5em] uppercase opacity-50 font-bold">{t.rsvpTexto}</p>
           <Button className="rounded-full px-16 py-10 bg-[#8a9a5b] hover:bg-[#5c6b5c] text-white flex items-center gap-6 mx-auto group transition-all duration-700 shadow-xl shadow-[#8a9a5b]/20">
             <MessageCircle className="group-hover:rotate-12 transition-transform" />
             <span className="uppercase tracking-[0.3em] text-xs font-bold">{t.confirmar}</span>
           </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 border-t border-[#5c6b5c]/5">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
           <div className={cn(script.className, "text-5xl text-[#5c6b5c]")}>Carla & Said</div>
           <div className="flex flex-col gap-2">
             <p className="text-[10px] tracking-[0.8em] uppercase opacity-40">20.12.2026</p>
             <p className="text-[9px] tracking-[0.4em] uppercase opacity-30 italic">{t.zihua}</p>
           </div>
           <p className={cn(serif.className, "text-2xl italic text-[#c5a059] max-w-md mx-auto")}>“{t.fraseFinal}”</p>
           
           <div className="pt-16 flex justify-center gap-12 text-[9px] tracking-[0.4em] uppercase opacity-30">
             <button onClick={() => setLang('es')} className={cn(lang === 'es' && "text-[#c5a059] font-bold")}>ESP</button>
             <span className="w-1 h-1 rounded-full bg-[#c5a059]" />
             <button onClick={() => setLang('it')} className={cn(lang === 'it' && "text-[#c5a059] font-bold")}>ITA</button>
           </div>
        </div>
      </footer>
    </div>
  )
}
