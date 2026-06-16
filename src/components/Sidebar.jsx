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
      <a
        href="/portfolio_park.html"
        className="group flex flex-col items-start gap-1.5 text-slate-400 hover:text-slate-700 transition-colors"
        aria-label="Play the game"
        title="Play"
      >
       <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
 
  <path d="M185 115C185 105 180 90 170 85C160 80 145 75 130 75C115 75 90 75 75 78C60 81 45 88 35 95C25 102 20 110 20 120V135C20 138 22 140 25 140H180C183 140 185 138 185 135V115Z" stroke="black" stroke-width="2" fill="#E0E0E0"/>
  
  {/* <!-- Windows --> */}
  <path d="M65 82C65 82 85 78 125 78C135 78 155 80 165 85L168 110H65V82Z" stroke="black" stroke-width="1.5" fill="white"/>
  <line x1="125" y1="78" x2="125" y2="110" stroke="black" stroke-width="1.5"/>
  
  {/* <!-- Front Grille (Minimal) --> */}
  <rect x="25" y="110" width="30" height="25" rx="4" stroke="black" stroke-width="1.5" fill="#D0D0D0"/>
  
  {/* <!-- Headlight --> */}
  <path d="M25 105C30 102 45 102 55 105L52 112H28L25 105Z" stroke="black" stroke-width="1" fill="white"/>
  
  {/* <!-- Wheels --> */}
  <circle cx="55" cy="140" r="15" fill="white" stroke="black" stroke-width="2"/>
  <circle cx="55" cy="140" r="10" stroke="black" stroke-width="1" stroke-dasharray="2 2"/>
  <circle cx="155" cy="140" r="15" fill="white" stroke="black" stroke-width="2"/>
  <circle cx="155" cy="140" r="10" stroke="black" stroke-width="1" stroke-dasharray="2 2"/>
  
  {/* <!-- Side Line Detail --> */}
  <path d="M60 125H175" stroke="black" stroke-width="1" opacity="0.5"/>
</svg>

        <span className="text-[11px] font-medium tracking-wide">
          Play
        </span>
      </a>
    </aside>
  )
}
