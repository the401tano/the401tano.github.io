// ProjectCard — used in the Projects section
// Props:
//   title       — project name
//   tag         — category label
//   description — short description
//   accent      — Tailwind color class for the accent bar (e.g. "bg-orange-500")
//   href        — link destination (defaults to "#")
//   icon        — emoji or icon

export default function ProjectCard({ title, tag, description, accent = 'bg-orange-500', href = '#', icon }) {
  return (
    <a
      href={href}
      className="group relative flex flex-col rounded-2xl border border-brand-border bg-brand-card p-6 overflow-hidden transition-all duration-300 hover:border-white/15 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 card-hover-border"
    >
      {/* Accent bar at top */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Icon circle */}
      <div className="mb-4 w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Tag */}
      <span className="inline-block w-fit mb-2 px-2 py-0.5 rounded-full text-xs font-semibold tracking-wide text-zinc-500 border border-zinc-700 bg-zinc-800/60">
        {tag}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-50 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-zinc-400 leading-relaxed flex-1">
        {description}
      </p>

      {/* Arrow */}
      <div className="mt-5 flex items-center gap-1 text-zinc-500 group-hover:text-orange-400 text-sm font-medium transition-all group-hover:gap-2">
        Learn more
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}
