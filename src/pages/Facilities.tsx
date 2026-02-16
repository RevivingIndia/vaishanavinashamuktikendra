import { motion } from 'framer-motion'

const facilities = [
  {
    title: '24x7 Medical Support',
    desc: 'Round-the-clock care and monitoring by qualified staff.',
    img: '/images/facility-24x7-medical.png',
  },
  {
    title: 'Patient Room',
    desc: 'Clean, peaceful accommodation for rest and recovery.',
    img: '/images/facility-patient-room.png',
  },
  {
    title: 'Hygienic Food & Nutrition',
    desc: 'Balanced, nutritious meals to support your healing.',
    img: '/images/facility-hygienic-food.png',
  },
  {
    title: 'Counseling Rooms',
    desc: 'Private, comfortable spaces for one-on-one sessions.',
    img: '/images/facility-counseling-rooms.png',
  },
  {
    title: 'Security & Safe Environment',
    desc: 'Secure premises so you can focus entirely on recovery.',
    img: '/images/facility-security-safe.png',
  },
  {
    title: 'Emergency Care Support',
    desc: 'Immediate medical response whenever you need it.',
    img: '/images/facility-emergency-care.png',
  },
]

export function Facilities() {
  return (
    <>
      <section className="pt-12 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-slate-800 mb-4">Facilities & Care</h1>
          <p className="text-xl text-slate-600">Everything you need for a safe, comfortable recovery</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f, i) => (
              <motion.article
                key={f.title}
                className="group rounded-2xl overflow-hidden bg-white border border-violet-100 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={f.img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{f.title}</h3>
                  <p className="text-slate-600 text-sm">{f.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
