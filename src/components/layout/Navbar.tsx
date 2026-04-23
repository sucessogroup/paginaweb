
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
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 lg:px-12 transform-gpu",
        isVisible 
          ? "translate-y-0 opacity-100 py-4 bg-white/80 backdrop-blur-md border-b border-black/5" 
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
                  isVisible ? "brightness-100 invert-0" : "brightness-0"
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
                "text-[10px] font-bold uppercase tracking-[0.3em] transition-colors hover:text-brand-gold",
                isVisible ? "text-foreground" : "text-foreground/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="lg:hidden p-2 rounded-md text-foreground hover:text-brand-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-0 bg-white transition-transform duration-500 ease-in-out transform z-[70]",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          <button className="absolute top-8 right-8 text-foreground/50" onClick={() => setIsMenuOpen(false)}>
            <X size={36} />
          </button>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-headline font-bold text-foreground hover:text-brand-gold transition-colors"
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
