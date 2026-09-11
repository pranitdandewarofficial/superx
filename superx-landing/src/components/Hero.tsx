import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Canvas } from '@react-three/fiber'
import { Float, PerspectiveCamera } from '@react-three/drei'
import FloatingShapes from './3d/FloatingShapes'
import { Play, Download } from 'lucide-react'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Word-by-word reveal animation
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word')
      gsap.fromTo(
        words,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power4.out',
          delay: 0.5,
        }
      )
    }

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headlineWords = ['Unlock', 'the', 'power', 'of', 'superUPI']

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <FloatingShapes />
          </Float>
        </Canvas>
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 
          ref={headlineRef}
          className="font-display text-display font-bold leading-tight mb-6"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="word inline-block mr-3">{word}</span>
          ))}
        </h1>

        <p className="text-xl md:text-2xl text-ink/70 max-w-2xl mx-auto mb-8 font-light">
          Get up to <span className="font-semibold text-primary">5% guaranteed cashback</span> & perks. 
          Every single time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="magnetic-btn bg-primary hover:bg-deepviolet text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-primary/30 flex items-center gap-2">
            <Download size={20} />
            Get the app
          </button>
          <button className="magnetic-btn glass hover:bg-white/50 text-ink px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2">
            <Play size={20} className="fill-current" />
            Watch how it works
          </button>
        </div>

        {/* App Store Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Get it on Google Play" 
            className="h-12 w-auto cursor-pointer hover:scale-105 transition-transform"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
            alt="Download on the App Store" 
            className="h-12 w-auto cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Hero
