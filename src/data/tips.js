// Mes conseils, thème par thème.
//
// Pour ajouter un conseil :   tips: [{ title: 'Titre', text: 'Mon texte…' }]
// Pour ajouter une adresse :  addresses: [{ name: 'Nom', note: 'Pourquoi j’y vais', link: 'https://…' }]
// Tous les textes peuvent être une simple chaîne (français) ou { fr: '…', es: '…', en: '…' }.
// `themes` relie l'onglet aux thèmes de la carte (les lieux correspondants s'affichent en bas de l'onglet).

export const tabs = [
  { id: 'logement', icon: 'home', label: { fr: 'Logement', es: 'Alojamiento', en: 'Housing' }, tips: [], addresses: [] },
  { id: 'nourriture', icon: 'food', label: { fr: 'Nourriture', es: 'Comida', en: 'Food' }, themes: ['restos', 'cafes'], tips: [], addresses: [] },
  { id: 'universite', icon: 'school', label: { fr: 'Université', es: 'Universidad', en: 'University' }, themes: ['universite'], tips: [], addresses: [] },
  { id: 'esn', icon: 'people', label: { fr: 'Activités ESN', es: 'Actividades ESN', en: 'ESN activities' }, tips: [], addresses: [] },
  { id: 'sport', icon: 'ball', label: { fr: 'Sport', es: 'Deporte', en: 'Sport' }, tips: [], addresses: [] },
  { id: 'activites', icon: 'ticket', label: { fr: 'Activités', es: 'Actividades', en: 'Activities' }, themes: ['loisirs'], tips: [], addresses: [] },
  { id: 'transports', icon: 'bus', label: { fr: 'Transports', es: 'Transporte', en: 'Transport' }, tips: [], addresses: [] },
  { id: 'langue', icon: 'speech', label: { fr: 'Langue', es: 'Idioma', en: 'Language' }, tips: [], addresses: [], glossary: true },
  { id: 'budget', icon: 'coin', label: { fr: 'Budget', es: 'Presupuesto', en: 'Budget' }, tips: [], addresses: [] },
  { id: 'meteo', icon: 'weather', label: { fr: 'Météo et vêtements', es: 'Clima y ropa', en: 'Weather and clothes' }, tips: [], addresses: [] },
  { id: 'monuments', icon: 'tower', label: { fr: 'Monuments', es: 'Monumentos', en: 'Monuments' }, themes: ['monuments', 'eglises', 'parcs'], tips: [], addresses: [] },
  { id: 'bars', icon: 'glass', label: { fr: 'Bars et sorties', es: 'Bares y salidas', en: 'Bars and nightlife' }, themes: ['bars'], tips: [], addresses: [] },
  { id: 'voyages', icon: 'suitcase', label: { fr: 'Voyages à faire', es: 'Viajes por hacer', en: 'Trips to take' }, tips: [], addresses: [], trips: true },
]

// Vocabulaire de base : à compléter / corriger avec tes propres mots.
export const accent = [
  {
    fr: 'Les « s » en fin de syllabe sont souvent aspirés ou avalés : « los amigos » devient « loh amigoh ».',
    es: 'Las «s» a final de sílaba suelen aspirarse o perderse: «los amigos» suena «loh amigoh».',
    en: 'Syllable-final “s” is often aspirated or dropped: “los amigos” sounds like “loh amigoh”.',
  },
  {
    fr: 'Le « d » entre deux voyelles disparaît souvent : « cansado » se dit « cansao ».',
    es: 'La «d» entre vocales suele desaparecer: «cansado» suena «cansao».',
    en: 'The “d” between vowels often disappears: “cansado” sounds like “cansao”.',
  },
  {
    fr: 'Beaucoup de mots sont raccourcis : « para » → « pa », « nada » → « na ».',
    es: 'Muchas palabras se acortan: «para» → «pa», «nada» → «na».',
    en: 'Many words get shortened: “para” → “pa”, “nada” → “na”.',
  },
  {
    fr: 'Le débit est rapide et les consonnes finales tombent : au début, on ne comprend presque rien, et au bout de quelques semaines l’oreille s’habitue.',
    es: 'El ritmo es rápido y las consonantes finales se pierden: al principio casi no se entiende nada, pero en unas semanas el oído se acostumbra.',
    en: 'Speech is fast and final consonants drop: at first you barely understand anything, but your ear adapts within a few weeks.',
  },
]

