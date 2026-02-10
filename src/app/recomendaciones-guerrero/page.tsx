
"use client"

import React from 'react'
import Link from 'next/link'
import { Literata } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RecommendationGrid } from '@/components/sections/RecommendationGrid'

const serif = Literata({ subsets: ['latin'], weight: ['300', '400', '600'] })

const navItems = [
  { label: 'Zihuatanejo', href: '/recomendaciones-zihuatanejo' },
  { label: 'Guerrero', href: '/recomendaciones-guerrero' },
  { label: 'México', href: '/recomendaciones-mexico' },
]

export default function GuerreroPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#5c6b5c] p-6 md:p-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Button asChild variant="ghost" className="rounded-full text-[#c5a059] uppercase tracking-widest text-[10px] gap-2">
            <Link href="/boda-carla-said#recomendaciones">
              <ArrowLeft size={14} /> Volver
            </Link>
          </Button>
          
          <nav className="flex gap-4 md:gap-12 bg-white/50 backdrop-blur-sm p-2 rounded-full border border-[#5c6b5c]/5">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all",
                  item.href === '/recomendaciones-guerrero' 
                    ? "bg-[#c5a059] text-white font-bold" 
                    : "opacity-40 hover:opacity-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className={cn(serif.className, "text-5xl md:text-8xl italic")}>Guerrero</h1>
            <p className="text-[10px] uppercase tracking-[0.5em] opacity-40">Tradición y belleza natural</p>
            <div className="w-24 h-[1px] bg-[#c5a059] mx-auto opacity-30" />
          </div>

          <RecommendationGrid area="guerrero" />
        </section>
      </div>
    </div>
  )
}
