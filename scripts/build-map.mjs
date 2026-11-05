// Génère src/data/mapData.js et src/data/placeCoords.js à partir des données OpenStreetMap (© contributeurs OpenStreetMap, ODbL).
// Usage : node scripts/build-map.mjs   (nécessite internet ; les réponses sont mises en cache dans le dossier temporaire)
// Le site final n'a besoin d'aucun service externe : la carte est un SVG généré ici.
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { hoods } from '../src/data/places.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const cacheDir = join(tmpdir(), 'erasmus-map-cache')
mkdirSync(cacheDir, { recursive: true })

const ENDPOINTS = [
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass.private.coffee/api/interpreter',
]

// Zone couverte : le centre de Séville, Triana, la Cartuja, Los Remedios, Nervión.
const BBOX = { s: 37.358, w: -6.022, n: 37.418, e: -5.952 }
const bb = `${BBOX.s},${BBOX.w},${BBOX.n},${BBOX.e}`
const M_LAT = 111200
const M_LON = 111320 * Math.cos((37.388 * Math.PI) / 180)
const UNITS_PER_M = 0.4 // 1 unité de carte = 2,5 m
export const WIDTH = Math.round((BBOX.e - BBOX.w) * M_LON * UNITS_PER_M)
export const HEIGHT = Math.round((BBOX.n - BBOX.s) * M_LAT * UNITS_PER_M)
const project = (lat, lon) => [(lon - BBOX.w) * M_LON * UNITS_PER_M, (BBOX.n - lat) * M_LAT * UNITS_PER_M]

async function overpass(name, query) {
  const file = join(cacheDir, `${name}.json`)
  if (existsSync(file)) return JSON.parse(readFileSync(file, 'utf8'))
  for (let attempt = 0; attempt < 8; attempt++) {
    const url = ENDPOINTS[attempt % ENDPOINTS.length]
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'ErasmusSevilleGuide/1.0' },
        body: 'data=' + encodeURIComponent(query),
        signal: AbortSignal.timeout(240000),
      })
      if (!res.ok) throw new Error(`${res.status}`)
      const text = await res.text()
      const json = JSON.parse(text)
      writeFileSync(file, text)
      console.log(`  ${name}: ${json.elements.length} éléments (${(text.length / 1e6).toFixed(1)} Mo) via ${new URL(url).host}`)
      return json
    } catch (err) {
      console.log(`  ${name}: échec sur ${new URL(url).host} (${err.message}), nouvel essai…`)
      await new Promise((r) => setTimeout(r, 4000))
    }
  }
  throw new Error(`Impossible de récupérer ${name}`)
}

// ---------- géométrie ----------
function simplify(points, tol) {
  if (points.length < 3) return points
  const sq = tol * tol
  const keep = new Uint8Array(points.length)
  keep[0] = keep[points.length - 1] = 1
  const stack = [[0, points.length - 1]]
  while (stack.length) {
    const [a, b] = stack.pop()
    let max = 0
    let idx = -1
    const [ax, ay] = points[a]
    const [bx, by] = points[b]
    const dx = bx - ax
    const dy = by - ay
    const len2 = dx * dx + dy * dy
    for (let i = a + 1; i < b; i++) {
      const [px, py] = points[i]
      let d2
      if (len2 === 0) d2 = (px - ax) ** 2 + (py - ay) ** 2
      else {
        const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2))
        d2 = (px - (ax + t * dx)) ** 2 + (py - (ay + t * dy)) ** 2
      }
      if (d2 > max) {
        max = d2
        idx = i
      }
    }
    if (max > sq && idx > 0) {
      keep[idx] = 1
      stack.push([a, idx], [idx, b])
    }
  }
  return points.filter((_, i) => keep[i])
}

const r1 = (n) => Math.round(n * 10) / 10

function pathOf(points, close = false) {
  if (points.length < 2) return ''
  let [px, py] = points[0].map(r1)
  let d = `M${px} ${py}`
  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i].map(r1)
    const dx = r1(x - px)
    const dy = r1(y - py)
    if (dx === 0 && dy === 0) continue
    d += `l${dx} ${dy}`
    px = x
    py = y
  }
  return d + (close ? 'z' : '')
}

