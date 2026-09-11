import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Is the cashback real or just a marketing gimmick?',
      answer: '100% real. We make money from merchant transaction fees and share a part of it with you. No lucky draws, no points — actual cash credited instantly to your wallet.',
    },
    {
      question: 'How do I redeem my cashback?',
      answer: 'Your cashback is automatically credited to your superX wallet after every payment. Use it to pay anyone via UPI, recharge, pay bills, or transfer to your bank — zero charges.',
    },
    {
      question: 'Which banks are supported?',
      answer: 'All major Indian banks! SBI, HDFC, ICICI, Axis, Kotak, IDFC FIRST, and 150+ more. If your bank supports UPI, it works with superX.',
    },
    {
      question: 'Is my money safe?',
      answer: 'Absolutely. We\'re NPCI certified and comply with all RBI guidelines. Your data is encrypted end-to-end. We never store your UPI PIN.',
    },
    {
      question: 'What if I face an issue?',
      answer: 'Our support team is available 24/7. Chat in-app or email us at support@superx.app. Most issues get resolved within minutes.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8">
          Got{' '}
          <span className="gradient-text">questions?</span>
        </h2>
        <p className="text-xl text-ink/60 text-center mb-16">
          We've got answers.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/30 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-6 text-ink/70 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
          <p className="text-sm text-ink/60">
            <strong>Compliance:</strong> superX is operated by SuperX Technologies Pvt Ltd, registered with NPCI as a Third Party App Provider (TPAP). All transactions are processed through UPI infrastructure regulated by RBI.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
