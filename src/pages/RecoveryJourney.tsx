import { motion } from 'framer-motion'
import { ActivityCard } from '../components/ActivityCard'
import { CTASection } from '../components/CTASection'

const journeySteps = [
  {
    title: 'Patient Daily Routine',
    desc: 'Structured yet flexible daily schedule that balances therapy, rest, and activities.',
    img: '/images/recovery-patient-daily-routine.png',
  },
  {
    title: 'Therapy Sessions',
    desc: 'One-on-one and group counseling with experienced professionals.',
    img: '/images/recovery-therapy-sessions.png',
  },
  {
    title: 'Meditation & Yoga',
    desc: 'Mindfulness and physical wellness as part of holistic recovery.',
    img: '/images/recovery-meditation-yoga.png',
  },
  {
    title: 'Skill Building Activities',
    desc: 'Life skills and vocational guidance to support reintegration.',
    img: '/images/recovery-skill-building.png',
  },
  {
    title: 'Recreational Programs',
    desc: 'Carrom, board games, and other activities for relaxation and connection.',
    img: '/images/recovery-recreational-programs.png',
  },
]

const activities = [
  {
    title: 'Indoor Games',
    description: 'Carrom, Chess, and other board games for relaxation and camaraderie.',
    image: '/images/recovery-recreational-programs.png',
  },
  {
    title: 'Yoga & Meditation',
    description: 'Daily sessions for mindfulness and physical wellness.',
    image: '/images/recovery-meditation-yoga.png',
  },
  {
    title: 'Group Counseling',
    description: 'Supportive group sessions with peers and counselors.',
    image: '/images/recovery-group-counseling.png',
  },
  {
    title: 'Motivational Sessions',
    description: 'Inspirational talks and goal-setting workshops.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
  },
  {
    title: 'Physical Activities',
    description: 'Light exercises and walks in a safe, supervised environment.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
  },
  {
    title: 'Wellness Programs',
    description: 'Nutrition, sleep hygiene, and overall wellness education.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
  },
]

export function RecoveryJourney() {
  return (
    <>
      <section className="pt-12 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-heading font-bold text-4xl sm:text-5xl text-slate-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Recovery Journey
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            A day in the life of healing
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-slate-800 mb-8 text-center">Your Day at a Glance</h2>
          <div className="space-y-12">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.title}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex-1">
                  <span className="text-sm font-semibold text-teal-600">Step {i + 1}</span>
                  <h3 className="font-heading font-bold text-2xl text-slate-800 mt-1 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
                <div className="flex-1 w-full max-w-md">
                  <img
                    src={step.img}
                    alt=""
                    className="rounded-2xl shadow-lg border border-violet-100 w-full h-56 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-4 text-center">Daily Activities</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">A balanced mix of therapy, wellness, and recreation</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((a, i) => (
              <ActivityCard key={a.title} {...a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <CTASection title="Begin Your Journey" subtitle="Admissions are confidential and supportive." />
      </div>
    </>
  )
}
