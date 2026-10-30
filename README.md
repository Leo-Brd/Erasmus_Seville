# Ton Erasmus à Séville

Guide Erasmus perso (FR / ES / EN) en React + Vite. Aucune carte ni image externe : tout est dessiné en SVG.

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
