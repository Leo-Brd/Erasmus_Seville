# Ton Erasmus à Séville

Guide Erasmus perso (FR / ES / EN) en React + Vite. Le site final n'appelle aucun service externe : la carte est un SVG vectoriel généré à partir d'OpenStreetMap, les icônes sont dessinées à la main et les photos sont intégrées.

## Commandes

- `npm install` : installer les dépendances
- `npm run dev` : lancer le site en local (http://localhost:5173)
- `npm run build` : générer **un seul fichier `dist/index.html`** (CSS, JS, polices et photos inclus), à ouvrir directement ou à héberger

## Où modifier le contenu

| Contenu | Fichier |
| --- | --- |
| Réponses aux 30 questions | `src/data/questions.js` (objet `answers`) |
| Conseils et adresses par thème, voyages, vocabulaire | `src/data/tips.js` |
| Événements du calendrier | `src/data/events.js` |
| Quartiers, lieux, descriptions et conseils persos | `src/data/places.js` |
| Textes de l'interface (FR/ES/EN) | `src/ui.js` |

Les textes peuvent être une simple chaîne (français) ou `{ fr: '…', es: '…', en: '…' }`.

## Photos

Dépose les fichiers (jpg, png, webp) dans `src/photos/` : ils sont détectés automatiquement.

- `src/photos/accueil.jpg` : remplace l'illustration de l'accueil
- `src/photos/lieux/<id-du-lieu>.jpg` : par ex. `real-alcazar.jpg`
- `src/photos/evenements/<id>.jpg` : par ex. `semana-santa.jpg`
- `src/photos/voyages/<id>.jpg` : par ex. `cadiz.jpg`

Avec `npm run dev`, le chemin attendu s'affiche sous chaque emplacement de photo vide.

## Carte

La carte (`src/data/mapData.js`, `src/data/placeCoords.js`) est générée, pas écrite à la main : `node scripts/build-map.mjs` télécharge les routes, le fleuve et les parcs d'OpenStreetMap (© contributeurs OpenStreetMap, ODbL), puis les simplifie en SVG. À ne relancer que pour mettre la carte à jour (il faut internet).

- Seuls les monuments, églises, parcs, marchés, lieux de loisirs et facultés dont l'emplacement a été **retrouvé avec certitude** dans OpenStreetMap ont un point sur la carte. Les bars, restos et boutiques n'en ont pas : leurs noms sont trop courants pour ne pas risquer de se tromper. Pour en placer un, ajoute son id et ses coordonnées dans `scripts/build-map.mjs` (ou envoie-moi l'adresse).
- Les noms de lieux écrits en français sont reliés à leur nom espagnol dans `scripts/place-aliases.mjs`.
- Le centre des quartiers (`lat`/`lon`) est dans `src/data/places.js`.
