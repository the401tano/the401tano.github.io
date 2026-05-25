import { Link } from 'react-router-dom'

// ── Pillars ──────────────────────────────────────────────────────────────────
const pillars = [
  {
    icon: '😂',
    label: 'Humor',
    description: 'Comedy-first. If it isn\'t at least a little funny, we\'re not doing it.',
  },
  {
    icon: '🏠',
    label: 'Family Chaos',
    description: 'Real family life. Real moments. Unscripted, unpredictable, and somehow content.',
  },
  {
    icon: '🎨',
    label: 'Creativity',
    description: 'Ideas that start with "this might be dumb" — those are usually the best ones.',
  },
  {
    icon: '🌐',
    label: 'Internet Culture',
    description: 'Built for the feed. Shaped by the algorithm. Native to the scroll.',
  },
  {
    icon: '📖',
    label: 'Storytelling',
    description: 'Every piece of content is a story. Even the ones that are just a dad being embarrassing.',
  },
  {
    icon: '🔨',
    label: 'Building Weird Things',
    description: 'Brands, merch, formats, experiments. Building in public, learning out loud.',
  },
]

export default function About() {
  return (
    <>
      {/* ── About Hero ───────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-5 sm:px-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute inset-0 hero-glow" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-5 animate-fade-up">
            About
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6 animate-fade-up">
            Regular dad accidentally
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              building a digital
            </span>
            <br />
            media brand.
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed opacity-0 animate-fade-up-delay">
            A creative home base for comedy, short-form video, family chaos, and strange ideas
            that somehow find an audience. Built in real time. Figured out in public.
          </p>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      </div>

      {/* ── Pillars ──────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">
            What it's built on
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">
            The stuff that matters.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map(pillar => (
              <div
                key={pillar.label}
                className="group p-6 rounded-2xl border border-brand-border bg-brand-card hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.label}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Copy ────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-y border-brand-border bg-brand-card/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left: heading + label */}
            <div className="lg:w-1/3 lg:sticky lg:top-24">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">
                The Story
              </p>
              <h2 className="text-3xl font-extrabold text-white leading-tight">
                It started
                <br />
                with chaos.
                <br />
                <span className="text-zinc-500">It still is.</span>
              </h2>
            </div>

            {/* Right: long-form copy */}
            <div className="lg:w-2/3 space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                This started with one guy, a phone, and a completely unreasonable number of ideas.
                No plan. No team. Just a dad who wanted to make things people actually wanted to watch.
              </p>
              <p>
                The content is built around real family moments, honest storytelling, and the kind of
                comedy that starts with <span className="text-white font-medium italic">"this might be dumb"</span>{' '}
                and ends with people tagging their friends.
              </p>
              <p>
                It's short-form first. TikTok native. Personality-driven. The kind of stuff that feels
                human because it actually is — no script, no crew, no filter on the chaos.
              </p>
              <p className="text-zinc-400">
                What it becomes next is still being figured out. That's the whole point.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-orange-500 pl-5 py-1 my-8">
                <p className="text-2xl font-bold text-white leading-snug">
                  "Weird ideas deserve a camera."
                </p>
              </blockquote>

              <p>
                It's not a media company. It's not a studio. It's one person building something real,
                in public, one video at a time — and sharing the whole messy process along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Placeholder media area ───────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">
            Watch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">
            See it in action.
          </h2>

          {/* TODO: Replace this placeholder with an embedded TikTok or YouTube video */}
          <div className="aspect-video max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-brand-border flex flex-col items-center justify-center gap-3 text-zinc-600">
            <svg className="w-12 h-12 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <p className="text-sm opacity-60">
              {/* TODO: Replace with your video embed (TikTok, YouTube, etc.) */}
              Video embed goes here
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="pb-24 sm:pb-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Want to follow along?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">
            The best way to keep up is on TikTok. Everything starts there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.tiktok.com/@mattlovesmeli"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
            >
              Follow on TikTok
            </a>
            <Link
              to="/#making"
              className="px-7 py-3.5 rounded-full border border-white/15 hover:border-white/30 text-white font-semibold transition-all hover:bg-white/5"
            >
              See What's Making
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
