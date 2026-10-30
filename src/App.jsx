import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { I18nProvider, useI18n } from './i18n.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import Tips from './pages/Tips.jsx'
import Calendar from './pages/Calendar.jsx'
import MapPage from './pages/Map.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Shell() {
  const { t } = useI18n()
  return (
    <>
      <a className="skip-link" href="#contenu">
        {t.skip}
      </a>
      <Header />
      <main id="contenu">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/conseils" element={<Tips />} />
          <Route path="/calendrier" element={<Calendar />} />
          <Route path="/carte" element={<MapPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <HashRouter>
        <Shell />
      </HashRouter>
    </I18nProvider>
  )
}
