// Thèmes de la carte (l'ordre est celui des filtres).
export const themes = [
  { id: 'monuments', icon: 'tower', label: { fr: 'Monuments', es: 'Monumentos', en: 'Monuments' } },
  { id: 'eglises', icon: 'church', label: { fr: 'Églises et couvents', es: 'Iglesias y conventos', en: 'Churches and convents' } },
  { id: 'parcs', icon: 'tree', label: { fr: 'Parcs et nature', es: 'Parques y naturaleza', en: 'Parks and nature' } },
  { id: 'restos', icon: 'food', label: { fr: 'Restos, tapas, marchés', es: 'Restaurantes, tapas, mercados', en: 'Restaurants, tapas, markets' } },
  { id: 'cafes', icon: 'cup', label: { fr: 'Cafés et douceurs', es: 'Cafés y dulces', en: 'Cafés and sweet treats' } },
  { id: 'bars', icon: 'glass', label: { fr: 'Bars et sorties', es: 'Bares y salidas', en: 'Bars and nightlife' } },
  { id: 'shopping', icon: 'bag', label: { fr: 'Shopping et mode', es: 'Compras y moda', en: 'Shopping and fashion' } },
  { id: 'universite', icon: 'school', label: { fr: 'Université', es: 'Universidad', en: 'University' } },
  { id: 'loisirs', icon: 'star', label: { fr: 'Loisirs et curiosités', es: 'Ocio y curiosidades', en: 'Leisure and curiosities' } },
]

// Pour chaque lieu : p(nom, thème, { desc, tip, check })
//   desc  = ma description (texte ou { fr, es, en })
//   tip   = mon conseil perso (texte ou { fr, es, en })
//   check = true si le thème est une supposition à vérifier (badge visible en mode développement uniquement)
// Photo : dépose un fichier dans src/photos/lieux/<id>.jpg (l'id = nom en minuscules, sans accents, avec des tirets,
// par ex. real-alcazar.jpg ; voir la liste des ids avec `npm run dev` : le chemin attendu s'affiche sous chaque photo vide).
const p = (name, theme, opts = {}) => ({ name, theme, ...opts })

