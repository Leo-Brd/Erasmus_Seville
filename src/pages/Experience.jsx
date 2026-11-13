import { useMemo, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { answers, groups, photoLinks } from '../data/questions.js'
import Icon from '../components/Icon.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FramedPhoto from '../components/FramedPhoto.jsx'
import { photosIn } from '../components/Photo.jsx'

// Inclinaisons alternées, pour un accrochage naturel.
const TILTS = [3, -2.5, 2, -3.5, 1.5]

const linksLower = Object.fromEntries(Object.entries(photoLinks).map(([k, v]) => [k.toLowerCase(), v]))

function photosByQuestion() {
  const map = {}
  for (const { name, url } of photosIn('experience')) {
    const id = linksLower[name] ?? name.match(/^(q\d+)(?![0-9])/i)?.[1]?.toLowerCase()
    if (id) (map[id] ??= []).push(url)
  }
  return map
}

export default function Experience() {
  const { t, l } = useI18n()
  const e = t.experience
  const [open, setOpen] = useState(() => new Set())

  const allIds = useMemo(() => groups.flatMap((g) => g.questions.map((q) => q.id)), [])
  const photos = useMemo(photosByQuestion, [])
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
              const pics = photos[q.id] ?? []
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
                    <div id={`reponse-${q.id}`} className={`qa__a ${answer ? '' : 'is-empty'} ${pics.length ? 'has-photos' : ''}`}>
                      <div className="qa__text">{answer ? <p>{l(answer)}</p> : <p>{e.soon}</p>}</div>
                      {pics.length > 0 && (
                        <div className="qa__photos">
                          {pics.map((url, i) => (
                            <FramedPhoto key={url} url={url} alt={l(q.text)} tilt={TILTS[(i + Number(q.id.slice(1))) % TILTS.length]} />
                          ))}
                        </div>
                      )}
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
