
"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Literata, Dancing_Script } from 'next/font/google'
import { ArrowLeft, Printer, Download, Hotel, Clock, Info, CreditCard, Ban, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const serif = Literata({ subsets: ['latin'], weight: ['300', '400', '600', '700'] })
const script = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] })

const content = {
  es: {
    title: "HOTEL VILLA MEXICANA",
    location: "Zihuatanejo, Guerrero",
    celebration: "Estancia para la celebración de",
    names: "Carla & Said",
    intro: "Nos complace compartir con ustedes una tarifa preferencial para nuestros invitados, en un entorno privilegiado frente al mar en Playa La Ropa, Zihuatanejo.",
    distance: "El hotel se encuentra a 15 minutos del centro de Zihuatanejo y a 8 km de Ixtapa.",
    detailsTitle: "Detalles de la estancia",
    detailsText: "Las tarifas son por habitación, por noche, e incluyen un 20% de impuestos. Se trata de una tarifa grupal sujeta a disponibilidad.",
    minStay: "Estancia mínima requerida: 3 noches",
    bookingCode: "Para realizar su reservación, favor de indicar la clave del evento:",
    code: "Boda Carla & Said",
    importantTitle: "Información importante",
    accessTitle: "Acceso al hotel",
    accessText: "Debido a regulaciones locales, los autobuses no pueden acceder directamente a Playa La Ropa. Se recomienda considerar transporte adicional para el último tramo.",
    policyTitle: "Política del hotel",
    policyText: "El hotel es un espacio 100% libre de humo, conforme a la normativa vigente.",
    scheduleTitle: "Horarios",
    checkIn: "Check-in: 15:00 hrs",
    checkOut: "Check-out: 12:00 hrs",
    roomsTitle: "Habitaciones",
    roomsText: "Las tarifas corresponden a habitaciones con vista jardín. La vista al mar está disponible con un costo adicional de $500 MXN por noche, sujeto a disponibilidad.",
    occupancyTitle: "Ocupación",
    occupancyText: "A partir de 11 años se considera tarifa de adulto.",
    paymentTitle: "Política de pago",
    paymentText: "Se solicitará el pago de 2 noches como anticipo por habitación. En caso de cancelación fuera del plazo permitido, este depósito será considerado como penalización.",
    cancelTitle: "Política de cancelación",
    cancelText: "Cancelaciones permitidas hasta 30 días antes de la llegada.",
    ratesTitle: "Tarifas por noche",
    dates: "17 al 25 de diciembre de 2026",
    singleDouble: "Habitación Sencilla / Doble",
    triple: "Habitación Triple",
    quad: "Habitación Cuádruple",
    plan: "Plan: Solo hospedaje",
    recommendationTitle: "Recomendación",
    recommendationText: "Se sugiere realizar la reservación con anticipación, ya que la disponibilidad es limitada debido a la temporada.",
    back: "Volver",
    print: "Imprimir / PDF"
  },
  it: {
    title: "HOTEL VILLA MEXICANA",
    location: "Zihuatanejo, Guerrero",
    celebration: "Soggiorno per la celebrazione di",
    names: "Carla & Said",
    intro: "Siamo lieti di condividere con voi una tariffa preferenziale per i nostri ospiti, in un ambiente privilegiato di fronte al mare a Playa La Ropa, Zihuatanejo.",
    distance: "L'hotel si trova a 15 minuti dal centro di Zihuatanejo e a 8 km da Ixtapa.",
    detailsTitle: "Dettagli del soggiorno",
    detailsText: "Le tariffe si intendono per camera, per notte e includono il 20% di tasse. Si tratta di una tariffa di gruppo soggetta a disponibilità.",
    minStay: "Soggiorno minimo richiesto: 3 notti",
    bookingCode: "Per effettuare la prenotazione, si prega di indicare il codice dell'evento:",
    code: "Boda Carla & Said",
    importantTitle: "Informazioni importanti",
    accessTitle: "Accesso all'hotel",
    accessText: "A causa delle normative locali, gli autobus non possono accedere direttamente a Playa La Ropa. Si consiglia di considerare un trasporto aggiuntivo per l'ultimo tratto.",
    policyTitle: "Politica dell'hotel",
    policyText: "L'hotel è uno spazio 100% non fumatori, in conformità con la normativa vigente.",
    scheduleTitle: "Orari",
    checkIn: "Check-in: 15:00 hrs",
    checkOut: "Check-out: 12:00 hrs",
    roomsTitle: "Camere",
    roomsText: "Le tariffe corrispondono a camere con vista giardino. La vista mare è disponibile con un costo aggiuntivo di $500 MXN a notte, soggetto a disponibilità.",
    occupancyTitle: "Occupazione",
    occupancyText: "Dagli 11 anni in su è considerata tariffa adulto.",
    paymentTitle: "Politica di pagamento",
    paymentText: "Verrà richiesto il pagamento di 2 notti come acconto per camera. In caso di cancellazione al di fuori del periodo consentito, questo deposito sarà considerato come penale.",
    cancelTitle: "Politica di cancellazione",
    cancelText: "Cancellazioni consentite fino a 30 giorni prima dell'arrivo.",
    ratesTitle: "Tariffe per notte",
    dates: "17 al 25 dicembre 2026",
    singleDouble: "Camera Singola / Doppia",
    triple: "Camera Tripla",
    quad: "Camera Quadrupla",
    plan: "Piano: Solo pernottamento",
    recommendationTitle: "Raccomandazione",
    recommendationText: "Si consiglia di prenotare in anticipo, poiché la disponibilità è limitata a causa della stagione.",
    back: "Indietro",
    print: "Stampa / PDF"
  }
}

