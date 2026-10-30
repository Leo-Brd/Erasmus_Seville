import { useState } from 'react'
import { useI18n } from '../i18n.jsx'
import Icon from './Icon.jsx'

// Toutes les photos déposées dans src/photos/** sont détectées automatiquement.
// Le nom attendu est « dossier/nom » sans extension, ex. « lieux/real-alcazar » → src/photos/lieux/real-alcazar.jpg
const files = import.meta.glob('/src/photos/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const index = {}
for (const [path, url] of Object.entries(files)) {
  index[path.replace('/src/photos/', '').replace(/\.[^.]+$/, '').toLowerCase()] = url
}

export function hasPhoto(name) {
  return Boolean(index[name?.toLowerCase()])
}

export default function Photo({ name, alt = '', ratio = '4 / 3', className = '' }) {
  const { t } = useI18n()
  const [failed, setFailed] = useState(false)
  const url = name ? index[name.toLowerCase()] : undefined

  if (url && !failed) {
    return (
      <div className={`photo ${className}`} style={{ aspectRatio: ratio }}>
        <img src={url} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      </div>
    )
  }

  return (
    <div className={`photo photo--empty ${className}`} style={{ aspectRatio: ratio }}>
      <Icon name="camera" size={28} />
      <span>{t.photo.soon}</span>
      {import.meta.env.DEV && name && <code>src/photos/{name}.jpg</code>}
    </div>
  )
}
