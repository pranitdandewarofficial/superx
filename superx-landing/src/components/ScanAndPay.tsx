import React from 'react'
import { QrCode, Smartphone } from 'lucide-react'

const ScanAndPay: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Mockup */}
          <div className="relative">
            <div className="relative z-10 glass rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
              {/* Phone Mockup */}
              <div className="bg-ink rounded-2xl p-4">
                <div className="bg-background rounded-xl overflow-hidden">
                  {/* Screen Header */}
                  <div className="h-8 bg-primary/20 flex items-center justify-center">
                    <div className="w-20 h-4 bg-ink/20 rounded-full" />
                  </div>
                  
                  {/* QR Code Display */}
                  <div className="aspect-square bg-white flex items-center justify-center p-8">
                    <QrCode size={200} className="text-ink" />
                  </div>
                  
                  {/* Scan Button */}
                  <div className="p-6 text-center">
                    <button className="w-full bg-primary hover:bg-deepviolet text-white py-4 rounded-xl font-semibold transition-all">
                      Tap to Scan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Right: Copy */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Redefining the way you{' '}
              <span className="gradient-text">scan and pay</span>
            </h2>
            <p className="text-xl text-ink/70 mb-8 leading-relaxed">
              One tap. One scan. Done. No more fumbling with UPI IDs or waiting for OTPs. 
              Just point, scan, and watch your cashback roll in.
            </p>
            
            <ul className="space-y-4">
              {[
                'Instant merchant verification',
                'Auto-detects best offers',
                'Works offline too',
                'Secure NPCI certified',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScanAndPay
