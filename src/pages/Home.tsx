import { motion } from 'framer-motion'
import { HeroSection } from '../components/HeroSection'
import { Timeline } from '../components/Timeline'
import { CTASection } from '../components/CTASection'
import { RECOVERY_STEPS, WHY_CHOOSE } from '../utils/constants'

const heroBg = '/images/home-session-1.png'
const healingImg = '/images/home-session-2.png'
const serenityImg1 = '/images/home-serenity-1.png'
const serenityImg2 = '/images/home-serenity-2.png'

export function Home() {
  return (
    <>
      <HeroSection
        heading="Start Your New Life with Vaishanavi Nasha Mukti Kendra"
        subheading="A Safe Place for Healing, Recovery & Positive Transformation"
        primaryCta={{ label: 'Get Immediate Help', to: '/contact' }}
        secondaryCta={{ label: 'Start Recovery Program', to: '/contact' }}
        backgroundImage={heroBg}
      />

      <Timeline
        steps={RECOVERY_STEPS}
        title="Recovery Journey"
        subtitle="Your path to lasting change, step by step."
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-800 mb-3">Why Choose Vaishanavi</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Care that puts you first, every step of the way.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-2xl bg-white/80 backdrop-blur border border-violet-100 p-6 text-center shadow-sm hover:shadow-lg hover:border-violet-200 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-heading font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-800 mb-4">Healing Environment</h2>
              <p className="text-slate-600 mb-4">
                At Vaishanavi Nasha Mukti Kendra, we believe recovery flourishes in a peaceful, supportive setting. Our center is designed to feel like a wellness retreat—calm, safe, and focused on your wellbeing.
              </p>
              <p className="text-slate-600">
                From comfortable living spaces to serene meditation areas and caring staff available around the clock, every detail supports your journey toward a healthier, substance-free life.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl border border-violet-100"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={healingImg}
                alt="Group session at Vaishanavi Nasha Mukti Kendra - Yes to Life, No to Drugs"
                className="w-full h-[320px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life at the Centre - Serenity & Community */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-800 mb-3">Life at the Centre</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A calm, supportive environment where recovery is nurtured through community, reflection, and positive daily routines.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            <motion.div
              className="rounded-2xl overflow-hidden border border-violet-100 shadow-lg bg-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={serenityImg1}
                  alt="Residents in a relaxed group activity at Vaishanavi Nasha Mukti Kendra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">Relaxed & Communal Living</h3>
                <p className="text-slate-600">
                  Our residents enjoy structured yet comfortable daily life—shared activities, entertainment, and a peaceful space where the Serenity Prayer and positive messaging support reflection and inner peace. Every detail is designed to reduce stress and build a sense of belonging.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden border border-violet-100 shadow-lg bg-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={serenityImg2}
                  alt="Group therapy and motivational session at Vaishanavi Nasha Mukti Kendra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">Group Therapy & Mindfulness</h3>
                <p className="text-slate-600">
                  Guided group sessions and motivational meetings help residents build emotional strength and coping skills. With a focus on “Just for Today” and the wisdom of the Serenity Prayer, we create a safe space for shared growth and lasting recovery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <CTASection
          title="Ready to Take the First Step?"
          subtitle="Reach out today. Our team is here to listen and guide you."
          primaryLabel="Get Immediate Help"
          secondaryLabel="Start Recovery Program"
        />
      </div>
    </>
  )
}
