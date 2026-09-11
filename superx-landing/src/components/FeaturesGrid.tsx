import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Gift, Trophy, Users, Sparkles } from 'lucide-react'

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Partner Privileges',
      description: 'Exclusive deals from brands you love. From Swiggy to Myntra, save big every day.',
      color: 'from-pink-500 to-rose-500',
      partners: ['Swiggy', 'Myntra', 'Zomato', 'BookMyShow'],
    },
    {
      icon: Trophy,
      title: 'super Jackpot',
      description: 'Weekly rewards that actually matter. Bikes, flight tickets, and crazy surprises.',
      color: 'from-amber-400 to-orange-500',
      cta: 'Try your luck →',
    },
    {
      icon: Gift,
      title: 'Gift a Friend',
      description: 'Send money with a meme. Because why should UPI be boring?',
      color: 'from-green-400 to-emerald-500',
      cta: 'Pick a meme 🎭',
    },
    {
      icon: Users,
      title: 'UPI Party',
      description: 'Split bills, plan events, collect money — all in one place.',
      color: 'from-blue-400 to-indigo-500',
      cta: 'Notify me when live',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
          More than just{' '}
          <span className="gradient-text">payments</span>
        </h2>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.02, 
                rotate: i % 2 === 0 ? 1 : -1,
                transition: { duration: 0.3 }
              }}
              className={`glass rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-ink/60 mb-4">{feature.description}</p>
              
              {/* Feature-specific content */}
              {feature.partners && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {feature.partners.map((partner, j) => (
                    <span key={j} className="text-xs bg-primary/10 px-3 py-1 rounded-full">
                      {partner}
                    </span>
                  ))}
                </div>
              )}
              
              {feature.cta && (
                <button className="text-primary font-semibold mt-4 hover:underline">
                  {feature.cta}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
