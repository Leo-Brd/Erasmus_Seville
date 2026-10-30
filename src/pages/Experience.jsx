import { useMemo, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { answers, groups } from '../data/questions.js'
import Icon from '../components/Icon.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function Experience() {
  const { t, l } = useI18n()
  const e = t.experience
  const [open, setOpen] = useState(() => new Set())

  const allIds = useMemo(() => groups.flatMap((g) => g.questions.map((q) => q.id)), [])
  const answeredCount = allIds.filter((id) => answers[id]).length

  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <div className="container page">
      <PageHeader title={e.title} intro={e.intro} />

      <div className="toolbar">
        <span className="pill">{e.answered(answeredCount, allIds.length)}</span>
        <div className="toolbar__actions">
          <button type="button" className="btn btn--small" onClick={() => setOpen(new Set(allIds))}>
            {e.expandAll}
          </button>
          <button type="button" className="btn btn--small btn--ghost" onClick={() => setOpen(new Set())}>
            {e.collapseAll}
          </button>
        </div>
      </div>

      <nav className="chips" aria-label={e.title}>
        {groups.map((g) => (
          <button
            key={g.id}
            type="button"
            className="chip"
            onClick={() => document.getElementById(`groupe-${g.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            <Icon name={g.icon} size={16} />
            {l(g.title)}
          </button>
        ))}
      </nav>

      {groups.map((group) => (
        <section key={group.id} id={`groupe-${group.id}`} className="qa-group">
          <h2 className="qa-group__title">
            <span className="qa-group__icon">
              <Icon name={group.icon} size={22} />
            </span>
            {l(group.title)}
            <small>{e.questions(group.questions.length)}</small>
          </h2>

          <div className="qa-list">
            {group.questions.map((q) => {
              const isOpen = open.has(q.id)
              const answer = answers[q.id]
              return (
                <div key={q.id} className={`qa ${isOpen ? 'is-open' : ''}`}>
                  <h3 className="qa__q">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`reponse-${q.id}`}
                      onClick={() => toggle(q.id)}
                    >
                      <span>{l(q.text)}</span>
                      <Icon name="chevron" className="qa__chevron" />
                    </button>
                  </h3>
                  {isOpen && (
                    <div id={`reponse-${q.id}`} className={`qa__a ${answer ? '' : 'is-empty'}`}>
                      {answer ? <p>{l(answer)}</p> : <p>{e.soon}</p>}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
