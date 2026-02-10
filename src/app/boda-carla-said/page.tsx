
"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Literata, Dancing_Script } from 'next/font/google'
import { CalendarPlus, ExternalLink, MapPin } from 'lucide-react'
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
    itinerario: "Itinerario",
    llegada: "Llegada al club de playa",
    ceremonia: "Ceremonia",
    recepcion: "Recepción y cena",
    fin: "Fin del evento",
    ubicacion: "Ubicación",
    verMapa: "Ver ubicación en mapa",
    hospedaje: "Hotel Sede",
    reservar: "Reservas próximamente",
    reservaMasAdelante: "La reserva estará disponible más adelante.",
    verWeb: "Ver página web",
    tarifaPreferencial: "Contamos con una tarifa preferencial para nuestros invitados.",
    confirmar: "Confirmar asistencia",
    rsvpTexto: "Favor de confirmar antes del 1 de Noviembre",
    fraseFinal: "L'amore accorcia le distanze e unisce mondi lontani",
    zihua: "Zihuatanejo, Guerrero, México",
    domingo: "Domingo, 20 de diciembre de 2026",
    vestimenta: "Vestimenta",
    formalLino: "Formal de lino",
    waMessage: "¡Hola Carla y Said! Estoy muy emocionado por su boda. Me encantaría confirmar mi asistencia para celebrar con ustedes el 20 de diciembre de 2026 en Zihuatanejo. ¡Nos vemos pronto!",
    venue: "Club de Playa Garrobo",
    trajeSinCorbata: "Traje sin corbata",
    vestidoLargo: "Vestido abajo de las rodillas"
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
    itinerario: "Itinerario",
    llegada: "Arrivo al club de playa",
    ceremonia: "Cerimonia",
    recepcion: "Ricevimento e cena",
    fin: "Fine dell'evento",
    ubicacion: "Posizione",
    verMapa: "Visualizza posizione",
    hospedaje: "Sede dell'Hotel",
    reservar: "Prenotazioni a breve",
    reservaMasAdelante: "La prenotación será disponible più avanti.",
    verWeb: "Sito web",
    tarifaPreferencial: "Abbiamo una tarifa preferenziale per i nostri ospiti.",
    confirmar: "Conferma participación",
    rsvpTexto: "Si prega di confermare entro il 1 novembre",
    fraseFinal: "L'amore accorcia le distanze e unisce mondi lontani",
    zihua: "Zihuatanejo, Guerrero, Messico",
    domingo: "Domenica, 20 dicembre 2026",
    vestimenta: "Abbigliamento",
    formalLino: "Formale in lino",
    waMessage: "Ciao Carla e Said! Sono molto entusiasta per il vostro matrimonio. Vorrei confermare la mia participación per festeggiare con voi il 20 dicembre 2026 a Zihuatanejo. A presto!",
    venue: "Club de Playa Garrobo",
    trajeSinCorbata: "Abito senza cravatta",
    vestidoLargo: "Abito sotto le ginocchia"
  }
}

