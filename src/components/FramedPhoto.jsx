// Photo accrochée comme un tableau : cadre en bois (quatre baguettes à coupe d'onglet), passe-partout crème, légère inclinaison.
export default function FramedPhoto({ url, alt, tilt = 0, onClick, label }) {
  const inner = (
    <div className="framed__frame">
      <span className="fr fr--t" />
      <span className="fr fr--r" />
      <span className="fr fr--b" />
      <span className="fr fr--l" />
      <div className="framed__mat">
        <img src={url} alt={alt} loading="lazy" />
      </div>
    </div>
  )

  return (
    <figure className="framed" style={{ '--tilt': `${tilt}deg` }}>
      {onClick ? (
        <button type="button" className="framed__btn" onClick={onClick} title={label} aria-label={label}>
          {inner}
        </button>
      ) : (
        inner
      )}
    </figure>
  )
}
