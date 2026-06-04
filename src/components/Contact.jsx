export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-8 lg:px-16 pt-16 pb-20 border-t border-gray-100">
      <div className="max-w-2xl">
        <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-8">Contact</p>
        <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-14">
          Get in touch
        </h2>

        <div className="flex flex-col gap-8 mb-14">
          <div>
            <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-2">Location</p>
            <p className="text-slate-700 text-sm">Thessaloniki, Greece</p>
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-2">Email</p>
            <a href="mailto:xrkaitatzis@gmail.com" className="text-slate-700 text-sm hover:text-slate-900 transition-colors">
              xrkaitatzis@gmail.com
            </a>
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-3">Social</p>
            <a
              href="https://gr.linkedin.com/in/christos-kaitatzis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 text-sm hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
