// components/TechSources.jsx
import { useState } from 'react'

const READING_SOURCES = [
  { title: 'Android Developers', host: 'developer.android.com', url: 'https://developer.android.com' },
  { title: 'Medium', host: 'medium.com', url: 'https://medium.com' },
]

const LEARNING_SOURCES = [
  { title: 'Udemy', host: 'udemy.com', url: 'https://www.udemy.com' },
  { title: 'Coursera', host: 'coursera.org', url: 'https://www.coursera.org' },
]

function SourceCard({ source }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 p-3.5 px-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-slate-900">{source.title}</div>
        <div className="text-[11px] text-slate-400 mt-0.5">{source.host}</div>
      </div>
      <span className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-200 text-sm">
        →
      </span>
    </a>
  )
}

export default function SourcesAndHWInfo() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="tech-sources" className="flex-1 px-8 lg:px-16 pt-16 pb-20">
      <div className="max-w-2xl">
        <p className="text-[0.65rem] font-semibold text-slate-400 tracking-[0.22em] uppercase mb-8">
          Tech Sources
        </p>
        <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-14">
          Sources I follow
        </h2>

        {/* Read regularly */}
        <div className="mb-10">
          <p className="text-[10px] font-semibold text-emerald-600 tracking-[0.18em] uppercase mb-4">
            Read regularly
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {READING_SOURCES.map((s) => (
              <SourceCard key={s.url} source={s} />
            ))}
          </div>
        </div>

        {/* Learning */}
        <div className="mb-10">
          <p className="text-[10px] font-semibold text-emerald-600 tracking-[0.18em] uppercase mb-4">
            Learning
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LEARNING_SOURCES.map((s) => (
              <SourceCard key={s.url} source={s} />
            ))}
          </div>
        </div>

        {/* Expandable Phone Explorer card */}
        <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-slate-300 transition-colors">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center gap-3.5 p-5 cursor-pointer select-none text-left"
            style={{ background: 'linear-gradient(135deg, rgba(29,185,84,0.04), rgba(29,185,84,0.01))' }}
            aria-expanded={expanded}
          >
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-900">Phone Explorer</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Interactive hardware comparison tool</div>
            </div>
            <span className="text-[9px] font-semibold text-emerald-600 tracking-[0.12em] uppercase px-2 py-1 rounded-full bg-emerald-100">
              Interactive
            </span>
            <span
              className={`text-slate-400 text-base transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            >
              ⌄
            </span>
          </button>

          <div
            className="overflow-hidden transition-[max-height] duration-300 ease-out"
            style={{ maxHeight: expanded ? '700px' : '0px' }}
          >
            <div className="border-t border-slate-200 bg-slate-50 p-4">
              <iframe
                src="/phone-explorer.html"
                title="Phone Explorer"
                className="w-full rounded-lg border border-slate-200 bg-white"
                style={{ height: 600 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
