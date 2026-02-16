import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CTASection({
  title,
  subtitle,
  primaryLabel = 'Get Help Now',
  primaryTo = '/contact',
  secondaryLabel = 'Start Admission',
  secondaryTo = '/contact',
}: CTASectionProps) {
  return (
    <motion.section
      className="py-16 sm:py-24 bg-gradient-to-r from-violet-600 via-violet-500 to-teal-500 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">{title}</h2>
        {subtitle && <p className="text-white/90 text-lg mb-8">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-white text-violet-700 hover:bg-violet-50 transition-all"
          >
            {primaryLabel}
          </Link>
          <Link
            to={secondaryTo}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white/10 transition-all"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
