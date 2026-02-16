import { Link } from 'react-router-dom'
import { CONTACT_PHONE, CONTACT_PHONE_RAW, CONTACT_ADDRESS } from '../utils/constants'

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-3">Vaishanavi Nasha Mukti Kendra</h3>
            <p className="text-sm text-slate-400 mb-2">
              A safe place for healing, recovery and positive transformation. Your journey to a new life starts here.
            </p>
            <p className="text-sm text-slate-400 whitespace-pre-line">{CONTACT_ADDRESS}</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="hover:text-teal-300 transition-colors">About Us</Link></li>
              <li><Link to="/our-services" className="hover:text-teal-300 transition-colors">Our Services</Link></li>
              <li><Link to="/our-approach" className="hover:text-teal-300 transition-colors">Our Approach</Link></li>
              <li><Link to="/recovery-journey" className="hover:text-teal-300 transition-colors">Recovery Journey</Link></li>
              <li><Link to="/contact" className="hover:text-teal-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-3">24/7 Helpline</h4>
            <p className="text-teal-400 font-semibold">Call for immediate help</p>
            <a href={`tel:${CONTACT_PHONE_RAW.replace(/\s/g, '')}`} className="text-lg text-white hover:text-teal-300 transition-colors">{CONTACT_PHONE}</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Vaishanavi Nasha Mukti Kendra. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
