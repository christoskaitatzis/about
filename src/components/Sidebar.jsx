const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'articles', label: 'Articles' },
  { id: 'ideas', label: 'Ideas' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar({ active }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 border-r border-gray-100 bg-white flex-col px-8 py-10 z-10">

      {/* Profile */}
      <div className="flex items-center gap-3 mb-12">
        <div className="text-slate-900 font-semibold text-sm leading-tight">
          Christos<br />Kaitatzis
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-5">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-left text-sm transition-colors duration-150 ${
              active === id
                ? 'text-slate-800 font-medium'
                : 'text-slate-400 hover:text-slate-600 font-normal'
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Spacer pushes bottom content down */}
      <div className="flex-1" />

      {/* Game launcher */}
      <div
        role="link"
        tabIndex={0}
        onClick={() => (window.location.href = '/portfolio_park.html')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') window.location.href = '/portfolio_park.html'
        }}
        className="group cursor-pointer transition-colors"
        aria-label="Play the game"
        title="Play"
      >
        <iframe
          src="/park-entry.html"
          title="Portfolio Park"
          loading="lazy"
          style={{
            width: '100%',
            maxWidth: '460px',
            aspectRatio: '16 / 8.2',
            border: 0,
            borderRadius: '22px',
            display: 'block',
            overflow: 'hidden',
            pointerEvents: 'none',
            boxShadow: '0 18px 44px -18px rgba(196,68,23,.65)',
          }}
        />
      </div>
    </aside>
  )
}
