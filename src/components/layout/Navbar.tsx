
"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const logoData = PlaceHolderImages.find(img => img.id === 'logo-main')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled ? "py-4 bg-white/95 backdrop-blur-md shadow-sm border-b" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="relative flex items-center gap-4">
          {logoData ? (
            <div className={cn(
              "relative transition-all duration-300",
              isScrolled ? "w-48 h-16" : "w-64 h-24 lg:w-80 lg:h-32"
            )}>
              <Image 
                src={logoData.imageUrl} 
                alt="SUCESSO Logo" 
                fill 
                className={cn(
                  "object-contain transition-all duration-300", 
                  !isScrolled && "brightness-0 invert"
                )}
                priority
                data-ai-hint="company logo"
              />
            </div>
          ) : (
            <div className={cn(
              "text-3xl font-headline font-bold tracking-widest transition-colors",
              isScrolled ? "text-brand-ocean" : "text-white"
            )}>
              SUCESSO
            </div>
          )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-widest transition-colors hover:text-brand-canary",
                isScrolled ? "text-brand-darkGray" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className={cn(
              "font-bold px-8 py-6 transition-all rounded-full",
              isScrolled 
                ? "bg-brand-ocean text-white hover:bg-brand-darkGray" 
                : "bg-brand-canary text-brand-darkGray hover:bg-white"
            )}
          >
            Agendar Reunión
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            isScrolled ? "text-brand-ocean" : "text-white"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-0 bg-white transition-transform duration-300 ease-in-out transform z-[60]",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          <button className="absolute top-8 right-8 text-brand-darkGray" onClick={() => setIsMenuOpen(false)}>
            <X size={40} />
          </button>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-3xl font-headline text-brand-darkGray hover:text-brand-ocean"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-brand-canary hover:bg-brand-tangerine text-brand-darkGray w-full max-w-xs text-xl py-8 rounded-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar Reunión
          </Button>
        </div>
      </div>
    </nav>
  )
}
