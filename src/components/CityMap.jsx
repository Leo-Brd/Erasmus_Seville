import { useEffect, useMemo, useRef } from 'react'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer, Tooltip, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useI18n } from '../i18n.jsx'
import Icon from './Icon.jsx'

// Vraie carte interactive (Leaflet) sur le fond de carte officiel d'OpenStreetMap, avec les coordonnées GPS des lieux.
const SEVILLE = [37.3895, -5.9905]
const DEFAULT_ZOOM = 14
const TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">contributeurs OpenStreetMap</a>'

const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

function hoodIcon(num, label, state) {
  return L.divIcon({
    className: `hood-pin ${state}`,
    html: `<span class="hood-pin__dot">${num}</span><span class="hood-pin__label">${escapeHtml(label)}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  })
}

function placeIcon(theme, selected) {
  const size = selected ? 22 : 16
  return L.divIcon({
    className: `place-pin theme-${theme} ${selected ? 'is-selected' : ''}`,
    html: '<span class="place-pin__dot"></span>',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

// Recadre la carte quand la sélection change (quartier, thème ou lieu).
function FocusController({ focus, homeBounds }) {
  const map = useMap()
  const lastKey = useRef(null)

  useEffect(() => {
    if (!focus || focus.key === lastKey.current) return
    const first = lastKey.current === null
    lastKey.current = focus.key
    const opts = { animate: !first, duration: 0.6 }
    if (!focus.points?.length) {
      map.flyToBounds(homeBounds, { ...opts, padding: [30, 30] })
    } else if (focus.points.length === 1) {
      map.flyTo(focus.points[0], focus.maxZoom ?? 17, opts)
    } else {
      map.flyToBounds(L.latLngBounds(focus.points), { ...opts, padding: [50, 50], maxZoom: focus.maxZoom ?? 16 })
    }
  }, [focus, map, homeBounds])

  return null
}

// Quand la carte est dézoomée, les noms des quartiers voisins se chevauchent : on ne les affiche qu'à partir du zoom 15.
function ZoomClass() {
  const map = useMap()
  const apply = () => {
    map.getContainer().classList.toggle('is-zoomed-out', map.getZoom() < 15)
  }
  useMapEvents({ zoomend: apply })
  useEffect(() => {
    map.getContainer().classList.toggle('is-zoomed-out', map.getZoom() < 15)
  }, [map])
  return null
}

function RecenterButton({ homeBounds, label }) {
  const map = useMap()
  const ref = useRef(null)

  // Sans ça, un clic sur le bouton ferait aussi glisser ou zoomer la carte.
  useEffect(() => {
    if (ref.current) {
      L.DomEvent.disableClickPropagation(ref.current)
      L.DomEvent.disableScrollPropagation(ref.current)
    }
  }, [])

  return (
    <button
      ref={ref}
      type="button"
      className="map-recenter"
      onClick={() => map.flyToBounds(homeBounds, { padding: [30, 30], duration: 0.6 })}
      aria-label={label}
      title={label}
    >
      <Icon name="target" size={20} />
    </button>
  )
}

export default function CityMap({ hoods, selectedId, litIds, onSelect, markers, selectedPlaceId, onSelectPlace, focus }) {
  const { t, l } = useI18n()
  const dimOthers = litIds !== null
  const pins = useMemo(() => hoods.filter((h) => h.lat != null), [hoods])
  const insetHood = hoods.find((h) => h.outside)

  const homeBounds = useMemo(() => L.latLngBounds(pins.map((h) => [h.lat, h.lon])).pad(0.08), [pins])

  return (
    <div className="citymap-wrap">
      <MapContainer
        className="citymap"
        center={SEVILLE}
        zoom={DEFAULT_ZOOM}
        bounds={homeBounds}
        boundsOptions={{ padding: [30, 30] }}
        minZoom={11}
        maxZoom={19}
        scrollWheelZoom
        zoomControl
      >
        <TileLayer url={TILES} attribution={ATTRIBUTION} maxZoom={19} />
        <FocusController focus={focus} homeBounds={homeBounds} />
        <ZoomClass />
        <RecenterButton homeBounds={homeBounds} label={t.map.recenter} />

        {markers.map((m) => {
          const selected = selectedPlaceId === m.id
          return (
            <Marker
              key={`${m.id}-${selected}`}
              position={m.pos}
              icon={placeIcon(m.theme, selected)}
              zIndexOffset={selected ? 1000 : 500}
              eventHandlers={{ click: () => onSelectPlace(m.id) }}
              title={l(m.name)}
              alt={l(m.name)}
            >
              <Tooltip direction="top" offset={[0, -10]} permanent={selected} className="place-tip">
                {l(m.name)}
              </Tooltip>
            </Marker>
          )
        })}

        {pins.map((h) => {
          const selected = selectedId === h.id
          const lit = dimOthers && litIds.has(h.id)
          const dim = dimOthers && !lit && !selected
          const state = `${selected ? 'is-selected' : ''} ${lit ? 'is-lit' : ''} ${dim ? 'is-dim' : ''}`
          return (
            <Marker
              key={`${h.id}-${state}-${l(h.short ?? h.name)}`}
              position={[h.lat, h.lon]}
              icon={hoodIcon(h.num, l(h.short ?? h.name), state)}
              zIndexOffset={selected ? 900 : 0}
              eventHandlers={{ click: () => onSelect(h.id) }}
              title={`${h.num}. ${l(h.name)}`}
              alt={`${h.num}. ${l(h.name)}`}
              keyboard
            />
          )
        })}
      </MapContainer>

      {insetHood && (
        <button
          type="button"
          className={`map-inset ${selectedId === insetHood.id ? 'is-selected' : ''} ${dimOthers && litIds.has(insetHood.id) ? 'is-lit' : ''} ${dimOthers && !litIds.has(insetHood.id) && selectedId !== insetHood.id ? 'is-dim' : ''}`}
          aria-pressed={selectedId === insetHood.id}
          onClick={() => onSelect(insetHood.id)}
          title={t.map.outsideHint}
        >
          <span className="map-inset__num">{insetHood.num}</span>
          {l(insetHood.short ?? insetHood.name)}
        </button>
      )}
    </div>
  )
}
