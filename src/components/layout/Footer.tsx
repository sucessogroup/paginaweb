
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const Footer = () => {
  const logoData = PlaceHolderImages.find(img => img.id === 'logo-main')

  return (
    <footer className="bg-brand-wine text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {logoData ? (
            <div className="relative w-80 h-32 mb-10">
              <Image 
                src={logoData.imageUrl} 
                alt="SUCESSO Logo" 
                fill 
                className="object-contain brightness-0 invert"
                data-ai-hint="company logo"
              />
            </div>
          ) : (
            <div className="text-5xl font-headline font-bold tracking-[0.2em] mb-10">
              SUCESSO
            </div>
          )}
          
          <p className="text-brand-canary font-light text-2xl italic mb-12">
            “Cada detalle, un sucesso.”
          </p>
          
          <div className="w-full h-[1px] bg-white/10 mb-16" />
          
          <div className="grid md:grid-cols-3 gap-16 w-full text-base font-light opacity-60 mb-20">
            <div>
              <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">SUCESSO Events</h5>
              <p>Querétaro, México</p>
              <p>Experiencias de impacto global</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Contacto Directo</h5>
              <p>paola@sucessomx.com</p>
              <p>(442) 377 5646</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Legal</h5>
              <Link href="#" className="hover:text-brand-canary block mb-2">Aviso de Privacidad</Link>
              <Link href="#" className="hover:text-brand-canary block">Términos de Servicio</Link>
            </div>
          </div>
          
          <div className="text-xs opacity-40 uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} SUCESSO. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>
      </div>
    </footer>
  )
}
