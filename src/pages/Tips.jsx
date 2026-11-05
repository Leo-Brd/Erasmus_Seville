import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n.jsx'
import { accent, glossary, tabs, trips } from '../data/tips.js'
import { allPlaces, themes } from '../data/places.js'
import Icon from '../components/Icon.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Photo from '../components/Photo.jsx'

function TipsList({ tab }) {
  const { t, l } = useI18n()
  return (
    <section className="panel">
      <h2>{t.tips.tipsHeading}</h2>
      {tab.tips.length === 0 ? (
        <p className="soon">{t.tips.tipsSoon}</p>
      ) : (
        <ul className="tip-list">
          {tab.tips.map((tip, i) => (
            <li key={i} className="tip">
              <h3>{l(tip.title)}</h3>
              <p>{l(tip.text)}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function Addresses({ tab }) {
  const { t, l } = useI18n()
  return (
    <section className="panel">
      <h2>{t.tips.addressesHeading}</h2>
      {tab.addresses.length === 0 ? (
        <p className="soon">{t.tips.addressesSoon}</p>
      ) : (
        <ul className="address-list">
          {tab.addresses.map((a, i) => (
            <li key={i} className="address">
              <Icon name="pin" size={20} />
              <div>
                <strong>{l(a.name)}</strong>
                {a.note && <p>{l(a.note)}</p>}
                {a.link && (
                  <a href={a.link} target="_blank" rel="noopener noreferrer">
                    {a.link.replace(/^https?:\/\/(www\.)?/, '')}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function Glossary() {
  const { t, l, lang } = useI18n()
  return (
    <>
      <section className="panel">
        <h2>{t.tips.accentHeading}</h2>
        <ul className="bullets">
          {accent.map((a, i) => (
            <li key={i}>{l(a)}</li>
          ))}
        </ul>
      </section>
      <section className="panel">
        <h2>{t.tips.glossaryHeading}</h2>
        <dl className="glossary">
          {glossary.map((g) => (
            <div key={g.term} className="glossary__item">
              <dt lang="es">{g.term}</dt>
              <dd>{g[lang] ?? g.fr}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}

function Trips() {
  const { t, l } = useI18n()
  const [openId, setOpenId] = useState(null)
  const fields = ['avis', 'transport', 'duree', 'budget', 'conseil']

  return (
    <section className="panel">
      <h2>{t.tips.tripsHeading}</h2>
      <p className="muted">{t.tips.tripsIntro}</p>
      <p className="callout">
        <Icon name="coin" size={18} />
        {t.tips.tripsNote}
      </p>
      <div className="trips">
        {trips.map((trip) => {
          const isOpen = openId === trip.id
          return (
            <article key={trip.id} className={`trip ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="trip__head"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : trip.id)}
              >
                <span className="trip__icon">
                  <Icon name="pin" size={20} />
                </span>
                <span className="trip__name">
                  <strong>{trip.name}</strong>
                  <small>{t.tips.regions[trip.region]}</small>
                </span>
                <Icon name="chevron" className="trip__chevron" />
              </button>
              {isOpen && (
                <div className="trip__body">
                  <figure className="trip__figure">
                    <Photo name={`voyages/${trip.id}`} alt={trip.name} ratio="16 / 9" position={trip.photo?.focus} />
                    {trip.photo && (
                      <figcaption>
                        {t.tips.photoBy}:{' '}
                        <a href={trip.photo.url} target="_blank" rel="noopener noreferrer">
                          {trip.photo.author}
                        </a>
                        , {trip.photo.license} · Wikimedia Commons
                      </figcaption>
                    )}
                  </figure>
                  <dl>
                    {fields.map((f) => (
                      <div key={f} className="trip__field">
                        <dt>{t.tips.tripFields[f]}</dt>
                        <dd className={trip[f] ? '' : 'soon'}>{trip[f] ? l(trip[f]) : t.comingSoon}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

function LinkedPlaces({ tab }) {
  const { t, l } = useI18n()
  if (!tab.themes) return null

  return (
    <section className="panel">
      <h2>{t.tips.placesHeading}</h2>
      <p className="muted">{t.tips.placesIntro}</p>
      {tab.themes.map((themeId) => {
        const theme = themes.find((x) => x.id === themeId)
        const places = allPlaces.filter((p) => p.theme === themeId)
        return (
          <div key={themeId} className="linked">
            <div className="linked__head">
              <h3>
                <Icon name={theme.icon} size={18} />
                {l(theme.label)}
              </h3>
              <Link className="btn btn--small btn--ghost" to={`/carte?theme=${themeId}`}>
                {t.tips.seeOnMap}
              </Link>
            </div>
            <ul className="chips chips--wrap">
              {places.map((p) => (
                <li key={p.id}>
                  <Link className="chip" to={`/carte?place=${p.id}`}>
                    {l(p.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </section>
  )
}

export default function Tips() {
  const { t, l } = useI18n()
  const [activeId, setActiveId] = useState(tabs[0].id)
  const tab = tabs.find((x) => x.id === activeId)

  return (
    <div className="container page">
      <PageHeader title={t.tips.title} intro={t.tips.intro} />

      <div className="tabs" role="tablist" aria-label={t.tips.title}>
        {tabs.map((x) => (
          <button
            key={x.id}
            id={`tab-${x.id}`}
            role="tab"
            type="button"
            aria-selected={x.id === activeId}
            aria-controls="tab-panel"
            className={`tab ${x.id === activeId ? 'is-active' : ''}`}
            onClick={() => setActiveId(x.id)}
          >
            <Icon name={x.icon} size={18} />
            {l(x.label)}
          </button>
        ))}
      </div>

      <div id="tab-panel" role="tabpanel" aria-labelledby={`tab-${tab.id}`} className="tab-panel">
        <h2 className="tab-panel__title">
          <span className="tab-panel__icon">
            <Icon name={tab.icon} size={26} />
          </span>
          {l(tab.label)}
        </h2>

        {tab.glossary && <Glossary />}
        {tab.trips && <Trips />}
        <TipsList tab={tab} />
        <Addresses tab={tab} />
        <LinkedPlaces tab={tab} />
      </div>
    </div>
  )
}
