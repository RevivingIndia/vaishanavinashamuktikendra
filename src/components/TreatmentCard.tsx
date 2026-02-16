import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface TreatmentCardProps {
  title: string
  duration: string
  benefits: string[]
  icon: string
  index?: number
}

export function TreatmentCard({ title, duration, benefits, icon, index = 0 }: TreatmentCardProps) {
  return (
    <motion.article
      className="rounded-2xl border border-violet-100 bg-white/90 backdrop-blur shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <div className="p-6 flex-1">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-100 to-teal-100 flex items-center justify-center text-2xl mb-4">
          {icon}
        </div>
        <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{title}</h3>
        <p className="text-sm text-teal-600 font-medium mb-4">{duration}</p>
        <ul className="space-y-2 text-sm text-slate-600 mb-6">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="text-teal-500 mt-0.5">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-violet-50/50 border-t border-violet-100">
        <Link
          to="/contact"
          className="block w-full text-center py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-500 to-teal-500 text-white hover:from-violet-600 hover:to-teal-600 transition-all"
        >
          Enquire Now
        </Link>
      </div>
    </motion.article>
  )
}
