import { motion } from 'framer-motion'
import { TestimonialSlider } from '../components/TestimonialSlider'
import type { TestimonialItem } from '../components/TestimonialSlider'
import { CTASection } from '../components/CTASection'

const testimonials: TestimonialItem[] = [
  {
    name: 'Rahul S.',
    role: 'Recovered 2 years ago',
    quote: 'Vaishanavi gave me my life back. The counselors and the environment made me feel safe enough to be honest and change.',
    rating: 5,
  },
  {
    name: 'Priya M.',
    role: 'Family member',
    quote: 'We were desperate. The family program helped us understand and support our son. Today he is sober and happy.',
    rating: 5,
  },
  {
    name: 'Vikram K.',
    role: 'Recovered 1 year ago',
    quote: 'The daily routine, yoga, and therapy together made a huge difference. It felt like a wellness retreat, not a hospital.',
    rating: 5,
  },
]

const storyCards = [
  {
    title: 'Before',
    points: ['Struggling with addiction', 'Isolation from family', 'Health concerns'],
    style: 'from-slate-100 to-slate-200',
  },
  {
    title: 'After',
    points: ['Sober and confident', 'Reconnected with loved ones', 'Healthy lifestyle'],
    style: 'from-violet-100 to-teal-100',
  },
]

export function SuccessStories() {
  return (
    <>
      <section className="pt-12 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-slate-800 mb-4">Success Stories</h1>
          <p className="text-xl text-slate-600">Real journeys of healing and hope</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl text-slate-800 mb-6 text-center">What Our Families Say</h2>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl text-slate-800 mb-8 text-center">Before & After</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {storyCards.map((card, i) => (
              <motion.div
                key={card.title}
                className={`rounded-2xl p-8 bg-gradient-to-br ${card.style} border border-white/80 shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-heading font-bold text-xl text-slate-800 mb-4">{card.title}</h3>
                <ul className="space-y-2 text-slate-700">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className={card.title === 'After' ? 'text-teal-600' : 'text-slate-500'}>
                        {card.title === 'After' ? '✓' : '•'}
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-slate-600 mb-2">Video testimonials section (embed your videos here)</p>
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-violet-100 to-teal-100 border border-violet-200 flex items-center justify-center text-slate-500">
            Video testimonial placeholder
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <CTASection title="Write Your Own Success Story" subtitle="Start your journey today." />
      </div>
    </>
  )
}
