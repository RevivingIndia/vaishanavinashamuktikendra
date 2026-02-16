import { motion } from 'framer-motion'
import { CTASection } from '../components/CTASection'

const mainServices = [
  {
    titleEn: 'Alcohol De-Addiction Program',
    titleHi: 'शराब मुक्ति उपचार',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  },
  {
    titleEn: 'Substance Abuse Treatment',
    titleHi: 'नशा मुक्ति उपचार',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
  },
  {
    titleEn: 'Drug Rehabilitation Program',
    titleHi: 'स्मैक / ड्रग्स छुड़वाना',
    img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
  },
  {
    titleEn: 'Tobacco & Gutkha De-Addiction',
    titleHi: 'तंबाकू एवं गुटखा मुक्ति उपचार',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
  },
  {
    titleEn: 'Injection & Tablet Addiction Treatment',
    titleHi: 'इंजेक्शन एवं टैबलेट नशा मुक्ति उपचार',
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
  },
  {
    titleEn: 'Cannabis, Charas & Opium De-Addiction',
    titleHi: 'भांग, चरस, अफीम नशा मुक्ति उपचार',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
  },
]

const therapyServices = [
  { titleEn: 'Personal Counseling', titleHi: 'व्यक्तिगत काउंसलिंग', icon: '💬' },
  { titleEn: 'Group Therapy', titleHi: 'समूह थेरेपी', icon: '👥' },
  { titleEn: 'Psychological Counseling', titleHi: 'मनोवैज्ञानिक परामर्श', icon: '🧠' },
  { titleEn: 'Relapse Prevention Program', titleHi: 'रिलैप्स प्रिवेंशन प्रोग्राम', icon: '🛡️' },
  { titleEn: 'Behavioral Therapy', titleHi: 'व्यवहार सुधार थेरेपी', icon: '📋' },
]

const wellnessServices = [
  { titleEn: 'Yoga & Meditation', titleHi: 'योग एवं ध्यान', img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&q=80' },
  { titleEn: 'Indoor Activities (Carrom, Games)', titleHi: 'मनोरंजन गतिविधियाँ', img: 'https://images.unsplash.com/photo-1611195974226-efd738f8a3fc?w=400&q=80' },
  { titleEn: 'Motivational Sessions', titleHi: 'मोटिवेशनल सेशन', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80' },
  { titleEn: 'Daily Routine Recovery Program', titleHi: 'डेली रूटीन रिकवरी प्रोग्राम', img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&q=80' },
  { titleEn: 'Family Counseling', titleHi: 'फैमिली काउंसलिंग', img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80' },
]

const careServices = [
  { titleEn: '24x7 Care & Monitoring', titleHi: '24x7 देखभाल एवं निगरानी', img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=80' },
  { titleEn: 'Medical Support', titleHi: 'मेडिकल सपोर्ट', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80' },
  { titleEn: 'Safe Residential Facility', titleHi: 'सुरक्षित रिहायशी सुविधा', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80' },
  { titleEn: 'Healthy Diet & Nutrition', titleHi: 'हेल्दी डाइट एवं न्यूट्रिशन', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80' },
  { titleEn: 'Emergency Support', titleHi: 'इमरजेंसी सपोर्ट', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80' },
]

export function OurServices() {
  return (
    <>
      <section className="pt-12 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-heading font-bold text-4xl sm:text-5xl text-slate-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Best for Vaishanavi Nasha Mukti Kendra — Professional care you can trust
          </motion.p>
        </div>
      </section>

      {/* Main Services (Recommended) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-2 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Main Services
          </motion.h2>
          <p className="text-slate-600 text-center mb-10">Rehabilitation & De-Addiction Programs</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((s, i) => (
              <motion.article
                key={s.titleEn}
                className="rounded-2xl overflow-hidden bg-white border border-violet-100 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-slate-800">{s.titleEn}</h3>
                  <p className="text-sm text-slate-500 mt-1" lang="hi">{s.titleHi}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy & Recovery Services */}
      <section className="py-16 bg-gradient-to-b from-white to-violet-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-2 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Therapy & Recovery Services
          </motion.h2>
          <p className="text-slate-600 text-center mb-10">Premium support for lasting recovery</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {therapyServices.map((s, i) => (
              <motion.div
                key={s.titleEn}
                className="rounded-2xl bg-white/90 backdrop-blur border border-violet-100 p-6 text-center shadow-sm hover:shadow-lg hover:border-violet-200 transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="text-4xl mb-3 block">{s.icon}</span>
                <h3 className="font-heading font-bold text-slate-800">{s.titleEn}</h3>
                <p className="text-sm text-slate-500 mt-1" lang="hi">{s.titleHi}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness & Activity Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-2 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Wellness & Activity Services
          </motion.h2>
          <p className="text-slate-600 text-center mb-10">Holistic activities for mind and body</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {wellnessServices.map((s, i) => (
              <motion.article
                key={s.titleEn}
                className="rounded-2xl overflow-hidden bg-white border border-violet-100 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img src={s.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-slate-800 text-sm">{s.titleEn}</h3>
                  <p className="text-xs text-slate-500 mt-0.5" lang="hi">{s.titleHi}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Care & Facility Services */}
      <section className="py-16 bg-gradient-to-b from-violet-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-2 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Care & Facility Services
          </motion.h2>
          <p className="text-slate-600 text-center mb-10">Round-the-clock care and support</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {careServices.map((s, i) => (
              <motion.article
                key={s.titleEn}
                className="rounded-2xl overflow-hidden bg-white border border-violet-100 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-slate-800 text-sm">{s.titleEn}</h3>
                  <p className="text-xs text-slate-500 mt-0.5" lang="hi">{s.titleHi}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <CTASection
          title="Ready to Start Your Recovery?"
          subtitle="Rehabilitation Services • Substance Abuse Treatment • Confidential Care"
          primaryLabel="Get Help Now"
          secondaryLabel="Contact Us"
        />
      </div>
    </>
  )
}
