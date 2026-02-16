import { useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT_PHONE, CONTACT_PHONE_RAW, CONTACT_ADDRESS, CONTACT_ADDRESS_MAP } from '../utils/constants'

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Emergency Helpline Banner */}
      <section className="bg-gradient-to-r from-red-500 to-rose-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="font-heading font-bold text-lg">🆘 Emergency Helpline — 24/7</span>
          <a href={`tel:${CONTACT_PHONE_RAW.replace(/\s/g, '')}`} className="font-semibold text-xl hover:underline">
            {CONTACT_PHONE}
          </a>
        </div>
      </section>

      <section className="pt-12 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-slate-800 mb-4">Contact & Help</h1>
          <p className="text-xl text-slate-600">We are here for you, anytime</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl text-slate-800 mb-6">Send a Message</h2>
              {formSubmitted ? (
                <div className="rounded-2xl bg-teal-50 border border-teal-200 p-8 text-center">
                  <p className="text-teal-800 font-medium">Thank you. We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-violet-500 to-teal-500 text-white hover:from-violet-600 hover:to-teal-600 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            <div className="space-y-8">
              <motion.div
                className="rounded-2xl bg-violet-50/80 border border-violet-100 p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-lg text-slate-800 mb-3">24/7 Support</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Our helpline is available round the clock. Don’t hesitate to call or message.
                </p>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors"
                >
                  WhatsApp Us
                </a>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-violet-100 p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-heading font-bold text-lg text-slate-800 mb-3">Address</h3>
                <p className="text-slate-600 whitespace-pre-line">{CONTACT_ADDRESS}</p>
                <a
                  href={`tel:${CONTACT_PHONE_RAW.replace(/\s/g, '')}`}
                  className="mt-3 inline-block text-teal-600 font-semibold hover:text-teal-700"
                >
                  {CONTACT_PHONE}
                </a>
              </motion.div>

              <div className="rounded-2xl overflow-hidden border border-violet-100 aspect-video">
                <iframe
                  title="Map - Vaishanavi Nasha Mukti Kendra location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_ADDRESS_MAP)}&output=embed`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
