import { useI18n } from '../i18n.jsx'

// Crédit d'une photo issue de Wikimedia Commons : auteur (lien vers la source) et licence.
export default function PhotoCredit({ photo }) {
  const { t, l } = useI18n()
  if (!photo) return null

  return (
    <figcaption className="photo-credit">
      {t.tips.photoBy}:{' '}
      <a href={photo.url} target="_blank" rel="noopener noreferrer">
        {l(photo.author)}
      </a>
      , {l(photo.license)} · Wikimedia Commons
    </figcaption>
  )
}
