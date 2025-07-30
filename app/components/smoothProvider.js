'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins
gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,  // Smoother (reduced from 0.08)
      smoothWheel: true,
      wheelMultiplier: 0.8,  // Slightly slower wheel
      smoothTouch: true,  // Enable for touch devices
      touchMultiplier: 1.2,  // Balanced touch sensitivity
      infinite: false,
    })

    // More optimized RAF handling
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Better ScrollTrigger sync
    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}