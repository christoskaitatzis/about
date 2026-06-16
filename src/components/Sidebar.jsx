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
        <div>
          <div className="text-slate-900 font-semibold text-sm leading-tight">Christos<br />Kaitatzis</div>
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

      {/* Game launcher — change href if your file is named differently */}
      <a 
        href="/portfolio_park.html"
        className="mt-auto group flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-colors"
        aria-label="Play the game"
        title="Play"
      >
        <svg
          viewBox="0 0 80 36"
          className="w-14 h-auto drop-shadow-sm transition-transform duration-200 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="a3body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbfcfd" />
              <stop offset="40%" stopColor="#d3d8dd" />
              <stop offset="100%" stopColor="#9099a1" />
            </linearGradient>
            <linearGradient id="a3glass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e6eef5" />
              <stop offset="100%" stopColor="#7e95a8" />
            </linearGradient>
            <radialGradient id="a3rim" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f4f6f8" />
              <stop offset="100%" stopColor="#aeb6bd" />
            </radialGradient>
          </defs>

          {/* Body */}
          <path
            d="M8,27 L8,22 C8,21 9,20 11,19 L20,16 C22,12 26,10 32,10 L50,10
               C56,10 60,13 64,17 L70,21 C72,22 72,24 72,27 L64,27
               A6,6 0 0 0 52,27 L28,27 A6,6 0 0 0 16,27 L8,27 Z"
            fill="url(#a3body)"
            stroke="#7b848c"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
          {/* Glass */}
          <path
            d="M24,16 L31,11.5 L49,11.5 C53.5,11.5 57,13.3 59.5,16 Z"
            fill="url(#a3glass)"
          />
          {/* Pillar */}
          <line x1="40" y1="11.5" x2="40" y2="16" stroke="#aab2b9" strokeWidth="0.8" />
          {/* Sheen highlight */}
          <path d="M11,19 L20,16.4 L31,16.4 L24,16.4" fill="none" stroke="#ffffff" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
          {/* Headlight */}
          <path d="M8,20 L11.5,19 L11.5,21 L8,21.5 Z" fill="#fff7d6" stroke="#c9ad55" strokeWidth="0.4" />

          {/* Wheels */}
          {[22, 58].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="27" r="6" fill="#2a2e33" />
              <circle cx={cx} cy="27" r="3.2" fill="url(#a3rim)" stroke="#838b92" strokeWidth="0.4" />
              <circle cx={cx} cy="27" r="0.9" fill="#6b7378" />
            </g>
          ))}
        </svg>
        <span className="text-[11px] font-medium tracking-wide">Play</span>
      </a>
    </aside>
  )
}
