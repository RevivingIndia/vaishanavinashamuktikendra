import { motion } from 'framer-motion'
import { CTASection } from '../components/CTASection'

const approachItems = [
  {
    title: 'Holistic Healing Method',
    desc: 'We address body, mind, and spirit together for lasting change.',
    icon: '🌿',
  },
  {
    title: 'Medical + Emotional + Social Recovery',
    desc: 'Integrated care that covers detox, therapy, and reintegration.',
    icon: '🩺',
  },
  {
    title: 'Personalized Treatment Plans',
    desc: 'Every program is tailored to your needs and goals.',
    icon: '📋',
  },
  {
    title: 'Family Involvement Program',
    desc: 'Families are part of the healing process with dedicated sessions.',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Long-Term Recovery Support',
    desc: 'Aftercare and follow-up to help you stay on track.',
    icon: '❤️',
  },
]

export function OurApproach() {
  return (
    <>
      <section className="pt-12 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-heading font-bold text-4xl sm:text-5xl text-slate-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Approach
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            A unique, wellness-focused path to recovery
          </motion.p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {approachItems.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-6 p-6 rounded-2xl bg-white border border-violet-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-violet-100 to-teal-100 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <div>
                  <h2 className="font-heading font-bold text-xl text-slate-800 mb-2">{item.title}</h2>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <CTASection title="Want to Know More?" subtitle="Talk to our team about our approach." />
      </div>
    </>
  )
}
