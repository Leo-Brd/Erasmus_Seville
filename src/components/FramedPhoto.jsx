// Photo « polaroid » : cadre blanc avec une légende manuscrite, légèrement penchée.
export default function FramedPhoto({ url, alt, tilt = 0, caption, onClick, label }) {
  const inner = (
    <div className="framed__card">
      <img src={url} alt={alt} loading="lazy" />
      {caption && <span className="framed__caption">{caption}</span>}
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
