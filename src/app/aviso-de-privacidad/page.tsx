
import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Literata } from 'next/font/google'
import { cn } from '@/lib/utils'

const serif = Literata({ subsets: ['latin'], weight: ['300', '400', '600', '700'] })

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-petrol text-white">
      <Navbar />
      <div className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-16 text-center">
            <h1 className={cn(serif.className, "text-4xl md:text-6xl font-bold mb-4")}>Aviso de Privacidad</h1>
            <div className="w-20 h-[1px] bg-brand-gold/30 mx-auto" />
            <p className="mt-6 text-white/50 text-sm uppercase tracking-widest">Última actualización: Mayo 2024</p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70 font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>1. Identidad y Domicilio del Responsable</h2>
              <p>
                SUCESSO Group, con domicilio en México, es responsable del tratamiento de sus datos personales conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>2. Datos Personales que se recaban</h2>
              <p>
                Para las finalidades señaladas en el presente aviso, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente a través de nuestro formulario de contacto o cuando se comunica con nosotros vía WhatsApp. Los datos que obtenemos son: nombre completo, nombre de su empresa, correo electrónico y teléfono.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>3. Finalidades del tratamiento</h2>
              <p>
                Sus datos personales serán utilizados para las siguientes finalidades primarias:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proveer los servicios de diseño y producción de eventos solicitados.</li>
                <li>Responder a sus solicitudes de información sobre nuestros servicios.</li>
                <li>Mantener comunicación directa para la planeación estratégica de sus proyectos.</li>
                <li>Dar seguimiento a nuestra relación comercial.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>4. Derechos ARCO</h2>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
              </p>
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico: paola@sucessogroup.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={cn(serif.className, "text-2xl text-brand-gold italic")}>5. Modificaciones al Aviso de Privacidad</h2>
              <p>
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales o de nuestras propias necesidades por los servicios que ofrecemos. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad a través de este sitio web.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
