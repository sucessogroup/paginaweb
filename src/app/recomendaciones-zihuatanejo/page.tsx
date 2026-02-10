
"use client"

import React from 'react'
import Link from 'next/link'
import { Literata } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const serif = Literata({ subsets: ['latin'], weight: ['300', '400', '600'] })

const navItems = [
  { label: 'Zihuatanejo', href: '/recomendaciones-zihuatanejo' },
  { label: 'Guerrero', href: '/recomendaciones-guerrero' },
  { label: 'México', href: '/recomendaciones-mexico' },
]

export default function ZihuaPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#5c6b5c] p-8 md:p-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Navigation */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Button asChild variant="ghost" className="rounded-full text-[#c5a059] uppercase tracking-widest text-[10px] gap-2">
            <Link href="/boda-carla-said">
              <ArrowLeft size={14} /> Volver
            </Link>
          </Button>
          
          <nav className="flex gap-6 md:gap-12">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-[10px] uppercase tracking-[0.3em] transition-all pb-1 border-b",
                  item.href === '/recomendaciones-zihuatanejo' ? "border-[#c5a059] font-bold text-[#5c6b5c]" : "border-transparent opacity-40 hover:opacity-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Placeholder Content */}
        <section className="text-center space-y-8 py-24">
          <h1 className={cn(serif.className, "text-5xl md:text-8xl italic")}>Zihuatanejo</h1>
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-40">Contenido próximamente</p>
          <div className="w-24 h-[1px] bg-[#c5a059] mx-auto opacity-30" />
        </section>
      </div>
    </div>
  )
}
