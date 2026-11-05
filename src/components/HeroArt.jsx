import Photo, { hasPhoto } from './Photo.jsx'

// Arc brisé (ogive) : deux arcs de rayon égal à la largeur, centrés sur le pied opposé.
function ogive(cx, base, w, springH) {
  const spring = base - springH
  const apex = spring - w * 0.866
  return `M${cx - w / 2} ${base}V${spring}A${w} ${w} 0 0 1 ${cx} ${apex}A${w} ${w} 0 0 1 ${cx + w / 2} ${spring}V${base}Z`
}

// Créneaux : une suite de petits merlons entre x0 et x1, posés sur la ligne y.
function crenels(x0, x1, y, w, h) {
  let d = ''
  for (let x = x0; x + w <= x1; x += w * 2) d += `M${x} ${y}v${-h}h${w}v${h}`
  return d
}

// Illustration d'accueil dessinée en SVG (Giralda, cathédrale, Torre del Oro, orangers, Guadalquivir).
// Si tu déposes src/photos/accueil.jpg, la photo remplace l'illustration.
export default function HeroArt() {
  if (hasPhoto('accueil')) {
    return <Photo name="accueil" alt="" ratio="4 / 5" className="hero__photo" />
  }

  return (
    <svg className="hero-art" viewBox="0 -40 600 480" role="img" aria-label="Séville" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dcecfb" />
          <stop offset="1" stopColor="#fff6e6" />
        </linearGradient>
      </defs>

      <rect y="-40" width="600" height="480" fill="url(#sky)" />
      <circle cx="440" cy="150" r="96" fill="#f6a43c" opacity=".9" />
      <circle cx="440" cy="150" r="120" fill="none" stroke="#f08a24" strokeOpacity=".35" strokeWidth="2" strokeDasharray="3 8" />

      {/* Cathédrale gothique : arcs brisés, contreforts, arcs-boutants, pinacles et flèche */}
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* Nef haute (claire-voie) */}
        <rect x="108" y="222" width="108" height="42" fill="#fff" stroke="#1b4f9c" strokeWidth="3" />

        {/* Lanterne et flèche centrales */}
        <rect x="146" y="184" width="32" height="40" fill="#fff" stroke="#1b4f9c" strokeWidth="3" />
        <path d={ogive(162, 216, 12, 12)} fill="#1b4f9c" />
        <path d="M144 184L162 132L180 184Z" fill="#f08a24" stroke="#1b4f9c" strokeWidth="3" />
        <path d="M162 132V114M156 121h12" stroke="#1b4f9c" strokeWidth="3" />
        {[146, 178].map((x) => (
          <path key={x} d={`M${x - 4} 184L${x} 162L${x + 4} 184Z`} fill="#fff" stroke="#1b4f9c" strokeWidth="2.5" />
        ))}

        {/* Arcs-boutants */}
        {[
          'M79 248Q92 230 110 236',
          'M247 248Q234 230 214 236',
        ].map((d) => (
          <g key={d} fill="none">
            <path d={d} stroke="#1b4f9c" strokeWidth="8" />
            <path d={d} stroke="#fff" strokeWidth="3" />
          </g>
        ))}

        {/* Bas-côté */}
        <rect x="68" y="262" width="194" height="78" fill="#fff" stroke="#1b4f9c" strokeWidth="3" />

        {/* Fenêtres hautes en arc brisé */}
        <g fill="#1b4f9c">
          <path d={ogive(140, 256, 16, 12)} />
          <path d={ogive(184, 256, 16, 12)} />
        </g>

        {/* Grandes fenêtres du bas-côté + remplage */}
        {[96, 140, 184, 228].map((cx) => (
          <g key={cx}>
            <path d={ogive(cx, 330, 22, 36)} fill="#1b4f9c" />
            <path d={`M${cx} 330V292M${cx - 11} 312H${cx + 11}`} stroke="#fff" strokeWidth="1.8" />
          </g>
        ))}

        {/* Contreforts et pinacles */}
        {[74, 118, 162, 206, 250].map((x) => (
          <g key={x} fill="#fff" stroke="#1b4f9c" strokeWidth="3">
            <rect x={x - 5} y="256" width="10" height="84" />
            <path d={`M${x - 7} 256L${x} 224L${x + 7} 256Z`} />
            <path d={`M${x} 224V214`} />
          </g>
        ))}
        <path d="M62 340h206" stroke="#1b4f9c" strokeWidth="3" />
      </g>

      {/* Giralda : fût en pierre, clocher à arcs brisés, flèche et girouette */}
      <g stroke="#1b4f9c" strokeWidth="3" strokeLinejoin="round">
        <rect x="262" y="112" width="52" height="228" fill="#fff" />
        <path d="M262 150h52M262 204h52M262 258h52" strokeWidth="2" />
        <rect x="266" y="72" width="44" height="42" fill="#fff" />
        <path d={crenels(266, 310, 72, 8, 6)} fill="#fff" strokeWidth="2.5" />
        <rect x="272" y="50" width="32" height="24" fill="#fff" />
        <path d="M272 50L272 36L277 50ZM304 50L304 36L299 50Z" fill="#fff" strokeWidth="2.5" />
        <path d="M274 50L288 18L302 50Z" fill="#f08a24" />
        <path d="M288 18V6" />
      </g>
      <path d="M288 6L302 11L288 16Z" fill="#f08a24" stroke="#1b4f9c" strokeWidth="2" strokeLinejoin="round" />
      <g fill="#1b4f9c">
        {[277, 288, 299].map((cx) => (
          <path key={cx} d={ogive(cx, 108, 8, 12)} />
        ))}
        <path d={ogive(288, 68, 8, 6)} />
        {[140, 194, 248, 302].map((base) => (
          <g key={base}>
            <path d={ogive(277, base, 8, 12)} />
            <path d={ogive(299, base, 8, 12)} />
          </g>
        ))}
      </g>

      {/* Torre del Oro : tour à trois niveaux, créneaux et fenêtres en arc brisé */}
      <g stroke="#1b4f9c" strokeWidth="3" strokeLinejoin="round">
        <path d="M421 204L433 174L445 204Z" fill="#f08a24" />
        <rect x="395" y="262" width="76" height="78" fill="#fff" />
        <rect x="403" y="232" width="60" height="30" fill="#fff" />
        <rect x="411" y="206" width="44" height="26" fill="#f08a24" />
        <path d={crenels(411, 455, 206, 6, 6)} fill="#f08a24" strokeWidth="2.5" />
        <path d={`${crenels(403, 411, 232, 8, 6)}${crenels(455, 463, 232, 8, 6)}`} fill="#fff" strokeWidth="2.5" />
        <path d={`${crenels(395, 403, 262, 8, 6)}${crenels(463, 471, 262, 8, 6)}`} fill="#fff" strokeWidth="2.5" />
      </g>
      <g fill="#1b4f9c">
        {[412, 433, 454].map((cx) => (
          <path key={cx} d={ogive(cx, 330, 10, 14)} />
        ))}
        <path d={ogive(419, 256, 8, 8)} />
        <path d={ogive(447, 256, 8, 8)} />
        <path d={ogive(433, 226, 8, 6)} />
      </g>

      {/* Orangers */}
      <g>
        <path d="M34 340v-62" stroke="#1b4f9c" strokeWidth="4" />
        <circle cx="34" cy="258" r="30" fill="#4c9a5c" />
        <g fill="#f08a24">
          <circle cx="22" cy="252" r="5" />
          <circle cx="42" cy="246" r="5" />
          <circle cx="36" cy="268" r="5" />
          <circle cx="48" cy="260" r="4" />
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
