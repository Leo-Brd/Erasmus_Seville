import { useI18n } from '../i18n.jsx'
import Icon from './Icon.jsx'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="footer">
      <div className="tile-strip" aria-hidden="true" />
      <div className="container footer__inner">
        <p>
          {t.footer.madeBy} <strong>Laurine Ouizemann</strong>
        </p>
        <a className="footer__link" href="https://www.instagram.com/lolo.ouiz" target="_blank" rel="noopener noreferrer">
          <Icon name="instagram" size={18} />
          {t.footer.instagram}: lolo.ouiz
        </a>
        <p>
          {t.footer.developedBy}
          <a className="footer__link" href="https://github.com/Leo-Brd" target="_blank" rel="noopener noreferrer">
            <Icon name="code" size={18} />
            Leo-Brd
          </a>
        </p>
      </div>
    </footer>
  )
}
