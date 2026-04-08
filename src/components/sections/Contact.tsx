
"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Instagram, Phone, Mail, ArrowRight } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 md:py-40 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-ocean font-bold">Cierre de Impacto</h2>
              <h3 className="text-4xl md:text-6xl font-headline font-bold text-brand-darkGray leading-tight">
                Haz que tu próximo evento sea <br />
                <span className="text-brand-ocean italic font-light">un suceso.</span>
              </h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed italic max-w-md">
                Estamos listos para transformar tu visión en una experiencia corporativa de clase mundial.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-black/5">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-ocean group-hover:bg-brand-ocean group-hover:text-white transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Llámanos</p>
                  <a href="tel:4423775646" className="text-xl font-headline font-bold text-brand-darkGray hover:text-brand-ocean transition-colors">(442) 377 5646</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-ocean group-hover:bg-brand-ocean group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Escríbenos</p>
                  <a href="mailto:paola@sucessomx.com" className="text-xl font-headline font-bold text-brand-darkGray hover:text-brand-ocean transition-colors">paola@sucessomx.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-ocean group-hover:bg-brand-ocean group-hover:text-white transition-all duration-500">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Síguenos</p>
                  <a href="https://instagram.com/sucesso_group" target="_blank" className="text-xl font-headline font-bold text-brand-darkGray hover:text-brand-ocean transition-colors">@sucesso_group</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl shadow-brand-ocean/5 border border-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-ocean/5 rounded-full -mr-16 -mt-16" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold opacity-60">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" className="border-0 border-b border-gray-100 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-brand-ocean px-0 transition-all" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[10px] uppercase tracking-widest font-bold opacity-60">Empresa</Label>
                  <Input id="company" placeholder="Nombre de tu empresa" className="border-0 border-b border-gray-100 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-brand-ocean px-0 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold opacity-60">¿En qué podemos ayudarte?</Label>
                <Textarea id="message" placeholder="Cuéntanos sobre tu próximo proyecto..." className="min-h-[120px] border-0 border-b border-gray-100 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-brand-ocean px-0 transition-all resize-none" />
              </div>

              <Button className="w-full bg-brand-ocean hover:bg-brand-darkGray text-white font-bold py-8 rounded-full transition-all duration-500 uppercase tracking-widest text-[11px] group">
                Enviar mensaje <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
