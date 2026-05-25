import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Now Making', to: '/#making' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const handleHashNav = (e, hash) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = `/#${hash}`
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <span className="text-white font-extrabold text-base tracking-tight leading-none">
              the
              <span className="text-orange-500 group-hover:text-orange-400 transition-colors">401</span>
              Tano
              <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors font-semibold">Collective</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(link => {
              const isActive = link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to.replace('/#', ''))
              const baseClass = `text-sm font-medium transition-colors hover:text-white ${isActive && !link.to.includes('#') ? 'text-white' : 'text-zinc-400'}`
              return link.to.startsWith('/#') ? (
                <a key={link.label} href={link.to} className={baseClass} onClick={(e) => handleHashNav(e, link.to.replace('/#', ''))}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.to} className={baseClass}>
                  {link.label}
                </Link>
              )
            })}

            <a
              href="https://www.tiktok.com/@mattlovesmeli"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-400 text-black text-sm font-bold transition-all hover:scale-105 active:scale-95"
            >
              Watch Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 border-t border-white/5' : 'max-h-0'
        } bg-black/95 backdrop-blur-xl`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map(link =>
            link.to.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.to}
                className="py-2.5 text-zinc-300 hover:text-white font-medium transition-colors border-b border-white/5 last:border-0"
                onClick={(e) => handleHashNav(e, link.to.replace('/#', ''))}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="py-2.5 text-zinc-300 hover:text-white font-medium transition-colors border-b border-white/5 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://www.tiktok.com/@mattlovesmeli"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-4 py-2.5 rounded-full bg-orange-500 text-black text-sm font-bold text-center"
          >
            Watch Now
          </a>
        </div>
      </div>
    </nav>
  )
}
