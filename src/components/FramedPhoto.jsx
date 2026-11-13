// Photo accrochée comme un tableau : cadre doré, passe-partout crème, légèrement penchée.
export default function FramedPhoto({ url, alt, tilt = 0 }) {
  return (
    <figure className="framed" style={{ '--tilt': `${tilt}deg` }}>
      <div className="framed__frame">
        <div className="framed__mat">
          <img src={url} alt={alt} loading="lazy" />
        </div>
      </div>
    </figure>
  )
}
