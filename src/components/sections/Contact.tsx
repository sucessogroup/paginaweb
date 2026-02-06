
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Instagram, Phone, Mail, Globe } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-brand-darkGray mb-8">
              ¿Listos para crear un <span className="text-brand-ocean">sucesso</span> juntos?
            </h2>
            <p className="text-lg text-gray-600 mb-12 font-light leading-relaxed">
              Estamos ansiosos por conocer tu visión y ayudarte a transformarla en una experiencia inolvidable. Cuéntanos un poco sobre tu proyecto.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-ocean group-hover:bg-brand-ocean group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Llámanos</p>
                  <a href="tel:4423775646" className="text-xl font-headline font-bold text-brand-darkGray">(442) 377 5646</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-ocean group-hover:bg-brand-ocean group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Escríbenos</p>
                  <a href="mailto:paola@sucessomx.com" className="text-xl font-headline font-bold text-brand-darkGray">paola@sucessomx.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-ocean group-hover:bg-brand-ocean group-hover:text-white transition-colors">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Síguenos</p>
                  <a href="https://instagram.com/sucesso_group" target="_blank" className="text-xl font-headline font-bold text-brand-darkGray">@sucesso_group</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl shadow-brand-ocean/5 border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" className="border-gray-200 focus:ring-brand-ocean" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nombre de tu empresa" className="border-gray-200" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de evento</Label>
                  <Input id="type" placeholder="Ej. Congreso, Lanzamiento" className="border-gray-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha tentativa</Label>
                  <Input id="date" type="text" placeholder="DD/MM/AAAA" className="border-gray-200" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Ciudad del evento</Label>
                <Input id="city" placeholder="Ej. Querétaro, CDMX" className="border-gray-200" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Cuéntanos más detalles..." className="min-h-[120px] border-gray-200" />
              </div>

              <Button className="w-full bg-brand-ocean hover:bg-brand-darkGray text-white font-bold py-6 rounded-xl transition-all">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
