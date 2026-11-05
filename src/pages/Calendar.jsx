import { useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { events } from '../data/events.js'
import Icon from '../components/Icon.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Photo from '../components/Photo.jsx'
import PhotoCredit from '../components/PhotoCredit.jsx'

const FILTERS = [
  { id: 'all', key: 'filterAll' },
  { id: 'autumn', key: 'filterAutumn' },
  { id: 'spring', key: 'filterSpring' },
]

export default function Calendar() {
  const { t, l } = useI18n()
  const c = t.calendar
  const [filter, setFilter] = useState('all')

  const list = events
    .filter((e) => filter === 'all' || e.semester === filter)
    .sort((a, b) => a.order - b.order)

  return (
    <div className="container page">
      <PageHeader title={c.title} intro={c.intro} />

      <div className="segmented" role="group" aria-label={c.title}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`segmented__btn ${filter === f.id ? 'is-active' : ''}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {c[f.key]}
          </button>
        ))}
      </div>

      <p className="callout">
        <Icon name="calendar" size={18} />
        {c.note}
      </p>

      {list.length === 0 ? (
        <p className="soon">{c.empty}</p>
      ) : (
        <ol className="timeline">
          {list.map((e, i) => (
            <li key={e.id} className={`event event--${i % 2 === 0 ? 'left' : 'right'}`}>
              <span className="event__dot" aria-hidden="true">
                <Icon name={e.icon} size={22} />
              </span>
              <article className="event__card">
                <div className="event__meta">
                  <span className={`badge ${e.variable ? 'badge--variable' : 'badge--fixed'}`}>
                    {e.variable ? c.variable : c.fixed}
                  </span>
                  <span className="badge badge--semester">{c.semester[e.semester]}</span>
                </div>
                <h2>{l(e.name)}</h2>
                <p className="event__when">
                  <Icon name="calendar" size={16} />
                  <span>
                    <span className="sr-only">{c.approx} : </span>
                    {l(e.when)}
                  </span>
                </p>
                {e.example && (
                  <p className="event__example">
                    <strong>{c.example} · </strong>
                    {l(e.example)}
                  </p>
                )}
                <figure className="event__figure">
                  <Photo name={`evenements/${e.id}`} alt={l(e.name)} ratio="16 / 9" position={e.photo?.focus} />
                  <PhotoCredit photo={e.photo} />
                </figure>
                <p className="event__desc">{l(e.desc)}</p>
              </article>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
