import homePhoto from '../assets/home.jpg'
import { useI18n } from '../i18n.jsx'

// Photo d'accueil : remplace src/assets/home.jpg pour la changer.
export default function HeroArt() {
  const { t } = useI18n()
  return <img className="hero-art" src={homePhoto} alt={t.home.photoAlt} fetchPriority="high" />
}
