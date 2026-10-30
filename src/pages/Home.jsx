import { Link } from 'react-router-dom'
import { useI18n } from '../i18n.jsx'
import HeroArt from '../components/HeroArt.jsx'
import Icon from '../components/Icon.jsx'

const CARDS = [
  { to: '/experience', key: 'experience', icon: 'chat' },
  { to: '/conseils', key: 'tips', icon: 'star' },
  { to: '/calendrier', key: 'calendar', icon: 'calendar' },
  { to: '/carte', key: 'map', icon: 'map' },
]

export default function Home() {
  const { t } = useI18n()
  const h = t.home

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="kicker">{h.kicker}</p>
            <h1>{h.title}</h1>
            <p className="hero__tagline">{h.tagline}</p>
            <div className="hero__actions">
              <Link to="/experience" className="btn btn--primary">
                {h.ctaExperience}
              </Link>
              <Link to="/carte" className="btn btn--ghost">
                <Icon name="map" size={18} />
                {h.ctaMap}
              </Link>
            </div>
          </div>
          <div className="hero__art">
            <HeroArt />
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="section__title">{h.sectionTitle}</h2>
        <div className="cards">
          {CARDS.map((card) => (
            <Link key={card.to} to={card.to} className="card">
              <span className="card__icon">
                <Icon name={card.icon} size={28} />
              </span>
              <h3>{h.cards[card.key]}</h3>
              <p>{h.cards[`${card.key}Text`]}</p>
              <span className="card__cta">{h.openCard} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <aside className="note">
          <h2>{h.noteTitle}</h2>
          <p>{h.noteText}</p>
        </aside>
      </section>
    </>
  )
}
