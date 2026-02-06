
import React from 'react'
import { Headphones, PenTool, ClipboardList, Play, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: "Escucha estratégica",
    desc: "Entendemos tus objetivos, valores y la audiencia a la que quieres impactar.",
    icon: Headphones
  },
  {
    title: "Diseño de la experiencia",
    desc: "Creamos un concepto creativo y un viaje para el invitado lleno de intención.",
    icon: PenTool
  },
  {
    title: "Planeación y logística",
    desc: "Coordinamos proveedores de élite y cronogramas rigurosos sin fisuras.",
    icon: ClipboardList
  },
  {
    title: "Producción y ejecución",
    desc: "Estamos en el terreno para asegurar que cada detalle suceda tal como se soñó.",
    icon: Play
  },
  {
    title: "Cierre y evaluación",
    desc: "Analizamos el impacto y los resultados para garantizar el retorno de inversión.",
    icon: CheckCircle2
  }
]

export const Process = () => {
  return (
    <section id="proceso" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="text-sm uppercase tracking-widest text-brand-ocean mb-4 font-bold">Metodología</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-brand-darkGray mb-6">Cómo <br/>trabajamos</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestro proceso está diseñado para quitarte el peso de la organización y dejarte solo con el éxito del evento.
            </p>
            <div className="hidden lg:block w-32 h-[1px] bg-brand-canary" />
          </div>

          <div className="lg:w-2/3 space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-full bg-brand-ocean/5 flex items-center justify-center text-brand-ocean group-hover:bg-brand-ocean group-hover:text-white transition-all duration-300">
                    <step.icon size={28} />
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gray-100" />
                  )}
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-brand-canary font-headline font-bold text-lg">0{idx + 1}.</span>
                    <h4 className="text-xl font-headline font-bold text-brand-darkGray">{step.title}</h4>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
