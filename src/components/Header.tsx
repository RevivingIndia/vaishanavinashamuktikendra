import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/our-services', label: 'Our Services' },
  { to: '/recovery-journey', label: 'Recovery Journey' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-violet-100/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 lg:min-h-20 py-2">
          <Link to="/" className="flex items-center shrink-0" aria-label="Vaishanavi Nasha Mukti Kendra - Home">
            <img src="/logo.jpg" alt="Vaishanavi Nasha Mukti Kendra" className="h-[4rem] min-[375px]:h-[4.5rem] sm:h-20 md:h-20 w-auto max-h-24 object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center flex-nowrap gap-1 xl:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2.5 rounded-lg text-sm min-[1280px]:text-base font-medium whitespace-nowrap transition-colors ${
                  location.pathname === link.to
                    ? 'bg-violet-100 text-violet-700'
                    : 'text-slate-600 hover:bg-violet-50 hover:text-violet-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-base font-semibold bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 transition-all"
            >
              Get Help
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-violet-100 aria-label={mobileOpen ? 'Close menu' : 'Open menu'}"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-violet-100 bg-white/95 backdrop-blur-xl"
          >
            <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium ${
                    location.pathname === link.to ? 'bg-violet-100 text-violet-700' : 'text-slate-600 hover:bg-violet-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl text-base font-semibold bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center"
              >
                Get Help
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
