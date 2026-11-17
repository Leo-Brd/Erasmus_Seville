# Ton Erasmus à Séville

Guide Erasmus perso (FR / ES / EN) en React + Vite. Les icônes sont dessinées à la main, les photos sont intégrées au site et la carte utilise Leaflet et OpenStreetMap.

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
| Quartiers et lieux de la carte | `src/data/places.js` |
| Textes de l'interface (FR/ES/EN) | `src/ui.js` |

Les textes peuvent être une simple chaîne (français) ou `{ fr: '…', es: '…', en: '…' }`.

## Photos

Dépose les fichiers (jpg, png, webp) dans `src/photos/` : ils sont détectés automatiquement.

- `src/assets/home.jpg` : photo de la page d'accueil (remplace le fichier pour la changer)
- `src/photos/lieux/<id-du-lieu>.jpg` : par ex. `real-alcazar.jpg`
- `src/photos/evenements/<id>.jpg` : par ex. `semana-santa.jpg`
- `src/photos/voyages/<id>.jpg` : par ex. `cadiz.jpg`
- `src/photos/experience/` : photos de la page « Mon expérience », affichées dans un cadre de tableau à droite de la réponse. Nomme-les `q12.jpg`, `q12-2.jpg`… (q12 = question n°12, plusieurs photos possibles), ou garde leur nom d'origine et relie-les dans `photoLinks` (`src/data/questions.js`).

Avec `npm run dev`, le chemin attendu s'affiche sous chaque emplacement de photo vide.

## Carte

La carte est une vraie carte interactive ([Leaflet](https://leafletjs.com) + fond de carte [OpenStreetMap](https://www.openstreetmap.org/copyright)). Le fond de carte est chargé depuis les serveurs d'OpenStreetMap : il faut donc une connexion internet pour l'afficher (le reste du site fonctionne hors ligne).

- Les coordonnées GPS des lieux sont dans `src/data/placeCoords.js`, vérifiées une par une dans OpenStreetMap. Un lieu absent de ce fichier n'a pas de point (introuvable ou nom ambigu).
- Pour ajouter un point : clic droit sur l'endroit exact dans Google Maps (ou OpenStreetMap), copier « latitude, longitude », puis ajouter `'id-du-lieu': [latitude, longitude],` dans `placeCoords.js`.
- Le centre des quartiers (`lat`/`lon`) est dans `src/data/places.js`.
