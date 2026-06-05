const EXPERTISE = [
  'Kotlin',
  'Jetpack Compose',
  'Coroutines',
  'Flow',
  'Dagger/Hilt',
  'MVVM',
  'Clean Architecture',
  'Room',
  'Retrofit',
  'Gradle',
  'CI/CD',
  'Git',
]

export default function About() {
  return (
    <section id="about" className="min-h-screen px-8 lg:px-16 pt-16 pb-20">
      <div className="max-w-2xl">
        <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-8">
          About
        </p>

        <h1 className="text-4xl lg:text-[3.00rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
          Senior Android/Front End<br />Software Engineer
        </h1>

        <p className="text-slate-600 text-base leading-relaxed mb-5">
          Architecting memory-efficient, reactive Android systems with a focus on
          scalability and modern design principles. I collaborate with cross-functional
          teams to ship innovative digital products — combining technical depth with
          clean, maintainable code.
        </p>

        <p className="text-slate-600 text-base leading-relaxed mb-14">
          Based in Greece. Currently contributing to delivering top-tier mobile solutions at
          scale.
        </p>

        <div>
          <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-5">
            Expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {EXPERTISE.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-slate-200 text-[0.6rem] font-semibold text-slate-500 tracking-[0.12em] uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
