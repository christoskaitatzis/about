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
        <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0" />
        <div>
          <div className="text-slate-900 font-semibold text-sm leading-tight">Christos</div>
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
    </aside>
  )
}
