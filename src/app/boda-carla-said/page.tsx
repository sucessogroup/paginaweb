
"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Literata, Dancing_Script } from 'next/font/google'
import { MapPin, Calendar, Clock, Hotel as HotelIcon, Gift, Globe, Navigation, CalendarPlus } from 'lucide-react'
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
    faltaPoco: "Falta poco para nuestro para siempre",
    acompananos: "Acompáñanos en este momento",
    calendario: "Añadir al calendario",
    invitacion: "Con enorme alegría los invitamos a celebrar nuestro matrimonio.",
    itinerario: "Itinerario",
    ceremonia: "Ceremonia",
    coctel: "Cóctel de Bienvenida",
    recepcion: "Recepción y Cena",
    ubicacion: "Ubicación",
    verMapa: "Ver ubicación en mapa",
    hospedaje: "Hotel",
    reservar: "Reservar ahora",
    regalos: "Mesa de Regalos",
    textoRegalos: "Vuestra presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros, aquí tienen nuestras opciones.",
    transferencia: "Datos para transferencia",
    confirmar: "Confirmar asistencia",
    rsvpTexto: "Favor de confirmar antes del 1 de Noviembre",
    fraseFinal: "L'amore accorcia le distanze e unisce mondi lontani",
    zihua: "Zihuatanejo, Guerrero, México",
    domingo: "Domingo, 20 de diciembre de 2026",
    loading: "Cargando...",
    waMessage: "¡Hola! Estoy muy emocionado por la boda de Carla y Said. Me gustaría confirmar mi asistencia para celebrar con ustedes el 20 de diciembre de 2026 en Zihuatanejo. ¡Nos vemos pronto!"
  },
  it: {
    seAcabo: "Il tempo è finito",
    dias: "Giorni",
    horas: "Ore",
    minutos: "Minuti",
    segundos: "Secondi",
    faltaPoco: "Manca poco al nostro per siempre",
    acompananos: "Accompagnaci in questo momento",
    calendario: "Aggiungi al calendario",
    invitacion: "Con immensa gioia vi invitiamo a celebrare il nostro matrimonio.",
    itinerario: "Itinerario",
    ceremonia: "Cerimonia",
    coctel: "Cocktail di Benvenuto",
    recepcion: "Ricevimento e Cena",
    ubicacion: "Posizione",
    verMapa: "Visualizza posizione",
    hospedaje: "Hotel",
    reservar: "Prenota ora",
    regalos: "Lista Nozze",
    textoRegalos: "La vostra presencia è il nuestro regalo más bello, ma se desiderate farci un pensamiento, ecco le nostre opzioni.",
    transferencia: "Dati per il bonifico",
    confirmar: "Conferma participación",
    rsvpTexto: "Si prega di confermare entro il 1 novembre",
    fraseFinal: "Il tempo è finito",
    zihua: "Zihuatanejo, Guerrero, Messico",
    domingo: "Domenica, 20 dicembre 2026",
    loading: "Caricamento...",
    waMessage: "Ciao! Sono molto entusiasta per il matrimonio di Carla e Said. Vorrei confermare la mia participación per festeggiare con voi il 20 dicembre 2026 a Zihuatanejo. A presto!"
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

  const handleAddToCalendar = () => {
    const event = {
      title: 'Boda Carla & Said',
      description: '¡Los esperamos para celebrar nuestro amor!',
      location: 'Zihuatanejo, Guerrero, México',
      startTime: '20261220T170000',
      endTime: '20261221T020000',
    };

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding//Carla and Said//ES',
      'BEGIN:VEVENT',
      `DTSTART:${event.startTime}`,
      `DTEND:${event.endTime}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'boda-carla-said.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleWhatsAppConfirm = () => {
    const phoneNumber = "529982418679";
    const message = encodeURIComponent(t.waMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

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
      <section className="relative h-screen w-full overflow-hidden bg-[#B7CCE0]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/foto1.png" 
            alt="Carla & Said Wedding" 
            fill
            className="object-cover object-center pointer-events-none"
            priority
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#B7CCE0]/40 via-transparent to-[#F4F0EA]/10 pointer-events-none" />
        
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-start pt-32 px-6 text-center">
          <div className="space-y-6">
            <h1 className={cn(script.className, "text-7xl md:text-[9.5rem] text-[#5c6b5c] leading-none tracking-tight drop-shadow-sm")}>
              Carla & Said
            </h1>
            <div className="space-y-3">
              <p className={cn(serif.className, "text-lg md:text-xl tracking-widest uppercase italic text-[#c5a059] font-medium drop-shadow-sm")}>{t.domingo}</p>
              <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold text-[#5c6b5c] drop-shadow-sm inline-block">
                {t.zihua}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Countdown */}
      <section className="py-32 bg-[#F4F0EA] border-b border-[#c5a059]/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className={cn(serif.className, "text-3xl md:text-5xl font-light text-[#5c6b5c] italic")}>
              {t.faltaPoco}
            </h2>
            <p className={cn(script.className, "text-xl md:text-3xl text-[#c5a059] opacity-80")}>
              {t.acompananos}
            </p>
          </div>

          <div className="min-h-[120px] flex items-center justify-center">
            {isFinished ? (
              <h2 className={cn(serif.className, "text-4xl md:text-6xl italic text-[#c5a059] drop-shadow-sm")}>
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
                    <span className={cn(serif.className, "text-4xl md:text-6xl font-light text-[#5c6b5c]")}>
                      {unit.val.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 text-[#5c6b5c] mt-4">{unit.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {!isFinished && (
            <div className="pt-8">
              <Button 
                onClick={handleAddToCalendar}
                variant="outline"
                className="rounded-full px-8 py-6 border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition-all duration-700 uppercase tracking-[0.2em] text-[10px] gap-3"
              >
                <CalendarPlus size={16} />
                {t.calendario}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Sección Quote con Banderas (Postales) y Fondo foto2.png */}
      <section className="py-40 relative overflow-hidden bg-[#fcfaf7]">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src="/foto2.png" 
            alt="Background Decor" 
            fill 
            className="object-cover object-center pointer-events-none"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-16">
            <div className="relative group">
              <div className="bg-white p-2 shadow-2xl -rotate-6 transform transition-transform group-hover:rotate-0 duration-500 border border-black/5">
                <div className="w-20 h-14 relative overflow-hidden">
                  <svg viewBox="0 0 980 560" className="w-full h-full object-cover">
                    <rect width="980" height="560" fill="#006847"/>
                    <rect width="653.33" height="560" x="326.66" fill="#FFFFFF"/>
                    <rect width="326.66" height="560" x="653.33" fill="#CE1126"/>
                  </svg>
                </div>
                <div className="text-[6px] uppercase tracking-widest mt-1 opacity-40 text-center font-bold">México</div>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-white p-2 shadow-2xl rotate-6 transform transition-transform group-hover:rotate-0 duration-500 border border-black/5">
                <div className="w-20 h-14 relative overflow-hidden">
                  <svg viewBox="0 0 1500 1000" className="w-full h-full object-cover">
                    <rect width="500" height="1000" fill="#009246"/>
                    <rect width="500" height="1000" x="500" fill="#FFFFFF"/>
                    <rect width="500" height="1000" x="1000" fill="#CE2B37"/>
                  </svg>
                </div>
                <div className="text-[6px] uppercase tracking-widest mt-1 opacity-40 text-center font-bold">Italia</div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <p className={cn(script.className, "text-3xl md:text-6xl text-[#5c6b5c] leading-relaxed italic")}>
              “{t.fraseFinal}”
            </p>
            
            <div className="pt-8">
              <Button 
                onClick={handleWhatsAppConfirm}
                className="rounded-full px-12 py-8 bg-[#8a9a5b] hover:bg-[#5c6b5c] text-white transition-all duration-700 uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-[#8a9a5b]/20"
              >
                {t.confirmar}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerario con Título Sticky */}
      <section className="relative bg-[#f5f0e6]/40 overflow-visible">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen">
          {/* Columna del Título Sticky */}
          <div className="md:w-1/3 p-6 md:p-32 flex flex-col justify-start">
            <h2 className={cn(serif.className, "text-6xl md:text-[10rem] sticky top-40 text-[#5c6b5c] opacity-[0.08] md:opacity-[0.05] italic leading-none select-none")}>
              {t.itinerario}
            </h2>
          </div>

          {/* Columna de Eventos */}
          <div className="md:w-2/3 p-6 md:p-32 space-y-32">
            {[
              { time: "17:00", label: t.ceremonia, location: "Lugar por confirmar", icon: Globe },
              { time: "18:30", label: t.coctel, location: "Lugar por confirmar", icon: Navigation },
              { time: "20:00", label: t.recepcion, location: "Lugar por confirmar", icon: Calendar }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col gap-6 group">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-[1px] bg-[#c5a059]/40 group-hover:w-24 transition-all duration-700" />
                  <p className={cn(serif.className, "text-4xl md:text-6xl tracking-widest text-[#c5a059]")}>{step.time}</p>
                </div>
                <div className="pl-24 space-y-4">
                  <h3 className="text-xl md:text-2xl uppercase tracking-[0.4em] font-light text-[#5c6b5c]">{step.label}</h3>
                  <p className="text-xs uppercase tracking-widest opacity-40 mb-4">{step.location}</p>
                  <Button variant="link" className="text-[10px] uppercase tracking-[0.3em] text-[#8a9a5b] p-0 h-auto border-b border-[#8a9a5b]/20">
                    {t.verMapa}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación y Hotel */}
      <section id="hotel" className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-32">
            <h3 className={cn(serif.className, "text-6xl md:text-8xl italic text-[#5c6b5c]")}>{t.hospedaje}</h3>
            <div className="w-24 h-[1px] bg-[#c5a059] mx-auto mt-8 opacity-30" />
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
           <Button 
             onClick={handleWhatsAppConfirm}
             className="rounded-full px-16 py-10 bg-[#8a9a5b] hover:bg-[#5c6b5c] text-white flex items-center gap-6 mx-auto group transition-all duration-700 shadow-xl shadow-[#8a9a5b]/20"
           >
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
