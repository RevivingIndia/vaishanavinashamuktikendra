import { motion } from 'framer-motion'
import { CTASection } from '../components/CTASection'

const IMG = {
  hero: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
  counseling: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
  yoga: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
  facility: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  care: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
  wellness: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
}

const treatmentPoints = [
  'Initial assessment and professional counseling',
  'Detoxification with proper care and monitoring',
  'Psychological therapy and group counseling sessions',
  'Yoga, meditation, and mental wellness programs',
  'Behavioral therapy and lifestyle improvement sessions',
  'Relapse prevention planning and coping strategies',
  'Aftercare support and family counseling',
]

const environmentPoints = [
  'Comfortable and safe residential accommodation',
  'Nutritious and hygienic meals',
  '24/7 care, monitoring, and support',
  'Recreational and wellness activities (indoor games, yoga, meditation)',
  'Regular health and progress monitoring',
  'Motivational sessions and positive group interactions',
]

const missionPoints = [
  'To help individuals break free from addiction and rebuild their lives',
  'To improve mental, emotional, and physical well-being',
  'To restore confidence, dignity, and social stability',
  'To provide ethical, safe, and long-term rehabilitation care',
]

export function AboutUs() {
  return (
    <>
      <section className="pt-12 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-heading font-bold text-4xl sm:text-5xl text-slate-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Vaishanavi Nasha Mukti Kendra & Rehabilitation Centre
          </motion.p>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl border border-violet-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={IMG.hero}
              alt="Peaceful meditation and wellness at Vaishanavi Nasha Mukti Kendra"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              className="prose prose-slate prose-lg max-w-none"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
            <p className="text-slate-700 leading-relaxed mb-6">
              Vaishanavi Nasha Mukti Kendra & Rehabilitation Centre is a dedicated and trusted De-Addiction and Rehabilitation Centre committed to helping individuals overcome alcohol, drug, and substance addiction in a safe, supportive, and compassionate environment. Our primary goal is to provide complete treatment, emotional support, and long-term rehabilitation to individuals struggling with addiction, so they can return to a healthy, dignified, and meaningful life.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              We understand that addiction is not only a physical dependency but also deeply affects a person’s mental, emotional, and social well-being. Therefore, our treatment approach is holistic and patient-centered, focusing on healing the mind, body, and behavior together. Our programs combine medical care, psychological counseling, therapy sessions, yoga, meditation, and structured rehabilitation routines to ensure sustainable recovery rather than temporary relief.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              At Vaishanavi Nasha Mukti Kendra, every patient is treated with dignity, respect, and compassion, just like a member of our own family. We create a non-judgmental and fear-free environment where individuals feel safe to begin their recovery journey without pressure or stigma. Our team provides continuous encouragement, motivation, and emotional guidance to help patients rebuild their confidence and self-worth.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We offer 24/7 care and supervision, safe residential facilities, regular counseling sessions, motivational activities, and a disciplined daily routine that gradually helps patients move towards an addiction-free and healthier lifestyle. Our structured environment plays a crucial role in reducing cravings, improving mental stability, and strengthening self-control during the recovery process.
            </p>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg border border-violet-100 shrink-0"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={IMG.counseling}
                alt="Professional counseling and support"
                className="w-full h-72 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 bg-white border-y border-violet-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl">💊</span> Our Treatment Approach
          </motion.h2>
          <p className="text-slate-600 mb-8">Personalized & Structured Care</p>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-slate-700 mb-6">
                We strongly believe in personalized treatment plans because every patient’s addiction history, mental condition, and recovery needs are different. Our recovery process is carefully designed and includes:
              </p>
              <ul className="space-y-3">
                {treatmentPoints.map((point, i) => (
                  <motion.li
                    key={point}
                    className="flex items-start gap-3 text-slate-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <span className="text-teal-500 mt-1 shrink-0">✓</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
              <p className="text-slate-700 mt-6">
                This step-by-step approach ensures that patients receive comprehensive care at every stage of their recovery journey.
              </p>
            </div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg border border-violet-100"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={IMG.yoga} alt="Yoga and meditation in recovery" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Holistic Rehabilitation */}
      <section className="py-16 bg-gradient-to-b from-violet-50/30 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg border border-violet-100 order-2 lg:order-1"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={IMG.wellness} alt="Holistic wellness and recovery" className="w-full h-72 object-cover" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.h2
                className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-6 flex items-center gap-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-3xl">🧠</span> Holistic Rehabilitation & Life Transformation
              </motion.h2>
              <motion.div
                className="space-y-4 text-slate-700 leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p>
                  At Vaishanavi Nasha Mukti Kendra, we focus not only on de-addiction but also on complete personality development, emotional balance, and social reintegration. Our aim is to help patients regain self-confidence, mental strength, and a sense of purpose in life. Through therapeutic activities, counseling, and positive engagement, we encourage individuals to develop healthy habits and a disciplined lifestyle that supports long-term sobriety.
                </p>
                <p>
                  We believe true recovery means transforming a person’s mindset, behavior, and daily routine so they can lead an independent, responsible, and addiction-free life even after leaving the rehabilitation center.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Environment */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl">🌿</span> Safe, Peaceful & Positive Healing Environment
          </motion.h2>
          <p className="text-slate-700 mb-8">
            Our centre provides a calm, hygienic, and secure environment designed to promote mental peace and emotional healing. Patients are provided with:
          </p>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ul className="space-y-3 mb-6">
              {environmentPoints.map((point, i) => (
                <motion.li
                  key={point}
                  className="flex items-start gap-3 text-slate-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <span className="text-teal-500 mt-1 shrink-0">✓</span>
                  {point}
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg border border-violet-100"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={IMG.facility} alt="Comfortable and safe residential facility" className="w-full h-72 object-cover" />
            </motion.div>
          </div>
          <p className="text-slate-700 mt-6">
            This supportive environment helps patients feel relaxed, reduces stress, and enhances the effectiveness of the rehabilitation process.
          </p>
        </div>
      </section>

      {/* Experienced Team */}
      <section className="py-16 bg-gradient-to-b from-white to-violet-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h2
                className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-6 flex items-center gap-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-3xl">👨‍⚕️</span> Experienced Team & Compassionate Care
              </motion.h2>
              <motion.div
                className="space-y-4 text-slate-700 leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p>
                  Our team consists of trained counselors, dedicated caregivers, and recovery support staff who understand the sensitivity of addiction treatment. They work closely with each patient to provide personalized attention, emotional support, and professional guidance throughout the recovery journey.
                </p>
                <p>
                  We maintain strict confidentiality and ensure that every patient’s privacy, dignity, and respect are protected at all times.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg border border-violet-100"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={IMG.care} alt="Dedicated care and support team" className="w-full h-72 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Family Support */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg border border-violet-100 order-2 lg:order-1"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={IMG.counseling} alt="Family counseling and aftercare support" className="w-full h-64 object-cover" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.h2
                className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mb-6 flex items-center gap-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-3xl">👨‍👩‍👦</span> Family Support & Aftercare
              </motion.h2>
              <motion.p
                className="text-slate-700 leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                We recognize the important role of family in the recovery process. Therefore, we also provide family counseling and guidance to help loved ones support the patient effectively. Even after the completion of treatment, our aftercare and relapse prevention support help patients maintain long-term recovery and prevent setbacks.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Commitment */}
      <section className="py-16 bg-gradient-to-b from-violet-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎯</span> Our Mission
            </h2>
            <ul className="space-y-2">
              {missionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-teal-500 mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">👁️</span> Our Vision
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Our vision is to become a trusted and leading Nasha Mukti and Rehabilitation Centre known for compassionate care, professional treatment, and life-changing recovery programs that bring hope, healing, and transformation to individuals and families affected by addiction.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-white border border-violet-100 p-8 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">❤️</span> Our Commitment
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We are committed to guiding every individual towards a new beginning — a life free from addiction, filled with health, positivity, self-respect, and happiness.
            </p>
            <p className="text-slate-700 font-medium">
              Our belief is simple:
            </p>
            <blockquote className="mt-2 pl-4 border-l-4 border-violet-300 text-slate-700 italic">
              “Freedom from addiction is not just treatment, it is a journey towards a healthier, happier, and more meaningful life.”
            </blockquote>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <CTASection
          title="Begin Your Journey With Us"
          subtitle="We are here to support you with compassion and professional care."
          primaryLabel="Get Help Now"
          secondaryLabel="Contact Us"
        />
      </div>
    </>
  )
}
