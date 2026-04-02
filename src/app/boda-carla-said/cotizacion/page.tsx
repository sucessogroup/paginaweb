
"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Literata, Dancing_Script } from 'next/font/google'
import { ArrowLeft, Printer, Phone, Mail, Calendar, Info, AlertTriangle, CheckCircle2, MapPin, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const serif = Literata({ subsets: ['latin'], weight: ['300', '400', '600', '700'] })
const script = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] })

const content = {
  es: {
    title: "Hotel Villa Mexicana",
    location: "Zihuatanejo, Guerrero",
    locationContext: "Ubicado frente al mar en Playa La Ropa, Zihuatanejo, a solo 15 minutos del centro.",
    celebration: "Estancia para la celebración de",
    names: "Carla & Said",
    
    bookingCodeLabel: "Clave del evento",
    bookingCode: "Boda Carla & Said",
    
    howToBookTitle: "Cómo reservar",
    step1: "Contactar directamente al hotel",
    step2: "Mencionar la clave del evento: \"Boda Carla & Said\"",
    step3: "Reservar lo antes posible debido a disponibilidad limitada",
    
    contactTitle: "Contacto Reservaciones",
    phone: "(55) 9000 1300",
    email: "reservaciones1@villamexicana.mx",
    
    ratesTitle: "Tarifas por noche",
    dates: "17 al 25 de diciembre de 2026",
    singleDouble: "Habitación Sencilla / Doble",
    triple: "Habitación Triple",
    quad: "Habitación Cuádruple",
    plan: "Plan: Solo hospedaje",
    extraSeaView: "Vista al mar disponible: +$500 MXN por noche (sujeto a disponibilidad)",
    
    summaryTitle: "Resumen importante",
    bullet1: "Estancia mínima: 3 noches",
    bullet2: "Anticipo: 2 noches",
    bullet3: "Cancelación: 30 días antes",
    bullet4: "Tarifas sujetas a disponibilidad",
    bullet5: "Mayores de 11 años pagan como adulto",
    
    transportTitle: "Importante",
    transportText: "Debido a regulaciones locales, los autobuses no pueden acceder directamente a Playa La Ropa. Se recomienda considerar taxi o transporte adicional para el último tramo.",
    
    scheduleTitle: "Horarios",
    checkIn: "Check-in",
    checkOut: "Check-out",
    
    recommendationText: "Se recomienda reservar lo antes posible, ya que la disponibilidad es limitada debido a la temporada.",
    back: "Volver",
    print: "Imprimir / PDF"
  },
  it: {
    title: "Hotel Villa Mexicana",
    location: "Zihuatanejo, Guerrero",
    locationContext: "Situato di fronte al mare a Playa La Ropa, Zihuatanejo, a soli 15 minuti dal centro.",
    celebration: "Soggiorno per la celebrazione di",
    names: "Carla & Said",
    
    bookingCodeLabel: "Codice dell'evento",
    bookingCode: "Boda Carla & Said",
    
    howToBookTitle: "Come prenotare",
    step1: "Contattare direttamente l'hotel",
    step2: "Menzionare il codice dell'evento: \"Boda Carla & Said\"",
    step3: "Prenotare il prima possibile a causa della disponibilità limitata",
    
    contactTitle: "Contatto Prenotazioni",
    phone: "(55) 9000 1300",
    email: "reservaciones1@villamexicana.mx",
    
    ratesTitle: "Tariffe per notte",
    dates: "17 al 25 dicembre 2026",
    singleDouble: "Camera Singola / Doppia",
    triple: "Camera Tripla",
    quad: "Camera Quadrupla",
    plan: "Piano: Solo pernottamento",
    extraSeaView: "Vista mare disponibile: +$500 MXN a notte (soggetta a disponibilità)",
    
    summaryTitle: "Riepilogo importante",
    bullet1: "Soggiorno minimo: 3 notti",
    bullet2: "Acconto: 2 notti",
    bullet3: "Cancellazione: 30 giorni prima",
    bullet4: "Tariffe soggette a disponibilità",
    bullet5: "Dagli 11 anni in su si paga come adulto",
    
    transportTitle: "Importante",
    transportText: "A causa delle normative locali, gli autobus non possono accedere direttamente a Playa La Ropa. Si consiglia di considerare un taxi o un trasporto aggiuntivo per l'ultimo tratto.",
    
    scheduleTitle: "Orari",
    checkIn: "Check-in",
    checkOut: "Check-out",
    
    recommendationText: "Si consiglia di prenotare il prima possibile, poiché la disponibilità è limitata a causa della stagione.",
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
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1a1a] p-4 md:p-8 lg:p-12 print:p-0 print:bg-white">
      {/* Controles */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 gap-6 print:hidden">
        <Button asChild variant="ghost" className="rounded-full text-[#c5a059] uppercase tracking-[0.2em] text-[10px] gap-2">
          <Link href="/boda-carla-said#hotel">
            <ArrowLeft size={14} /> {t.back}
          </Link>
        </Button>

        <div className="flex gap-4 bg-white shadow-sm p-1 rounded-full border border-black/5">
          {['es', 'it'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l as 'es' | 'it')}
              className={cn(
                "px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all",
                lang === l ? "bg-[#45141c] text-white font-bold" : "text-[#1a1a1a] opacity-40 hover:opacity-100"
              )}
            >
              {l}
            </button>
          ))}
        </div>

        <Button onClick={handlePrint} className="rounded-full bg-black hover:bg-black/80 text-white uppercase tracking-[0.2em] text-[10px] gap-2 px-8">
          <Printer size={14} /> {t.print}
        </Button>
      </div>

      {/* Documento Digital */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden border border-black/5 print:shadow-none print:rounded-none print:border-none">
        
        {/* Header Elegante */}
        <div className="bg-[#fcfaf7] py-16 px-8 md:py-24 text-center border-b border-[#c5a059]/10">
          <div className="space-y-6">
            <h1 className={cn(serif.className, "text-4xl md:text-6xl font-light tracking-tight text-[#1a1a1a]")}>
              {t.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-[#c5a059]">
              <MapPin size={14} /> {t.location}
            </div>
            <p className="max-w-md mx-auto text-sm italic text-[#1a1a1a]/60 leading-relaxed font-light">
              {t.locationContext}
            </p>
            
            <div className="w-16 h-[1px] bg-[#c5a059]/30 mx-auto my-12" />
            
            <p className={cn(script.className, "text-2xl md:text-3xl text-[#1a1a1a]/70")}>
              {t.celebration}
            </p>
            <h2 className={cn(script.className, "text-5xl md:text-8xl text-[#45141c] py-4")}>
              {t.names}
            </h2>
          </div>
        </div>

        <div className="p-8 md:p-20 space-y-24">
          
          {/* 1. Tarifas */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className={cn(serif.className, "text-3xl md:text-5xl italic text-[#1a1a1a]")}>{t.ratesTitle}</h3>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#c5a059] font-bold">{t.dates}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: t.singleDouble, price: "$4,609" },
                { label: t.triple, price: "$5,209" },
                { label: t.quad, price: "$5,809" }
              ].map((rate, i) => (
                <div key={i} className="p-10 rounded-[2rem] border border-black/5 bg-[#fcfaf7] text-center space-y-4 transition-all hover:shadow-lg hover:border-[#c5a059]/20">
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40 h-8 flex items-center justify-center">
                    {rate.label}
                  </p>
                  <p className="text-3xl font-bold text-[#1a1a1a]">{rate.price} <span className="text-[10px] font-light opacity-50 uppercase tracking-widest">MXN</span></p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <p className="text-xs italic opacity-50 font-light">{t.extraSeaView}</p>
              <div className="inline-block px-8 py-2 border border-black/10 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold">
                {t.plan}
              </div>
            </div>
          </div>

          {/* 2. Resumen y Transporte (con Horarios) */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resumen importante */}
            <div className="p-10 md:p-12 rounded-[2.5rem] bg-[#f9f9f9] border border-black/5 space-y-8">
              <div className="flex items-center gap-4 text-[#45141c]">
                <Info size={24} />
                <h3 className={cn(serif.className, "text-2xl italic")}>{t.summaryTitle}</h3>
              </div>
              <ul className="space-y-4">
                {[t.bullet1, t.bullet2, t.bullet3, t.bullet4, t.bullet5].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-light text-[#1a1a1a]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Aviso de Transporte + Horarios */}
            <div className="space-y-8">
              <div className="p-10 md:p-12 rounded-[2.5rem] bg-[#45141c]/5 border border-[#45141c]/10 space-y-6">
                <div className="flex items-center gap-4 text-[#45141c]">
                  <AlertTriangle size={24} />
                  <h3 className={cn(serif.className, "text-2xl italic")}>{t.transportTitle}</h3>
                </div>
                <p className="text-sm md:text-base leading-relaxed italic text-[#45141c]/80 font-light">
                  {t.transportText}
                </p>
              </div>

              {/* Horarios */}
              <div className="flex justify-between px-10 py-6 border-t border-black/5">
                <div className="space-y-1">
                  <p className="text-[8px] uppercase tracking-widest opacity-40 font-bold">{t.checkIn}</p>
                  <p className="text-sm font-medium">15:00 hrs</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[8px] uppercase tracking-widest opacity-40 font-bold">{t.checkOut}</p>
                  <p className="text-sm font-medium">12:00 hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recomendación de Reserva - NUEVA POSICIÓN */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full shadow-xl">
              <Calendar size={18} className="text-[#c5a059]" />
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{t.recommendationText}</p>
            </div>
          </div>

          {/* 3. Clave del Evento Highlight */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-[#f5f0e6] p-8 md:p-12 rounded-3xl border border-[#c5a059]/20 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 rounded-full -mr-16 -mt-16" />
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#c5a059] mb-4">
                {t.bookingCodeLabel}
              </p>
              <h3 className={cn(serif.className, "text-3xl md:text-5xl font-bold text-[#45141c] italic")}>
                {t.bookingCode}
              </h3>
            </div>
          </div>

          {/* 4. Grid de Pasos y Contacto */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Cómo reservar */}
            <div className="space-y-10">
              <h3 className={cn(serif.className, "text-3xl italic text-[#1a1a1a]")}>{t.howToBookTitle}</h3>
              <div className="space-y-8">
                {[
                  { icon: Building2, text: t.step1 },
                  { icon: CheckCircle2, text: t.step2 },
                  { icon: Calendar, text: t.step3 }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#f9f9f9] border border-black/5 flex items-center justify-center flex-shrink-0 text-[#c5a059]">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-base md:text-lg font-light text-[#1a1a1a]/80 pt-1 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacto Destacado */}
            <div className="bg-black text-white p-10 md:p-12 rounded-[2.5rem] space-y-10 shadow-2xl">
              <h3 className={cn(serif.className, "text-2xl md:text-3xl italic text-[#c5a059]")}>{t.contactTitle}</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#c5a059] transition-all group-hover:bg-[#c5a059] group-hover:text-white">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Teléfono</p>
                    <p className="text-lg md:text-xl font-medium tracking-tight">{t.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#c5a059] transition-all group-hover:bg-[#c5a059] group-hover:text-white">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Email</p>
                    <p className="text-sm md:text-base font-medium break-all">{t.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cierre */}
          <div className="text-center space-y-8 pt-12 border-t border-black/5">
            <p className={cn(script.className, "text-6xl md:text-[8rem] text-[#c5a059] pt-16 opacity-40")}>
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
