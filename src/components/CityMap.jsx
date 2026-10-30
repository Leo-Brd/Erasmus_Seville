import { useI18n } from '../i18n.jsx'

// Plan stylisé de Séville dessiné en SVG (aucune carte externe).
// Les coordonnées de chaque quartier (x, y) sont définies dans data/places.js.
const RIVER = 'M270 -10C300 80 350 150 352 230S320 300 330 360S345 470 330 520S350 600 370 620'
const WALL =
  'M404 330C402 280 422 232 468 202C516 160 580 124 640 146C664 200 654 262 624 304C602 364 560 424 500 434C452 444 410 402 404 330Z'

export default function CityMap({ hoods, selectedId, litIds, onSelect }) {
  const { t, l } = useI18n()
  const dimOthers = litIds !== null
  const mapped = hoods.filter((h) => h.x != null)

  return (
    <svg className="citymap" viewBox="0 0 800 620" role="group" aria-label={t.map.title}>
      <defs>
        <pattern id="map-tile" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 4L36 20L20 36L4 20Z" fill="none" stroke="#1b4f9c" strokeOpacity=".08" />
        </pattern>
        <path id="river-path" d={RIVER} />
      </defs>

      <rect width="800" height="620" fill="#fbf4e4" />
      <rect width="800" height="620" fill="url(#map-tile)" />

      {/* Parcs */}
      <g fill="#cfe5c6" stroke="#8fbf86" strokeWidth="1.5">
        <ellipse cx="418" cy="488" rx="62" ry="46" />
        <ellipse cx="205" cy="48" rx="60" ry="24" />
        <ellipse cx="640" cy="52" rx="55" ry="24" />
        <ellipse cx="236" cy="500" rx="28" ry="22" />
      </g>

      {/* Centre historique et muraille */}
      <path d={WALL} fill="#f6e7c8" stroke="none" opacity=".75" />
      <path d={WALL} fill="none" stroke="#f08a24" strokeWidth="2.5" strokeDasharray="10 7" />

      {/* Fleuve */}
      <use href="#river-path" fill="none" stroke="#6faee0" strokeWidth="40" strokeLinecap="round" />
      <use href="#river-path" fill="none" stroke="#b9dcf5" strokeWidth="30" strokeLinecap="round" />
      <text className="citymap__river" dy="4">
        <textPath href="#river-path" startOffset="8%">
          {t.map.riverLabel}
        </textPath>
      </text>

      {/* Ponts */}
      <g stroke="#fff" strokeWidth="6" strokeLinecap="round">
        <path d="M322 268h50" />
        <path d="M310 322h54" />
        <path d="M312 414h50" />
      </g>

      {/* Boussole */}
      <g transform="translate(740 560)" className="citymap__compass">
        <circle r="26" fill="#fff" stroke="#1b4f9c" strokeWidth="2" />
        <path d="M0 -20L6 0L0 20L-6 0Z" fill="#1b4f9c" />
        <path d="M0 -20L6 0L-6 0Z" fill="#f08a24" />
        <text y="-31" textAnchor="middle">{t.map.compass}</text>
      </g>

      {/* Encart « hors du centre » */}
      <rect x="48" y="66" width="168" height="124" rx="16" fill="none" stroke="#1b4f9c" strokeOpacity=".5" strokeWidth="2" strokeDasharray="6 6" />

      {/* Points */}
      {mapped.map((h) => {
        const selected = selectedId === h.id
        const lit = dimOthers && litIds.has(h.id)
        const dim = dimOthers && !lit && !selected
        const name = l(h.short ?? h.name)
        return (
          <g
            key={h.id}
            className={`pin ${selected ? 'is-selected' : ''} ${lit ? 'is-lit' : ''} ${dim ? 'is-dim' : ''}`}
            transform={`translate(${h.x} ${h.y})`}
            role="button"
            tabIndex={0}
            aria-pressed={selected}
            aria-label={`${h.num}. ${l(h.name)}`}
            onClick={() => onSelect(h.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onSelect(h.id)
              }
            }}
          >
            {lit && <circle className="pin__pulse" r="22" />}
            <circle className="pin__dot" r="15" />
            <text className="pin__num" y="5" textAnchor="middle">
              {h.num}
            </text>
            <text className="pin__label" y="32" textAnchor="middle">
              {name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
