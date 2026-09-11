import { useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import CashbackSection from './components/CashbackSection'
import ScanAndPay from './components/ScanAndPay'
import FeaturesGrid from './components/FeaturesGrid'
import BeyondUPI from './components/BeyondUPI'
import ComparisonTable from './components/ComparisonTable'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

function App() {
  const lenisRef = useRef<Lenis | null>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle cursor glow
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      lenisRef.current?.destroy()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-ink overflow-x-hidden">
      <CursorGlow position={cursorPos} />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <CashbackSection />
        <ScanAndPay />
        <FeaturesGrid />
        <BeyondUPI />
        <ComparisonTable />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
