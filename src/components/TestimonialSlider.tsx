import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface TestimonialItem {
  name: string
  role?: string
  quote: string
  rating: number
  image?: string
}

interface TestimonialSliderProps {
  items: TestimonialItem[]
}

export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const [active, setActive] = useState(0)
  const current = items[active]

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white/80 backdrop-blur rounded-2xl border border-violet-100 p-8 shadow-lg"
        >
          <div className="flex gap-1 mb-4" aria-label={`Rating: ${current.rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-xl ${i < current.rating ? 'text-amber-400' : 'text-slate-200'}`}
                aria-hidden
              >
                ★
              </span>
            ))}
          </div>
          <blockquote className="text-lg text-slate-700 mb-6">&ldquo;{current.quote}&rdquo;</blockquote>
          <div className="flex items-center gap-3">
            {current.image ? (
              <img src={current.image} alt="" className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-200 to-teal-200 flex items-center justify-center text-lg font-heading font-bold text-violet-700">
                {current.name.charAt(0)}
              </div>
            )}
            <div>
              <cite className="font-heading font-semibold text-slate-800 not-italic">{current.name}</cite>
              {current.role && <p className="text-sm text-slate-500">{current.role}</p>}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === active ? 'bg-violet-500 w-8' : 'bg-violet-200 hover:bg-violet-300'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
