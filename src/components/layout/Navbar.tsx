
"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const logoInside = PlaceHolderImages.find(img => img.id === 'logo-inside')
  const logoOutside = PlaceHolderImages.find(img => img.id === 'logo-outside')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Experiencias', href: '#experiencias' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out px-6 lg:px-12",
        isScrolled ? "py-4 bg-white/95 backdrop-blur-md shadow-sm border-b" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            href="/" 
            className={cn(
              "z-[60] transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) transform-gpu",
              !isScrolled 
                ? "fixed left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2" 
                : "relative left-0 top-0 translate-x-0 translate-y-0"
            )}
          >
            {logoInside && logoOutside ? (
              <div className={cn(
                "relative transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) transform-gpu flex items-center justify-center",
                isScrolled ? "w-12 h-12" : "w-64 h-64 md:w-80 md:h-80"
              )}>
                {/* Parte Exterior - Gira */}
                <div className={cn(
                  "absolute inset-0 transition-all duration-1000 ease-in-out",
                  !isScrolled ? "animate-[spin_20s_linear_infinite]" : "opacity-0 scale-50"
                )}>
                  <Image 
                    src={logoOutside.imageUrl} 
                    alt="SUCESSO Logo Circular" 
                    fill 
                    className={cn(
                      "object-contain transition-all duration-1000 ease-in-out", 
                      !isScrolled && "brightness-0 invert"
                    )}
                    priority
                  />
                </div>
                {/* Parte Interior - Inmóvil */}
                <div className={cn(
                  "relative transition-all duration-1000 ease-in-out",
                  isScrolled ? "w-8 h-8" : "w-32 h-32 md:w-40 md:h-40"
                )}>
                  <Image 
                    src={logoInside.imageUrl} 
                    alt="SUCESSO Logo Isotipo" 
                    fill 
                    className={cn(
                      "object-contain transition-all duration-1000 ease-in-out", 
                      isScrolled ? "brightness-100" : "brightness-0 invert"
                    )}
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className={cn(
                "text-2xl md:text-3xl font-headline font-bold tracking-widest transition-all duration-1000",
                isScrolled ? "text-brand-ocean" : "text-white"
              )}>
                SUCESSO
              </div>
            )}
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={cn(
          "hidden lg:flex items-center gap-10 transition-all duration-1000 ease-in-out",
          !isScrolled ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"
        )}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-widest transition-colors hover:text-brand-canary",
                isScrolled ? "text-brand-darkGray" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className={cn(
            "lg:hidden p-2 rounded-md transition-all duration-1000",
            isScrolled ? "text-brand-ocean" : "text-white opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-0 bg-white transition-transform duration-500 ease-in-out transform z-[70]",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          <button className="absolute top-8 right-8 text-brand-darkGray" onClick={() => setIsMenuOpen(false)}>
            <X size={36} />
          </button>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-headline text-brand-darkGray hover:text-brand-ocean"
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
