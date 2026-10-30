import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LANGS } from '../ui.js'
import { useI18n } from '../i18n.jsx'
import Icon from './Icon.jsx'

export const NAV = [
  { to: '/', key: 'home', icon: 'home', end: true },
  { to: '/experience', key: 'experience', icon: 'chat' },
  { to: '/conseils', key: 'tips', icon: 'star' },
  { to: '/calendrier', key: 'calendar', icon: 'calendar' },
  { to: '/carte', key: 'map', icon: 'map' },
]

function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill="#1b4f9c" />
      <g fill="none" stroke="#fff" strokeWidth="3">
        <rect x="17" y="17" width="30" height="30" />
        <rect x="17" y="17" width="30" height="30" transform="rotate(45 32 32)" />
      </g>
      <circle cx="32" cy="32" r="7" fill="#f08a24" />
    </svg>
  )
}

export default function Header() {
  const { t, lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__bar container">
        <NavLink to="/" className="brand" aria-label={t.siteName}>
          <Logo />
          <span>{t.siteName}</span>
        </NavLink>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="nav__link" onClick={() => setOpen(false)}>
              <Icon name={item.icon} size={18} />
              {t.nav[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="lang" role="group" aria-label={t.language}>
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              className={`lang__btn ${lang === l.code ? 'is-active' : ''}`}
              onClick={() => setLang(l.code)}
              aria-pressed={lang === l.code}
              title={l.name}
              lang={l.code}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="burger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={t.menu}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      <div className="tile-strip" aria-hidden="true" />
    </header>
  )
}
