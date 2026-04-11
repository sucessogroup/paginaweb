
"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Instagram, Phone, Mail, ArrowRight } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-canary font-bold">Cierre de Impacto</h2>
              <h3 className="text-4xl md:text-6xl font-headline font-bold text-brand-darkGray leading-tight">
                Haz que tu próximo evento sea <br />
                <span className="text-brand-canary italic font-light">un suceso.</span>
              </h3>
              <p className="text-lg text-brand-darkGray/50 font-light leading-relaxed italic max-w-md">
                Estamos listos para transformar tu visión en una experiencia corporativa de clase mundial.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-brand-darkGray/10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-brand-darkGray/5 border border-brand-darkGray/10 flex items-center justify-center text-brand-canary group-hover:bg-brand-canary group-hover:text-white transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-brand-darkGray/30 uppercase tracking-widest font-bold">Llámanos</p>
                  <a href="tel:4423775646" className="text-xl font-headline font-bold text-brand-darkGray hover:text-brand-canary transition-colors">(442) 377 5646</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-brand-darkGray/5 border border-brand-darkGray/10 flex items-center justify-center text-brand-canary group-hover:bg-brand-canary group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-brand-darkGray/30 uppercase tracking-widest font-bold">Escríbenos</p>
                  <a href="mailto:paola@sucessogroup.com" className="text-xl font-headline font-bold text-brand-darkGray hover:text-brand-canary transition-colors">paola@sucessogroup.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-brand-darkGray/5 border border-brand-darkGray/10 flex items-center justify-center text-brand-canary group-hover:bg-brand-canary group-hover:text-white transition-all duration-500">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-brand-darkGray/30 uppercase tracking-widest font-bold">Síguenos</p>
                  <a href="https://instagram.com/sucesso_group" target="_blank" className="text-xl font-headline font-bold text-brand-darkGray hover:text-brand-canary transition-colors">@sucesso_group</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-darkGray/[0.03] p-12 md:p-16 rounded-[3rem] border border-brand-darkGray/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-canary/5 rounded-full -mr-16 -mt-16" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-brand-darkGray/40">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" className="border-0 border-b border-brand-darkGray/10 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-brand-canary px-0 transition-all text-brand-darkGray placeholder:text-brand-darkGray/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[10px] uppercase tracking-widest font-bold text-brand-darkGray/40">Empresa</Label>
                  <Input id="company" placeholder="Nombre de tu empresa" className="border-0 border-b border-brand-darkGray/10 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-brand-canary px-0 transition-all text-brand-darkGray placeholder:text-brand-darkGray/20" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-brand-darkGray/40">¿En qué podemos ayudarte?</Label>
                <Textarea id="message" placeholder="Cuéntanos sobre tu próximo proyecto..." className="min-h-[120px] border-0 border-b border-brand-darkGray/10 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-brand-canary px-0 transition-all resize-none text-brand-darkGray placeholder:text-brand-darkGray/20" />
              </div>

              <Button className="w-full bg-brand-canary hover:bg-brand-darkGray hover:text-white text-brand-darkGray font-bold py-8 rounded-full transition-all duration-500 uppercase tracking-widest text-[11px] group">
                Enviar mensaje <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
