import { motion } from 'framer-motion'
import { TreatmentCard } from '../components/TreatmentCard'
import { TREATMENT_PLANS } from '../utils/constants'

export function TreatmentPlans() {
  return (
    <>
      <section className="pt-12 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-heading font-bold text-4xl sm:text-5xl text-slate-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Treatment Plans
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Programs designed for your recovery journey
          </motion.p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TREATMENT_PLANS.map((plan, i) => (
              <TreatmentCard key={plan.title} {...plan} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
