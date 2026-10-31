// Mes conseils, thème par thème.
//
// Pour ajouter un conseil :   tips: [{ title: 'Titre', text: 'Mon texte…' }]
// Pour ajouter une adresse :  addresses: [{ name: 'Nom', note: 'Pourquoi j’y vais', link: 'https://…' }]
// Tous les textes peuvent être une simple chaîne (français) ou { fr: '…', es: '…', en: '…' }.
// `themes` relie l'onglet aux thèmes de la carte (les lieux correspondants s'affichent en bas de l'onglet).

const text = (fr, es, en) => ({ fr, es, en })
const tip = (title, body, titleEs, bodyEs, titleEn, bodyEn) => ({
  title: text(title, titleEs, titleEn),
  text: text(body, bodyEs, bodyEn),
})
const address = (name, note, nameEs = name, noteEs = note, nameEn = name, noteEn = note) => ({
  name: text(name, nameEs, nameEn),
  note: text(note, noteEs, noteEn),
})

export const tabs = [
  {
    id: 'logement', icon: 'home', label: { fr: 'Logement', es: 'Alojamiento', en: 'Housing' },
    tips: [
      tip('Anticipe ta recherche', 'J’ai commencé à chercher environ deux mois avant le départ.', 'Busca con antelación', 'Empecé a buscar alojamiento unos dos meses antes de irme.', 'Start looking early', 'I started looking for accommodation about two months before leaving.'),
      tip('Évite les grandes colocations', 'J’ai vécu avec neuf colocataires (dix personnes au total) et c’était trop. Je choisirais cinq personnes maximum.', 'Evita los pisos compartidos grandes', 'Viví con nueve compañeros (diez personas en total) y éramos demasiados. Elegiría un máximo de cinco personas.', 'Avoid large shared flats', 'I lived with nine flatmates (ten people in total), which was too many. I would choose a place with no more than five people.'),
      tip('Vérifie les espaces communs', 'Privilégie un salon et une cuisine avec une grande table. Dans ma colocation, la cuisine était minuscule et déjà pleine dès 21 h.', 'Comprueba las zonas comunes', 'Busca un salón y una cocina con una mesa grande. En mi piso, la cocina era diminuta y ya estaba llena a las nueve de la noche.', 'Check the shared spaces', 'Look for a living room and a kitchen with a large table. In my flat, the kitchen was tiny and already full by 9 p.m.'),
      tip('Cherche la climatisation', 'Je n’en avais pas et j’ai dû acheter un ventilateur.', 'Busca aire acondicionado', 'Yo no tenía y tuve que comprar un ventilador.', 'Look for air conditioning', 'I did not have it and had to buy a fan.'),
      tip('Prévois ton budget logement', 'Compte environ 400 à 450 € dans un bon quartier, moins si tu acceptes de vivre plus loin. Je payais 530 €, assez cher pour Séville, mais j’avais une salle de bain privée et une grande terrasse.', 'Calcula el presupuesto del alojamiento', 'Cuenta con unos 400-450 € en un buen barrio, menos si no te importa vivir más lejos. Yo pagaba 530 €, bastante caro para Sevilla, pero tenía baño privado y una terraza grande.', 'Budget for accommodation', 'Allow around €400–450 in a good neighbourhood, less if you are happy to live farther out. I paid €530, quite expensive for Seville, but had a private bathroom and a large terrace.'),
    ],
    addresses: [address('Prado de San Sebastián', 'Quartier central, près de la Plaza de España, avec des arrêts de bus et de métro.', 'Prado de San Sebastián', 'Barrio céntrico, cerca de la Plaza de España y con paradas de autobús y metro.', 'Prado de San Sebastián', 'A central neighbourhood near Plaza de España, with bus and metro stops.')],
  },
  {
    id: 'nourriture', icon: 'food', label: { fr: 'Nourriture', es: 'Comida', en: 'Food' }, themes: ['restos', 'cafes'],
    tips: [
      tip('Prévois le budget courses', 'Je dépensais environ 40 à 50 € par semaine en courses.', 'Calcula el gasto de la compra', 'Gastaba unos 40-50 € por semana en la compra.', 'Budget for groceries', 'I spent about €40–50 a week on groceries.'),
      tip('Choisis ton supermarché', 'Je faisais mes courses au Mas&Go, près de chez moi, mais je conseille plutôt Mercadona, Dia ou Lidl.', 'Elige bien el supermercado', 'Compraba en Mas&Go, cerca de casa, pero recomiendo Mercadona, Dia o Lidl.', 'Choose your supermarket', 'I shopped at Mas&Go near home, but I would recommend Mercadona, Dia or Lidl instead.'),
      tip('Fais une tournée de tapas', 'C’est une bonne façon de découvrir les spécialités locales.', 'Haz una ruta de tapas', 'Es una buena forma de descubrir las especialidades locales.', 'Go on a tapas tour', 'It is a great way to discover local specialities.'),
      tip('Goûte les spécialités', 'À essayer : croquetas, tortilla, lagrimitas de pollo, queso de cabra con mermelada de arándanos, jamón ibérico et solomillo al whisky.', 'Prueba las especialidades', 'No te pierdas las croquetas, la tortilla, las lagrimitas de pollo, el queso de cabra con mermelada de arándanos, el jamón ibérico y el solomillo al whisky.', 'Try the local dishes', 'Try croquetas, Spanish tortilla, lagrimitas de pollo, goat cheese with blueberry jam, Iberian ham and pork sirloin in whisky sauce.'),
    ],
    addresses: [
      address('Tapas Enramadilla', 'Une de mes adresses préférées.', 'Tapas Enramadilla', 'Uno de mis sitios favoritos.', 'Tapas Enramadilla', 'One of my favourite places.'),
      address('Gorda de los Jardines', 'Restaurant que j’aimais beaucoup.', 'Gorda de los Jardines', 'Un restaurante que me gustaba mucho.', 'Gorda de los Jardines', 'A restaurant I really liked.'),
      address('Casa la Viuda', 'Une autre adresse à tapas que j’ai appréciée.', 'Casa la Viuda', 'Otro bar de tapas que me gustó.', 'Casa la Viuda', 'Another tapas place I enjoyed.'),
      address('Mercadona, Dia et Lidl', 'Supermarchés conseillés pour faire les courses.', 'Mercadona, Dia y Lidl', 'Supermercados recomendados para hacer la compra.', 'Mercadona, Dia and Lidl', 'Recommended supermarkets for groceries.'),
    ],
  },
  {
    id: 'universite', icon: 'school', label: { fr: 'Université', es: 'Universidad', en: 'University' }, themes: ['universite'],
    tips: [
      tip('Règle les démarches avant de partir', 'Cela évite le stress des premiers jours.', 'Resuelve los trámites antes de irte', 'Así evitarás el estrés de los primeros días.', 'Sort out paperwork before leaving', 'This helps avoid stress during your first few days.'),
      tip('Ouvre un compte bancaire local', 'J’ai ouvert un compte Santander pour payer l’université à mon arrivée ; la démarche a été très rapide.', 'Abre una cuenta bancaria local', 'Abrí una cuenta en Santander para pagar la universidad al llegar; el trámite fue muy rápido.', 'Open a local bank account', 'I opened a Santander account to pay the university when I arrived; it was very quick.'),
      tip('Choisis la langue de tes examens', 'Je pouvais passer les examens en anglais ou en espagnol et utiliser un dictionnaire papier. J’ai choisi l’espagnol.', 'Elige el idioma de los exámenes', 'Podía hacer los exámenes en inglés o español y utilizar un diccionario en papel. Elegí el español.', 'Choose your exam language', 'I could take exams in English or Spanish and use a paper dictionary. I chose Spanish.'),
      tip('Renseigne-toi sur la charge de travail', 'Globalement, mes cours étaient faciles à valider. Je m’attendais à beaucoup plus de travail et j’avais parfois l’impression d’être en vacances.', 'Infórmate sobre la carga de trabajo', 'En general, mis asignaturas eran fáciles de aprobar. Esperaba mucho más trabajo y a veces tenía la sensación de estar de vacaciones.', 'Find out about the workload', 'Overall, my courses were easy to pass. I expected much more work and sometimes felt as if I were on holiday.'),
      tip('Vérifie les horaires', 'Les cours étaient généralement de 9 h à 14 h ou 15 h. Avril a été plus chargé pour moi, avec des cours supplémentaires de 16 h à 20 h dans un autre master.', 'Comprueba los horarios', 'Normalmente tenía clase de 9 a 14 o 15 h. Para mí, abril fue más intenso, con clases adicionales de 16 a 20 h en otro máster.', 'Check the timetable', 'Classes were generally from 9 a.m. to 2 or 3 p.m. April was busier for me, with extra classes from 4 to 8 p.m. for another master’s programme.'),
      tip('Choisis tes cours selon ton projet', 'Je recommande tous les cours que j’ai suivis, mais le bon choix dépend de tes objectifs.', 'Elige las asignaturas según tus objetivos', 'Recomiendo todas las asignaturas que cursé, pero la elección depende de lo que quieras hacer.', 'Choose courses to fit your goals', 'I recommend all the courses I took, but the best choice depends on your plans.'),
    ],
    addresses: [
      address('Campus Reina Mercedes', 'Université de Séville — cours de biologie.', 'Campus Reina Mercedes', 'Universidad de Sevilla: clases de biología.', 'Reina Mercedes campus', 'University of Seville — biology classes.'),
      address('Université Pablo de Olavide', 'Campus où je suivais les cours d’ingénierie agronomique.', 'Universidad Pablo de Olavide', 'Campus donde cursaba ingeniería agronómica.', 'Pablo de Olavide University', 'Campus where I took agricultural engineering courses.'),
    ],
  },
  {
    id: 'esn', icon: 'people', label: { fr: 'Activités ESN', es: 'Actividades ESN', en: 'ESN activities' },
    tips: [
      tip('Participe aux activités', 'C’est un excellent moyen de rencontrer des étudiants de nombreuses nationalités. Les activités de l’ESN ont rempli mes semaines.', 'Participa en las actividades', 'Es una forma estupenda de conocer a estudiantes de muchas nacionalidades. Las actividades de la ESN llenaban mis semanas.', 'Join the activities', 'They are a great way to meet students from many countries. ESN activities filled my weeks.'),
      tip('Ne rate pas la tournée des tapas', 'C’est une excellente activité pour découvrir les spécialités.', 'No te pierdas la ruta de tapas', 'Es una actividad genial para descubrir las especialidades.', 'Do not miss the tapas tour', 'It is a great way to discover local specialities.'),
      tip('Essaie plusieurs activités', 'Visite de la ville, pub crawl, soirées baby-foot, tour cofrade, cours de sevillanas, bars, voyages et soirées : il y a beaucoup de choix.', 'Prueba distintas actividades', 'Visita por la ciudad, pub crawl, noches de futbolín, ruta cofrade, clases de sevillanas, bares, viajes y fiestas: hay muchas opciones.', 'Try a range of activities', 'There are city tours, pub crawls, table football nights, Holy Week tours, sevillanas classes, bars, trips and parties.'),
    ],
    addresses: [address('ESN Sevilla', 'Suis son compte Instagram pour connaître le programme des activités.', 'ESN Sevilla', 'Sigue su cuenta de Instagram para enterarte de las actividades.', 'ESN Seville', 'Follow its Instagram account to keep up with the activity schedule.')],
  },
  {
    id: 'sport', icon: 'ball', label: { fr: 'Sport', es: 'Deporte', en: 'Sport' },
    tips: [tip('Inscris-toi sur place', 'Renseigne-toi sur les activités sportives et les installations proposées aux étudiants une fois arrivé(e).', 'Apúntate al llegar', 'Al llegar, infórmate sobre las actividades deportivas y las instalaciones para estudiantes.', 'Sign up after you arrive', 'Once there, ask about sports activities and facilities available to students.')],
    addresses: [
      address('SADUS', 'Centre d’activités sportives de l’Université de Séville.', 'SADUS', 'Centro de actividades deportivas de la Universidad de Sevilla.', 'SADUS', 'Sports activities centre at the University of Seville.'),
      address('Installations municipales (IMD)', 'Autres installations sportives publiques.', 'Instalaciones municipales (IMD)', 'Otras instalaciones deportivas públicas.', 'Municipal facilities (IMD)', 'Other public sports facilities.'),
    ],
  },
  {
    id: 'activites', icon: 'ticket', label: { fr: 'Activités', es: 'Actividades', en: 'Activities' }, themes: ['loisirs'],
    tips: [
      tip('Vis la Semana Santa', 'Essaie de voir un maximum de processions. Si possible, accompagne-toi de Sévillans qui pourront t’expliquer les pasos. La nuit du Jeudi saint au Vendredi saint est impressionnante, mais très fatigante car les processions durent toute la nuit.', 'Vive la Semana Santa', 'Intenta ver el mayor número posible de procesiones. Si puedes, ve con sevillanos que te expliquen los pasos. La noche del Jueves Santo al Viernes Santo es impresionante, pero muy agotadora porque hay procesiones toda la noche.', 'Experience Semana Santa', 'Try to see as many processions as you can. If possible, go with locals who can explain the pasos. The night from Maundy Thursday into Good Friday is spectacular but exhausting, with processions all night.'),
      tip('Profite de la Feria de Abril', 'Essaie de te faire inviter dans une caseta privée : la Feria est surtout familiale et peut être difficile d’accès pour les touristes. Sinon, il y a des casetas publiques et la fête foraine. Vas-y le soir, entre 21 h et 4 h, goûte le rebujito et prévois du temps pour récupérer.', 'Disfruta de la Feria de Abril', 'Intenta que te inviten a una caseta privada: la Feria es sobre todo familiar y puede ser difícil acceder para los turistas. También hay casetas públicas y atracciones. Ve por la noche, de 21 a 4 h, prueba el rebujito y reserva tiempo para descansar.', 'Enjoy the April Fair', 'Try to get invited to a private caseta: the fair is mainly a family event and can be hard for tourists to access. There are public casetas and a fairground too. Go in the evening, from 9 p.m. to 4 a.m., try rebujito and leave time to recover.'),
      tip('Pas d’invitation ? Essaie Jerez', 'La Feria de Jerez de la Frontera est une bonne option : l’entrée y est libre.', '¿No tienes invitación? Prueba Jerez', 'La Feria de Jerez de la Frontera es una buena alternativa: la entrada es libre.', 'No invitation? Try Jerez', 'The Jerez de la Frontera Feria is a good alternative, with free entry.'),
      tip('Fais une balade près du fleuve', 'Pour te détendre, promène-toi avec tes amis près du pont de Triana.', 'Pasea junto al río', 'Para relajarte, da un paseo con tus amigos cerca del puente de Triana.', 'Take a riverside walk', 'For a relaxing break, go for a walk with friends near Triana Bridge.'),
    ],
    addresses: [
      address('Hermandades de Pino Montano, la Corona, la Paz et Santa Genoveva', 'Mes processions préférées de la Semana Santa.', 'Hermandades de Pino Montano, la Corona, la Paz y Santa Genoveva', 'Mis procesiones favoritas de la Semana Santa.', 'Pino Montano, la Corona, la Paz and Santa Genoveva brotherhoods', 'My favourite Semana Santa processions.'),
      address('Pont de Triana', 'Un joli endroit pour se promener.', 'Puente de Triana', 'Un lugar agradable para pasear.', 'Triana Bridge', 'A lovely place for a walk.'),
      address('Feria de Jerez de la Frontera', 'L’entrée est libre.', 'Feria de Jerez de la Frontera', 'La entrada es libre.', 'Jerez de la Frontera Feria', 'Free entry.'),
    ],
  },
  {
    id: 'transports', icon: 'bus', label: { fr: 'Transports', es: 'Transporte', en: 'Transport' },
    tips: [
      tip('Déplace-toi en bus ou à pied', 'Dans Séville, le bus et la marche suffisent souvent. Je prenais le bus pour aller en cours et le métro pour rejoindre la banlieue.', 'Muévete en autobús o a pie', 'En Sevilla, normalmente basta con el autobús o ir a pie. Yo cogía el autobús para ir a clase y el metro para llegar a las afueras.', 'Use buses or walk', 'In Seville, buses and walking are often enough. I took the bus to class and the metro to reach the suburbs.'),
      tip('Choisis un logement bien situé', 'Un quartier central facilite les trajets en bus et en métro.', 'Elige un alojamiento bien situado', 'Un barrio céntrico facilita los desplazamientos en autobús y metro.', 'Choose a well-connected home', 'A central neighbourhood makes it easier to get around by bus and metro.'),
      tip('Réserve les voyages en avance', 'Pour voyager, je réservais surtout les bus avec Alsa et les trains avec Ouigo.', 'Reserva los viajes con antelación', 'Para viajar, reservaba sobre todo autobuses con Alsa y trenes con Ouigo.', 'Book trips ahead', 'For trips, I mostly booked buses with Alsa and trains with Ouigo.'),
    ],
    addresses: [address('Alsa', 'Compagnie de bus utilisée pour la plupart de mes voyages.', 'Alsa', 'Compañía de autobuses que utilicé para la mayoría de mis viajes.', 'Alsa', 'The bus company I used for most of my trips.'), address('Ouigo', 'Option de train pour certains voyages.', 'Ouigo', 'Opción de tren para algunos viajes.', 'Ouigo', 'Train option for some trips.')],
  },
  {
    id: 'langue', icon: 'speech', label: { fr: 'Langue', es: 'Idioma', en: 'Language' }, glossary: true,
    tips: [
      tip('Pars avec quelques bases', 'J’étais B1 au départ et B2 à la fin. Je conseille vivement d’avoir déjà quelques bases en espagnol.', 'Ve con una base de español', 'Empecé con un nivel B1 y terminé con un B2. Recomiendo tener ya algunas nociones de español.', 'Go with some Spanish basics', 'I was at B1 when I arrived and B2 by the end. I strongly recommend having some basic Spanish already.'),
      tip('Ne crains pas l’accent andalou', 'Il est réputé comme l’un des plus difficiles d’Espagne, mais après deux semaines de cours, il ne me gênait plus.', 'No tengas miedo al acento andaluz', 'Tiene fama de ser uno de los más difíciles de España, pero después de dos semanas de clase ya no me molestaba.', 'Do not be afraid of the Andalusian accent', 'It is considered one of Spain’s hardest accents, but after two weeks of classes it no longer bothered me.'),
      tip('Parle espagnol dès que possible', 'Je parlais rarement français. Discuter avec des Andalous, en classe ou ailleurs, m’a énormément aidée à progresser.', 'Habla español siempre que puedas', 'Casi nunca hablaba francés. Conversar con andaluces, en clase o fuera, me ayudó muchísimo a mejorar.', 'Speak Spanish as much as you can', 'I rarely spoke French. Talking with Andalusians, in and out of class, helped me improve enormously.'),
    ], addresses: [],
  },
  {
    id: 'budget', icon: 'coin', label: { fr: 'Budget', es: 'Presupuesto', en: 'Budget' },
    tips: [
      tip('Renseigne-toi sur les aides', 'La bourse Erasmus et d’autres bourses françaises m’ont permis de ne pas trop me priver.', 'Infórmate sobre las ayudas', 'La beca Erasmus y otras becas francesas me permitieron no tener que privarme demasiado.', 'Look into grants', 'The Erasmus grant and other French grants meant I did not have to cut back too much.'),
      tip('Repères de dépenses', 'Mon loyer était de 530 € par mois ; les courses coûtaient environ 40 à 50 € par semaine, les sorties au moins 30 € par semaine, et les voyages au moins 30 € pour une journée ou 150 € pour un week-end.', 'Gastos orientativos', 'Pagaba 530 € de alquiler al mes; la compra costaba unos 40-50 € por semana, las salidas al menos 30 € semanales y los viajes como mínimo 30 € por un día o 150 € por un fin de semana.', 'Typical expenses', 'My rent was €530 a month; groceries cost about €40–50 a week, going out at least €30 a week, and trips at least €30 for a day or €150 for a weekend.'),
      tip('Vérifie tes frais bancaires et ton forfait', 'Ma banque ne facturait pas les achats en Europe, mais des frais peuvent s’appliquer à Gibraltar. Vérifie aussi que ton forfait téléphonique inclut l’Europe et que ton assurance couvre ta mobilité.', 'Comprueba las comisiones y tu tarifa', 'Mi banco no cobraba por compras en Europa, pero en Gibraltar pueden aplicarse comisiones. Comprueba también que tu tarifa de teléfono incluya Europa y que el seguro cubra tu movilidad.', 'Check bank fees and your phone plan', 'My bank did not charge for purchases in Europe, but fees may apply in Gibraltar. Also check that your phone plan includes Europe and your insurance covers your stay.'),
    ],
    addresses: [address('Santander', 'J’y ai ouvert un compte bancaire espagnol pour payer l’université.', 'Santander', 'Abrí una cuenta bancaria española para pagar la universidad.', 'Santander', 'I opened a Spanish bank account here to pay the university.')],
  },
  {
    id: 'meteo', icon: 'weather', label: { fr: 'Météo et vêtements', es: 'Clima y ropa', en: 'Weather and clothes' },
    tips: [
      tip('Emporte des vêtements chauds', 'Février peut être froid, et cette année-là il l’était particulièrement. Les matins restent frais jusqu’à la mi-mars environ.', 'Lleva ropa de abrigo', 'Febrero puede ser frío, y aquel año lo fue especialmente. Las mañanas siguen frescas hasta mediados de marzo.', 'Pack warm clothes', 'February can be cold, and that year was especially chilly. Mornings stay cool until around mid-March.'),
      tip('Prévois aussi des tenues d’été', 'J’avais emporté des vêtements d’été, des vêtements de sport, des tenues de soirée et plusieurs paires de chaussures.', 'Lleva también ropa de verano', 'Llevé ropa de verano, ropa deportiva, conjuntos para salir y varios pares de zapatos.', 'Pack summer clothes too', 'I packed summer clothes, sportswear, outfits for going out and several pairs of shoes.'),
      tip('Profite du printemps et prépare-toi à la chaleur', 'Mars et le printemps sont une très belle période à Séville. En mai et juin, hydrate-toi bien et privilégie un logement avec climatisation ; un ventilateur peut aider.', 'Disfruta de la primavera y prepárate para el calor', 'Marzo y la primavera son una época preciosa en Sevilla. En mayo y junio, hidrátate bien y busca alojamiento con aire acondicionado; un ventilador también ayuda.', 'Enjoy spring and prepare for the heat', 'March and spring are a lovely time in Seville. In May and June, stay hydrated and choose accommodation with air conditioning; a fan can help too.'),
    ], addresses: [],
  },
  {
    id: 'monuments', icon: 'tower', label: { fr: 'Monuments', es: 'Monumentos', en: 'Monuments' }, themes: ['monuments', 'eglises', 'parcs'],
    tips: [tip('Prends le temps de te promener', 'La Plaza de España et le parc María Luisa sont parfaits pour une balade et un moment de détente.', 'Tómate tiempo para pasear', 'La Plaza de España y el parque de María Luisa son perfectos para dar un paseo y relajarse.', 'Take time for a walk', 'Plaza de España and María Luisa Park are perfect for a stroll and a relaxing break.')],
    addresses: [address('Plaza de España', 'À voir et à revoir.', 'Plaza de España', 'Un lugar para visitar una y otra vez.', 'Plaza de España', 'A place worth visiting more than once.'), address('Parc María Luisa', 'Un grand parc pour se promener ou se détendre.', 'Parque de María Luisa', 'Un gran parque para pasear o relajarse.', 'María Luisa Park', 'A large park for walks and relaxing.'), address('Pont de Triana', 'Agréable pour se promener au bord du fleuve.', 'Puente de Triana', 'Agradable para pasear junto al río.', 'Triana Bridge', 'A lovely riverside walk.')],
  },
  {
    id: 'bars', icon: 'glass', label: { fr: 'Bars et sorties', es: 'Bares y salidas', en: 'Bars and nightlife' }, themes: ['bars'],
    tips: [
      tip('Sors en semaine aussi', 'J’allais dans les bars surtout le mardi, le jeudi et le vendredi.', 'Sal también entre semana', 'Solía ir a bares sobre todo los martes, jueves y viernes.', 'Go out during the week too', 'I went to bars mostly on Tuesdays, Thursdays and Fridays.'),
      tip('Découvre les boîtes de nuit', 'J’y allais parfois le jeudi, le vendredi ou le samedi.', 'Descubre las discotecas', 'A veces iba los jueves, viernes o sábados.', 'Try the nightclubs', 'I sometimes went on Thursdays, Fridays or Saturdays.'),
      tip('Varie les sorties', 'Essaie une pub crawl avec l’ESN ou fais une balade tranquille avec des amis près du pont de Triana. À la Feria, goûte le rebujito, la boisson emblématique.', 'Varía tus planes', 'Prueba una pub crawl con la ESN o da un paseo tranquilo con amigos cerca del puente de Triana. En la Feria, prueba el rebujito, la bebida típica.', 'Mix up your evenings', 'Try an ESN pub crawl or take a quiet walk with friends near Triana Bridge. At the Feria, try rebujito, its signature drink.'),
    ],
    addresses: [
      address('Tapas Enramadilla, Gorda de los Jardines et Casa la Viuda', 'Mes bars à tapas préférés.', 'Tapas Enramadilla, Gorda de los Jardines y Casa la Viuda', 'Mis bares de tapas favoritos.', 'Tapas Enramadilla, Gorda de los Jardines and Casa la Viuda', 'My favourite tapas bars.'),
      address('Pont de Triana', 'Un bon endroit pour une balade et le coucher du soleil.', 'Puente de Triana', 'Un buen sitio para pasear y ver el atardecer.', 'Triana Bridge', 'A good spot for a walk and sunset.'),
      address('Tequila Bar, Libano Terraza, Iguana Terraza et Antique', 'Boîtes de nuit que j’ai fréquentées.', 'Tequila Bar, Libano Terraza, Iguana Terraza y Antique', 'Discotecas a las que fui.', 'Tequila Bar, Libano Terraza, Iguana Terraza and Antique', 'Nightclubs I went to.'),
      address('Atico, Selvatico, Plan B et Coffee Corner', 'Bars sympas.', 'Atico, Selvatico, Plan B y Coffee Corner', 'Bares agradables.', 'Atico, Selvatico, Plan B and Coffee Corner', 'Nice bars.'),
    ],
  },
  {
    id: 'voyages', icon: 'suitcase', label: { fr: 'Voyages à faire', es: 'Viajes por hacer', en: 'Trips to take' }, trips: true,
    tips: [
      tip('Grenade', 'L’Alhambra et les cuevas du Sacromonte m’ont particulièrement marquée. Compte environ 150 € pour trois jours.', 'Granada', 'La Alhambra y las cuevas del Sacromonte me encantaron. Calcula unos 150 € para tres días.', 'Granada', 'The Alhambra and Sacromonte caves were highlights for me. Allow around €150 for three days.'),
      tip('Algarve', 'Je recommande vivement cette région du Portugal. Compte environ 200 € pour trois ou quatre jours.', 'Algarve', 'Recomiendo muchísimo esta región de Portugal. Calcula unos 200 € para tres o cuatro días.', 'The Algarve', 'I highly recommend this region of Portugal. Allow around €200 for three or four days.'),
      tip('Excursions à la journée', 'Prévois environ 30 à 50 € pour visiter une ville à la journée.', 'Excursiones de un día', 'Calcula unos 30-50 € para visitar una ciudad en un día.', 'Day trips', 'Allow around €30–50 for a day trip to a city.'),
      tip('Gibraltar', 'Vérifie les frais de ta banque : des commissions peuvent s’appliquer.', 'Gibraltar', 'Comprueba las comisiones de tu banco: pueden aplicarse cargos.', 'Gibraltar', 'Check your bank fees, as charges may apply.'),
    ],
    addresses: [
      address('Grenade', 'À ne pas manquer : l’Alhambra et les cuevas du Sacromonte.', 'Granada', 'Imprescindibles: la Alhambra y las cuevas del Sacromonte.', 'Granada', 'Do not miss the Alhambra and the Sacromonte caves.'),
      address('Ronda', 'Une destination que j’ai beaucoup aimée.', 'Ronda', 'Un destino que me gustó mucho.', 'Ronda', 'A destination I really enjoyed.'),
      address('Cordoue, Cadix et Carmona', 'Trois villes que j’ai beaucoup aimées.', 'Córdoba, Cádiz y Carmona', 'Tres ciudades que me gustaron mucho.', 'Córdoba, Cádiz and Carmona', 'Three cities I really enjoyed.'),
      address('Gibraltar', 'Pense à vérifier les frais bancaires éventuels.', 'Gibraltar', 'Recuerda comprobar las posibles comisiones bancarias.', 'Gibraltar', 'Remember to check for possible bank fees.'),
      address('Algarve : Albufeira et Lagos', 'Région portugaise vivement recommandée.', 'Algarve: Albufeira y Lagos', 'Región portuguesa muy recomendable.', 'The Algarve: Albufeira and Lagos', 'A highly recommended region of Portugal.'),
      address('Alcalá de Guadaíra et Jerez de la Frontera', 'Autres idées de sorties depuis Séville.', 'Alcalá de Guadaíra y Jerez de la Frontera', 'Otras ideas para hacer excursiones desde Sevilla.', 'Alcalá de Guadaíra and Jerez de la Frontera', 'Other ideas for day trips from Seville.'),
    ],
  },
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
  {
    id: 'granada', name: 'Granada', region: 'andalousie',
    avis: text('Un voyage marquant : j’ai adoré visiter la ville et l’Alhambra.', 'Un viaje inolvidable: me encantó recorrer la ciudad y visitar la Alhambra.', 'A memorable trip: I loved exploring the city and visiting the Alhambra.'),
    budget: text('Environ 150 € pour trois jours.', 'Unos 150 € para tres días.', 'Around €150 for three days.'),
    conseil: text('Ne manque pas les cuevas du Sacromonte.', 'No te pierdas las cuevas del Sacromonte.', 'Do not miss the Sacromonte caves.'),
  },
  { id: 'ronda', name: 'Ronda', region: 'andalousie' },
  { id: 'setenil', name: 'Setenil de las Bodegas', region: 'andalousie' },
  { id: 'gibraltar', name: 'Gibraltar', region: 'gibraltar', conseil: text('Vérifie les frais bancaires possibles avant de payer par carte.', 'Comprueba las posibles comisiones bancarias antes de pagar con tarjeta.', 'Check for possible bank fees before paying by card.') },
  { id: 'lagos', name: 'Lagos', region: 'portugal', avis: text('Une étape de l’Algarve, région que je recommande vivement.', 'Una parada en el Algarve, una región que recomiendo muchísimo.', 'A stop in the Algarve, a region I highly recommend.'), budget: text('Environ 200 € pour trois ou quatre jours dans l’Algarve.', 'Unos 200 € para tres o cuatro días en el Algarve.', 'Around €200 for three or four days in the Algarve.') },
  { id: 'albufeira', name: 'Albufeira', region: 'portugal', avis: text('Une étape de l’Algarve, région que je recommande vivement.', 'Una parada en el Algarve, una región que recomiendo muchísimo.', 'A stop in the Algarve, a region I highly recommend.'), budget: text('Environ 200 € pour trois ou quatre jours dans l’Algarve.', 'Unos 200 € para tres o cuatro días en el Algarve.', 'Around €200 for three or four days in the Algarve.') },
  { id: 'madrid', name: 'Madrid', region: 'madrid' },
  { id: 'jerez', name: 'Jerez de la Frontera', region: 'andalousie' },
  { id: 'alcala', name: 'Alcalá de Guadaíra', region: 'andalousie' },
  { id: 'carmona', name: 'Carmona', region: 'andalousie' },
]
