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
          Christos
          <br />
          Kaitatzis
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

      {/* Spacer */}
      <div className="flex-1" />

      {/* Portfolio Park — card style matching main section */}
      <a
        href="/portfolio_park.html"
        className="group block rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-gray-300 hover:shadow-sm no-underline"
        aria-label="Play Portfolio Park"
      >
        {/* Mini preview strip */}
        <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
          <iframe
            src="/park-entry.html"
            title="Portfolio Park preview"
            loading="lazy"
            tabIndex={-1}
            className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-100"
          />
        </div>

        {/* Card text — matching the title + url pattern from main cards */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="text-slate-800 text-sm font-medium leading-snug">
              Portfolio Park
            </div>
            <div className="text-slate-400 text-xs mt-0.5 truncate">
              3D interactive portfolio
            </div>
          </div>
          <span className="text-slate-300 group-hover:text-slate-500 transition-colors mt-0.5 shrink-0">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3.5L10.5 8L6 12.5" />
            </svg>
          </span>
        </div>
      </a>
    </aside>
  )
}
