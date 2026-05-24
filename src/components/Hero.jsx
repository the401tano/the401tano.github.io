import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-dark" />

      {/* Radial orange glow from top */}
      <div className="absolute inset-0 hero-glow" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative blurs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">

        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-widest uppercase animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
          Creator Production Collective
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6 animate-fade-up">
          Stories, chaos,
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            comedy,
          </span>{' '}
          and creative
          <br />
          experiments.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up-delay">
          A creator-led production collective built from family chaos, internet culture, and the belief that weird ideas deserve a camera.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up-delay-2">
          <a
            href="https://www.tiktok.com/@mattlovesmeli"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch the Latest
          </a>

          <Link
            to="/#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 hover:border-white/30 text-white font-semibold text-base transition-all hover:scale-105 active:scale-95 hover:bg-white/5"
          >
            Explore Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 opacity-0 animate-fade-up-delay-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </div>
    </section>
  )
}
