"use client"

import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { Literata } from 'next/font/google'
import { ExternalLink, Star, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

const serif = Literata({ subsets: ['latin'], weight: ['300', '400', '600'] })

interface Recommendation {
  title: string
  shortDescription: string
  price: string
  currency: string
  rating: string
  image: string
  bookingLink: string
  category: string
}

export function RecommendationGrid({ area }: { area: string }) {
  const [data, setData] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/recommendations?area=${area}`)
      if (!res.ok) throw new Error('Failed to fetch')
      const json = await res.json()
      setData(json)
    } catch (err) {
      console.error("Error fetching recommendations:", err)
      setData([])
    } finally {
      setLoading(false)
    }
  }, [area])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-video w-full rounded-2xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-24 space-y-6">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">Información en proceso</p>
          <p className={cn(serif.className, "text-xl italic opacity-60")}>Estamos sincronizando las mejores experiencias para ti.</p>
        </div>
        <Button 
          onClick={fetchData}
          variant="outline"
          className="rounded-full px-8 py-6 border-[#c5a059]/30 text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px] gap-2"
        >
          <RefreshCw size={14} className={cn(loading && "animate-spin")} />
          Actualizar datos
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {data.map((item, idx) => (
        <div key={idx} className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-[#5c6b5c]/5 hover:shadow-xl hover:shadow-[#5c6b5c]/5 transition-all duration-700">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image 
              src={item.image || 'https://picsum.photos/seed/activity/600/400'} 
              alt={item.title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              unoptimized={item.image.includes('amadeus')}
            />
            <div className="absolute inset-0 bg-[#8a9a5b]/10 mix-blend-multiply" />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
              <Star size={12} className="text-[#c5a059] fill-[#c5a059]" />
              <span className="text-[10px] font-bold text-[#5c6b5c]">{item.rating}</span>
            </div>
          </div>
          
          <div className="p-8 flex flex-col flex-1 gap-4">
            <h3 className={cn(serif.className, "text-2xl italic text-[#5c6b5c] leading-tight")}>{item.title}</h3>
            <p className="text-sm text-[#5c6b5c]/70 font-light leading-relaxed line-clamp-3">
              {item.shortDescription}
            </p>
            <div className="mt-auto pt-6 flex items-center justify-between border-t border-[#5c6b5c]/5">
              <div>
                <p className="text-[8px] uppercase tracking-widest opacity-40">Desde</p>
                <p className="font-bold text-[#c5a059]">{item.price} {item.currency}</p>
              </div>
              <Button 
                onClick={() => window.open(item.bookingLink, '_blank')}
                variant="ghost" 
                className="rounded-full text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition-all duration-500 text-[10px] uppercase tracking-widest gap-2"
              >
                Reservar <ExternalLink size={14} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
