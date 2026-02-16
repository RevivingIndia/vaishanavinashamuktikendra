import { motion } from 'framer-motion'

interface ActivityCardProps {
  title: string
  description?: string
  image?: string
  icon?: string
  index?: number
}

export function ActivityCard({ title, description, image, icon, index = 0 }: ActivityCardProps) {
  return (
    <motion.article
      className="group rounded-2xl overflow-hidden bg-white border border-violet-100 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-violet-100 to-teal-100">
        {image ? (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">{icon || '🌿'}</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-slate-800 mb-2">{title}</h3>
        {description && <p className="text-sm text-slate-600">{description}</p>}
      </div>
    </motion.article>
  )
}
