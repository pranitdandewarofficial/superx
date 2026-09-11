import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CashbackSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const percentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Count-up animation for 5%
    if (percentRef.current) {
      let progress = { value: 0 }
      gsap.to(progress, {
        value: 5,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          percentRef.current!.textContent = `${progress.value.toFixed(1)}%`
        },
      })
    }
  }, [])

  const cashbackTable = [
    { spend: '₹100', cashback: '₹2' },
    { spend: '₹500', cashback: '₹8' },
    { spend: '₹1000', cashback: '₹20' },
    { spend: '₹5000', cashback: '₹75' },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Giant 5% */}
          <div className="text-center lg:text-left">
            <div 
              ref={percentRef}
              className="font-display text-[12rem] md:text-[16rem] leading-none gradient-text font-bold"
            />
            <p className="text-2xl md:text-3xl text-ink/70 -mt-4">
              cashback on every merchant UPI payment
            </p>
            <p className="text-lg text-ink/50 mt-4">
              Yes, it's real. Yes, it's instant. No, there's no catch.
            </p>
          </div>

          {/* Right: Transparency Table */}
          <div className="glass rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">See exactly what you earn</h3>
            <div className="space-y-4">
              {cashbackTable.map((row, i) => (
                <div 
                  key={i}
                  className="flex justify-between items-center py-4 border-b border-primary/10 last:border-0"
                >
                  <span className="text-lg text-ink/70">Spend {row.spend}</span>
                  <span className="text-xl font-bold text-primary">Get {row.cashback}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink/50 mt-6">
              *Cashback credited instantly to your superX wallet. Use it for anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CashbackSection
