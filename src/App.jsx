import { useState, useEffect } from 'react'
import Sidebar, { PortfolioParkCard } from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Ideas from './components/Ideas'
import Contact from './components/Contact'
import SpotifySection from './components/SpotifySection'
import FacetSeparator from './components/FacetSeparator'
import SourcesAndHWInfo from './components/SourcesAndHWInfo'


const SECTIONS = ['about', 'projects', 'articles', 'ideas', 'contact']

export default function App() {
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const reversed = [...SECTIONS].reverse()
      for (const id of reversed) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= 140) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="flex bg-white font-sans">
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <span className="text-slate-900 font-semibold text-sm">Christos Kaitatzis</span>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </header>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-10 bg-white pt-16 px-8 pb-8 flex flex-col">
          <nav className="flex flex-col gap-6 mt-6">
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => {
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                  setMenuOpen(false)
                }}
                className="text-left text-base capitalize text-slate-500 hover:text-slate-900 transition-colors"
              >
                {id}
              </button>
            ))}
          </nav>
      
          <div className="flex-1" />
      
          <PortfolioParkCard />
        </div>
      )}

      <Sidebar active={active} />

      <main className="lg:ml-64 flex-1 min-h-screen pt-14 lg:pt-0">
        <About />
        {/* <FacetSeparator /> */}
        <Projects />
        <FacetSeparator />
        <Articles />
        <FacetSeparator />
        <Ideas />
        <FacetSeparator />
        <SourcesAndHWInfo />
        <FacetSeparator />
        <Contact />
        <SpotifySection />
      </main>
    </div>
  )
}
