import React from 'react'
import { Star } from 'lucide-react'

const SocialProof: React.FC = () => {
  const stats = [
    { value: '50L+', label: 'Downloads' },
    { value: '4.3', label: 'Rating', icon: Star },
    { value: '₹120Cr+', label: 'Cashback Given' },
  ]

  return (
    <section className="py-12 border-y border-primary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Marquee Ticker */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {stats.map((stat, j) => (
                  <div key={j} className="flex items-center gap-4 text-xl md:text-2xl">
                    <span className="font-display font-bold text-primary">{stat.value}</span>
                    <span className="text-ink/60">{stat.label}</span>
                    {stat.icon && <stat.icon size={20} className="fill-accent text-accent" />}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
