import { motion } from 'framer-motion'

export interface TimelineStep {
  title: string
  description?: string
  icon?: string
}

interface TimelineProps {
  steps: TimelineStep[]
  title?: string
  subtitle?: string
}

const defaultIcon = '✓'

export function Timeline({ steps, title, subtitle }: TimelineProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-violet-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-800 mb-3">{title}</h2>
            {subtitle && <p className="text-slate-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </motion.div>
        )}
        <div className="relative">
          {/* Horizontal line - visible on larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-200 via-teal-200 to-violet-200 rounded-full -translate-y-1/2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur border border-violet-100 shadow-lg flex items-center justify-center text-2xl mb-4">
                  {step.icon || defaultIcon}
                </div>
                <div className="bg-white/80 backdrop-blur rounded-2xl border border-violet-100/80 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block text-sm font-semibold text-teal-600 mb-1">Step {i + 1}</span>
                  <h3 className="font-heading font-bold text-slate-800 mb-2">{step.title}</h3>
                  {step.description && <p className="text-sm text-slate-600">{step.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
