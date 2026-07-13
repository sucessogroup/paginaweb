
"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const logoMain = PlaceHolderImages.find(img => img.id === 'logo-main')

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#brief-estrategico' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 lg:px-12 transform-gpu",
        isVisible 
          ? "translate-y-0 opacity-100 py-4 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm" 
          : "translate-y-0 py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="relative w-32 h-10 md:w-44 md:h-14 transition-all duration-500 group">
            {logoMain && (
              <Image 
                src={logoMain.imageUrl} 
                alt="SUCESSO Logo" 
                fill 
                className={cn(
                  "object-contain transition-all duration-500 group-hover:scale-105",
                  isVisible ? "brightness-100 invert-0" : "brightness-0 invert"
                )}
                priority
              />
            )}
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.3em] transition-colors",
                isVisible 
                  ? "text-[#E87402] hover:text-[#E87402]/80" 
                  : "text-white/70 hover:text-brand-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            isVisible ? "text-[#19373E]" : "text-white"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 h-screen w-screen bg-[#19373E] transition-transform duration-500 ease-in-out transform z-[70]",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-16">
            <div className="relative w-32 h-10">
              {logoMain && (
                <Image 
                  src={logoMain.imageUrl} 
                  alt="SUCESSO Logo" 
                  fill 
                  className="object-contain brightness-0 invert"
                />
              )}
            </div>
            <button 
              className="text-white/50 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-3xl font-headline font-bold text-white hover:text-[#E87402] transition-colors tracking-tight"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-12 space-y-4 border-t border-white/10 pt-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">Cada detalle, un SUCESSO.</p>
            <div className="flex flex-col gap-2 text-white/50 text-sm font-light">
              <a href="tel:4423775646">(442) 377 5646</a>
              <a href="mailto:paola@sucessogroup.com">paola@sucessogroup.com</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
