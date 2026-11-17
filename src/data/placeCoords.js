// Coordonnées GPS [latitude, longitude] des lieux de la carte, vérifiées une par une dans OpenStreetMap
// (© contributeurs OpenStreetMap, ODbL). Le commentaire indique l'objet OpenStreetMap utilisé.
//
// Un lieu absent de cette liste n'a volontairement pas de point : soit il n'existe pas dans OpenStreetMap,
// soit son nom est ambigu (chaîne avec plusieurs adresses, homonyme…) et je n'ai pas voulu risquer une erreur.
// Pour en ajouter un : clic droit sur l'endroit exact dans Google Maps ou OpenStreetMap, copier « latitude, longitude ».
export const placeCoords = {
  // Santa Cruz
  'real-alcazar': [37.38321, -5.99018], // Real Alcázar de Sevilla
  'cathedrale-de-seville': [37.38591, -5.99314], // Catedral de Sevilla
  giralda: [37.38621, -5.99256], // La Giralda
  'hospital-de-los-venerables': [37.38524, -5.99033], // Hospital de los Venerables
  'jardines-de-murillo': [37.38368, -5.98783], // Jardines de Murillo

  // El Arenal
  'torre-del-oro': [37.3824, -5.99632], // Torre del Oro
  'arenes-de-la-maestranza': [37.3859, -5.99842], // Plaza de Toros de la Real Maestranza
  'hopital-de-la-charite': [37.38408, -5.99522], // Hospital de la Santa Caridad
  'theatre-de-la-maestranza': [37.38407, -5.99667], // Teatro de la Maestranza
  'muelle-new-york': [37.3764, -5.99276], // Muelle de Nueva York (quai)

  // Centro
  'archives-generales-des-indes': [37.38471, -5.99304], // Archivo de Indias (musée)
  'hotel-de-ville': [37.38868, -5.99448], // Ayuntamiento de Sevilla
  'plaza-nueva': [37.38896, -5.99601], // Plaza Nueva
  humana: [37.39149, -5.99676], // Humana Vintage, calle O'Donnell 32 (la boutique Humana du Centro)

  // Alfalfa
  'casa-de-pilatos': [37.39024, -5.98725], // Casa de Pilatos
  'iglesia-del-salvador': [37.39007, -5.99269], // Iglesia del Salvador
  'plaza-del-salvador': [37.39008, -5.99313], // Plaza del Salvador
  'jester-acai': [37.38958, -5.99629], // Jester Specialty Coffee & Açai
  'la-gorda-de-las-delicias': [37.38205, -5.99545], // La Gorda de las Delicias, paseo de las Delicias 3
  'kukuchurro-plaza-del-salvador': [37.39041, -5.99315], // Kukuchurro
  'casa-la-viuda': [37.38955, -5.99465], // Casa La Viuda

  // San Bartolomé
  'iglesia-santa-maria-la-blanca': [37.38654, -5.9873], // Iglesia Santa María la Blanca
  'ancien-quartier-juif': [37.38736, -5.98942], // Muralla de la Judería
  'casa-fabiola': [37.3872, -5.98928], // Casa Fabiola, calle Fabiola 5
  'casa-de-los-pinelo': [37.3877, -5.99116], // Casa de los Pinelo

  // Feria
  'mercado-de-feria': [37.39946, -5.99152], // Mercado de Abastos Calle Feria
  'iglesia-de-omnium-sanctorum': [37.39919, -5.99128], // Parroquia de Omnium Sanctorum
  'palacio-de-los-marqueses-de-la-algaba': [37.39947, -5.99073], // Palacio de los Marqueses de la Algaba

  // Alameda de Hércules
  'casa-de-las-sirenas': [37.39914, -5.99442], // Centro Cívico Casa de las Sirenas
  'cafeteria-orfeo': [37.39549, -5.99571], // Orfeo Cafe Bar, calle Jesús del Gran Poder 19
  'plan-b': [37.39774, -5.99338], // Plan B
  'bar-el-comercio': [37.39081, -5.99236], // El Comercio, calle Lineros 9

  // Triana
  'mercado-de-triana': [37.38575, -6.00357], // Mercado de Triana
  'castillo-de-san-jorge': [37.38572, -6.00317], // Castillo de San Jorge
  'iglesia-de-santa-ana': [37.38286, -6.00047], // Parroquia de Santa Ana
  'calle-betis': [37.38284, -6.0002], // Calle Betis
  'puente-de-isabel-ii': [37.38628, -6.00243], // Puente de Isabel II
  'tijuana-tex-mex': [37.37285, -5.99729], // Tijuana Tex Mex, calle Asunción 67

  // Los Remedios
  'parque-de-los-principes': [37.37394, -6.00622], // Parque de los Príncipes
  'iglesia-de-nuestra-senora-de-los-remedios': [37.37596, -5.9994], // Parroquia Nuestra Señora de los Remedios

  // La Macarena
  'basilique-de-la-macarena': [37.40247, -5.98943], // Basílica de Santa María de la Esperanza Macarena
  'anciennes-murailles': [37.40155, -5.98722], // Murallas de Sevilla
  'arco-de-la-macarena': [37.40278, -5.98924], // Puerta de la Macarena
  'parlamento-de-andalucia': [37.40517, -5.9885], // Parlamento de Andalucía
  'monasterio-de-san-jeronimo-de-buenavista': [37.42368, -5.98662], // Monasterio de San Jerónimo
  'el-nacimiento-del-hombre-huevo': [37.4275, -5.99281], // El Nacimiento del Hombre Nuevo

  // San Lorenzo
  'basilique-de-jesus-del-gran-poder': [37.39718, -5.99615], // Basílica del Gran Poder
  'iglesia-de-san-lorenzo': [37.39736, -5.99661], // Parroquia de San Lorenzo
  'monastere-de-santa-clara': [37.40002, -5.99573], // Monasterio de Santa Clara

  // San Julián
  'iglesia-de-san-julian': [37.3988, -5.98522], // Parroquia de San Julián
  'iglesia-de-santa-marina': [37.39901, -5.98776], // Iglesia de Santa Marina

  // Porvenir / Parque de María Luisa
  'parque-de-maria-luisa': [37.37477, -5.98879], // Parque de María Luisa
  'facultad-de-biologia-us': [37.36045, -5.98688], // Facultad de Biología
  'facultad-de-filologia-us': [37.38073, -5.99083], // Antigua Fábrica de Tabacos (Rectorado), qui abrite la Facultad de Filología
  'facultad-de-economia': [37.37819, -5.97644], // Facultad de Económicas, avenida Ramón y Cajal 1
  'facultad-de-derecho': [37.37728, -5.9781], // Facultad de Derecho

  // Viapol / Nervión
  'udon-viapol': [37.37885, -5.97882], // UDON

  // Hors du centre
  'parque-del-alamillo': [37.4183, -5.99563], // Parque del Alamillo
  'parque-miraflores': [37.4145, -5.95868], // Parque de Miraflores
  'centre-commercial-lagoh': [37.34244, -5.98763], // Centro comercial Lagoh
  'universidad-pablo-de-olavide': [37.35556, -5.93882], // Universidad Pablo de Olavide
  'aquarium-de-seville': [37.37054, -5.99109], // Acuario de Sevilla

  // À confirmer (quartier inconnu, mais l'emplacement est sûr)
  koko: [37.39361, -5.99146], // Koko (boîte de nuit), près de la Plaza de la Encarnación
  antique: [37.40503, -6.00107], // Discoteca Antique, Isla de la Cartuja
  uthopia: [37.39105, -6.00257], // Uthopia (boîte de nuit), Plaza de la Legión
}
