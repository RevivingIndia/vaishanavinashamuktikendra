import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-teal-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-teal-500 flex items-center justify-center text-2xl text-white font-heading font-bold"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        V
      </motion.div>
      <motion.p
        className="mt-4 font-heading font-semibold text-slate-600"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Vaishanavi Nasha Mukti Kendra
      </motion.p>
    </motion.div>
  )
}
