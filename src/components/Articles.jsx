const ARTICLES = [
  { title: 'Real-World Engineering, Digital Lessons: Applying Physical Principles to Software', url: 'https://medium.com/@xrkaitatzis/real-world-engineering-digital-lessons-applying-physical-principles-to-software-e8d4048604f6', tag: 'Engineering' },
  { title: 'Introducing CommentBase.io', url: 'https://medium.com/@xrkaitatzis/introducing-commentbase-io-46a03b7377b6', tag: 'Product' },
  { title: 'Koin vs Hilt, pros and cons', url: 'https://medium.com/@xrkaitatzis/koin-vs-hilt-pros-and-cons-6db677f32b21', tag: 'Android' },
  { title: 'Applying micro-interactions for responsive user interfaces with Kotlin and Jetpack Compose', url: 'https://medium.com/@xrkaitatzis/applying-micro-interactions-for-responsive-user-interfaces-with-kotlin-and-jetpack-compose-3455d0cac51f', tag: 'Compose' },
  { title: 'A guide for animating icons with Compose', url: 'https://medium.com/@xrkaitatzis/compose-animations-a-step-by-step-guide-to-dynamic-interfaces-55eda8a26354', tag: 'Compose' },
]

export default function Articles() {
  return (
    <section id="articles" className="min-h-screen px-8 lg:px-16 pt-16 pb-20 border-t border-gray-100">
      <div className="max-w-4xl">
        <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-8">Articles</p>
        <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-14">
          Writing on Android<br />development
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ARTICLES.map((article) => (
            
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-6 p-5 min-h-[168px] bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-600 mb-2">
                  {article.tag}
                </p>
                <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                  {article.title}
                </h3>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-900 transition-colors">
                <span>Medium</span>
                <span className="text-base transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
