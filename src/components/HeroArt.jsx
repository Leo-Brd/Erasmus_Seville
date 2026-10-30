import Photo, { hasPhoto } from './Photo.jsx'

// Illustration d'accueil dessinée en SVG (Giralda, cathédrale, Torre del Oro, orangers, Guadalquivir).
// Si tu déposes src/photos/accueil.jpg, la photo remplace l'illustration.
export default function HeroArt() {
  if (hasPhoto('accueil')) {
    return <Photo name="accueil" alt="" ratio="4 / 5" className="hero__photo" />
  }

  return (
    <svg className="hero-art" viewBox="0 -40 600 480" role="img" aria-label="Séville" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="sebka" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M6 0L12 6L6 12L0 6Z" fill="none" stroke="#1b4f9c" strokeOpacity=".5" />
        </pattern>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dcecfb" />
          <stop offset="1" stopColor="#fff6e6" />
        </linearGradient>
      </defs>

      <rect y="-40" width="600" height="480" fill="url(#sky)" />
      <circle cx="440" cy="150" r="96" fill="#f6a43c" opacity=".9" />
      <circle cx="440" cy="150" r="120" fill="none" stroke="#f08a24" strokeOpacity=".35" strokeWidth="2" strokeDasharray="3 8" />

      {/* Cathédrale */}
      <g stroke="#1b4f9c" strokeWidth="3" strokeLinejoin="round">
        <rect x="95" y="215" width="165" height="125" fill="#fff" />
        <path d="M95 215h165" />
        <g fill="#fff">
          <path d="M105 215v-26l8-12 8 12v26z" />
          <path d="M140 215v-34l8-14 8 14v34z" />
          <path d="M175 215v-34l8-14 8 14v34z" />
          <path d="M210 215v-26l8-12 8 12v26z" />
        </g>
      </g>
      <g fill="#1b4f9c">
        <path d="M112 330v-34a10 10 0 0 1 20 0v34z" />
        <path d="M150 330v-34a10 10 0 0 1 20 0v34z" />
        <path d="M188 330v-34a10 10 0 0 1 20 0v34z" />
        <path d="M226 330v-34a10 10 0 0 1 20 0v34z" />
      </g>

      {/* Giralda */}
      <g stroke="#1b4f9c" strokeWidth="3" strokeLinejoin="round">
        <rect x="262" y="112" width="52" height="228" fill="#fff" />
        <rect x="262" y="140" width="52" height="38" fill="url(#sebka)" />
        <rect x="262" y="232" width="52" height="38" fill="url(#sebka)" />
        <rect x="266" y="72" width="44" height="42" fill="#fff" />
        <path d="M279 106V92a9 9 0 0 1 18 0v14z" fill="#1b4f9c" stroke="none" />
        <rect x="271" y="54" width="34" height="18" fill="#f08a24" />
        <path d="M273 54q15-26 30 0z" fill="#f08a24" />
        <path d="M288 30V14" />
      </g>
      <circle cx="288" cy="12" r="5" fill="#1b4f9c" />
      <g fill="#1b4f9c">
        <path d="M276 196v-10a4 4 0 0 1 8 0v10z" />
        <path d="M292 196v-10a4 4 0 0 1 8 0v10z" />
        <path d="M276 304v-10a4 4 0 0 1 8 0v10z" />
        <path d="M292 304v-10a4 4 0 0 1 8 0v10z" />
      </g>

      {/* Torre del Oro */}
      <g stroke="#1b4f9c" strokeWidth="3" strokeLinejoin="round">
        <rect x="395" y="262" width="76" height="78" fill="#fff" />
        <rect x="403" y="232" width="60" height="30" fill="#fff" />
        <rect x="411" y="206" width="44" height="26" fill="#f08a24" />
        <path d="M417 206q16-20 32 0z" fill="#f08a24" />
      </g>
      <g fill="#1b4f9c">
        <path d="M411 318v-16a6 6 0 0 1 12 0v16z" />
        <path d="M443 318v-16a6 6 0 0 1 12 0v16z" />
        <rect x="425" y="240" width="16" height="10" rx="5" />
      </g>

      {/* Orangers */}
      <g>
        <path d="M58 340v-70" stroke="#1b4f9c" strokeWidth="4" />
        <circle cx="58" cy="250" r="38" fill="#4c9a5c" />
        <g fill="#f08a24">
          <circle cx="42" cy="244" r="6" />
          <circle cx="68" cy="236" r="6" />
          <circle cx="60" cy="264" r="6" />
          <circle cx="76" cy="256" r="5" />
        </g>
        <path d="M530 340v-60" stroke="#1b4f9c" strokeWidth="4" />
        <circle cx="530" cy="262" r="32" fill="#4c9a5c" />
        <g fill="#f08a24">
          <circle cx="518" cy="256" r="5" />
          <circle cx="540" cy="252" r="5" />
          <circle cx="532" cy="272" r="5" />
        </g>
      </g>

      {/* Guadalquivir */}
      <rect y="338" width="600" height="102" fill="#1b4f9c" />
      <g fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round">
        <path d="M30 372q20-12 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" />
        <path d="M0 402q20-12 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" />
      </g>
      <rect y="338" width="600" height="6" fill="#f08a24" />
    </svg>
  )
}