export default function QuotationPage() {
  const [lang, setLang] = useState<'es' | 'it'>('es')
  const t = content[lang]

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#5c6b5c] p-4 md:p-8 lg:p-12 print:p-0 print:bg-white">
      {/* Controles (Se ocultan al imprimir) */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 gap-6 print:hidden">
        <Button asChild variant="ghost" className="rounded-full text-[#c5a059] uppercase tracking-widest text-[10px] gap-2">
          <Link href="/boda-carla-said#hotel">
            <ArrowLeft size={14} /> {t.back}
          </Link>
        </Button>

        <div className="flex gap-4 bg-white/50 backdrop-blur-sm p-2 rounded-full border border-[#5c6b5c]/5">
          {['es', 'it'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l as 'es' | 'it')}
              className={cn(
                "px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all",
                lang === l ? "bg-[#c5a059] text-white font-bold" : "opacity-40 hover:opacity-100"
              )}
            >
              {l}
            </button>
          ))}
        </div>

        <Button onClick={handlePrint} className="rounded-full bg-[#8a9a5b] hover:bg-[#5c6b5c] text-white uppercase tracking-widest text-[10px] gap-2 px-8">
          <Printer size={14} /> {t.print}
        </Button>
      </div>

      {/* Documento */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-[#c5a059]/10 print:shadow-none print:rounded-none print:border-none">
        {/* Header con diseño elegante */}
        <div className="bg-[#f5f0e6] py-12 px-8 md:py-20 text-center border-b border-[#c5a059]/10">
          <div className="space-y-4">
            <h1 className={cn(serif.className, "text-4xl md:text-6xl font-bold tracking-tight text-[#5c6b5c]")}>
              {t.title}
            </h1>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-[#c5a059]">
              {t.location}
            </p>
            <div className="w-24 h-[1px] bg-[#c5a059] mx-auto my-8 opacity-30" />
            <p className={cn(script.className, "text-2xl md:text-4xl text-[#5c6b5c]/80")}>
              {t.celebration}
            </p>
            <h2 className={cn(script.className, "text-5xl md:text-7xl text-[#c5a059] py-4")}>
              {t.names}
            </h2>
          </div>
        </div>

        <div className="p-8 md:p-16 space-y-16">
          {/* Introducción */}
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <p className="text-sm md:text-lg italic font-light leading-relaxed">
              {t.intro}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] opacity-60">
              {t.distance}
            </p>
          </div>

          {/* Detalles e Información Importante */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 bg-[#fcfaf7] p-8 rounded-3xl border border-[#c5a059]/5">
              <div className="flex items-center gap-4 text-[#c5a059]">
                <Hotel size={24} />
                <h3 className={cn(serif.className, "text-xl font-bold italic")}>{t.detailsTitle}</h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#5c6b5c]/80 italic">
                <p>{t.detailsText}</p>
                <p className="font-bold text-[#5c6b5c] not-italic">{t.minStay}</p>
                <div className="pt-4 border-t border-[#c5a059]/10">
                  <p className="text-[10px] uppercase tracking-wider mb-2">{t.bookingCode}</p>
                  <p className="text-lg font-bold text-[#c5a059] not-italic">"{t.code}"</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[#c5a059]">
                <Info size={24} />
                <h3 className={cn(serif.className, "text-xl font-bold italic")}>{t.importantTitle}</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.accessTitle}</h4>
                  <p className="text-xs leading-relaxed italic">{t.accessText}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.policyTitle}</h4>
                  <p className="text-xs leading-relaxed italic">{t.policyText}</p>
                </div>
                <div className="flex gap-12 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#c5a059]">
                      <Clock size={14} />
                      <h4 className="text-[10px] uppercase tracking-widest font-bold">{t.scheduleTitle}</h4>
                    </div>
                    <div className="text-xs italic space-y-1">
                      <p>{t.checkIn}</p>
                      <p>{t.checkOut}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarifas */}
          <div className="space-y-8 bg-[#5c6b5c] text-white p-8 md:p-12 rounded-[2rem] shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className={cn(serif.className, "text-2xl md:text-4xl italic font-light")}>{t.ratesTitle}</h3>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#c5a059] font-bold">{t.dates}</p>
              </div>
              <div className="bg-white/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold">
                {t.plan}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-2">
                <p className="text-[9px] uppercase tracking-widest opacity-60">{t.singleDouble}</p>
                <p className="text-2xl font-bold">$4,609 <span className="text-xs font-light">MXN</span></p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-2">
                <p className="text-[9px] uppercase tracking-widest opacity-60">{t.triple}</p>
                <p className="text-2xl font-bold">$5,209 <span className="text-xs font-light">MXN</span></p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-2">
                <p className="text-[9px] uppercase tracking-widest opacity-60">{t.quad}</p>
                <p className="text-2xl font-bold">$5,809 <span className="text-xs font-light">MXN</span></p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center space-y-4">
              <p className="text-xs italic opacity-80">{t.roomsText}</p>
              <p className="text-[9px] uppercase tracking-widest font-bold text-[#c5a059]">{t.occupancyText}</p>
            </div>
          </div>

          {/* Políticas Adicionales */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-[#c5a059]/10 space-y-4">
              <div className="flex items-center gap-3 text-[#c5a059]">
                <CreditCard size={18} />
                <h3 className="text-xs uppercase tracking-widest font-bold">{t.paymentTitle}</h3>
              </div>
              <p className="text-xs leading-relaxed italic opacity-80">{t.paymentText}</p>
            </div>
            <div className="p-8 rounded-3xl border border-[#c5a059]/10 space-y-4">
              <div className="flex items-center gap-3 text-[#c5a059]">
                <Ban size={18} />
                <h3 className="text-xs uppercase tracking-widest font-bold">{t.cancelTitle}</h3>
              </div>
              <p className="text-xs leading-relaxed italic opacity-80">{t.cancelText}</p>
            </div>
          </div>

          {/* Cierre */}
          <div className="text-center space-y-6 pt-8">
            <div className="inline-flex items-center gap-3 bg-[#f5f0e6] px-8 py-4 rounded-full border border-[#c5a059]/20">
              <Calendar size={16} className="text-[#c5a059]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#5c6b5c]">{t.recommendationText}</p>
            </div>
            <p className={cn(script.className, "text-5xl md:text-7xl text-[#c5a059] pt-12")}>
              {t.names}
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
