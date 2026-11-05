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

// Mes destinations : avis, transport, durée, budget, conseil (texte ou { fr, es, en }).
// Photo : src/photos/voyages/<id>.jpg. Toutes viennent de Wikimedia Commons (licences libres) : le crédit
// affiché sous la photo vient du champ `photo`. `focus` règle le cadrage (object-position) des photos très larges.
const photo = (author, license, url, focus) => ({ author, license, url, focus })

export const trips = [
  {
    id: 'cadiz', name: 'Cádiz', region: 'andalousie',
    photo: photo('Benjamin Smith', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:C%C3%A1diz_-_Playa_de_la_Caleta.jpg'),
    avis: text('Une ville que j’ai beaucoup aimée : une vieille ville ouverte sur l’Atlantique, des plages en plein centre et une ambiance détendue. Une très bonne première escapade depuis Séville.', 'Una ciudad que me gustó mucho: casco antiguo abierto al Atlántico, playas en pleno centro y un ambiente relajado. Una muy buena primera escapada desde Sevilla.', 'A city I really enjoyed: an old town facing the Atlantic, beaches right in the centre and a relaxed atmosphere. A great first getaway from Seville.'),
    transport: text('Train depuis Santa Justa (environ 1 h 45) ou bus (environ 2 h). Vérifie l’horaire du dernier retour.', 'Tren desde Santa Justa (unas 1 h 45) o autobús (unas 2 h). Comprueba la hora del último regreso.', 'Train from Santa Justa (about 1h45) or bus (about 2h). Check the time of the last return.'),
    duree: text('Une journée suffit ; deux si tu veux profiter des plages ou du Carnaval, en février.', 'Un día basta; dos si quieres disfrutar de las playas o del Carnaval, en febrero.', 'One day is enough; two if you want to enjoy the beaches or the Carnival in February.'),
    budget: text('Environ 30 à 50 € pour la journée, avec le transport et les repas.', 'Unos 30-50 € por el día, con transporte y comidas.', 'Around €30–50 for the day, including transport and meals.'),
    conseil: text('Promène-toi dans le quartier de La Viña et sur la plage de La Caleta, monte à la Torre Tavira pour la vue et goûte le poisson frit (pescaíto frito) près du marché central.', 'Pasea por el barrio de La Viña y por la playa de La Caleta, sube a la Torre Tavira para disfrutar de las vistas y prueba el pescaíto frito cerca del mercado central.', 'Wander around the La Viña district and La Caleta beach, climb the Torre Tavira for the view and try fried fish (pescaíto frito) near the central market.'),
  },
  {
    id: 'cordoba', name: 'Córdoba', region: 'andalousie',
    photo: photo('José María Ligero Loarte', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Centro_Hist%C3%B3rico,_16.9_--_2023_--_C%C3%B3rdoba,_Espa%C3%B1a.jpg'),
    avis: text('Une ville que j’ai beaucoup aimée : compacte et magnifique, avec la Mezquita-Cathédrale, un mélange unique d’architecture islamique et chrétienne, et un ancien quartier juif plein de ruelles.', 'Una ciudad que me gustó mucho: compacta y preciosa, con la Mezquita-Catedral, una mezcla única de arquitectura islámica y cristiana, y una judería llena de callejuelas.', 'A city I really enjoyed: compact and beautiful, with the Mosque-Cathedral, a unique blend of Islamic and Christian architecture, and an old Jewish quarter full of lanes.'),
    transport: text('Train grande vitesse depuis Santa Justa (environ 45 minutes) ou bus (environ 2 h), moins cher.', 'Tren de alta velocidad desde Santa Justa (unos 45 minutos) o autobús (unas 2 h), más barato.', 'High-speed train from Santa Justa (about 45 minutes) or bus (about 2h), which is cheaper.'),
    duree: text('Une journée ; deux si tu veux voir aussi Medina Azahara et les patios.', 'Un día; dos si quieres ver también Medina Azahara y los patios.', 'One day; two if you also want to see Medina Azahara and the patios.'),
    budget: text('Environ 30 à 50 € pour la journée, un peu plus si tu prends le train à grande vitesse.', 'Unos 30-50 € por el día, algo más si tomas el tren de alta velocidad.', 'Around €30–50 for the day, a little more if you take the high-speed train.'),
    conseil: text('Réserve l’entrée de la Mezquita à l’avance sur le site officiel et regarde s’il existe des créneaux gratuits le matin. Début mai, le Festival de los Patios ouvre des cours fleuries au public. Goûte le salmorejo.', 'Reserva la entrada a la Mezquita con antelación en la web oficial y comprueba si hay franjas gratuitas por la mañana. A principios de mayo, el Festival de los Patios abre patios llenos de flores al público. Prueba el salmorejo.', 'Book your Mosque-Cathedral ticket ahead on the official website and check whether there are free morning slots. In early May, the Festival de los Patios opens flower-filled courtyards to the public. Try the salmorejo.'),
  },
  {
    id: 'granada', name: 'Granada', region: 'andalousie',
    photo: photo('CEphoto, Uwe Aranas', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Granada_Spain_Alhambra-seen-from-Albaic%C3%ADn-01.jpg', '55% 50%'),
    avis: text('Un voyage marquant : j’ai adoré visiter la ville et l’Alhambra.', 'Un viaje inolvidable: me encantó recorrer la ciudad y visitar la Alhambra.', 'A memorable trip: I loved exploring the city and visiting the Alhambra.'),
    transport: text('Bus Alsa depuis la gare routière de Séville, environ 3 h de trajet. Réserve à l’avance : c’est moins cher.', 'Autobús Alsa desde la estación de autobuses de Sevilla, unas 3 h de trayecto. Reserva con antelación: sale más barato.', 'Alsa bus from Seville’s bus station, about 3h. Book ahead: it is cheaper.'),
    duree: text('Trois jours, c’est le bon format : l’Alhambra, l’Albaicín et le Sacromonte, puis un moment pour flâner et profiter des tapas.', 'Tres días es un buen formato: la Alhambra, el Albaicín y el Sacromonte, y un rato para pasear y disfrutar de las tapas.', 'Three days is a good format: the Alhambra, the Albaicín and Sacromonte, plus some time to stroll and enjoy the tapas.'),
    budget: text('Environ 150 € pour trois jours.', 'Unos 150 € para tres días.', 'Around €150 for three days.'),
    conseil: text('Ne manque pas les cuevas du Sacromonte. Réserve ton billet pour l’Alhambra plusieurs semaines à l’avance sur le site officiel, car les créneaux partent vite. Beaucoup de bars offrent une tapa avec chaque boisson, et le coucher du soleil depuis le mirador de San Nicolás vaut le détour.', 'No te pierdas las cuevas del Sacromonte. Reserva la entrada de la Alhambra con varias semanas de antelación en la web oficial, porque las franjas vuelan. Muchos bares ponen una tapa con cada bebida, y el atardecer desde el mirador de San Nicolás merece la pena.', 'Do not miss the Sacromonte caves. Book your Alhambra ticket several weeks ahead on the official website, as slots sell out fast. Many bars serve a free tapa with each drink, and sunset from the San Nicolás viewpoint is worth the detour.'),
  },
  {
    id: 'ronda', name: 'Ronda', region: 'andalousie',
    photo: photo('Benjamin Smith', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Ronda_-_View_from_Puente_Nuevo_-_5.jpg'),
    avis: text('Une destination que j’ai beaucoup aimée : une ville perchée au bord d’un gouffre, coupée en deux par le spectaculaire Puente Nuevo.', 'Un destino que me gustó mucho: una ciudad encaramada al borde de un tajo, partida en dos por el espectacular Puente Nuevo.', 'A destination I really enjoyed: a town perched on the edge of a gorge, split in two by the spectacular Puente Nuevo.'),
    transport: text('Bus depuis la gare routière de Séville (environ 2 h 15 à 2 h 45) ; en voiture, environ 2 h.', 'Autobús desde la estación de autobuses de Sevilla (entre 2 h 15 y 2 h 45); en coche, unas 2 h.', 'Bus from Seville’s bus station (about 2h15 to 2h45); by car, about 2h.'),
    duree: text('Une journée bien remplie, ou deux jours en ajoutant Setenil de las Bodegas.', 'Un día completo, o dos si añades Setenil de las Bodegas.', 'A full day, or two if you add Setenil de las Bodegas.'),
    budget: text('Environ 30 à 50 € pour la journée avec le bus, les visites et les repas.', 'Unos 30-50 € por el día con autobús, visitas y comidas.', 'Around €30–50 for the day, including bus, visits and meals.'),
    conseil: text('Descends sous le pont par le chemin des moulins pour la plus belle vue, puis visite les arènes, parmi les plus anciennes et les plus célèbres d’Espagne. Pars tôt et vérifie l’horaire du dernier bus.', 'Baja bajo el puente por el camino de los molinos para disfrutar de la mejor vista y visita la plaza de toros, una de las más antiguas y famosas de España. Sal temprano y comprueba la hora del último autobús.', 'Walk down below the bridge along the mills path for the best view, then visit the bullring, one of the oldest and most famous in Spain. Leave early and check the time of the last bus.'),
  },
  {
    id: 'setenil', name: 'Setenil de las Bodegas', region: 'andalousie',
    photo: photo('El Pantera', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:SetenilDeLasBodegas-P1050114.JPG'),
    avis: text('Un village blanc très original, où des rues entières sont construites sous d’énormes rochers. Petit, mais vraiment unique.', 'Un pueblo blanco muy original, con calles enteras construidas bajo enormes rocas. Pequeño, pero verdaderamente único.', 'A very original white village, with whole streets built under huge rocks. Small, but truly unique.'),
    transport: text('Le plus simple est la voiture (environ 2 h) ou une excursion organisée. En bus, il faut en général passer par Ronda, avec des horaires limités : vérifie-les avant de partir.', 'Lo más sencillo es el coche (unas 2 h) o una excursión organizada. En autobús suele haber que pasar por Ronda, con horarios limitados: compruébalos antes de salir.', 'The easiest way is by car (about 2h) or an organised tour. By bus you usually have to go via Ronda, with limited timetables: check them before leaving.'),
    duree: text('Une demi-journée, idéalement combinée avec Ronda (environ 20 minutes de route).', 'Media jornada, idealmente combinada con Ronda (a unos 20 minutos en coche).', 'Half a day, ideally combined with Ronda (about 20 minutes by car).'),
    budget: text('Peu cher sur place (café, tapas) ; le plus gros du budget est le transport, surtout si tu partages une voiture ou une excursion.', 'Barato en el pueblo (café, tapas); lo que más pesa es el transporte, sobre todo si compartes coche o excursión.', 'Cheap once there (coffee, tapas); the biggest cost is transport, especially if you share a car or a tour.'),
    conseil: text('Marche dans les rues Cuevas del Sol et Cuevas de la Sombra et déjeune sous les rochers. C’est plus calme en semaine.', 'Pasea por las calles Cuevas del Sol y Cuevas de la Sombra y come bajo las rocas. Es más tranquilo entre semana.', 'Stroll along the streets Cuevas del Sol and Cuevas de la Sombra and have lunch under the rocks. It is quieter on weekdays.'),
  },
  {
    id: 'gibraltar', name: 'Gibraltar', region: 'gibraltar',
    photo: photo('RedCoat', 'CC BY-SA 2.5', 'https://commons.wikimedia.org/wiki/File:Top_of_the_Rock_of_Gibraltar.jpg', '75% 50%'),
    avis: text('Une journée dépaysante : le Rocher, ses macaques et une ambiance très britannique, à deux pas de l’Espagne.', 'Un día diferente: el Peñón, sus macacos y un ambiente muy británico, a un paso de España.', 'A day that feels like another world: the Rock, its macaques and a very British atmosphere, a stone’s throw from Spain.'),
    transport: text('Bus jusqu’à La Línea de la Concepción (environ 3 h 30), puis passage de la frontière à pied et 15 à 20 minutes de marche jusqu’au centre.', 'Autobús hasta La Línea de la Concepción (unas 3 h 30), después se cruza la frontera a pie y hay 15-20 minutos andando hasta el centro.', 'Bus to La Línea de la Concepción (about 3h30), then cross the border on foot and walk 15 to 20 minutes to the centre.'),
    duree: text('Une journée suffit.', 'Un día basta.', 'One day is enough.'),
    budget: text('Environ 30 à 50 € pour la journée, plus l’entrée du Rocher si tu veux le visiter (téléphérique, réserve naturelle, grottes).', 'Unos 30-50 € por el día, más la entrada al Peñón si quieres visitarlo (teleférico, reserva natural, cuevas).', 'Around €30–50 for the day, plus the ticket for the Rock if you want to visit it (cable car, nature reserve, caves).'),
    conseil: text('Vérifie les frais bancaires possibles avant de payer par carte. Garde ton passeport ou ta carte d’identité à portée de main pour la frontière, et ne laisse rien à portée des macaques : ils volent volontiers la nourriture et les sacs.', 'Comprueba las posibles comisiones bancarias antes de pagar con tarjeta. Lleva a mano el pasaporte o el DNI para la frontera y no dejes nada al alcance de los macacos: roban comida y bolsas sin pensárselo.', 'Check for possible bank fees before paying by card. Keep your passport or ID card handy for the border, and do not leave anything within reach of the macaques: they happily steal food and bags.'),
  },
  {
    id: 'lagos', name: 'Lagos', region: 'portugal',
    photo: photo('Ana Rey', 'CC BY-SA 2.0', 'https://commons.wikimedia.org/wiki/File:Lagos_Ponta_da_Piedade_(50509744568).jpg'),
    avis: text('Une étape de l’Algarve, région que je recommande vivement : falaises dorées, grottes marines et criques turquoise autour de la Ponta da Piedade, et une jolie vieille ville.', 'Una parada en el Algarve, una región que recomiendo muchísimo: acantilados dorados, cuevas marinas y calas turquesas alrededor de la Ponta da Piedade, y un casco antiguo precioso.', 'A stop in the Algarve, a region I highly recommend: golden cliffs, sea caves and turquoise coves around Ponta da Piedade, and a pretty old town.'),
    transport: text('Bus (Alsa ou FlixBus) depuis Séville, environ 4 à 6 h selon les correspondances. Le Portugal a une heure de moins qu’en Espagne : pense à vérifier tes horaires.', 'Autobús (Alsa o FlixBus) desde Sevilla, entre 4 y 6 h según las conexiones. Portugal tiene una hora menos que España: revisa bien tus horarios.', 'Bus (Alsa or FlixBus) from Seville, about 4 to 6h depending on connections. Portugal is one hour behind Spain: double-check your times.'),
    duree: text('Trois ou quatre jours pour l’Algarve ; Lagos et Albufeira se combinent bien.', 'Tres o cuatro días para el Algarve; Lagos y Albufeira se combinan bien.', 'Three or four days for the Algarve; Lagos and Albufeira combine well.'),
    budget: text('Environ 200 € pour trois ou quatre jours dans l’Algarve.', 'Unos 200 € para tres o cuatro días en el Algarve.', 'Around €200 for three or four days in the Algarve.'),
    conseil: text('Fais une sortie en bateau ou en kayak à la Ponta da Piedade pour voir les grottes. Au printemps, l’eau de l’océan reste fraîche.', 'Haz una excursión en barco o en kayak por la Ponta da Piedade para ver las cuevas. En primavera, el agua del océano sigue estando fría.', 'Take a boat or kayak trip around Ponta da Piedade to see the caves. In spring, the ocean water is still cold.'),
  },
  {
    id: 'albufeira', name: 'Albufeira', region: 'portugal',
    photo: photo('Vitor Oliveira', 'CC BY-SA 2.0', 'https://commons.wikimedia.org/wiki/File:Praia_dos_Pescadores_-_Albufeira_-_Portugal_(4572546342).jpg'),
    avis: text('Une étape de l’Algarve, région que je recommande vivement : plages de sable, vieille ville blanche et vie nocturne animée.', 'Una parada en el Algarve, una región que recomiendo muchísimo: playas de arena, casco antiguo blanco y mucha vida nocturna.', 'A stop in the Algarve, a region I highly recommend: sandy beaches, a white old town and a lively nightlife.'),
    transport: text('Bus (Alsa ou FlixBus) depuis Séville, environ 4 à 5 h, souvent avec un changement. Lagos est à environ 1 h 15 en train ou en bus.', 'Autobús (Alsa o FlixBus) desde Sevilla, unas 4-5 h, a menudo con transbordo. Lagos está a una 1 h 15 en tren o autobús.', 'Bus (Alsa or FlixBus) from Seville, about 4 to 5h, often with a change. Lagos is about 1h15 away by train or bus.'),
    duree: text('Trois ou quatre jours pour l’Algarve ; Lagos et Albufeira se combinent bien.', 'Tres o cuatro días para el Algarve; Lagos y Albufeira se combinan bien.', 'Three or four days for the Algarve; Lagos and Albufeira combine well.'),
    budget: text('Environ 200 € pour trois ou quatre jours dans l’Algarve.', 'Unos 200 € para tres o cuatro días en el Algarve.', 'Around €200 for three or four days in the Algarve.'),
    conseil: text('Visite la vieille ville et la Praia dos Pescadores, puis rejoins la Praia da Falésia et ses falaises rouges. Réserve tôt ton hébergement : les prix montent vite en haute saison.', 'Visita el casco antiguo y la Praia dos Pescadores, y luego acércate a la Praia da Falésia y sus acantilados rojos. Reserva pronto el alojamiento: los precios suben rápido en temporada alta.', 'Visit the old town and Praia dos Pescadores, then head to Praia da Falésia and its red cliffs. Book your accommodation early: prices rise quickly in high season.'),
  },
  {
    id: 'madrid', name: 'Madrid', region: 'madrid',
    photo: photo('Draceane', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Madrid,_Plaza_Mayor,_2016,_(02).jpg'),
    avis: text('Une capitale très différente de Séville : des musées de niveau mondial, de grandes avenues, des parcs et une vie nocturne intense.', 'Una capital muy distinta de Sevilla: museos de primer nivel, grandes avenidas, parques y una vida nocturna intensa.', 'A capital very different from Seville: world-class museums, grand avenues, parks and an intense nightlife.'),
    transport: text('Train grande vitesse (AVE, Iryo ou Ouigo) depuis Santa Justa, environ 2 h 30 ; ou bus Alsa, plus long (environ 6 h) mais moins cher.', 'Tren de alta velocidad (AVE, Iryo u Ouigo) desde Santa Justa, unas 2 h 30; o autobús Alsa, más largo (unas 6 h) pero más barato.', 'High-speed train (AVE, Iryo or Ouigo) from Santa Justa, about 2h30; or Alsa bus, longer (about 6h) but cheaper.'),
    duree: text('Un week-end de deux à trois jours.', 'Un fin de semana de dos o tres días.', 'A weekend of two to three days.'),
    budget: text('Au moins 150 € pour un week-end, selon le train et l’hébergement.', 'Como mínimo 150 € por un fin de semana, según el tren y el alojamiento.', 'At least €150 for a weekend, depending on the train and accommodation.'),
    conseil: text('Réserve le train longtemps à l’avance pour payer moins cher. Le Prado et le Reina Sofía sont gratuits à certaines heures en fin de journée (à vérifier). Promène-toi au Retiro et vois le coucher du soleil au Templo de Debod.', 'Reserva el tren con mucha antelación para pagar menos. El Prado y el Reina Sofía son gratuitos a ciertas horas al final del día (compruébalo). Pasea por el Retiro y mira el atardecer en el Templo de Debod.', 'Book the train well in advance to pay less. The Prado and the Reina Sofía are free at certain times late in the day (check). Stroll through the Retiro and watch the sunset at the Templo de Debod.'),
  },
  {
    id: 'jerez', name: 'Jerez de la Frontera', region: 'andalousie',
    photo: photo('Waugsberg', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Catedral_de_Jerez_de_la_Frontera.jpg'),
    avis: text('Une autre belle idée de sortie : la capitale du xérès et du cheval andalou, plus tranquille que Séville, avec son alcazar et sa cathédrale.', 'Otra buena idea para una excursión: la capital del jerez y del caballo andaluz, más tranquila que Sevilla, con su alcázar y su catedral.', 'Another great day-trip idea: the capital of sherry and the Andalusian horse, quieter than Seville, with its alcázar and cathedral.'),
    transport: text('Train depuis Santa Justa (environ 1 h à 1 h 15). Jerez est sur la ligne Séville–Cádiz, donc facile à combiner avec Cádiz.', 'Tren desde Santa Justa (entre 1 h y 1 h 15). Jerez está en la línea Sevilla–Cádiz, así que se combina fácilmente con Cádiz.', 'Train from Santa Justa (about 1h to 1h15). Jerez is on the Seville–Cádiz line, so it is easy to combine with Cádiz.'),
    duree: text('Une journée, ou une demi-journée si tu l’enchaînes avec Cádiz.', 'Un día, o medio día si lo enlazas con Cádiz.', 'One day, or half a day if you combine it with Cádiz.'),
    budget: text('Environ 30 à 50 € pour la journée avec le train, une visite de bodega et un repas.', 'Unos 30-50 € por el día con tren, una visita a una bodega y una comida.', 'Around €30–50 for the day, with train, a bodega visit and a meal.'),
    conseil: text('Fais une visite de bodega avec dégustation de xérès. Le quartier de Santiago est le berceau du flamenco, et en mai la Feria del Caballo est la grande fête de la ville (dates à vérifier).', 'Haz una visita a una bodega con cata de jerez. El barrio de Santiago es la cuna del flamenco, y en mayo la Feria del Caballo es la gran fiesta de la ciudad (comprueba las fechas).', 'Take a bodega tour with a sherry tasting. The Santiago district is the cradle of flamenco, and in May the Feria del Caballo is the city’s big celebration (check the dates).'),
  },
  {
    id: 'alcala', name: 'Alcalá de Guadaíra', region: 'andalousie',
    photo: photo('Juan Luis Jiménez Lillo', 'CC BY-SA 3.0 es', 'https://commons.wikimedia.org/wiki/File:Castillo_de_Alcal%C3%A1_de_Guada%C3%ADra._Vista_desde_el_barrio_del_arrabal_o_barrio_del_castillo.jpg'),
    avis: text('Une petite ville proche de Séville, connue pour son château, ses boulangeries et ses parcs au bord de la rivière Guadaíra. Un bon plan pour sortir sans trop dépenser.', 'Una pequeña ciudad cerca de Sevilla, conocida por su castillo, sus panaderías y sus parques junto al río Guadaíra. Un buen plan para salir sin gastar mucho.', 'A small town close to Seville, known for its castle, its bakeries and its parks along the Guadaíra river. A good plan for getting out without spending much.'),
    transport: text('Bus métropolitain depuis Séville (environ 30 minutes).', 'Autobús metropolitano desde Sevilla (unos 30 minutos).', 'Metropolitan bus from Seville (about 30 minutes).'),
    duree: text('Une demi-journée.', 'Media jornada.', 'Half a day.'),
    budget: text('Moins de 15 € avec le bus et un déjeuner ou des tapas.', 'Menos de 15 € con el autobús y una comida o unas tapas.', 'Under €15 with the bus and a lunch or some tapas.'),
    conseil: text('Monte au château pour la vue sur la campagne, promène-toi le long de la rivière et goûte le pain d’Alcalá, très réputé.', 'Sube al castillo para ver el paisaje, pasea junto al río y prueba el pan de Alcalá, muy famoso.', 'Climb up to the castle for the view over the countryside, stroll along the river and try the famous Alcalá bread.'),
  },
  {
    id: 'carmona', name: 'Carmona', region: 'andalousie',
    photo: photo('Daniel Villafruela', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Carmona-Puerta_de_Sevilla_(enderezada)-20110916.jpg'),
    avis: text('Une ville que j’ai beaucoup aimée : un bourg fortifié aux ruelles blanches et aux belles portes anciennes, calme et peu touristique.', 'Una ciudad que me gustó mucho: un pueblo fortificado de callejuelas blancas y bellas puertas antiguas, tranquilo y poco turístico.', 'A town I really enjoyed: a fortified town with white lanes and beautiful old gates, calm and not very touristy.'),
    transport: text('Bus depuis la gare routière de Plaza de Armas (environ 45 minutes) ou voiture (environ 30 minutes).', 'Autobús desde la estación de Plaza de Armas (unos 45 minutos) o en coche (unos 30 minutos).', 'Bus from the Plaza de Armas bus station (about 45 minutes) or by car (about 30 minutes).'),
    duree: text('Une demi-journée à une journée.', 'De medio día a un día.', 'Half a day to a full day.'),
    budget: text('Environ 15 à 30 € avec un trajet en bus et un déjeuner.', 'Unos 15-30 € con el trayecto en autobús y una comida.', 'Around €15–30 with a bus ride and lunch.'),
    conseil: text('Visite la Puerta de Sevilla, la nécropole romaine et monte à l’Alcázar del Rey Don Pedro pour la vue sur la campagne. Prends ta carte d’identité : certains sites peuvent être gratuits ou à tarif réduit pour les citoyens de l’UE.', 'Visita la Puerta de Sevilla, la necrópolis romana y sube al Alcázar del Rey Don Pedro para ver el campo. Lleva tu DNI: algunos sitios pueden ser gratuitos o tener tarifa reducida para ciudadanos de la UE.', 'Visit the Puerta de Sevilla and the Roman necropolis, and climb to the Alcázar del Rey Don Pedro for the view over the countryside. Bring your ID: some sites may be free or discounted for EU citizens.'),
  },
]