export const glossary = [
  {
    term: 'Illo / Illa, Quillo / Quilla',
    fr: 'Interpellation familière entre amis (« mec », « eh »), venue de « chiquillo ».',
    es: 'Forma coloquial de llamar a un amigo («tío», «oye»), derivada de «chiquillo».',
    en: 'Casual way to address a friend (“dude”, “hey”), short for “chiquillo”.',
  },
  {
    term: 'Ozú',
    fr: 'Interjection très andalouse : surprise, admiration ou agacement.',
    es: 'Interjección muy andaluza: sorpresa, admiración o fastidio.',
    en: 'Very Andalusian interjection: surprise, admiration or annoyance.',
  },
  {
    term: 'Miarma',
    fr: 'Terme affectueux (de « mi alma »), à peu près « mon cœur ».',
    es: 'Apelativo cariñoso (de «mi alma»).',
    en: 'Affectionate term (from “mi alma”), roughly “my dear”.',
  },
  {
    term: 'Guiri',
    fr: 'Touriste ou étranger : pas forcément péjoratif, tu vas l’entendre souvent !',
    es: 'Turista o extranjero: no siempre despectivo, ¡lo oirás a menudo!',
    en: 'Tourist or foreigner: not necessarily rude, you’ll hear it often!',
  },
  {
    term: 'Una caña',
    fr: 'Un petit verre de bière pression, la commande de base au bar.',
    es: 'Un vaso pequeño de cerveza de barril, el pedido básico en el bar.',
    en: 'A small glass of draught beer, the standard bar order.',
  },
  {
    term: 'Tinto de verano',
    fr: 'Vin rouge allongé de limonade ou de soda, très rafraîchissant et bon marché.',
    es: 'Vino tinto con gaseosa o limonada, muy refrescante y económico.',
    en: 'Red wine mixed with fizzy lemonade, refreshing and cheap.',
  },
  {
    term: 'Rebujito',
    fr: 'La boisson de la Feria : vin sec andalou (fino ou manzanilla) avec une boisson gazeuse citronnée.',
    es: 'La bebida de la Feria: vino andaluz seco (fino o manzanilla) con un refresco de limón.',
    en: 'The Feria drink: dry Andalusian wine (fino or manzanilla) with a lemon soda.',
  },
  {
    term: 'Tapa / Media ración / Ración',
    fr: 'Les trois tailles d’une assiette à partager, de la plus petite à la plus grande.',
    es: 'Los tres tamaños de un plato para compartir, del más pequeño al más grande.',
    en: 'The three sizes of a dish to share, from smallest to biggest.',
  },
  {
    term: 'Ir de tapas / Tapear',
    fr: 'Faire le tour de plusieurs bars en prenant une boisson et une tapa dans chacun.',
    es: 'Ir de bar en bar tomando una bebida y una tapa en cada uno.',
    en: 'Bar-hopping with a drink and a tapa at each stop.',
  },
  {
    term: 'Pringá',
    fr: 'Petit sandwich garni de viande mijotée (cocido), un classique andalou.',
    es: 'Bocadillo de carne del cocido, un clásico andaluz.',
    en: 'Sandwich filled with slow-cooked stew meats, an Andalusian classic.',
  },
  {
    term: '¿Me pones…? / La cuenta, por favor',
    fr: '« Tu me mets… ? » (pour commander) et « L’addition, s’il vous plaît ».',
    es: 'Forma natural de pedir en el bar, y cómo pedir la cuenta.',
    en: 'The natural way to order at a bar, and how to ask for the bill.',
  },
  {
    term: 'Sobremesa',
    fr: 'Le temps passé à table à discuter après le repas : on ne se lève pas tout de suite !',
    es: 'El rato de charla en la mesa después de comer: ¡nadie se levanta enseguida!',
    en: 'The time spent chatting at the table after a meal: nobody rushes off.',
  },
]

// Mes destinations : remplis avis, transport, durée, budget, conseil (texte ou { fr, es, en }).
// Photo : src/photos/voyages/<id>.jpg
export const trips = [
  { id: 'cadiz', name: 'Cádiz', region: 'andalousie' },
  { id: 'cordoba', name: 'Córdoba', region: 'andalousie' },
  { id: 'granada', name: 'Granada', region: 'andalousie' },
  { id: 'ronda', name: 'Ronda', region: 'andalousie' },
  { id: 'setenil', name: 'Setenil de las Bodegas', region: 'andalousie' },
  { id: 'gibraltar', name: 'Gibraltar', region: 'gibraltar' },
  { id: 'lagos', name: 'Lagos', region: 'portugal' },
  { id: 'albufeira', name: 'Albufeira', region: 'portugal' },
  { id: 'madrid', name: 'Madrid', region: 'madrid' },
  { id: 'jerez', name: 'Jerez de la Frontera', region: 'andalousie' },
  { id: 'alcala', name: 'Alcalá de Guadaíra', region: 'andalousie' },
  { id: 'carmona', name: 'Carmona', region: 'andalousie' },
]