function RevealSection({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={ref} 
      className={cn(
        "transition-all duration-[1200ms] ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function ItineraryItem({ step }: { step: any }) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (itemRef.current) observer.observe(itemRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={itemRef}
      className={cn(
        "flex flex-col items-center text-center gap-6 transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-xl">
        <div className={cn(
          "h-[1px] bg-[#c5a059] transition-all duration-1000 ease-in-out flex-1",
          isVisible ? "opacity-30" : "opacity-0"
        )} />
        <p className={cn(serif.className, "text-4xl md:text-6xl tracking-widest text-[#c5a059] whitespace-nowrap")}>{step.time}</p>
        <div className={cn(
          "h-[1px] bg-[#c5a059] transition-all duration-1000 ease-in-out flex-1",
          isVisible ? "opacity-30" : "opacity-0"
        )} />
      </div>
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl uppercase tracking-[0.4em] font-light text-[#5c6b5c]">{step.label}</h3>
      </div>
    </div>
  )
}

export default function WeddingPage() {
  const [lang, setLang] = useState<'es' | 'it'>('es')
  const [isFinished, setIsFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const t = translations[lang]

  const heroImage = PlaceHolderImages.find(img => img.id === 'wedding-hero')
  const quoteBgImage = PlaceHolderImages.find(img => img.id === 'wedding-bg-quote')
  const itineraryBgImage = PlaceHolderImages.find(img => img.id === 'wedding-bg-itinerary')
  const hotelImage = PlaceHolderImages.find(img => img.id === 'hotel-villa-mexicana')
  const flagMx = PlaceHolderImages.find(img => img.id === 'flag-mx')
  const flagIt = PlaceHolderImages.find(img => img.id === 'flag-it')
  const dresscodeImg = PlaceHolderImages.find(img => img.id === 'dresscode-image')

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
      location: 'Club de Playa Garrobo, Zihuatanejo, Guerrero, México',
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

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=JC8W+55+Caleta+de+Chon+40895+Zihuatanejo+Gro+Mexico', '_blank');
  };

  return (
    <div className="bg-[#fcfaf7] text-[#5c6b5c] font-body overflow-x-hidden">
      {/* Selector de Idioma */}
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

      {/* Portada */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImage?.imageUrl || "/foto1.png"} 
            alt="Carla & Said Wedding" 
            fill
            className="object-cover object-[75%_center] pointer-events-none"
            priority
            data-ai-hint="wedding couple beach"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/5 via-transparent to-[#F4F0EA]/10 pointer-events-none" />
        
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-start pt-32 px-6 text-center">
          <RevealSection delay={300} className="space-y-6">
            <h1 className={cn(script.className, "text-7xl md:text-[9.5rem] text-[#5c6b5c] leading-none tracking-tight drop-shadow-sm")}>
              Carla & Said
            </h1>
            <div className="space-y-3">
              <p className={cn(serif.className, "text-lg md:text-xl tracking-widest uppercase italic text-[#c5a059] font-medium drop-shadow-sm")}>{t.domingo}</p>
              <p className="text-[12px] md:text-sm tracking-[0.6em] uppercase font-bold text-[#5c6b5c] drop-shadow-sm inline-block">
                {t.zihua}
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-24 md:py-32 bg-[#F4F0EA] border-b border-[#c5a059]/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <RevealSection className="space-y-4">
            <h2 className={cn(serif.className, "text-3xl md:text-5xl font-light text-[#5c6b5c] italic")}>
              {t.faltaPoco}
            </h2>
            <p className={cn(script.className, "text-xl md:text-3xl text-[#c5a059] opacity-80")}>
              {t.acompananos}
            </p>
          </RevealSection>

          <RevealSection delay={200} className="min-h-[120px] flex items-center justify-center">
            {isFinished ? (
              <h2 className={cn(serif.className, "text-4xl md:text-6xl italic text-[#c5a059] drop-shadow-sm")}>
                {t.seAcabo}
              </h2>
            ) : (
              <div className="flex justify-center gap-6 md:gap-16">
                {[
                  { val: timeLeft.days, label: t.dias },
                  { val: timeLeft.hours, label: t.horas },
                  { val: timeLeft.minutes, label: t.minutos },
                  { val: timeLeft.seconds, label: t.segundos }
                ].map((unit, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className={cn(serif.className, "text-3xl md:text-6xl font-light text-[#5c6b5c]")}>
                      {unit.val.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40 text-[#5c6b5c] mt-2 md:mt-4">{unit.label}</span>
                  </div>
                ))}
              </div>
            )}
          </RevealSection>

          {!isFinished && (
            <RevealSection delay={400} className="pt-8">
              <Button 
                onClick={handleAddToCalendar}
                variant="outline"
                className="rounded-full px-8 py-6 border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition-all duration-700 uppercase tracking-[0.2em] text-[10px] gap-3"
              >
                <CalendarPlus size={16} />
                {t.calendario}
              </Button>
            </RevealSection>
          )}
        </div>
      </section>

      {/* Frase y Confirmación */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-[#fcfaf7]">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src={quoteBgImage?.imageUrl || "/foto2.png"} 
            alt="Background Confirmación" 
            fill 
            className="object-cover object-center pointer-events-none"
            data-ai-hint="elegant wedding background"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <RevealSection className="flex justify-center gap-4 md:gap-8 mb-12 md:mb-16">
            <div className="relative w-32 h-24 md:w-64 md:h-48 transition-transform hover:scale-105 duration-500">
              <Image 
                src={flagMx?.imageUrl || "/banderamx.png"} 
                alt="México" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-24 md:w-64 md:h-48 transition-transform hover:scale-105 duration-500">
              <Image 
                src={flagIt?.imageUrl || "/banderaita.png"} 
                alt="Italia" 
                fill 
                className="object-contain"
              />
            </div>
          </RevealSection>

          <RevealSection delay={300} className="space-y-12">
            <p className={cn(script.className, "text-3xl md:text-6xl text-[#5c6b5c] font-medium leading-relaxed italic")}>
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
          </RevealSection>
        </div>
      </section>

      {/* Itinerario */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-[#f5f0e6]/40">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src={itineraryBgImage?.imageUrl || "/foto3.png"} 
            alt="Itinerary Decor" 
            fill 
            className="object-cover pointer-events-none"
            data-ai-hint="elegant decoration detail"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <RevealSection className="text-center mb-16 md:mb-32">
            <h2 className={cn(serif.className, "text-5xl md:text-8xl italic text-[#5c6b5c]")}>
              {t.itinerario}
            </h2>
            <div className="w-24 h-[1px] bg-[#c5a059] mx-auto mt-6 md:mt-8 opacity-30" />
            <div className="mt-8 flex flex-col items-center gap-2">
              <p className="text-sm uppercase tracking-[0.3em] font-medium opacity-60">Club de Playa Garrobo</p>
              <Button 
                variant="outline" 
                onClick={openGoogleMaps}
                className="rounded-full px-8 py-4 border-[#c5a059]/30 text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition-all duration-700 uppercase tracking-[0.2em] text-[9px] gap-2 mt-4"
              >
                <MapPin size={14} />
                {t.verMapa}
              </Button>
            </div>
          </RevealSection>

          <div className="space-y-20 md:space-y-32">
            {[
              { time: "17:00", label: t.llegada },
              { time: "17:30", label: t.ceremonia },
              { time: "19:30", label: t.recepcion },
              { time: "01:00", label: t.fin }
            ].map((step, idx) => (
              <ItineraryItem key={idx} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Sede */}
      <section id="hotel" className="py-24 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <RevealSection className="text-center mb-16 md:mb-24">
            <h3 className={cn(serif.className, "text-5xl md:text-8xl italic text-[#5c6b5c]")}>{t.hospedaje}</h3>
            <div className="w-24 h-[1px] bg-[#c5a059] mx-auto mt-6 md:mt-8 opacity-30" />
          </RevealSection>

          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <RevealSection className="aspect-video w-full relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-8 md:mb-12 shadow-sm">
              <Image 
                src={hotelImage?.imageUrl || "/foto4.png"} 
                alt="Villa Mexicana Hotel" 
                fill 
                className="object-cover"
                priority
                data-ai-hint="hotel architecture"
              />
            </RevealSection>

            <RevealSection delay={200} className="text-center space-y-4 md:space-y-6">
              <h4 className={cn(serif.className, "text-3xl md:text-5xl italic text-[#5c6b5c]")}>Villa Mexicana Hotel</h4>
              <p className="text-xs md:text-base italic opacity-50 tracking-wide font-light max-w-md mx-auto px-4">
                {t.tarifaPreferencial}
              </p>
            </RevealSection>

            <RevealSection delay={400} className="flex flex-col sm:flex-row gap-6 md:gap-8 mt-12 md:mt-16 w-full justify-center items-center">
              <Button 
                onClick={() => window.open('https://hotelvillamexicana.com.mx/zihuatanejo/en/', '_blank')}
                variant="outline"
                className="rounded-full px-12 py-8 border-[#5c6b5c]/20 text-[#5c6b5c] hover:bg-[#5c6b5c] hover:text-white transition-all duration-700 uppercase tracking-[0.2em] text-[10px] gap-3 w-full sm:w-auto"
              >
                {t.verWeb}
                <ExternalLink size={14} />
              </Button>

              <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
                <Button 
                  disabled
                  className="rounded-full px-12 py-8 bg-[#c5a059]/40 text-white cursor-not-allowed uppercase tracking-[0.2em] text-[10px] w-full sm:w-auto"
                >
                  {t.reservar}
                </Button>
                <p className="text-[9px] uppercase tracking-widest opacity-30">{t.reservaMasAdelante}</p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Sección de Vestimenta */}
      <section className="py-8 md:py-16 bg-[#fbf9f4] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealSection className="flex flex-col items-center">
            <div className="space-y-1 relative z-10">
              <h2 className={cn(serif.className, "text-5xl md:text-7xl italic text-[#5c6b5c]")}>
                {t.vestimenta}
              </h2>
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">
                {t.formalLino}
              </p>
            </div>

            <div className="relative w-full max-w-[320px] md:max-w-[780px] aspect-[4/5] -mt-24 md:-mt-44 transition-all duration-700">
              <Image 
                src={dresscodeImg?.imageUrl || "/dresscode.png"} 
                alt="Dress Code" 
                fill 
                className="object-contain"
                data-ai-hint="formal attire illustration"
              />
            </div>

            <div className="w-full flex justify-center gap-6 md:gap-24 -mt-16 md:-mt-32 px-4 relative z-10">
              <p className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] opacity-60 font-medium text-right italic max-w-[120px] md:max-w-[200px]">
                {t.trajeSinCorbata}
              </p>
              <p className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] opacity-60 font-medium text-left italic max-w-[120px] md:max-w-[200px]">
                {t.vestidoLargo}
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
