const PROFESSIONAL = [
  { name: 'Company Campus', desc: 'NY — Facilities access management for employees and guests.' },
  { name: 'Traeger', desc: 'Companion application for smart grills produced by Traeger.' },
  { name: 'Vodafone Greece/UK', desc: 'Developed new features and maintained My Vodafone and My CU applications with more than 2 million downloads combined, also involvement in web application development.' },
  { name: 'EUDI Wallet', desc: 'Involvement in the European Digital Identity Wallet ecosystem.' },
  { name: 'Allwyn Play', desc: 'Play store companion app.' },
  { name: 'My Planner', desc: 'An internal desk-booking tool.' },
]

const APPS = [
  { name: 'Momentum', desc: "A mini companion app outlining an engineer's daily workflow and tasks.", url: 'https://play.google.com/store/apps/details?id=io.crossroads.momentum.lite' },
  { name: 'LifeEQ', desc: 'A simple and smart tracker of your everyday life.', url: 'https://play.google.com/store/apps/details?id=io.crossroads.life.eq' },
  { name: 'Parkspace', desc: 'Parking spots sharing.', url: null },
  { name: 'Chronicles of the Seventh Age: Part I', desc: 'A Saga of the Distant Future — Short novel e-book.', url: 'https://play.google.com/store/apps/details?id=io.chronicles.saga.part.one' },
  { name: 'Chronicles of the Seventh Age: Part II', desc: 'Beyond Known Universe — Short novel e-book.', url: 'https://play.google.com/store/apps/details?id=io.chronicles.saga.part.two' },
]

const WEB_APPS = [
  { name: 'CommentBase.io', desc: 'Documentation platform for teams to create projects and sharable pages with AI insights of their code snippets.', url: 'https://commentbase.io' },
  { name: 'Stories of New York', desc: 'Architectural landmarks of the city of New York.', url: 'https://storiesofnewyork.city' },
  { name: 'Fortune Light House', desc: 'Guidance for smart investment selections.', url: 'https://fortunelighthouse.com' },
  { name: 'Concorde', desc: 'Tribute to the Supersonic Legend of the skies.', url: 'https://legendoftheskies.pro' },
  { name: 'Artemis II', desc: 'Spaceflight mission tribute page.', url: 'https://artemismission.space' },
]

function ProjectItem({ name, desc, url }) {
  const inner = (
    <>
      <div className="text-slate-800 font-semibold text-sm">{name}</div>
      <div className="text-slate-500 text-sm mt-0.5 leading-relaxed">{desc}</div>
    </>
  )
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-75 transition-opacity">
        {inner}
      </a>
    )
  }
  return <div>{inner}</div>
}

function ProjectGroup({ title, items }) {
  return (
    <div className="mb-14">
      <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-6">{title}</p>
      <div className="flex flex-col gap-5">
        {items.map((item) => <ProjectItem key={item.name} {...item} />)}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 lg:px-16 pt-16 pb-20 border-t border-gray-100">
      <div className="max-w-2xl">
        <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-8">Projects</p>
        <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-14">
          Things I've built
        </h2>
        <ProjectGroup title="Professional Contributions" items={PROFESSIONAL} />
        <ProjectGroup title="Android Applications" items={APPS} />
        <ProjectGroup title="Web Applications" items={WEB_APPS} />
      </div>
    </section>
  )
}
