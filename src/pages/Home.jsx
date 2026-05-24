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
              The401TanoCollective started as a place for humor, family moments, ridiculous ideas, and internet storytelling.
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

      {/* ── Newsletter / Contact CTA ──────────────────────────────────────── */}
      <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-brand-border bg-gradient-to-br from-zinc-900 to-brand-card p-10 sm:p-16 text-center relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">Stay in the loop</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Follow along before it gets weird.
              <br />
              <span className="text-zinc-500">(It's already weird.)</span>
            </h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              New videos, new projects, new brands. All dropping on TikTok first.
            </p>

            <a
              href="https://www.tiktok.com/@mattlovesmeli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25"
            >
              Follow on TikTok
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
