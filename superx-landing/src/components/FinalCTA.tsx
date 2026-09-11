import React from 'react'
import { Download, QrCode } from 'lucide-react'

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Full-bleed Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-deepviolet to-indigo-900" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Your money deserves{' '}
          <span className="text-accent">super.</span>
        </h2>
        <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-12">
          Join 50 lakh+ Indians who've already switched to smarter payments.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="magnetic-btn bg-white hover:bg-gray-100 text-ink px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2 shadow-xl">
            <Download size={20} />
            Get it on Google Play
          </button>
          <button className="magnetic-btn glass hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2">
            <Download size={20} />
            Download on App Store
          </button>
        </div>

        {/* QR Code */}
        <div className="inline-block bg-white p-4 rounded-2xl shadow-2xl">
          <QrCode size={160} className="text-ink" />
        </div>
        <p className="mt-4 text-sm opacity-70">Scan to download instantly</p>
      </div>
    </section>
  )
}

export default FinalCTA
