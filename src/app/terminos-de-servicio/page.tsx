
import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Literata } from 'next/font/google'
import { cn } from '@/lib/utils'

const serif = Literata({ subsets: ['latin'], weight: ['300', '400', '600', '700'] })

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-petrol text-white">
      <Navbar />
      <div className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-16 text-center">
            <h1 className={cn(serif.className, "text-4xl md:text-6xl font-bold mb-4")}>Términos de Servicio</h1>
            <div className="w-20 h-[1px] bg-brand-gold/30 mx-auto" />
            <p className="mt-6 text-white/50 text-sm uppercase tracking-widest">Última actualización: Mayo 2024</p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70 font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar este sitio web de SUCESSO Group, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestro sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>2. Propiedad Intelectual</h2>
              <p>
                Todo el contenido publicado en este sitio, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes, clips de video y software, es propiedad exclusiva de SUCESSO Group o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual internacionales.
              </p>
              <p>
                Queda estrictamente prohibida la reproducción, distribución o modificación de cualquier contenido de este sitio sin la autorización previa y por escrito de SUCESSO Group.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>3. Uso del Sitio</h2>
              <p>
                El uso de este sitio web es para fines informativos y de contacto comercial. Usted se compromete a no utilizar este sitio para fines ilícitos o que puedan dañar, inutilizar o sobrecargar el sitio o interferir con el uso de terceros.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>4. Limitación de Responsabilidad</h2>
              <p>
                SUCESSO Group se esfuerza por mantener la información en este sitio actualizada y exacta, pero no garantiza la ausencia de errores. SUCESSO Group no será responsable de ningún daño directo, indirecto o consecuente derivado del uso o la imposibilidad de uso de este sitio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>5. Enlaces a Terceros</h2>
              <p>
                Este sitio puede contener enlaces a sitios web de terceros. SUCESSO Group no tiene control sobre el contenido de dichos sitios y no asume responsabilidad alguna por los daños o pérdidas que puedan derivarse del uso de los mismos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>6. Ley Aplicable</h2>
              <p>
                Cualquier controversia derivada del uso de este sitio web se regirá por las leyes vigentes en México, y las partes se someten a la jurisdicción de los tribunales competentes en dicho país.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
