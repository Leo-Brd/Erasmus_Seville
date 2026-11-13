import { useMemo, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { answers, groups, photoLinks } from '../data/questions.js'
import Icon from '../components/Icon.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FramedPhoto from '../components/FramedPhoto.jsx'
import { photosIn } from '../components/Photo.jsx'

// Inclinaisons alternées, pour un accrochage naturel.
const TILTS = [2.5, -2, 1.5, -3, 3, -1.5]

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
  // Galerie : toutes les photos, dans l'ordre des questions auxquelles elles sont reliées.
  const gallery = useMemo(
    () => groups.flatMap((g) => g.questions).flatMap((q) => (photos[q.id] ?? []).map((url) => ({ url, question: q }))),
    [photos],
  )
  // Sur grand écran, les photos se répartissent dans les marges (une sur deux à gauche / à droite, dans l'ordre) ;
  // sur écran plus étroit, elles sont affichées en bas.
  const leftSide = gallery.filter((_, i) => i % 2 === 0)
  const rightSide = gallery.filter((_, i) => i % 2 === 1)
  const renderPhotos = (items, offset, step) =>
    items.map(({ url, question }, i) => (
      <FramedPhoto
        key={url}
        url={url}
        alt={l(question.text)}
        tilt={TILTS[(offset + i * step) % TILTS.length]}
        label={`${e.seeQuestion} : ${l(question.text)}`}
        onClick={() => showQuestion(question.id)}
      />
    ))
  const answeredCount = allIds.filter((id) => answers[id]).length

  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const showQuestion = (id) => {
    setOpen((prev) => new Set(prev).add(id))
    setTimeout(() => document.getElementById(`qa-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60)
  }

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

      <div className={`exp-layout ${gallery.length ? 'has-gallery' : ''}`}>
        {gallery.length > 0 && (
          <aside className="exp-gallery exp-gallery--side exp-gallery--left" aria-label={e.gallery}>
            {renderPhotos(leftSide, 0, 2)}
          </aside>
        )}
        <div className="exp-main">
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
                    <div key={q.id} id={`qa-${q.id}`} className={`qa ${isOpen ? 'is-open' : ''}`}>
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
                          <p>{answer ? l(answer) : e.soon}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {gallery.length > 0 && (
          <>
            <aside className="exp-gallery exp-gallery--side exp-gallery--right" aria-label={e.gallery}>
              {renderPhotos(rightSide, 1, 2)}
            </aside>
            <aside className="exp-gallery exp-gallery--bottom" aria-label={e.gallery}>
              {renderPhotos(gallery, 0, 1)}
            </aside>
          </>
        )}
      </div>
    </div>
  )
}
