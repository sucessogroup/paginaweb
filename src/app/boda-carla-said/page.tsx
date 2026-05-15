
"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Literata, Dancing_Script } from 'next/font/google'
import { CalendarPlus, ExternalLink, MapPin, CreditCard, Heart, Copy, Check, MessageCircle, Instagram, ArrowRight, FileText, Hotel } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
    hospedaje: "Hotel Sugerido",
    reservar: "Reservar en el sitio web",
    tarifaPreferencial: "Contamos con una tarifa preferencial para nuestros invitados.",
    confirmar: "Confirmar asistencia",
    rsvpTexto: "Favor de confirmar antes del 1 de Noviembre",
    alergias: "Favor de avisarnos si tienen alguna alergia alimentaria o restricción en su dieta.",
    fraseFinal: "El amor acorta las distancias y une mundos lejanos",
    zihua: "Zihuatanejo, Guerrero, México",
    domingo: "Domingo, 20 de diciembre de 2026",
    vestimenta: "Vestimenta",
    trajeSinCorbata: "Traje sin corbata",
    vestidoLargo: "Vestido abajo de las rodillas",
    waMessage: "¡Hola Carla y Said! Estoy muy emocionado por su boda. Me encantaría confirmar mi asistencia para celebrar con ustedes el 20 de diciembre de 2026 en Zihuatanejo. ¡Nos vemos pronto!",
    venue: "Club de Playa Garrobo",
    mesaRegalos: "Mesa de Regalos",
    regalosFrase: "El mejor regalo es su presencia, pero si desean tener un detalle con nosotros, les agradeceríamos que fuera a través de transferencia. Vivir en Italia dificulta llevar regalos físicos, por lo que este gesto nos facilitará mucho comenzar nuestro hogar allá.",
    clabe: "CLABE (México)",
    iban: "IBAN (Italia)",
    copiar: "Copiar",
    copiado: "Copiado",
    faqsTitle: "Preguntas Frecuentes",
    maquillajeTitle: "Maquillaje y Peinado",
    proveedorMaquillaje: "Proveedor de maquillaje y peinado",
    proximamente: "Información próximamente",
    wa: "WhatsApp",
    ig: "Instagram",
    recomendaciones: "Raccomandaciones",
    queHacer: "¿Qué puedo hacer durante el fin de semana o después de la fiesta?",
    verMas: "VER MÁS",
    cosasEn: "COSAS QUE HACER EN",
    zihuaCap: "ZIHUATANEJO",
    guerreroCap: "GUERRERO",
    mexicoCap: "MÉXICO",
    infoImportante: "Información Importante de Reserva",
    temporadaAlta: "Al tratarse de temporada alta en Zihuatanejo, el hotel no cuenta con habitaciones bloqueadas para el evento. Sin embargo, contamos con una tarifa preferencial para nuestros invitados.",
    opcionesPaquete: "También existe la opción de paquete solo hotel, al cual se le pueden añadir alimentos de manera opcional según las preferencias de cada huésped.",
    detallesCotizacion: "En la cotización compartida se encuentran todos los detalles sobre las tarifas, tipos de habitación y opciones disponibles.",
    reservarPronto: "Les recomendamos reservar su habitación lo antes posible para asegurar disponibilidad.",
    claveEvento: "Para realizar su reserva, favor de indicar la clave del evento: \"Boda Carla y Said\".",
    verCotizacion: "Ver Cotización",
    faqs: [
      { q: "¿Qué requisitos necesito para viajar a México desde Italia?", a: "Los ciudadanos italianos no necesitan visa para viajar a México como turistas. Se requiere pasaporte vigente, boleto de regreso y completar el formulario migratorio a la llegada." },
      { q: "¿A qué aeropuerto debo llegar?", a: "El aeropuerto recomendado es el Aeropuerto Internacional de Ixtapa–Zihuatanejo (ZIH), el más cercano al hotel y al lugar del evento." },
      { q: "¿Cómo llego del aeropuerto al hotel o al evento?", a: "Desde el aeropuerto pueden trasladarse en taxi autorizado, transporte privado o servicio del hotel." },
      { q: "¿Dónde se llevará a cabo la boda?", a: "En Club de Playa Garrobo, Zihuatanejo, Guerrero, México." },
      { q: "¿El aeropuerto, el hotel y el lugar del evento están cerca?", a: "Sí. Los traslados suelen ser de entre 15 y 30 minutos." },
      { q: "¿Cómo es el clima en diciembre?", a: "Diciembre tiene clima cálido, entre 22 °C y 30 °C." },
      { q: "¿Qué moneda se usa?", a: "El peso mexicano (MXN)." },
      { q: "¿Pueden asistir niños?", a: "Amamos a sus pequeños, pero el evento es solo para adultos." }
    ]
  },
  it: {
    seAcabo: "Il tempo è scaduto",
    dias: "Giorni",
    horas: "Ore",
    minutos: "Minuti",
    segundos: "Secondi",
    faltaPoco: "Manca poco al nostro \"per sempre\"",
    acompananos: "Accompagnateci in questo momento speciale",
    calendario: "Aggiungi al calendario",
    itinerario: "Programma",
    llegada: "Arrivo al beach club",
    ceremonia: "Cerimonia",
    recepcion: "Ricevimento e cena",
    fin: "Fine dell'evento",
    ubicacion: "Luogo",
    verMapa: "Vedi sulla mappa",
    hospedaje: "Hotel Consigliato",
    reservar: "Prenota sul sito web",
    tarifaPreferencial: "Abbiamo riservato una tariffa preferenziale per i nostri ospiti.",
    confirmar: "Conferma partecipazione",
    rsvpTexto: "Si prega di confermare entro il 1° novembre",
    alergias: "Vi preghiamo di comunicarci eventuali allergie o restrizioni alimentari.",
    fraseFinal: "L'amore accorcia le distanze e unisce mondi lontani",
    zihua: "Zihuatanejo, Guerrero, Messico",
    domingo: "Domenica, 20 Dicembre 2026",
    vestimenta: "Dress code",
    trajeSinCorbata: "Abito senza cravatta",
    vestidoLargo: "Abito da cocktail (sotto il ginocchio)",
    waMessage: "Ciao Carla e Said! Sono felicissimo/a per il vostro matrimonio. Vorrei confermare la mia partecipazione per festeggiare con voi il 20 dicembre 2026 a Zihuatanejo. A presto!",
    venue: "Club de Playa Garrobo",
    mesaRegalos: "Lista Nozze",
    regalosFrase: "Il regalo più grande sarà la vostra presenza. Tuttavia, per chi desiderasse farci un pensiero, vi saremmo grati se lo faceste tramite bonifico. Vivere in Italia rende difficile il trasporto di regali fisici, e questo gesto ci aiuterà molto a iniziare la nostra vita insieme.",
    clabe: "CLABE (Messico)",
    iban: "IBAN (Italia)",
    copiar: "Copia",
    copiado: "Copiato",
    faqsTitle: "Pregunte Frequenti",
    maquillajeTitle: "Trucco e Acconciatura",
    proveedorMaquillaje: "Servizio trucco e acconciatura",
    proximamente: "Informazioni in arrivo",
    wa: "WhatsApp",
    ig: "Instagram",
    recomendaciones: "Raccomandazioni",
    queHacer: "Cosa fare durante il weekend o dopo la festa?",
    verMas: "SCOPRI DI PIÙ",
    cosasEn: "COSA FARE A",
    zihuaCap: "ZIHUATANEJO",
    guerreroCap: "GUERRERO",
    mexicoCap: "MESSICO",
    infoImportante: "Informazioni Importanti sulla Prenotazione",
    temporadaAlta: "Trattandosi di alta stagione a Zihuatanejo, l'hotel non dispone di camere bloccate. Tuttavia, abbiamo concordato una tariffa preferenziale per i nostri ospiti.",
    opcionesPaquete: "È disponibile anche l'opzione solo pernottamento, a cui è possibile aggiungere i pasti facoltativamente in base alle preferenze.",
    detallesCotizacion: "Nel preventivo condiviso troverete tutti i dettagli su tariffe, tipologie di camere e opzioni disponibili.",
    reservarPronto: "Vi consigliamo di prenotare la vostra camera il prima possibile per garantirne la disponibilità.",
    claveEvento: "Per effettuare la prenotazione, si prega di indicare il codice evento: \"Boda Carla y Said\".",
    verCotizacion: "Vedi il preventivo",
    faqs: [
      { q: "Quali sono i requisiti per viaggiare in Messico dall'Italia?", a: "I cittadini italiani non hanno bisogno di visto per turismo. È necessario un passaporto valido, il biglietto di ritorno e la compilazione del modulo migratorio all'arrivo." },
      { q: "Quale aeroporto è consigliato?", a: "L'aeroporto consigliato è l'Aeroporto Internazionale di Ixtapa-Zihuatanejo (ZIH), il più vicino all'hotel e al luogo dell'evento." },
      { q: "Come posso raggiungere l'hotel dall'aeroporto?", a: "Dall'aeroporto potete prendere un taxi autorizzato, un trasporto privato o usufruire del servizio dell'hotel." },
      { q: "Dove si terrà il matrimonio?", a: "Presso il Club de Playa Garrobo, Zihuatanejo, Guerrero, Messico." },
      { q: "L'aeroporto, l'hotel e la location sono vicini?", a: "Sì. I trasferimenti durano solitamente tra i 15 e i 30 minuti." },
      { q: "Com'è il clima a dicembre?", a: "Il clima a dicembre è piacevole e caldo, con temperature comprese tra i 22°C e i 30°C." },
      { q: "Quale valuta si utilizza in Messico?", a: "La valuta ufficiale è il Peso Messicano (MXN)." },
      { q: "Possono partecipare i bambini?", a: "Amiamo molto i vostri piccoli, ma l'evento è riservato esclusivamente agli adulti." }
    ]
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
          "h-[1px] bg-wedding-palm transition-all duration-1000 ease-in-out flex-1",
          isVisible ? "opacity-30" : "opacity-0"
        )} />
        <p className={cn(serif.className, "text-4xl md:text-6xl tracking-widest text-wedding-palm whitespace-nowrap")}>{step.time}</p>
        <div className={cn(
          "h-[1px] bg-wedding-palm transition-all duration-1000 ease-in-out flex-1",
          isVisible ? "opacity-30" : "opacity-0"
        )} />
      </div>
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl uppercase tracking-[0.4em] font-light text-wedding-jungle">{step.label}</h3>
      </div>
    </div>
  )
}

