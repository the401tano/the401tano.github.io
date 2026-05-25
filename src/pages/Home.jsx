import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import ProjectCard from '../components/ProjectCard'

// ── Featured section data ────────────────────────────────────────────────────
// TODO: Replace href values with your actual TikTok, YouTube, or page links
const featured = [
  {
    title: 'Latest Videos',
    description: 'The freshest drops — comedy bits, family chaos, and whatever ridiculous thing happened this week.',
    icon: '🎬',
    tag: 'Videos',
    gradient: 'bg-gradient-to-br from-orange-950/60 to-zinc-900',
    href: 'https://www.tiktok.com/@mattlovesmeli',
  },
  {
    title: 'Shorts',
    description: 'Bite-sized chaos. The kind of content you watch once, share immediately, and watch three more times.',
    icon: '⚡',
    tag: 'Short-Form',
    gradient: 'bg-gradient-to-br from-red-950/60 to-zinc-900',
    href: 'https://www.tiktok.com/@mattlovesmeli',
  },
  {
    title: 'Projects',
    description: 'Longer stuff with actual effort put in. Series, experiments, and creative swings that might actually land.',
    icon: '🎯',
    tag: 'Projects',
    gradient: 'bg-gradient-to-br from-zinc-800/80 to-zinc-950',
    href: '/#projects',
  },
  {
    title: 'Brands',
    description: 'The universe is expanding. Merch, sub-brands, and whatever strange little business idea is next.',
    icon: '🚀',
    tag: 'Brands',
    gradient: 'bg-gradient-to-br from-amber-950/50 to-zinc-900',
    // TODO: Replace with your merch store or brands page link
    href: '#',
  },
]

// ── Projects section data ────────────────────────────────────────────────────
// TODO: Replace href values with links to actual project pages or social posts
const projects = [
  {
    title: 'TikTok Comedy',
    tag: 'Short-Form · Comedy',
    description: 'The origin story. Where the chaos started, where it lives, and where new ideas get stress-tested in front of strangers.',
    accent: 'bg-orange-500',
    icon: '🎭',
    href: 'https://www.tiktok.com/@mattlovesmeli',
  },
  {
    title: 'Behind the Scenes',
    tag: 'Documentary · Process',
    description: 'The unfiltered reality of making content as a regular dad with a camera and too many ideas for his own good.',
    accent: 'bg-zinc-500',
    icon: '🎥',
    // TODO: Replace with your BTS series link
    href: '#',
  },
  {
    title: 'Internet Experiments',
    tag: 'Format · Creative',
    description: 'Formats, concepts, and bits that exist because the internet made them possible. Some land. Some don\'t. All worth trying.',
    accent: 'bg-blue-500',
    icon: '🧪',
    href: '#',
  },
  {
    title: 'Future Brands',
    tag: 'Coming Soon',
    description: 'Ideas that don\'t have names yet. The next weird thing is already in the notes app. Stay tuned.',
    accent: 'bg-violet-500',
    icon: '🔮',
    href: '#',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── Featured ─────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">Content</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                What's cooking.
              </h2>
            </div>
            <a href="https://www.tiktok.com/@mattlovesmeli" className="text-sm text-zinc-400 hover:text-white transition-colors font-medium self-start sm:self-auto">
              View all →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map(card => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview ────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-y border-brand-border relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">Origin Story</p>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Regular dad.
              <br />
              <span className="text-zinc-400">Accidental media brand.</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              the401TanoCollective started as a place for humor, family moments, ridiculous ideas, and internet storytelling.
              What began as short-form chaos is becoming a creative studio for videos, brands, merch, and whatever strange
              little gremlin idea shows up next.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/30 text-white font-semibold text-sm transition-all hover:bg-white/5 hover:gap-3"
            >
              Read the Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">Projects</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The universe so far.
            </h2>
            <p className="text-zinc-400 mt-3 text-lg max-w-xl">
              From one-take TikToks to actual brand experiments. Here's what's been built.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map(proj => (
              <ProjectCard key={proj.title} {...proj} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-brand-border bg-gradient-to-br from-zinc-900 to-brand-card p-10 sm:p-14 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center justify-between">

              {/* Left: heading */}
              <div>
                <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Contact</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
                  Let's build something weird.
                </h2>
                <p className="text-zinc-400 text-base max-w-xs leading-relaxed">
                  Got an idea, collab pitch, or brand deal? Slide in.
                </p>
              </div>

              {/* Right: email + socials */}
              <div className="flex flex-col gap-5 w-full lg:w-auto">

                {/* Email link */}
                <a
                  href="mailto:the401tanocollective@gmail.com"
                  className="group flex items-center gap-4 px-6 py-4 rounded-2xl border border-brand-border bg-white/[0.03] hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-zinc-300 group-hover:text-white transition-colors font-medium text-sm sm:text-base">
                    the401tanocollective@gmail.com
                  </span>
                  <svg className="w-4 h-4 text-zinc-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Social icons */}
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600 text-xs font-medium tracking-widest uppercase">Find me on</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.tiktok.com/@mattlovesmeli"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="w-9 h-9 rounded-xl border border-brand-border bg-white/[0.03] hover:border-orange-500/40 hover:bg-orange-500/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-xl border border-brand-border bg-white/[0.03] hover:border-orange-500/40 hover:bg-orange-500/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label="YouTube"
                      className="w-9 h-9 rounded-xl border border-brand-border bg-white/[0.03] hover:border-orange-500/40 hover:bg-orange-500/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
