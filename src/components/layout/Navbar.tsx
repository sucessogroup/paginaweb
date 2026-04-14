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
      // Mostrar la navbar después de que el usuario haya pasado el 80% de la sección Hero
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 lg:px-12 transform-gpu",
        isVisible 
          ? "translate-y-0 opacity-100 py-4 bg-[#19373E]/95 backdrop-blur-md border-b border-white/10" 
          : "-translate-y-full opacity-0 py-8 bg-transparent"
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
                className="object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-105"
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
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-brand-gold"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="lg:hidden p-2 rounded-md text-white/70 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-0 bg-[#19373E] transition-transform duration-500 ease-in-out transform z-[70]",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          <button className="absolute top-8 right-8 text-white/50" onClick={() => setIsMenuOpen(false)}>
            <X size={36} />
          </button>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-headline font-bold text-white hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
