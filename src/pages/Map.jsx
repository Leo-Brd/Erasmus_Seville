import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useI18n } from '../i18n.jsx'
import { allPlaces, hoods, themes } from '../data/places.js'
import CityMap from '../components/CityMap.jsx'
import Icon from '../components/Icon.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Photo from '../components/Photo.jsx'

const themeById = Object.fromEntries(themes.map((x) => [x.id, x]))
const hoodById = Object.fromEntries(hoods.map((h) => [h.id, h]))

function PlaceItem({ place, open, onToggle }) {
  const { t, l } = useI18n()
  const theme = themeById[place.theme]

  return (
    <li className={`place ${open ? 'is-open' : ''}`}>
      <button type="button" className="place__head" aria-expanded={open} onClick={onToggle}>
        <span className={`place__icon theme-${place.theme}`}>
          <Icon name={theme.icon} size={18} />
        </span>
        <span className="place__name">
          {l(place.name)}
          {import.meta.env.DEV && place.check && <em title={t.map.devCheck}> ⚠</em>}
        </span>
        <Icon name="chevron" size={18} className="place__chevron" />
      </button>
      {open && (
        <div className="place__body">
          <Photo name={`lieux/${place.id}`} alt={l(place.name)} ratio="16 / 9" />
          <div className="place__field">
            <h4>{t.map.description}</h4>
            <p className={place.desc ? '' : 'soon'}>{place.desc ? l(place.desc) : t.comingSoon}</p>
          </div>
          <div className="place__field">
            <h4>{t.map.tip}</h4>
            <p className={place.tip ? '' : 'soon'}>{place.tip ? l(place.tip) : t.comingSoon}</p>
          </div>
        </div>
      )}
    </li>
  )
}

export default function MapPage() {
  const { t, l } = useI18n()
  const m = t.map
  const [params] = useSearchParams()
  const panelRef = useRef(null)

  const initialPlace = allPlaces.find((p) => p.id === params.get('place'))
  const initialTheme = themeById[params.get('theme')] ? params.get('theme') : null

  const [hoodId, setHoodId] = useState(initialPlace?.hood ?? null)
  const [themeId, setThemeId] = useState(initialTheme)
  const [openPlace, setOpenPlace] = useState(initialPlace?.id ?? null)

  const litIds = useMemo(
    () => (themeId ? new Set(allPlaces.filter((p) => p.theme === themeId).map((p) => p.hood)) : null),
    [themeId],
  )

  const scrollToPanel = () => {
    if (window.innerWidth < 960) {
      setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
    }
  }

  const selectHood = (id) => {
    setHoodId((cur) => (cur === id ? null : id))
    setOpenPlace(null)
    if (hoodId !== id) scrollToPanel()
  }

  const selectTheme = (id) => {
    setThemeId((cur) => (cur === id ? null : id))
    setOpenPlace(null)
    scrollToPanel()
  }

  const reset = () => {
    setHoodId(null)
    setThemeId(null)
    setOpenPlace(null)
  }

  const places = useMemo(() => {
    let list = allPlaces
    if (hoodId) list = list.filter((p) => p.hood === hoodId)
    if (themeId) list = list.filter((p) => p.theme === themeId)
    return list
  }, [hoodId, themeId])

  // Dans un quartier : regroupé par thème. Dans un thème (sans quartier) : regroupé par quartier.
  const groups = useMemo(() => {
    if (hoodId) {
      return themes
        .map((th) => ({ key: th.id, label: l(th.label), icon: th.icon, items: places.filter((p) => p.theme === th.id) }))
        .filter((g) => g.items.length)
    }
    return hoods
      .map((h) => ({ key: h.id, label: l(h.name), icon: 'pin', items: places.filter((p) => p.hood === h.id) }))
      .filter((g) => g.items.length)
  }, [hoodId, places, l])

  const hood = hoodId ? hoodById[hoodId] : null
  const theme = themeId ? themeById[themeId] : null

  let title = null
  if (hood && theme) title = `${l(hood.name)} · ${l(theme.label)}`
  else if (hood) title = m.hoodListTitle(l(hood.name))
  else if (theme) title = m.themeListTitle(l(theme.label))

  return (
    <div className="container page">
      <PageHeader title={m.title} intro={m.intro} />

      <div className="filters">
        <div className="filters__head">
          <h2>{m.themes}</h2>
          {(hoodId || themeId) && (
            <button type="button" className="btn btn--small btn--ghost" onClick={reset}>
              {m.reset}
            </button>
          )}
        </div>
        <div className="chips chips--scroll" role="group" aria-label={m.themes}>
          {themes.map((th) => (
            <button
              key={th.id}
              type="button"
              className={`chip theme-${th.id} ${themeId === th.id ? 'is-active' : ''}`}
              aria-pressed={themeId === th.id}
              onClick={() => selectTheme(th.id)}
            >
              <Icon name={th.icon} size={16} />
              {l(th.label)}
            </button>
          ))}
        </div>
      </div>

      <div className="map-layout">
        <div className="map-col">
          <div className="map-frame">
            <CityMap hoods={hoods} selectedId={hoodId} litIds={litIds} onSelect={selectHood} />
          </div>

          <h2 className="map-legend__title">{m.hoods}</h2>
          <ul className="legend">
            {hoods.map((h) => {
              const dim = litIds && !litIds.has(h.id) && hoodId !== h.id
              return (
                <li key={h.id}>
                  <button
                    type="button"
                    className={`legend__item ${hoodId === h.id ? 'is-active' : ''} ${litIds?.has(h.id) ? 'is-lit' : ''} ${dim ? 'is-dim' : ''}`}
                    aria-pressed={hoodId === h.id}
                    onClick={() => selectHood(h.id)}
                    title={h.toConfirm ? m.toConfirmHint : h.outside ? m.outsideHint : undefined}
                  >
                    <span className="legend__num">{h.num ?? '?'}</span>
                    {l(h.short ?? h.name)}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <section ref={panelRef} className="results" aria-live="polite">
          {!title ? (
            <p className="results__hint">
              <Icon name="pin" size={22} />
              {m.pickHint}
            </p>
          ) : (
            <>
              <header className="results__head">
                <h2>{title}</h2>
                <span className="pill">{m.places(places.length)}</span>
              </header>
              {hood?.toConfirm && <p className="callout">{m.toConfirmHint}</p>}
              {hood?.outside && <p className="callout">{m.outsideHint}</p>}
              {groups.length === 0 && <p className="soon">{m.noPlaces}</p>}
              {groups.map((g) => (
                <div key={g.key} className="results__group">
                  <h3>
                    <Icon name={g.icon} size={18} />
                    {g.label}
                  </h3>
                  <ul className="place-list">
                    {g.items.map((p) => (
                      <PlaceItem
                        key={p.id}
                        place={p}
                        open={openPlace === p.id}
                        onToggle={() => setOpenPlace((cur) => (cur === p.id ? null : p.id))}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </section>
      </div>
    </div>
  )
}
