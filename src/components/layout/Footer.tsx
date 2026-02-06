
import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-brand-wine text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* logo1.png placeholder */}
          <div className="text-4xl font-headline font-bold tracking-[0.2em] mb-6">
            SUCESSO
          </div>
          <p className="text-brand-canary font-light text-xl italic mb-12">
            “Cada detalle, un sucesso.”
          </p>
          
          <div className="w-full h-[1px] bg-white/10 mb-12" />
          
          <div className="grid md:grid-cols-3 gap-12 w-full text-sm font-light opacity-60 mb-16">
            <div>
              <h5 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">SUCESSO Events</h5>
              <p>Querétaro, México</p>
              <p>Experiencias de impacto global</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Contacto Directo</h5>
              <p>paola@sucessomx.com</p>
              <p>(442) 377 5646</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Legal</h5>
              <Link href="#" className="hover:text-brand-canary block">Aviso de Privacidad</Link>
              <Link href="#" className="hover:text-brand-canary block">Términos de Servicio</Link>
            </div>
          </div>
          
          <div className="text-[10px] opacity-40 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} SUCESSO. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>
      </div>
    </footer>
  )
}
