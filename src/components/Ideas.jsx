const IDEAS = [
  {
    title: 'Exploring the Role of a Mobile Engineer',
    body: 'Mobile engineers are skilled professionals responsible for designing, building, testing, and maintaining mobile applications. They possess expertise in programming languages such as Kotlin or Swift, and use various tools and frameworks to create user-friendly and efficient mobile experiences.',
  },
  {
    title: 'The Future of Mobile Development',
    body: 'AI and machine learning integration, augmented reality, IoT connectivity, and cross-platform frameworks like Jetpack Compose and Flutter are reshaping what mobile engineers build and how they build it.',
  },
  {
    title: 'Applications and Their Impact',
    body: 'Mobile applications have changed the way we communicate, access information and interact, from navigation and banking to remote healthcare. The versatility of applications continues to expand, enhancing quality of life at scale.',
  },
]

export default function Ideas() {
  return (
    <section id="ideas" className="min-h-screen px-8 lg:px-16 pt-16 pb-20 border-t border-gray-100">
      <div className="max-w-2xl">
        <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-8">Ideas</p>
        <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-14">
          Thoughts on engineering
        </h2>
        <div className="flex flex-col gap-10">
          {IDEAS.map((idea) => (
            <div key={idea.title}>
              <h3 className="text-slate-900 font-semibold text-base mb-2">{idea.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{idea.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
