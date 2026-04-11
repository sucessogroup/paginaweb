"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Instagram, Phone, Mail, ArrowRight } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 md:py-40 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Cierre de Impacto</h2>
              <h3 className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight">
                Haz que tu próximo evento sea <br />
                <span className="text-brand-gold italic font-light">un suceso.</span>
              </h3>
              <p className="text-lg text-foreground/50 font-light leading-relaxed italic max-w-md">
                Estamos listos para transformar tu visión en una experiencia corporativa de clase mundial.
              </p>
            </div>

            <div className="space-y-8 pt-10 border-t border-white/5">
              <ContactItem icon={Phone} label="Llámanos" value="(442) 377 5646" href="tel:4423775646" />
              <ContactItem icon={Mail} label="Escríbenos" value="paola@sucessogroup.com" href="mailto:paola@sucessogroup.com" />
              <ContactItem icon={Instagram} label="Síguenos" value="@sucesso_group" href="https://instagram.com/sucesso_group" />
            </div>
          </div>

          <div className="bg-white/[0.01] p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16" />
            
            <form className="space-y-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-[9px] uppercase tracking-widest font-bold text-foreground/40">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" className="border-0 border-b border-white/10 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-brand-gold px-0 transition-all text-foreground placeholder:text-foreground/10" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-[9px] uppercase tracking-widest font-bold text-foreground/40">Empresa</Label>
                  <Input id="company" placeholder="Nombre de tu empresa" className="border-0 border-b border-white/10 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-brand-gold px-0 transition-all text-foreground placeholder:text-foreground/10" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-[9px] uppercase tracking-widest font-bold text-foreground/40">¿En qué podemos ayudarte?</Label>
                <Textarea id="message" placeholder="Cuéntanos sobre tu próximo proyecto..." className="min-h-[120px] border-0 border-b border-white/10 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-brand-gold px-0 transition-all resize-none text-foreground placeholder:text-foreground/10" />
              </div>

              <Button className="w-full bg-brand-gold hover:bg-brand-gold/80 text-background font-bold py-8 rounded-full transition-all duration-700 uppercase tracking-widest text-[11px] group shadow-xl shadow-brand-gold/10">
                Enviar mensaje <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const ContactItem = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href: string }) => (
  <div className="flex items-center gap-6 group cursor-pointer">
    <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-background transition-all duration-700">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] font-bold">{label}</p>
      <a href={href} target={href.startsWith('http') ? "_blank" : undefined} className="text-xl font-headline font-bold text-foreground hover:text-brand-gold transition-colors">{value}</a>
    </div>
  </div>
)