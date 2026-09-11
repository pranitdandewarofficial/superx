import React from 'react'
import { Check, X } from 'lucide-react'

const ComparisonTable: React.FC = () => {
  const comparisons = [
    { feature: 'Cashback on UPI', superX: 'Up to 5%', phonepe: 'Spin & Win (lucky)', gpay: 'Scratch cards (lucky)' },
    { feature: 'Cashback Type', superX: 'Guaranteed', phonepe: 'Random', gpay: 'Random' },
    { feature: 'Fixed Deposits', superX: 'Yes, up to 9%', phonepe: 'No', gpay: 'No' },
    { feature: 'Credit Card on UPI', superX: 'Yes, lifetime free', phonepe: 'Limited partners', gpay: 'No' },
    { feature: 'Instant Loans', superX: 'Yes, 30 sec', phonepe: 'Yes', gpay: 'Via partners' },
    { feature: 'Rewards Program', superX: 'Weekly Jackpot', phonepe: 'Coins', gpay: 'Points' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-deepviolet/5 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8">
          Why{' '}
          <span className="gradient-text">superX</span>
          {' '}wins
        </h2>
        <p className="text-xl text-ink/60 text-center max-w-2xl mx-auto mb-16">
          We don't do lucky draws. We do guaranteed returns.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto glass rounded-3xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-6 text-left">Feature</th>
                <th className="p-6 text-center text-xl">superX</th>
                <th className="p-6 text-center opacity-70">PhonePe</th>
                <th className="p-6 text-center opacity-70">GPay</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr 
                  key={i} 
                  className={`border-b border-primary/10 ${i % 2 === 0 ? 'bg-background/50' : ''}`}
                >
                  <td className="p-6 font-medium">{row.feature}</td>
                  <td className="p-6 text-center">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
                      {row.superX}
                    </span>
                  </td>
                  <td className="p-6 text-center text-ink/60">{row.phonepe}</td>
                  <td className="p-6 text-center text-ink/60">{row.gpay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-ink/50 mt-8">
          *Data as of 2024. Based on publicly available information.
        </p>
      </div>
    </section>
  )
}

export default ComparisonTable
