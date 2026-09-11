import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  const productLinks = ['superUPI', 'superCard', 'superDeposit', 'superCash', 'Rewards']
  const companyLinks = ['About Us', 'Careers', 'Press', 'Blog', 'Contact']
  const legalLinks = ['Terms & Conditions', 'Privacy Policy', 'Grievance Redressal', 'Fair Practice Code']

  return (
    <footer className="bg-ink text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <a href="#" className="text-3xl font-display font-bold gradient-text block mb-4">
              superX
            </a>
            <p className="text-white/60 mb-6">Payments that pay you back.</p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 SuperX Technologies Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>🇮🇳</span>
            <span>Made in India with ❤️</span>
          </div>
          <p className="text-white/40 text-sm">
            CIN: U72900MH2024PTC123456 | NPCI TPAP License No. 2024001
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