function RegistryCard({ title, icon: Icon, value, bank, name, buttonLabel, onAction, isCopied, disabled }: { title: string, icon: any, value: string, bank?: string, name?: string, buttonLabel: string, onAction: () => void, isCopied?: boolean, disabled?: boolean }) {
  return (
    <div className="bg-wedding-ivory p-8 rounded-2xl shadow-sm border border-wedding-sage/20 flex flex-col items-center gap-4 transition-all duration-500 hover:shadow-md hover:border-wedding-palm/40 h-full">
      <div className="w-12 h-12 rounded-full bg-wedding-seafoam flex items-center justify-center text-wedding-palm">
        <Icon size={24} />
      </div>
      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-wedding-jungle/60">{title}</h4>
      <div className="text-center space-y-1 flex-1 flex flex-col justify-center">
        {bank && <p className="text-[9px] uppercase tracking-wider font-bold text-wedding-gold">{bank}</p>}
        {name && <p className="text-[10px] uppercase tracking-wide text-wedding-jungle font-medium">{name}</p>}
        <p className="font-mono text-sm tracking-tighter text-wedding-jungle break-all pt-2">{value}</p>
      </div>
      {!disabled && (
        <Button 
          onClick={onAction}
          variant="ghost"
          className="mt-2 rounded-full px-6 text-[10px] uppercase tracking-[0.2em] text-wedding-palm hover:bg-wedding-palm hover:text-wedding-ivory transition-all duration-500 gap-2"
        >
          {isCopied ? <Check size={14} /> : <Copy size={14} />}
          {buttonLabel}
        </Button>
      )}
    </div>
  )
}

export default function WeddingPage() {
  const [lang, setLang] = useState<'es' | 'it'>('es')
  const [isFinished, setIsFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const t = translations[lang]

  const heroImage = PlaceHolderImages.find(img => img.id === 'wedding-hero')
  const quoteBgImage = PlaceHolderImages.find(img => img.id === 'wedding-bg-quote')
  const itineraryBgImage = PlaceHolderImages.find(img => img.id === 'wedding-bg-itinerary')
  const hotelImage = PlaceHolderImages.find(img => img.id === 'hotel-villa-mexicana')
  const footerImage = PlaceHolderImages.find(img => img.id === 'wedding-footer')

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

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  }

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
    const phoneNumber = "393454527422";
    const message = encodeURIComponent(t.waMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/ZXfrBTdAe1UPgYRr9', '_blank');
  };

  return (
    <div className="bg-wedding-ivory text-wedding-jungle font-body overflow-x-hidden wedding-theme">
      {/* Selector de Idioma */}
      <div className="fixed top-8 right-8 z-[100] flex gap-4">
        {['es', 'it'].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l as 'es' | 'it')}
            className={cn(
              "text-[10px] tracking-[0.3em] uppercase transition-all duration-500 border-b pb-1",
              lang === l ? "border-wedding-gold text-wedding-jungle font-bold" : "border-transparent opacity-40 hover:opacity-100"
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
            className="object-cover object-[center_25%] md:object-center pointer-events-none"
            priority
            data-ai-hint="wedding couple beach"
          />
        </div>

        {/* Overlay sutil */}
        <div className="absolute inset-0 z-[1] bg-wedding-charcoal/10 pointer-events-none" />
        
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-start pt-32 px-6 text-center">
          <RevealSection delay={300} className="space-y-6">
            <h1 className={cn(script.className, "text-7xl md:text-[9.5rem] text-wedding-palm leading-none tracking-tight drop-shadow-sm")}>
              Carla & Said
            </h1>
            <div className="space-y-3">
              <p className={cn(serif.className, "text-lg md:text-xl tracking-widest uppercase italic text-wedding-gold font-medium drop-shadow-sm")}>{t.domingo}</p>
              <p className="text-[12px] md:text-sm tracking-[0.6em] uppercase font-bold text-wedding-jungle drop-shadow-sm inline-block">
                {t.zihua}
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-24 md:py-32 bg-wedding-ivory border-b border-wedding-sage/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <RevealSection className="space-y-4">
            <h2 className={cn(serif.className, "text-3xl md:text-5xl font-light text-wedding-palm italic")}>
              {t.faltaPoco}
            </h2>
            <p className={cn(script.className, "text-xl md:text-3xl text-wedding-gold opacity-80")}>
              {t.acompananos}
            </p>
          </RevealSection>

          <RevealSection delay={200} className="min-h-[120px] flex items-center justify-center">
            {isFinished ? (
              <h2 className={cn(serif.className, "text-4xl md:text-6xl italic text-wedding-palm drop-shadow-sm")}>
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
                    <span className={cn(serif.className, "text-3xl md:text-6xl font-light text-wedding-jungle")}>
                      {unit.val.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40 text-wedding-sage mt-2 md:mt-4">{unit.label}</span>
                  </div>
                ))}
              </div>
            )}
          </RevealSection>

          {!isFinished && (
            <RevealSection delay={400} className="pt-8">
              <Button 
                onClick={handleAddToCalendar}
                className="rounded-full px-8 py-6 bg-wedding-seafoam text-wedding-jungle hover:bg-wedding-palm hover:text-wedding-ivory transition-all duration-700 uppercase tracking-[0.2em] text-[10px] gap-3 border-none shadow-sm"
              >
                <CalendarPlus size={16} />
                {t.calendario}
              </Button>
            </RevealSection>
          )}
        </div>
      </section>

      {/* Frase y Confirmación (RSVP) */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-wedding-sand/20">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src={quoteBgImage?.imageUrl || "/foto2.png"} 
            alt="Background Confirmación" 
            fill 
            className="object-cover object-center pointer-events-none"
            data-ai-hint="elegant beach texture"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <RevealSection className="mb-12 md:mb-16">
            <h2 className={cn(script.className, "text-7xl md:text-9xl text-wedding-jungle italic")}>
              RSVP
            </h2>
          </RevealSection>

          <RevealSection delay={300} className="space-y-12">
            <p className={cn(script.className, "text-3xl md:text-6xl text-wedding-jungle font-medium leading-relaxed italic")}>
              “{t.fraseFinal}”
            </p>
            
            <div className="pt-8 flex flex-col items-center gap-6">
              <Button 
                onClick={handleWhatsAppConfirm}
                className="rounded-full px-12 py-8 bg-wedding-palm hover:bg-wedding-jungle text-wedding-ivory transition-all duration-700 uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-wedding-palm/20"
              >
                {t.confirmar}
              </Button>
              <p className="text-sm md:text-base italic text-wedding-jungle/60 font-light max-w-md mx-auto leading-relaxed">
                {t.alergias}
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Itinerario */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-wedding-seafoam/30">
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
            <h2 className={cn(serif.className, "text-5xl md:text-8xl italic text-wedding-palm")}>
              {t.itinerario}
            </h2>
            <div className="w-24 h-[1px] bg-wedding-palm mx-auto mt-6 md:mt-8 opacity-30" />
            <div className="mt-8 flex flex-col items-center gap-2">
              <p className="text-sm uppercase tracking-[0.3em] font-medium opacity-60 text-wedding-sage">Club de Playa Garrobo</p>
              <Button 
                onClick={openGoogleMaps}
                className="rounded-full px-8 py-4 bg-wedding-seafoam text-wedding-jungle hover:bg-wedding-palm hover:text-wedding-ivory transition-all duration-700 uppercase tracking-[0.2em] text-[9px] gap-2 mt-4 border-none shadow-sm"
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

      {/* Hotel Sugerido */}
      <section id="hotel" className="py-24 md:py-40 bg-wedding-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <RevealSection className="text-center mb-16 md:mb-24">
            <h3 className={cn(serif.className, "text-5xl md:text-8xl italic text-wedding-palm")}>{t.hospedaje}</h3>
            <div className="w-24 h-[1px] bg-wedding-gold mx-auto mt-6 md:mt-8 opacity-30" />
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
              <h4 className={cn(serif.className, "text-3xl md:text-5xl italic text-wedding-jungle")}>Villa Mexicana Hotel</h4>
              <p className="text-xs md:text-base italic text-wedding-sage tracking-wide font-light max-w-md mx-auto px-4">
                {t.tarifaPreferencial}
              </p>
            </RevealSection>

            <RevealSection delay={300} className="w-full mt-16">
              <div className="bg-wedding-sand/20 rounded-[2rem] p-8 md:p-12 border border-wedding-gold/10 shadow-sm">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-wedding-ivory flex items-center justify-center text-wedding-palm shadow-sm">
                    <Hotel size={32} />
                  </div>
                  <h5 className={cn(serif.className, "text-2xl md:text-4xl italic text-wedding-palm")}>{t.infoImportante}</h5>
                  <div className="space-y-6 text-sm md:text-base leading-relaxed text-wedding-jungle/80 font-light italic">
                    <p>{t.temporadaAlta}</p>
                    <p>{t.opcionesPaquete}</p>
                    <p>{t.detallesCotizacion}</p>
                    <p className="font-bold text-wedding-palm not-italic">{t.reservarPronto}</p>
                    <div className="bg-wedding-ivory/80 p-4 rounded-xl border border-wedding-gold/20 inline-block mx-auto not-italic font-semibold tracking-wide">
                      {t.claveEvento}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4 mt-6 w-full max-w-md">
                    <Button 
                      asChild
                      className="rounded-full px-10 py-7 bg-wedding-palm hover:bg-wedding-jungle text-wedding-ivory transition-all duration-700 uppercase tracking-[0.2em] text-[10px] gap-3 shadow-lg shadow-wedding-palm/20"
                    >
                      <Link href="/boda-carla-said/cotizacion">
                        <FileText size={18} />
                        {t.verCotizacion}
                      </Link>
                    </Button>
                    <Button 
                      onClick={() => window.open('https://hotelvillamexicana.com.mx/zihuatanejo/en/', '_blank')}
                      variant="outline"
                      className="rounded-full px-10 py-7 border-wedding-palm text-wedding-palm hover:bg-wedding-palm hover:text-wedding-ivory transition-all duration-700 uppercase tracking-[0.2em] text-[10px] gap-3"
                    >
                      {t.reservar}
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Mesa de Regalos */}
      <section id="regalos" className="py-24 md:py-40 bg-wedding-sand/10">
        <div className="max-w-6xl mx-auto px-6">
          <RevealSection className="text-center mb-16 md:mb-24">
            <h3 className={cn(serif.className, "text-5xl md:text-8xl italic text-wedding-palm")}>{t.mesaRegalos}</h3>
            <div className="w-24 h-[1px] bg-wedding-gold mx-auto mt-6 md:mt-8 opacity-30" />
          </RevealSection>

          <div className="max-w-4xl mx-auto">
            <RevealSection delay={200} className="text-center mb-16">
              <p className="text-sm md:text-lg italic text-wedding-jungle/70 tracking-wide font-light max-w-2xl mx-auto leading-relaxed">
                “{t.regalosFrase}”
              </p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <RevealSection delay={300} className="h-full">
                <RegistryCard 
                  title={t.clabe}
                  icon={CreditCard}
                  bank="HSBC"
                  name="SAID FARID NASSER GUERRA"
                  value="021180064713093715"
                  buttonLabel={copiedField === 'clabe' ? t.copiado : t.copiar}
                  isCopied={copiedField === 'clabe'}
                  onAction={() => handleCopy('021180064713093715', 'clabe')}
                />
              </RevealSection>

              <RevealSection delay={400} className="h-full">
                <RegistryCard 
                  title={t.iban}
                  icon={CreditCard}
                  name="Favilli Carla, Nasser Guerra Said Farid"
                  value="IT95P0854213203000000769393"
                  buttonLabel={copiedField === 'iban' ? t.copiado : t.copiar}
                  isCopied={copiedField === 'iban'}
                  onAction={() => handleCopy('IT95P0854213203000000769393', 'iban')}
                />
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendaciones */}
      <section id="recomendaciones" className="py-24 md:py-40 bg-wedding-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <RevealSection className="text-center mb-16 md:mb-24">
            <h3 className={cn(serif.className, "text-4xl md:text-6xl lg:text-7xl italic text-wedding-palm")}>{t.recomendaciones}</h3>
            <div className="w-24 h-[1px] bg-wedding-gold mx-auto mt-6 md:mt-8 opacity-30" />
            <p className="mt-8 text-sm md:text-lg italic text-wedding-sage tracking-wide font-light max-w-xl mx-auto">
              {t.queHacer}
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealSection delay={100} className="group cursor-pointer">
              <Link href="/recomendaciones-zihuatanejo" className="block relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-sm">
                <Image src="/foto6.png" alt="Zihuatanejo" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-wedding-charcoal/20 group-hover:bg-wedding-charcoal/40 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-wedding-ivory space-y-2">
                  <p className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-70">{t.cosasEn}</p>
                  <h4 className={cn(serif.className, "text-3xl italic")}>{t.zihuaCap}</h4>
                  <div className="pt-4 flex items-center gap-2 text-[9px] tracking-widest font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                    {t.verMas} <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </RevealSection>

            <RevealSection delay={200} className="group cursor-pointer">
              <Link href="/recomendaciones-guerrero" className="block relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-sm">
                <Image src="/foto7.jpeg" alt="Guerrero" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-wedding-charcoal/20 group-hover:bg-wedding-charcoal/40 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-wedding-ivory space-y-2">
                  <p className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-70">{t.cosasEn}</p>
                  <h4 className={cn(serif.className, "text-3xl italic")}>{t.guerreroCap}</h4>
                  <div className="pt-4 flex items-center gap-2 text-[9px] tracking-widest font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                    {t.verMas} <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </RevealSection>

            <RevealSection delay={300} className="group cursor-pointer">
              <Link href="/recomendaciones-mexico" className="block relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-sm">
                <Image src="/foto8.jpeg" alt="México" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-wedding-charcoal/20 group-hover:bg-wedding-charcoal/40 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-wedding-ivory space-y-2">
                  <p className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-70">{t.cosasEn}</p>
                  <h4 className={cn(serif.className, "text-3xl italic")}>{t.mexicoCap}</h4>
                  <div className="pt-4 flex items-center gap-2 text-[9px] tracking-widest font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                    {t.verMas} <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section id="faqs" className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src={footerImage?.imageUrl || "/foto5.jpg"} 
            alt="Wedding Footer" 
            fill 
            className="object-cover object-center transition-transform duration-700"
            data-ai-hint="wedding couple sea"
          />
          {/* Degradados sutiles para transiciones suaves */}
          <div className="absolute inset-0 bg-wedding-ivory/80 h-1/3" />
          <div className="absolute inset-x-0 top-[33.33%] bottom-0 bg-gradient-to-b from-wedding-ivory/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-32">
          <RevealSection className="text-center mb-16 md:mb-24">
            <h3 className={cn(serif.className, "text-4xl md:text-7xl italic text-wedding-palm")}>{t.faqsTitle}</h3>
            <div className="w-24 h-[1px] bg-wedding-gold mx-auto mt-6 md:mt-8 opacity-30" />
          </RevealSection>

          <RevealSection delay={300}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {t.faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="border-wedding-gold/10 bg-wedding-ivory/95 backdrop-blur-md px-6 md:px-8 rounded-[12px] overflow-hidden shadow-lg"
                >
                  <AccordionTrigger className="text-sm md:text-base uppercase tracking-[0.2em] font-bold text-wedding-jungle text-left hover:no-underline hover:text-wedding-terracotta py-7 md:py-8 [&[data-state=open]>svg]:rotate-180">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base font-light italic leading-relaxed text-wedding-jungle pb-8 opacity-100">
                    <div className="pt-2 border-t border-wedding-gold/5 mt-2">
                      {faq.a}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealSection>
        </div>
        
        {/* Espacio final elegante */}
        <div className="h-[60vh] md:h-[100vh] relative z-10" />
      </section>
    </div>
  )
}
