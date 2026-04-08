
import React from 'react'
import { ShieldCheck, Sparkles, Target, BarChart3 } from 'lucide-react'

const benefits = [
  {
    title: "Cero estrés operativo",
    desc: "Nosotros resolvemos las crisis antes de que te enteres que existieron.",
    icon: ShieldCheck
  },
  {
    title: "Representación de marca",
    desc: "Eventos que proyectan la altura y profesionalismo de tu organización.",
    icon: Target
  },
  {
    title: "Ejecución impecable",
    desc: "Cuidamos los detalles que otros pasan por alto: desde la luz hasta el tono de voz.",
    icon: Sparkles
  },
  {
    title: "Retorno de inversión",
    desc: "Diseñamos experiencias con objetivos claros para asegurar resultados medibles.",
    icon: BarChart3
  }
]

export const WhyUs = () => {
  return (
    <section className="py-24 md:py-40 bg-brand-wine text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-black/5 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-brand-canary font-bold tracking-[0.5em] text-[10px] uppercase">¿Por qué elegirnos?</h2>
            <h3 className="text-4xl md:text-6xl font-headline font-bold mb-8 leading-tight">
              Detalles que no cuestan más, pero <span className="text-brand-canary italic font-light">lo valen todo.</span>
            </h3>
            <p className="text-lg text-gray-300 font-light max-w-lg leading-relaxed italic opacity-80">
              "En SUCESSO no solo organizamos reuniones, creamos entornos de alto impacto donde los negocios y las relaciones fluyen naturalmente."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-brand-canary/20 flex items-center justify-center text-brand-canary mb-6">
                  <b.icon size={24} />
                </div>
                <h4 className="text-lg font-headline font-bold mb-2">{b.title}</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque de Testimonio */}
        <div className="mt-32 max-w-4xl mx-auto text-center border-t border-white/10 pt-24">
          <blockquote className="space-y-10">
            <p className="text-2xl md:text-4xl font-light italic leading-relaxed text-gray-200">
              "SUCESSO no solo organizó nuestro congreso anual, crearon una atmósfera donde nuestros directivos se sintieron verdaderamente valorados. El nivel de detalle es otro nivel."
            </p>
            <footer className="space-y-2">
              <cite className="block font-bold text-brand-canary not-italic text-lg tracking-widest uppercase">— Directora de Aseguradora Líder</cite>
              <span className="text-xs text-gray-500 tracking-[0.3em] uppercase">Vía Instagram</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
