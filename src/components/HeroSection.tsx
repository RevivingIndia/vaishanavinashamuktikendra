import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  heading: string
  subheading: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  backgroundImage?: string
}

const defaultBg = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80'

export function HeroSection({
  heading,
  subheading,
  primaryCta = { label: 'Get Immediate Help', to: '/contact' },
  secondaryCta = { label: 'Start Recovery Program', to: '/contact' },
  backgroundImage = defaultBg,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[2rem]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/85 via-violet-800/75 to-teal-900/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.h1
          className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-white/95 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subheading}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to={primaryCta.to}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg bg-white text-violet-700 shadow-xl hover:bg-violet-50 transition-all hover:scale-105"
          >
            {primaryCta.label}
          </Link>
          <Link
            to={secondaryCta.to}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg bg-teal-500 text-white shadow-xl hover:bg-teal-600 transition-all border-2 border-white/30 hover:scale-105"
          >
            {secondaryCta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