const toPts = (geom) => geom.map((g) => project(g.lat, g.lon))

const inBox = (pts) => {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity
  for (const [x, y] of pts) {
    minX = Math.min(minX, x)
    maxX = Math.max(maxX, x)
    minY = Math.min(minY, y)
    maxY = Math.max(maxY, y)
  }
  return maxX >= -50 && minX <= WIDTH + 50 && maxY >= -50 && minY <= HEIGHT + 50
}

const key = (p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`

// Assemble des segments (ways d'une relation) en anneaux fermés.
function assembleRings(ways) {
  const segs = ways.filter((w) => w.length > 1).map((w) => w.slice())
  const rings = []
  while (segs.length) {
    let ring = segs.pop()
    let progress = true
    while (progress && key(ring[0]) !== key(ring[ring.length - 1])) {
      progress = false
      for (let i = 0; i < segs.length; i++) {
        const s = segs[i]
        const rs = key(ring[0])
        const re = key(ring[ring.length - 1])
        const ss = key(s[0])
        const se = key(s[s.length - 1])
        if (re === ss) ring = ring.concat(s.slice(1))
        else if (re === se) ring = ring.concat(s.slice(0, -1).reverse())
        else if (rs === se) ring = s.slice(0, -1).concat(ring)
        else if (rs === ss) ring = s.slice(1).reverse().concat(ring)
        else continue
        segs.splice(i, 1)
        progress = true
        break
      }
    }
    rings.push(ring)
  }
  return rings
}

function polygonPaths(elements, tol) {
  let d = ''
  for (const el of elements) {
    const rings = []
    if (el.type === 'way' && el.geometry) rings.push(toPts(el.geometry))
    else if (el.type === 'relation' && el.members) {
      const outer = el.members.filter((m) => m.type === 'way' && m.geometry && m.role !== 'inner').map((m) => toPts(m.geometry))
      const inner = el.members.filter((m) => m.type === 'way' && m.geometry && m.role === 'inner').map((m) => toPts(m.geometry))
      rings.push(...assembleRings(outer), ...assembleRings(inner))
    }
    for (const ring of rings) {
      if (ring.length < 4 || !inBox(ring)) continue
      d += pathOf(simplify(ring, tol), true)
    }
  }
  return d
}

// ---------- routes ----------
const ROAD_CLASS = {
  motorway: 'major', trunk: 'major', motorway_link: 'major', trunk_link: 'major',
  primary: 'major', primary_link: 'major',
  secondary: 'medium', secondary_link: 'medium',
  tertiary: 'minor', tertiary_link: 'minor',
  unclassified: 'street', residential: 'street',
  living_street: 'walk', pedestrian: 'walk', footway: 'walk',
}

const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

async function main() {
  console.log('Téléchargement des données OpenStreetMap…')
  const roadsRaw = await overpass('roads', `[out:json][timeout:240];(way["highway"~"^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street|pedestrian|motorway_link|trunk_link|primary_link|secondary_link|tertiary_link)$"][!"tunnel"](${bb});way["highway"="footway"]["name"][!"tunnel"](${bb}););out tags geom;`)
  const waterRaw = await overpass('water', `[out:json][timeout:240];(way["waterway"="riverbank"](${bb});relation["waterway"="riverbank"](${bb});way["natural"="water"](${bb});relation["natural"="water"](${bb}););out tags geom;`)
  const parksRaw = await overpass('parks', `[out:json][timeout:240];(way["leisure"~"^(park|garden|nature_reserve|recreation_ground)$"](${bb});relation["leisure"~"^(park|garden|nature_reserve|recreation_ground)$"](${bb});way["landuse"~"^(grass|forest|recreation_ground|village_green)$"](${bb});way["natural"~"^(wood|scrub|grassland)$"](${bb}););out tags geom;`)
  const railRaw = await overpass('rail', `[out:json][timeout:240];(way["railway"~"^(rail|light_rail|tram)$"][!"tunnel"][service!~"."](${bb}););out tags geom;`)

  // Routes par classe
  const roads = { major: '', medium: '', minor: '', street: '', walk: '' }
  const named = new Map()
  for (const el of roadsRaw.elements) {
    if (!el.geometry) continue
    const cls = ROAD_CLASS[el.tags.highway]
    if (!cls) continue
    const pts = toPts(el.geometry)
    if (!inBox(pts)) continue
    const simp = simplify(pts, cls === 'walk' || cls === 'street' ? 0.7 : 0.5)
    roads[cls] += pathOf(simp)
    if (el.tags.name && (cls === 'major' || cls === 'medium' || cls === 'minor')) {
      let len = 0
      for (let i = 1; i < simp.length; i++) len += Math.hypot(simp[i][0] - simp[i - 1][0], simp[i][1] - simp[i - 1][1])
      const prev = named.get(el.tags.name)
      if (!prev || len > prev.len) named.set(el.tags.name, { name: el.tags.name, cls, len, pts: simp })
    }
  }

  const rank = { major: 0, medium: 1, minor: 2 }
  const streetLabels = [...named.values()]
    .filter((s) => s.len > 150 && s.name.length < 34)
    .sort((a, b) => rank[a.cls] - rank[b.cls] || b.len - a.len)
    .slice(0, 70)
    .map((s) => {
      let pts = s.pts
      if (pts[0][0] > pts[pts.length - 1][0]) pts = pts.slice().reverse()
      return { name: s.name, cls: s.cls, d: pathOf(pts) }
    })

  const water = polygonPaths(waterRaw.elements, 0.8)
  const parks = polygonPaths(parksRaw.elements, 0.9)
  let rail = ''
  for (const el of railRaw.elements) {
    if (!el.geometry) continue
    const pts = toPts(el.geometry)
    if (inBox(pts)) rail += pathOf(simplify(pts, 0.8))
  }

  // ---------- coordonnées des lieux (uniquement si trouvés avec certitude dans OSM) ----------
  console.log('Recherche des lieux dans OpenStreetMap…')
  const ALIASES = (await import('./place-aliases.mjs')).default
  const allPlaces = hoods.flatMap((h) => h.places.map((p) => ({ ...p, hood: h })))
  const wanted = new Set()
  const variants = (p) => {
    const base = typeof p.name === 'string' ? p.name : p.name.fr
    return [base.replace(/\s*\(.*?\)\s*/g, ' ').trim(), ...(ALIASES[p.id] ?? [])]
  }
  for (const p of allPlaces) for (const v of variants(p)) wanted.add(v)
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\"]/g, '\\$&')
  const regex = [...wanted].map(esc).join('|')
  const namedRaw = await overpass('places', `[out:json][timeout:240];nwr["name"~"${regex}",i](${bb});out center tags;`)
  const found = namedRaw.elements.map((el) => ({
    name: el.tags.name,
    n: norm(el.tags.name),
    lat: el.lat ?? el.center?.lat,
    lon: el.lon ?? el.center?.lon,
    isNode: el.type === 'node' ? 1 : 0,
    tags: el.tags,
  })).filter((f) => f.lat != null)

  const placeCoords = {}
  const report = []

  // Centre des quartiers : points « place=suburb/neighbourhood/quarter » d'OpenStreetMap (sinon on garde mon estimation de places.js).
  // (Centro, Macarena et María Luisa sont exclus : les points OSM correspondent à des zones bien plus larges que le repère voulu.)
  const HOOD_NAMES = {
    'santa-cruz': ['Santa Cruz'], arenal: ['El Arenal', 'Arenal'], alfalfa: ['Alfalfa'],
    'san-bartolome': ['San Bartolomé'], feria: ['Feria'], alameda: ['Alameda'], triana: ['Triana'], remedios: ['Los Remedios'],
    'san-lorenzo': ['San Lorenzo'], 'san-julian': ['San Julián'], nervion: ['Nervión', 'Viapol'],
  }
  const hoodRaw = await overpass('hoods', `[out:json][timeout:120];nwr["place"~"^(suburb|neighbourhood|quarter|city_block)$"]["name"](${bb});out center tags;`)
  const hoodCoords = {}
  for (const [id, names] of Object.entries(HOOD_NAMES)) {
    const wantedNames = names.map(norm)
    const hit = hoodRaw.elements.find((e) => wantedNames.includes(norm(e.tags.name)))
    const lat = hit?.lat ?? hit?.center?.lat
    const lon = hit?.lon ?? hit?.center?.lon
    if (lat != null) {
      const [x, y] = project(lat, lon)
      hoodCoords[id] = [r1(x), r1(y)]
      report.push(`  ◎ quartier ${id} → ${hit.tags.name} (${lat.toFixed(4)}, ${lon.toFixed(4)})`)
    }
  }
  // Seuls les monuments, églises, parcs, lieux de loisirs/université et marchés sont placés (jamais les bars, boutiques ou restos :
  // leurs noms sont trop courants dans OpenStreetMap pour être sûrs d'avoir le bon lieu).
  const PLACEABLE = new Set(['monuments', 'eglises', 'parcs', 'loisirs', 'universite'])
  // La Giralda fait partie de la cathédrale : le seul résultat OSM trouvé n'est pas la tour, on ne la place pas.
  const NOT_PLACED = new Set(['giralda'])
  for (const p of allPlaces) {
    if (p.hood.outside || p.hood.toConfirm || NOT_PLACED.has(p.id)) continue
    if (!PLACEABLE.has(p.theme) && !p.id.startsWith('mercado-')) {
      continue
    }
    const vs = variants(p).map(norm).filter((v) => v.length >= 4)
    const hoodLL = [p.hood.lat, p.hood.lon]
    let matches = found.filter((f) => vs.some((v) => f.n === v || f.n.startsWith(`${v} `)))
    matches = matches.filter((f) => Math.hypot((f.lat - hoodLL[0]) * M_LAT, (f.lon - hoodLL[1]) * M_LON) < 1500)
    if (!matches.length) {
      report.push(`  ✗ ${p.id}`)
      continue
    }
    // On préfère une surface (bâtiment, parc, place) à un simple point, puis le plus proche du centre du quartier.
    const dist = (f) => Math.hypot(f.lat - hoodLL[0], f.lon - hoodLL[1])
    matches.sort((a, b) => (a.isNode - b.isNode) || dist(a) - dist(b))
    const m = matches[0]
    const [x, y] = project(m.lat, m.lon)
    placeCoords[p.id] = [r1(x), r1(y)]
    report.push(`  ✓ ${p.id} → ${m.name} (${matches.length})`)
  }
  console.log(report.join('\n'))
  console.log(`${Object.keys(placeCoords).length}/${allPlaces.length} lieux placés`)

  const header = '// Fichier généré par scripts/build-map.mjs : ne pas modifier à la main.\n// Données cartographiques © contributeurs OpenStreetMap (ODbL), simplifiées et projetées (1 unité = 2,5 m).\n'
  const mapData = {
    width: WIDTH,
    height: HEIGHT,
    bbox: BBOX,
    mLon: M_LON,
    mLat: M_LAT,
    unitsPerM: UNITS_PER_M,
    water,
    parks,
    rail,
    roads,
    streetLabels,
  }
  writeFileSync(
    join(root, 'src', 'data', 'mapData.js'),
    `${header}export const mapData = ${JSON.stringify(mapData)}\n\n` +
      `// Projette une latitude/longitude dans le repère de la carte.\n` +
      `export const project = (lat, lon) => [(lon - ${BBOX.w}) * ${M_LON} * ${UNITS_PER_M}, (${BBOX.n} - lat) * ${M_LAT} * ${UNITS_PER_M}]\n`,
  )
  writeFileSync(join(root, 'src', 'data', 'placeCoords.js'), `${header}export const placeCoords = ${JSON.stringify(placeCoords)}\n\nexport const hoodCoords = ${JSON.stringify(hoodCoords)}\n`)
  console.log(`Carte ${WIDTH}×${HEIGHT} unités écrite.`)
  for (const [k, v] of Object.entries(roads)) console.log(`  routes ${k}: ${(v.length / 1000).toFixed(0)} Ko`)
  console.log(`  eau ${(water.length / 1000).toFixed(0)} Ko, parcs ${(parks.length / 1000).toFixed(0)} Ko, rail ${(rail.length / 1000).toFixed(0)} Ko, noms de rues: ${streetLabels.length}`)
}

main()
