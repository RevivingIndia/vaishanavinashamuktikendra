import { useState } from 'react'
import { motion } from 'framer-motion'
import { CTASection } from '../components/CTASection'

const steps = [
  'Contact & Consultation',
  'Assessment',
  'Admission',
  'Treatment Start',
]

const addictionTypes = [
  'Alcohol',
  'Drugs',
  'Tobacco',
  'Behavioral',
  'Other',
]

export function Admission() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    patientName: '',
    age: '',
    addictionType: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <section className="pt-12 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-slate-800 mb-4">Admission Process</h1>
          <p className="text-xl text-slate-600">Simple, confidential steps to begin recovery</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl text-slate-800 mb-8 text-center">How It Works</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-teal-500 text-white font-heading font-bold">
                  {i + 1}
                </span>
                <span className="font-medium text-slate-700">{step}</span>
                {i < steps.length - 1 && (
                  <span className="hidden sm:inline text-slate-300">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            className="rounded-2xl bg-white border border-violet-100 shadow-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl text-slate-800 mb-6">Enquiry Form</h2>
            {submitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-3xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">Thank You</h3>
                <p className="text-slate-600">
                  We have received your enquiry. Our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-slate-700 mb-1">
                    Patient Name
                  </label>
                  <input
                    id="patientName"
                    name="patientName"
                    type="text"
                    required
                    value={form.patientName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-1">Age</label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="1"
                    max="120"
                    value={form.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
                    placeholder="Age"
                  />
                </div>
                <div>
                  <label htmlFor="addictionType" className="block text-sm font-medium text-slate-700 mb-1">
                    Addiction Type
                  </label>
                  <select
                    id="addictionType"
                    name="addictionType"
                    required
                    value={form.addictionType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="">Select type</option>
                    {addictionTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Any additional details..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-violet-500 to-teal-500 text-white hover:from-violet-600 hover:to-teal-600 transition-all shadow-lg"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <CTASection title="Need Immediate Help?" primaryLabel="Call Helpline" primaryTo="/contact" />
      </div>
    </>
  )
}
