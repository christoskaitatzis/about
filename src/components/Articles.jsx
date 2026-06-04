const ARTICLES = [
  { title: 'Real-World Engineering, Digital Lessons: Applying Physical Principles to Software', url: 'https://medium.com/@xrkaitatzis/real-world-engineering-digital-lessons-applying-physical-principles-to-software-e8d4048604f6' },
  { title: 'Introducing CommentBase.io', url: 'https://medium.com/@xrkaitatzis/introducing-commentbase-io-46a03b7377b6' },
  { title: 'Koin vs Hilt, pros and cons', url: 'https://medium.com/@xrkaitatzis/koin-vs-hilt-pros-and-cons-6db677f32b21' },
  { title: 'Applying micro-interactions for responsive user interfaces with Kotlin and Jetpack Compose', url: 'https://medium.com/@xrkaitatzis/applying-micro-interactions-for-responsive-user-interfaces-with-kotlin-and-jetpack-compose-3455d0cac51f' },
  { title: 'A guide for animating icons with Compose', url: 'https://medium.com/@xrkaitatzis/compose-animations-a-step-by-step-guide-to-dynamic-interfaces-55eda8a26354' },
]

export default function Articles() {
  return (
    <section id="articles" className="min-h-screen px-8 lg:px-16 pt-16 pb-20 border-t border-gray-100">
      <div className="max-w-2xl">
        <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-8">Articles</p>
        <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-14">
          Writing on Android<br />development
        </h2>
        <div className="flex flex-col gap-7">
          {ARTICLES.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <span className="mt-0.5 text-slate-300 group-hover:text-slate-500 transition-colors flex-shrink-0">→</span>
              <span className="text-slate-700 text-sm leading-relaxed group-hover:text-slate-900 transition-colors font-medium">
                {article.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
