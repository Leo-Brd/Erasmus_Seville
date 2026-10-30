// Mes réponses : ajoute une entrée { q1: { fr: '…', es: '…', en: '…' } } (ou simplement une chaîne en français).
// Tant qu'une question n'a pas de réponse, le site affiche « Réponse à venir ».
export const answers = {
  // q1: { fr: 'Mon texte…', es: '…', en: '…' },
}

export const groups = [
  {
    id: 'avant',
    icon: 'suitcase',
    title: { fr: 'Avant le départ', es: 'Antes de irse', en: 'Before leaving' },
    questions: [
      {
        id: 'q1',
        text: {
          fr: 'Pourquoi as-tu choisi Séville, et qu’est-ce qui t’a convaincu(e) ?',
          es: '¿Por qué elegiste Sevilla y qué te convenció?',
          en: 'Why did you choose Seville, and what convinced you?',
        },
      },
      {
        id: 'q2',
        text: {
          fr: 'Quelles démarches as-tu faites avant de partir, et lesquelles as-tu faites trop tard ?',
          es: '¿Qué trámites hiciste antes de irte y cuáles hiciste demasiado tarde?',
          en: 'What paperwork did you do before leaving, and what did you leave too late?',
        },
      },
      {
        id: 'q3',
        text: {
          fr: 'Qu’as-tu emporté dans ta valise, et qu’aurais-tu dû laisser ou prendre en plus ?',
          es: '¿Qué metiste en la maleta y qué habrías debido dejar o llevar de más?',
          en: 'What did you pack, and what should you have left behind or brought in addition?',
        },
      },
      {
        id: 'q4',
        text: {
          fr: 'Comment as-tu organisé ta banque, ton assurance et ton téléphone avant le départ ?',
          es: '¿Cómo organizaste el banco, el seguro y el teléfono antes de irte?',
          en: 'How did you sort out your bank, insurance and phone before leaving?',
        },
      },
      {
        id: 'q5',
        text: {
          fr: 'Quelles étaient tes peurs et tes attentes avant de partir ?',
          es: '¿Qué miedos y qué expectativas tenías antes de irte?',
          en: 'What fears and expectations did you have before leaving?',
        },
      },
    ],
  },
  {
    id: 'arrivee',
    icon: 'home',
    title: { fr: 'L’arrivée', es: 'La llegada', en: 'Arriving' },
    questions: [
      {
        id: 'q6',
        text: {
          fr: 'Comment as-tu trouvé ton logement, combien tu le payais, et referais-tu le même choix ?',
          es: '¿Cómo encontraste alojamiento, cuánto pagabas y volverías a elegir lo mismo?',
          en: 'How did you find your accommodation, how much did you pay, and would you make the same choice again?',
        },
      },
      {
        id: 'q7',
        text: {
          fr: 'À quoi ressemblaient tes premières semaines, et qu’est-ce qui t’a le plus surpris(e) ?',
          es: '¿Cómo fueron tus primeras semanas y qué fue lo que más te sorprendió?',
          en: 'What were your first weeks like, and what surprised you most?',
        },
      },
      {
        id: 'q8',
        text: {
          fr: 'Comment t’es-tu fait(e) tes premiers amis, et grâce à quoi (ESN, colocation, cours, soirées) ?',
          es: '¿Cómo hiciste tus primeros amigos y gracias a qué (ESN, compañeros de piso, clases, fiestas)?',
          en: 'How did you make your first friends, and thanks to what (ESN, flatmates, classes, parties)?',
        },
      },
      {
        id: 'q9',
        text: {
          fr: 'Quelles démarches administratives as-tu dû faire sur place, et combien de temps ont-elles pris ?',
          es: '¿Qué trámites administrativos tuviste que hacer allí y cuánto tiempo llevaron?',
          en: 'What admin procedures did you have to do on site, and how long did they take?',
        },
      },
      {
        id: 'q10',
        text: {
          fr: 'Comment as-tu vécu le froid et l’humidité de février, que beaucoup de gens n’imaginent pas à Séville ?',
          es: '¿Cómo viviste el frío y la humedad de febrero, que mucha gente no imagina en Sevilla?',
          en: 'How did you cope with the cold and damp of February, which many people don’t imagine in Seville?',
        },
      },
    ],
  },
  {
    id: 'etudes',
    icon: 'school',
    title: { fr: 'Les études', es: 'Los estudios', en: 'Studies' },
    questions: [
      {
        id: 'q11',
        text: {
          fr: 'Comment se passaient les cours et les examens, et en quoi était-ce différent de la France ?',
          es: '¿Cómo eran las clases y los exámenes y en qué se diferenciaban de Francia?',
          en: 'How were classes and exams, and how were they different from France?',
        },
      },
      {
        id: 'q12',
        text: {
          fr: 'Quel était ton niveau d’espagnol au départ et à la fin, et qu’est-ce qui t’a le plus aidé à progresser ?',
          es: '¿Qué nivel de español tenías al principio y al final, y qué te ayudó más a mejorar?',
          en: 'What was your Spanish level at the start and at the end, and what helped you improve the most?',
        },
      },
      {
        id: 'q13',
        text: {
          fr: 'Quels cours as-tu choisis, et lesquels recommandes-tu ou déconseilles-tu ?',
          es: '¿Qué asignaturas elegiste y cuáles recomiendas o desaconsejas?',
          en: 'Which courses did you pick, and which do you recommend or advise against?',
        },
      },
      {
        id: 'q14',
        text: {
          fr: 'Comment as-tu géré l’équilibre entre les cours, les voyages et les sorties ?',
          es: '¿Cómo gestionaste el equilibrio entre las clases, los viajes y las salidas?',
          en: 'How did you balance classes, travel and going out?',
        },
      },
    ],
  },
  {
    id: 'quotidien',
    icon: 'coin',
    title: { fr: 'Le quotidien', es: 'El día a día', en: 'Daily life' },
    questions: [
      {
        id: 'q15',
        text: {
          fr: 'Combien as-tu dépensé par mois, et sur quels postes (loyer, courses, sorties, voyages) ?',
          es: '¿Cuánto gastaste al mes y en qué (alquiler, compra, salidas, viajes)?',
          en: 'How much did you spend per month, and on what (rent, groceries, going out, travel)?',
        },
      },
      {
        id: 'q16',
        text: {
          fr: 'Comment te déplaçais-tu dans la ville (à pied, vélo, bus, métro) ?',
          es: '¿Cómo te movías por la ciudad (a pie, en bici, autobús, metro)?',
          en: 'How did you get around the city (on foot, bike, bus, metro)?',
        },
      },
      {
        id: 'q17',
        text: {
          fr: 'Quelle était ta journée type, et en quoi les horaires espagnols ont-ils changé ton rythme ?',
          es: '¿Cómo era tu día típico y cómo cambiaron tu ritmo los horarios españoles?',
          en: 'What was your typical day like, and how did Spanish schedules change your rhythm?',
        },
      },
      {
        id: 'q18',
        text: {
          fr: 'Où faisais-tu tes courses, et quelles sont tes astuces pour manger bien sans dépenser trop ?',
          es: '¿Dónde hacías la compra y cuáles son tus trucos para comer bien sin gastar demasiado?',
          en: 'Where did you do your grocery shopping, and what are your tips for eating well without spending too much?',
        },
      },
    ],
  },
  {
    id: 'vie',
    icon: 'star',
    title: { fr: 'La vie à Séville', es: 'La vida en Sevilla', en: 'Life in Seville' },
    questions: [
      {
        id: 'q19',
        text: {
          fr: 'Quel est ton quartier préféré, et pourquoi y retournerais-tu ?',
          es: '¿Cuál es tu barrio favorito y por qué volverías?',
          en: 'What’s your favourite neighbourhood, and why would you go back?',
        },
      },
      {
        id: 'q20',
        text: {
          fr: 'Quels plats et quelles adresses as-tu adorés ?',
          es: '¿Qué platos y qué direcciones te encantaron?',
          en: 'Which dishes and places did you love?',
        },
      },
      {
        id: 'q21',
        text: {
          fr: 'Comment as-tu vécu la Semana Santa et la Feria de Abril ?',
          es: '¿Cómo viviste la Semana Santa y la Feria de Abril?',
          en: 'How did you experience Semana Santa and the Feria de Abril?',
        },
      },
      {
        id: 'q22',
        text: {
          fr: 'Comment as-tu vécu la chaleur de mai et juin, et comment t’es-tu adapté(e) ?',
          es: '¿Cómo viviste el calor de mayo y junio y cómo te adaptaste?',
          en: 'How did you cope with the heat of May and June, and how did you adapt?',
        },
      },
      {
        id: 'q23',
        text: {
          fr: 'Quelles soirées ou sorties t’ont le plus marqué(e), et lesquelles évites-tu aujourd’hui ?',
          es: '¿Qué fiestas o salidas te marcaron más y cuáles evitas hoy?',
          en: 'Which nights out or outings left the biggest mark on you, and which would you avoid today?',
        },
      },
      {
        id: 'q24',
        text: {
          fr: 'Quelle activité avec l’ESN ou avec d’autres étudiants as-tu préférée ?',
          es: '¿Qué actividad con la ESN o con otros estudiantes fue tu preferida?',
          en: 'What was your favourite activity with ESN or with other students?',
        },
      },
    ],
  },
  {
    id: 'voyages',
    icon: 'bus',
    title: { fr: 'Les voyages', es: 'Los viajes', en: 'Travelling' },
    questions: [
      {
        id: 'q25',
        text: {
          fr: 'Quels voyages as-tu faits depuis Séville, lesquels recommandes-tu, et lesquels ne referais-tu pas ?',
          es: '¿Qué viajes hiciste desde Sevilla, cuáles recomiendas y cuáles no repetirías?',
          en: 'Which trips did you take from Seville, which do you recommend, and which wouldn’t you do again?',
        },
      },
      {
        id: 'q26',
        text: {
          fr: 'Combien ont coûté tes voyages, et comment as-tu réservé tes transports ?',
          es: '¿Cuánto costaron tus viajes y cómo reservaste los transportes?',
          en: 'How much did your trips cost, and how did you book your transport?',
        },
      },
    ],
  },
  {
    id: 'bilan',
    icon: 'check',
    title: { fr: 'Le bilan', es: 'El balance', en: 'The verdict' },
    questions: [
      {
        id: 'q27',
        text: {
          fr: 'Quel a été ton meilleur souvenir, et ton moment le plus difficile ?',
          es: '¿Cuál fue tu mejor recuerdo y tu momento más difícil?',
          en: 'What was your best memory, and your hardest moment?',
        },
      },
      {
        id: 'q28',
        text: {
          fr: 'Qu’est-ce qui t’a le plus manqué de la France, et comment as-tu géré le mal du pays ?',
          es: '¿Qué fue lo que más echaste de menos de Francia y cómo llevaste la morriña?',
          en: 'What did you miss most about France, and how did you deal with homesickness?',
        },
      },
      {
        id: 'q29',
        text: {
          fr: 'Qu’as-tu appris sur toi-même pendant ce semestre ?',
          es: '¿Qué aprendiste sobre ti mismo/a durante este semestre?',
          en: 'What did you learn about yourself during this semester?',
        },
      },
      {
        id: 'q30',
        text: {
          fr: 'Quel conseil donnerais-tu à quelqu’un qui part en février, et que ferais-tu autrement si tu y retournais ?',
          es: '¿Qué consejo darías a alguien que se va en febrero y qué harías de otra forma si volvieras?',
          en: 'What advice would you give someone leaving in February, and what would you do differently if you went back?',
        },
      },
    ],
  },
]
