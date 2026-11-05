import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { hoodCoords } from '../data/placeCoords.js'
import { mapData, project } from '../data/mapData.js'
import { useI18n } from '../i18n.jsx'
import Icon from './Icon.jsx'

const { width: W, height: H, roads, water, parks, rail, streetLabels } = mapData
const MIN_W = 240
const DRAG_THRESHOLD = 5

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))

// Carte vectorielle de Séville (données OpenStreetMap générées par scripts/build-map.mjs) avec zoom et déplacement.
export default function CityMap({ hoods, selectedId, litIds, onSelect, markers, selectedPlaceId, onSelectPlace, focus }) {
  const { t, l } = useI18n()
  const wrapRef = useRef(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [view, setView] = useState(null)
  const viewRef = useRef(null)
  const sizeRef = useRef(size)
  const animRef = useRef(0)
  const pointers = useRef(new Map())
  const gesture = useRef({ dragging: false, startX: 0, startY: 0, pinch: 0 })

  const pins = useMemo(
    () => hoods.filter((h) => h.lat != null).map((h) => ({ hood: h, pos: hoodCoords[h.id] ?? project(h.lat, h.lon) })),
    [hoods],
  )
  const insetHood = hoods.find((h) => h.outside)

  useEffect(() => {
    sizeRef.current = size
  }, [size])

  useEffect(() => {
    const el = wrapRef.current
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      if (width > 0 && height > 0) setSize({ w: width, h: height })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const clampView = useCallback((v) => {
    const { w: sw, h: sh } = sizeRef.current
    const w = clamp(v.w, MIN_W, W)
    const h = (w * sh) / sw
    return {
      w,
      cx: w >= W ? W / 2 : clamp(v.cx, w / 2, W - w / 2),
      cy: h >= H ? H / 2 : clamp(v.cy, h / 2, H - h / 2),
    }
  }, [])

  const apply = useCallback(
    (v) => {
      const c = clampView(v)
      viewRef.current = c
      setView(c)
    },
    [clampView],
  )

  const fitPoints = useCallback((points, minW) => {
    const { w: sw, h: sh } = sizeRef.current
    const xs = points.map((p) => p[0])
    const ys = points.map((p) => p[1])
    const bw = Math.max(...xs) - Math.min(...xs)
    const bh = Math.max(...ys) - Math.min(...ys)
    const w = Math.max(bw * 1.45, (bh * 1.45 * sw) / sh, minW)
    return { cx: (Math.max(...xs) + Math.min(...xs)) / 2, cy: (Math.max(...ys) + Math.min(...ys)) / 2, w }
  }, [])

  const defaultView = useCallback(() => fitPoints(pins.map((p) => p.pos), 900), [fitPoints, pins])

  const animateTo = useCallback(
    (target, ms = 550) => {
      cancelAnimationFrame(animRef.current)
      const from = viewRef.current
      if (!from) return apply(target)
      const goal = clampView(target)
      const t0 = performance.now()
      const step = (now) => {
        const p = Math.min(1, (now - t0) / ms)
        const e = 1 - Math.pow(1 - p, 3)
        apply({
          cx: from.cx + (goal.cx - from.cx) * e,
          cy: from.cy + (goal.cy - from.cy) * e,
          w: from.w * Math.pow(goal.w / from.w, e),
        })
        if (p < 1) animRef.current = requestAnimationFrame(step)
      }
      animRef.current = requestAnimationFrame(step)
    },
    [apply, clampView],
  )

  const targetFor = useCallback(
    (f) => (f?.points?.length ? fitPoints(f.points, f.minW ?? 520) : defaultView()),
    [fitPoints, defaultView],
  )

  // Vue initiale dès que la taille du conteneur est connue.
  useEffect(() => {
    if (size.w && !viewRef.current) apply(targetFor(focus))
  }, [size, apply, targetFor, focus])

  // Déplacement automatique quand la sélection change.
  const lastFocus = useRef(focus?.key)
  useEffect(() => {
    if (!focus || focus.key === lastFocus.current) return
    lastFocus.current = focus.key
    if (viewRef.current) animateTo(targetFor(focus))
  }, [focus, animateTo, targetFor])

  useEffect(() => () => cancelAnimationFrame(animRef.current), [])

  const zoomAt = useCallback(
    (factor, px, py) => {
      const v = viewRef.current
      if (!v) return
      const { w: sw, h: sh } = sizeRef.current
      const w = clamp(v.w * factor, MIN_W, W)
      const h = (v.w * sh) / sw
      const nh = (w * sh) / sw
      const fx = px / sw
      const fy = py / sh
      const mapX = v.cx - v.w / 2 + fx * v.w
      const mapY = v.cy - h / 2 + fy * h
      apply({ w, cx: mapX - fx * w + w / 2, cy: mapY - fy * nh + nh / 2 })
    },
    [apply],
  )

  useEffect(() => {
    const el = wrapRef.current
    const onWheel = (e) => {
      e.preventDefault()
      cancelAnimationFrame(animRef.current)
      const rect = el.getBoundingClientRect()
      zoomAt(Math.exp(e.deltaY * 0.0016), e.clientX - rect.left, e.clientY - rect.top)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [zoomAt])

  const onPointerDown = (e) => {
    if (e.target.closest('[data-nodrag]')) return
    cancelAnimationFrame(animRef.current)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    gesture.current = { dragging: false, startX: e.clientX, startY: e.clientY, pinch: 0 }
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      gesture.current.pinch = Math.hypot(a.x - b.x, a.y - b.y)
      gesture.current.dragging = true
    }
  }

  const onPointerMove = (e) => {
    const prev = pointers.current.get(e.pointerId)
    if (!prev) return
    const g = gesture.current
    const v = viewRef.current
    const { w: sw } = sizeRef.current
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })

    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      const rect = wrapRef.current.getBoundingClientRect()
      if (g.pinch > 0 && dist > 0) zoomAt(g.pinch / dist, (a.x + b.x) / 2 - rect.left, (a.y + b.y) / 2 - rect.top)
      g.pinch = dist
      return
    }

    if (!g.dragging) {
      if (Math.hypot(e.clientX - g.startX, e.clientY - g.startY) < DRAG_THRESHOLD) return
      g.dragging = true
      wrapRef.current.setPointerCapture(e.pointerId)
    }
    const upp = v.w / sw
    apply({ ...v, cx: v.cx - (e.clientX - prev.x) * upp, cy: v.cy - (e.clientY - prev.y) * upp })
  }

  const onPointerUp = (e) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size === 0) gesture.current.dragging = false
  }

  const step = (factor) => {
    const { w: sw, h: sh } = sizeRef.current
    cancelAnimationFrame(animRef.current)
    zoomAt(factor, sw / 2, sh / 2)
  }

  const ready = view && size.w > 0
  const k = ready ? view.w / size.w : 1 // unités de carte par pixel : garde la taille des repères constante à l'écran
  const vbH = ready ? (view.w * size.h) / size.w : 0
  const vb = ready ? `${view.cx - view.w / 2} ${view.cy - vbH / 2} ${view.w} ${vbH}` : `0 0 ${W} ${H}`
  const dimOthers = litIds !== null
  const showMinorLabels = ready && view.w < 700
  const showStreetLabels = ready && view.w < 1100
  const canZoomIn = ready && view.w > MIN_W + 1
  const canZoomOut = ready && view.w < W - 1

  const pinProps = (id) => {
    const selected = selectedId === id
    const lit = dimOthers && litIds.has(id)
    const dim = dimOthers && !lit && !selected
    return { selected, lit, dim }
  }

  return (
    <div
      ref={wrapRef}
      className="citymap-wrap"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <svg className="citymap" viewBox={vb} role="group" aria-label={t.map.title}>
        <defs>
          {Object.entries(roads).map(([cls, d]) => (
            <path key={cls} id={`road-${cls}`} d={d} />
          ))}
          {streetLabels.map((s, i) => (
            <path key={i} id={`street-${i}`} d={s.d} />
          ))}
        </defs>

        <rect className="map-land" x="0" y="0" width={W} height={H} />
        <path className="map-park" d={parks} fillRule="evenodd" />
        <path className="map-water" d={water} fillRule="evenodd" />
        <path className="map-rail" d={rail} />

        {['street', 'minor', 'medium', 'major'].map((cls) => (
          <use key={`c-${cls}`} href={`#road-${cls}`} className={`road-casing road-casing--${cls}`} />
        ))}
        <use href="#road-walk" className="road-walk" />
        {['street', 'minor', 'medium', 'major'].map((cls) => (
          <use key={`f-${cls}`} href={`#road-${cls}`} className={`road-fill road-fill--${cls}`} />
        ))}

        {showStreetLabels && (
          <g className="street-labels" style={{ fontSize: k * 10.5, strokeWidth: k * 3.2 }}>
            {streetLabels.map((s, i) =>
              s.cls === 'minor' && !showMinorLabels ? null : (
                <text key={i}>
                  <textPath href={`#street-${i}`} startOffset="50%" textAnchor="middle">
                    {s.name}
                  </textPath>
                </text>
              ),
            )}
          </g>
        )}

        {ready &&
          markers.map((m) => {
            const selected = selectedPlaceId === m.id
            return (
              <g
                key={m.id}
                className={`marker theme-${m.theme} ${selected ? 'is-selected' : ''}`}
                transform={`translate(${m.x} ${m.y}) scale(${k})`}
                role="button"
                tabIndex={0}
                aria-label={l(m.name)}
                aria-pressed={selected}
                onClick={() => onSelectPlace(m.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onSelectPlace(m.id)
                  }
                }}
              >
                <title>{l(m.name)}</title>
                <circle className="marker__halo" r={selected ? 17 : 13} />
                <circle className="marker__dot" r={selected ? 9 : 6.5} />
                {selected && (
                  <text className="marker__label" y="-20" textAnchor="middle">
                    {l(m.name)}
                  </text>
                )}
              </g>
            )
          })}

        {ready &&
          pins.map(({ hood, pos }) => {
            const { selected, lit, dim } = pinProps(hood.id)
            return (
              <g
                key={hood.id}
                className={`pin ${selected ? 'is-selected' : ''} ${lit ? 'is-lit' : ''} ${dim ? 'is-dim' : ''}`}
                transform={`translate(${pos[0]} ${pos[1]}) scale(${k})`}
                role="button"
                tabIndex={0}
                aria-pressed={selected}
                aria-label={`${hood.num}. ${l(hood.name)}`}
                onClick={() => onSelect(hood.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onSelect(hood.id)
                  }
                }}
              >
                {lit && <circle className="pin__pulse" r="22" />}
                <circle className="pin__dot" r="15" />
                <text className="pin__num" y="5" textAnchor="middle">
                  {hood.num}
                </text>
                <text className="pin__label" y="33" textAnchor="middle">
                  {l(hood.short ?? hood.name)}
                </text>
              </g>
            )
          })}
      </svg>

      {insetHood && (
        <button
          type="button"
          data-nodrag
          className={`map-inset ${selectedId === insetHood.id ? 'is-selected' : ''} ${dimOthers && litIds.has(insetHood.id) ? 'is-lit' : ''} ${dimOthers && !litIds.has(insetHood.id) && selectedId !== insetHood.id ? 'is-dim' : ''}`}
          aria-pressed={selectedId === insetHood.id}
          onClick={() => onSelect(insetHood.id)}
          title={t.map.outsideHint}
        >
          <span className="map-inset__num">{insetHood.num}</span>
          {l(insetHood.short ?? insetHood.name)}
        </button>
      )}

      <div className="map-controls" data-nodrag>
        <button type="button" onClick={() => step(0.6)} disabled={!canZoomIn} aria-label={t.map.zoomIn} title={t.map.zoomIn}>
          <Icon name="plus" size={20} />
        </button>
        <button type="button" onClick={() => step(1 / 0.6)} disabled={!canZoomOut} aria-label={t.map.zoomOut} title={t.map.zoomOut}>
          <Icon name="minus" size={20} />
        </button>
        <button type="button" onClick={() => animateTo(defaultView())} aria-label={t.map.recenter} title={t.map.recenter}>
          <Icon name="target" size={20} />
        </button>
      </div>

      <a
        className="map-attribution"
        data-nodrag
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
      >
        © OpenStreetMap
      </a>
    </div>
  )
}