const hoodDefs = [
  {
    id: 'santa-cruz',
    num: 1,
    lat: 37.3858,
    lon: -5.9895,
    name: 'Santa Cruz',
    places: [
      p('Real Alcázar', 'monuments'),
      p({ fr: 'Cathédrale de Séville', es: 'Catedral de Sevilla', en: 'Seville Cathedral' }, 'monuments'),
      p('Giralda', 'monuments'),
      p('Hospital de los Venerables', 'monuments'),
      p('Jardines de Murillo', 'parcs'),
    ],
  },
  {
    id: 'arenal',
    num: 2,
    lat: 37.3866,
    lon: -5.9982,
    name: 'El Arenal',
    places: [
      p('Torre del Oro', 'monuments'),
      p({ fr: 'Arènes de la Maestranza', es: 'Plaza de toros de la Maestranza', en: 'Maestranza Bullring' }, 'monuments'),
      p({ fr: 'Hôpital de la Charité', es: 'Hospital de la Caridad', en: 'Hospital de la Caridad' }, 'monuments'),
      p({ fr: 'Théâtre de la Maestranza', es: 'Teatro de la Maestranza', en: 'Maestranza Theatre' }, 'loisirs'),
      p('Muelle New York', 'loisirs', { check: true }),
    ],
  },
  {
    id: 'centro',
    num: 3,
    lat: 37.3887,
    lon: -5.9958,
    name: 'Centro',
    places: [
      p({ fr: 'Archives générales des Indes', es: 'Archivo General de Indias', en: 'General Archive of the Indies' }, 'monuments'),
      p({ fr: 'Hôtel de ville', es: 'Ayuntamiento', en: 'City Hall' }, 'monuments'),
      p('Plaza Nueva', 'monuments', { check: true }),
      p('HUMANA', 'shopping'),
      p('Coffee Corner', 'cafes'),
      p('Tea and Coffee', 'cafes'),
      p('Abril Sevilla', 'shopping', { check: true }),
      p('100 Montaditos', 'restos'),
      p('Pandora', 'shopping'),
      p('Sara Amaya Moda', 'shopping'),
    ],
  },
  {
    id: 'alfalfa',
    num: 4,
    lat: 37.3913,
    lon: -5.9922,
    name: 'Alfalfa',
    places: [
      p('Casa de Pilatos', 'monuments'),
      p('Iglesia del Salvador', 'eglises'),
      p('Plaza del Salvador', 'loisirs', { check: true }),
      p('Jester Acai', 'cafes'),
      p('La Gorda de las Delicias', 'cafes', { check: true }),
      p('Kukuchurro (Plaza del Salvador)', 'cafes'),
      p('Picu', 'restos', { check: true }),
      p('Tu Tortilla', 'restos'),
      p('Casa la Viuda', 'restos', { check: true }),
      p('Bar Mundial', 'restos', { check: true }),
      p('Tequila Bar', 'bars'),
    ],
  },
  {
    id: 'san-bartolome',
    num: 5,
    lat: 37.3897,
    lon: -5.9885,
    name: 'San Bartolomé',
    places: [
      p('Iglesia Santa María la Blanca', 'eglises'),
      p({ fr: 'Ancien quartier juif', es: 'Antigua judería', en: 'Former Jewish quarter' }, 'loisirs', { check: true }),
      p('Mosaico', 'restos', { check: true }),
      p('La Gitana Loca', 'restos', { check: true }),
      p('La Gorda de los Jardines', 'cafes', { check: true }),
      p('Casa Fabiola', 'restos', { check: true }),
      p('Casa de los Pinelo', 'monuments'),
      p({ fr: 'El Monasterio (heladería artisanale)', es: 'El Monasterio (heladería artesanal)', en: 'El Monasterio (artisan ice-cream shop)' }, 'cafes'),
    ],
  },
  {
    id: 'feria',
    num: 6,
    lat: 37.3978,
    lon: -5.9918,
    name: 'Feria',
    places: [
      p('Mercado de Feria', 'restos'),
      p('Iglesia de Omnium Sanctorum', 'eglises'),
      p('Palacio de los Marqueses de la Algaba', 'monuments'),
      p('Pastelería Los Angelitos de Santa Isabel', 'cafes'),
    ],
  },
  {
    id: 'alameda',
    num: 7,
    lat: 37.3992,
    lon: -5.9959,
    name: 'Alameda de Hércules',
    short: 'Alameda',
    places: [
      p({ fr: 'Colonnes historiques d’Hercule', es: 'Columnas históricas de Hércules', en: 'Historic Columns of Hercules' }, 'monuments'),
      p('Casa de las Sirenas', 'monuments', { check: true }),
      p('Ático', 'bars', { check: true }),
      p('Selvatico', 'bars', { check: true }),
      p('Cafetería Orfeo', 'cafes'),
      p('Cervecería Bar La Maceta', 'bars'),
      p('Alameda Ritual Club', 'bars'),
      p('Plan B', 'bars', { check: true }),
      p('La Tizna', 'bars', { check: true }),
      p('Bar El Comercio', 'cafes', { check: true }),
    ],
  },
  {
    id: 'triana',
    num: 8,
    lat: 37.3845,
    lon: -6.0035,
    name: 'Triana',
    places: [
      p('Mercado de Triana', 'restos'),
      p('Castillo de San Jorge', 'monuments'),
      p('Iglesia de Santa Ana', 'eglises'),
      p('Calle Betis', 'bars', { check: true }),
      p('Puente de Isabel II', 'monuments'),
      p('Tijuana Tex Mex', 'restos'),
      p('Iguana Terraza', 'bars', { check: true }),
      p('Líbano Club', 'bars', { check: true }),
      p('Casa Félix restaurante', 'restos'),
      p('Titi Burger', 'restos'),
    ],
  },
  {
    id: 'remedios',
    num: 9,
    lat: 37.3755,
    lon: -6.0035,
    name: 'Los Remedios',
    places: [
      p('Parque de los Príncipes', 'parcs'),
      p('Iglesia de Nuestra Señora de los Remedios', 'eglises'),
    ],
  },
  {
    id: 'macarena',
    num: 10,
    lat: 37.4036,
    lon: -5.9906,
    name: 'La Macarena',
    places: [
      p({ fr: 'Basilique de la Macarena', es: 'Basílica de la Macarena', en: 'Macarena Basilica' }, 'eglises'),
      p({ fr: 'Anciennes murailles', es: 'Antiguas murallas', en: 'Old city walls' }, 'monuments'),
      p('Arco de la Macarena', 'monuments'),
      p('Parlamento de Andalucía', 'monuments'),
      p('Monasterio de San Jerónimo de Buenavista', 'eglises'),
      p('El nacimiento del hombre huevo', 'loisirs', { check: true }),
    ],
  },
  {
    id: 'san-lorenzo',
    num: 11,
    lat: 37.3965,
    lon: -5.999,
    name: 'San Lorenzo',
    places: [
      p({ fr: 'Basilique de Jesús del Gran Poder', es: 'Basílica de Jesús del Gran Poder', en: 'Basilica of Jesús del Gran Poder' }, 'eglises'),
      p('Iglesia de San Lorenzo', 'eglises'),
      p({ fr: 'Monastère de Santa Clara', es: 'Monasterio de Santa Clara', en: 'Convent of Santa Clara' }, 'eglises'),
    ],
  },
  {
    id: 'san-julian',
    num: 12,
    lat: 37.3992,
    lon: -5.9885,
    name: 'San Julián',
    places: [p('Iglesia de San Julián', 'eglises'), p('Iglesia de Santa Marina', 'eglises')],
  },
  {
    id: 'maria-luisa',
    num: 13,
    lat: 37.3768,
    lon: -5.987,
    name: 'Porvenir / Parque de María Luisa',
    short: 'María Luisa',
    places: [
      p('Parque de María Luisa', 'parcs'),
      p('Facultad de Biología (US)', 'universite'),
      p('Facultad de Filología (US)', 'universite'),
      p('Facultad de Economía', 'universite'),
      p('Facultad de Derecho', 'universite'),
    ],
  },
  {
    id: 'nervion',
    num: 14,
    lat: 37.381,
    lon: -5.971,
    name: { fr: 'Quartier universitaire de Viapol / Nervión', es: 'Barrio universitario de Viapol / Nervión', en: 'Viapol / Nervión university district' },
    short: 'Nervión',
    places: [p('Udon Viapol', 'restos'), p('Tapas Enramadilla', 'restos')],
  },
  {
    id: 'hors-centre',
    num: 15,
    outside: true,
    name: { fr: 'Hors du centre (nord et périphérie)', es: 'Fuera del centro (norte y periferia)', en: 'Outside the centre (north and outskirts)' },
    short: { fr: 'Hors du centre', es: 'Fuera del centro', en: 'Outside the centre' },
    places: [
      p('Parque del Alamillo', 'parcs'),
      p('Parque Miraflores', 'parcs'),
      p({ fr: 'Centre commercial Lagoh', es: 'Centro comercial Lagoh', en: 'Lagoh shopping centre' }, 'shopping'),
      p('Universidad Pablo de Olavide', 'universite'),
      p({ fr: 'Aquarium de Séville', es: 'Acuario de Sevilla', en: 'Seville Aquarium' }, 'loisirs'),
    ],
  },
  {
    // Quartier inconnu : je ne devine pas, à confirmer avec toi.
    id: 'a-confirmer',
    num: null,
    toConfirm: true,
    name: { fr: 'À confirmer', es: 'Por confirmar', en: 'To be confirmed' },
    places: [
      p('KOKO', 'bars'),
      p('Antique', 'bars'),
      p('Uthopia', 'bars'),
      p('Voulezvous Bar', 'bars'),
    ],
  },
]

function slugify(name) {
  const base = typeof name === 'string' ? name : name.fr
  return base
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const usedIds = new Set()

export const hoods = hoodDefs.map((hood) => ({
  ...hood,
  places: hood.places.map((place) => {
    let id = slugify(place.name)
    if (usedIds.has(id)) id = `${hood.id}-${id}`
    usedIds.add(id)
    return { ...place, id, hood: hood.id }
  }),
}))

export const allPlaces = hoods.flatMap((h) => h.places)
