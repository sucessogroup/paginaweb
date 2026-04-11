import React from 'react'
import { UserCheck, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react'

const benefits = [
  {
    title: "Atención personalizada",
    desc: "Cada proyecto es único y lo tratamos como tal, adaptándonos a tu visión y objetivos.",
    icon: UserCheck
  },
  {
    title: "Cuidado en cada detalle",
    desc: "Creemos que los pequeños elementos son los que transforman un evento en algo extraordinario.",
    icon: Sparkles
  },
  {
    title: "Acompañamiento constante",
    desc: "Estamos contigo en cada etapa, brindando claridad, control y confianza.",
    icon: ShieldCheck
  },
  {
    title: "Valor para tu inversión",
    desc: "Diseñamos experiencias estratégicas que generan impacto, conexión y resultados.",
    icon: TrendingUp
  }
]

export const WhyUs = () => {
  return (
    <section className="py-24 md:py-40 bg-background text-foreground overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-brand-gold font-bold tracking-[0.5em] text-[10px] uppercase">Diferenciación</h2>
            <h3 className="text-4xl md:text-6xl font-headline font-bold mb-8 leading-tight">
              Detalles que no cuestan más, <br /> <span className="text-brand-gold italic font-light">pero lo valen todo.</span>
            </h3>
            <p className="text-lg text-foreground/60 font-light max-w-lg leading-relaxed italic">
              “En SUCESSO no solo organizamos eventos, diseñamos experiencias que reflejan la esencia de tu marca y generan impacto real.”
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-700">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6">
                  <b.icon size={22} />
                </div>
                <h4 className="text-lg font-headline font-bold mb-2 text-foreground">{b.title}</h4>
                <p className="text-foreground/40 font-light text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center border-t border-white/5 pt-24">
          <blockquote className="space-y-10">
            <p className="text-2xl md:text-4xl font-light italic leading-relaxed text-foreground/70">
              "Elevaron nuestro congreso anual a una categoría superior. SUCESSO dota de alma a la identidad de nuestra organización."
            </p>
            <footer className="space-y-3">
              <cite className="block font-bold text-brand-gold not-italic text-lg tracking-widest uppercase opacity-80">— Vicepresidencia de Marketing Global</cite>
              <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto" />
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}