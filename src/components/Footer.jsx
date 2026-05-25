import { Link } from 'react-router-dom'

const navColumns = [
  {
    heading: 'Navigate',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Now Making', to: '/#making' },
      { label: 'Contact', to: '/#contact' },
    ],
  },
  {
    heading: 'Create',
    links: [
      { label: 'TikTok', href: 'https://www.tiktok.com/@mattlovesmeli' },
      { label: 'YouTube', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Merch', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand block */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <span className="text-white font-extrabold text-xl tracking-tight">
                the<span className="text-orange-500">401</span>Tano
                <span className="text-zinc-500 font-semibold">Collective</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Stories. Chaos. Comedy. Experiments.
            </p>
            <p className="text-zinc-600 text-xs mt-6">
              A creator-led production studio built for the internet.
            </p>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {navColumns.map(col => (
              <div key={col.heading}>
                <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map(link => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link
                          to={link.to}
                          className="text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-zinc-400 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-600 text-xs">
          <p>© {new Date().getFullYear()} the401TanoCollective. All rights reserved.</p>
          <p className="text-zinc-700">Built for chaos. Staying for the content.</p>
        </div>
      </div>
    </footer>
  )
}
