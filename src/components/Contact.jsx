import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-10 border-t border-ink-line bg-ink-soft">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-4"
        >
          // kontak
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-fog mb-4"
        >
          Let's Build Something Together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-fog-muted mb-12"
        >
          Saya terbuka untuk kesempatan magang, kolaborasi pengembangan aplikasi, serta diskusi mengenai teknologi, software engineering, dan data.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="text-left rounded-2xl border border-ink-line bg-ink-panel/60 p-6 sm:p-8 space-y-5"
        >
          <div className="flex items-center gap-1.5 -mt-2 -mx-2 mb-4 px-2 py-2 border-b border-ink-line">
            <span className="w-2 h-2 rounded-full bg-[#F2755A]" />
            <span className="w-2 h-2 rounded-full bg-amber" />
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span className="ml-2 font-mono text-[11px] text-fog-dim">send_message.sh</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-widest text-fog-dim">
                nama
              </span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-ink border border-ink-line rounded-lg px-4 py-2.5 text-sm text-fog focus:border-amber outline-none transition-colors"
                placeholder="nama anda"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-widest text-fog-dim">
                email
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full bg-ink border border-ink-line rounded-lg px-4 py-2.5 text-sm text-fog focus:border-amber outline-none transition-colors"
                placeholder="email@contoh.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-widest text-fog-dim">
              pesan
            </span>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full bg-ink border border-ink-line rounded-lg px-4 py-2.5 text-sm text-fog focus:border-amber outline-none transition-colors resize-none"
              placeholder="ceritakan proyek atau peluang anda..."
            />
          </label>

          <button
            type="submit"
            className="w-full bg-amber text-ink font-mono text-sm font-medium px-6 py-3 rounded-lg hover:bg-amber-soft transition-colors"
          >
            {sent ? 'terkirim ✓' : 'kirim pesan →'}
          </button>

          <p className="text-center text-xs text-fog-dim font-mono pt-1">
            atau langsung email ke {profile.email}
          </p>
        </motion.form>
      </div>
    </section>
  )
}
