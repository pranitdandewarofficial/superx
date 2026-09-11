import React, { useState } from 'react'
import { CreditCard, TrendingUp, IndianRupee } from 'lucide-react'

const BeyondUPI: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  
  const products = [
    {
      icon: CreditCard,
      name: 'superCard',
      tagline: 'Credit on UPI. Lifetime free.',
      description: 'Indias first RuPay credit card on UPI. Link it once, use everywhere. No annual fees, no hidden charges.',
      features: ['1% cashback on all spends', 'Free fuel surcharge waiver', 'Partner: IDFC FIRST Bank'],
      cta: 'Check eligibility',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      name: 'superDeposit',
      tagline: 'Earn up to 9% p.a.',
      description: 'Fixed deposits that actually make sense. Flexible tenure, monthly interest payout, premature withdrawal allowed.',
      features: ['Interest calculator built-in', '100% digital, zero paperwork', 'Partner: Leading NBFCs'],
      cta: 'Calculate returns',
      gradient: 'from-emerald-400 to-teal-500',
      hasCalculator: true,
    },
    {
      icon: IndianRupee,
      name: 'superCash',
      tagline: 'Instant personal loans',
      description: 'Pre-approved loans up to Rs.5L. Disbursed in 30 seconds. Repay flexibly over 3-24 months.',
      features: ['No collateral needed', 'Transparent interest rates', 'Early repayment = lower interest'],
      cta: 'See your limit',
      gradient: 'from-orange-400 to-rose-500',
      hasSlider: true,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-deepviolet/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8">
          Beyond UPI - the{' '}
          <span className="gradient-text">super suite</span>
        </h2>
        <p className="text-xl text-ink/60 text-center max-w-2xl mx-auto mb-16">
          One app for all your money needs. Payments, credit, savings - sorted.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {products.map((product, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === i
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'glass hover:bg-white/50'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Active Product Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden shadow-2xl">
            <div className={`bg-gradient-to-r ${products[activeTab].gradient} p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <products[activeTab].icon size={40} />
                <h3 className="text-3xl font-display font-bold">{products[activeTab].name}</h3>
              </div>
              <p className="text-xl opacity-90">{products[activeTab].tagline}</p>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-ink/70 mb-6">{products[activeTab].description}</p>
              
              <ul className="grid md:grid-cols-3 gap-4 mb-8">
                {products[activeTab].features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Calculator Widget for superDeposit */}
              {products[activeTab].hasCalculator && (
                <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                  <h4 className="font-bold mb-4">Interest Calculator</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm text-ink/60">Amount</label>
                      <input type="number" defaultValue={50000} className="w-full mt-1 p-3 rounded-lg border border-primary/20 focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="text-sm text-ink/60">Months</label>
                      <select className="w-full mt-1 p-3 rounded-lg border border-primary/20 outline-none">
                        <option>6 months</option>
                        <option>12 months</option>
                        <option>24 months</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-ink/60">Returns</label>
                      <div className="mt-1 p-3 rounded-lg bg-primary/10 font-bold text-primary">Rs.2,250</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Slider for superCash */}
              {products[activeTab].hasSlider && (
                <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                  <h4 className="font-bold mb-4">Loan Amount</h4>
                  <input 
                    type="range" 
                    min="5000" 
                    max="500000" 
                    defaultValue={100000}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between mt-2 text-sm text-ink/60">
                    <span>Rs.5K</span>
                    <span className="font-bold text-primary">Rs.1,00,000</span>
                    <span>Rs.5L</span>
                  </div>
                  <p className="mt-4 text-sm">EMI: ~Rs.4,500/month for 24 months</p>
                </div>
              )}

              <button className="w-full bg-primary hover:bg-deepviolet text-white py-4 rounded-xl font-semibold transition-all">
                {products[activeTab].cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeyondUPI
