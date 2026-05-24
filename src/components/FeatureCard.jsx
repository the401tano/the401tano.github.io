// FeatureCard — used in the "Featured" section on the homepage
// Props:
//   title       — card heading
//   description — short body text
//   icon        — emoji or JSX icon element
//   tag         — small badge label (e.g. "Videos", "Shorts")
//   href        — link destination (defaults to "#")
//   gradient    — Tailwind gradient string for the placeholder image area

export default function FeatureCard({ title, description, icon, tag, href = '#', gradient }) {
  return (
    <a
      href={href}
      className="group flex flex-col rounded-2xl border border-brand-border bg-brand-card overflow-hidden transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 card-hover-border"
    >
      {/* Placeholder image area */}
      {/* TODO: Replace this div with an <img> tag or video embed */}
      <div className={`relative h-44 w-full ${gradient || 'bg-gradient-to-br from-zinc-800 to-zinc-900'} flex items-center justify-center overflow-hidden`}>
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        {/* Subtle shine on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Tag badge */}
        <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wide border border-orange-500/20">
          {tag}
        </span>

        <h3 className="text-lg font-bold text-white group-hover:text-orange-50 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-zinc-400 leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex items-center gap-1 text-orange-500 text-sm font-semibold mt-1 group-hover:gap-2 transition-all">
          View all
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  )
}
