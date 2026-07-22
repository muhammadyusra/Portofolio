import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-line px-6 sm:px-10 py-10 pb-28">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-fog-dim">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.</p>
        <div className="flex items-center gap-5">
          <a href={profile.socials.github} className="hover:text-amber transition-colors">
            github
          </a>
          <a href={profile.socials.linkedin} className="hover:text-amber transition-colors">
            linkedin
          </a>
          <a href={profile.socials.instagram} className="hover:text-amber transition-colors">
            instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
