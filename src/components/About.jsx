import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'

const FACTS = [
  { label: 'Program studi', value: 'Rekayasa Perangkat Lunak (S1)' },
  { label: 'Semester', value: '6' },
  { label: 'Institusi', value: profile.institution },
  { label: 'Status', value: 'Mencari magang / kolaborasi' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-10 border-t border-ink-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">// tentang</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-fog leading-tight">
            Berpikir seperti seorang arsitek sistem, membangun seperti seorang engineer.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          {profile.bio.map((p, i) => (
            <p key={i} className="text-fog-muted leading-relaxed text-base">
              {p}
            </p>
          ))}

          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-ink-line bg-ink-panel/50 p-4"
              >
                <p className="font-mono text-[10px] tracking-widest uppercase text-teal mb-1">
                  {f.label}
                </p>
                <p className="text-fog text-sm">{f.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
