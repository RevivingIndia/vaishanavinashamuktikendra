import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { MainLayout } from './layouts/MainLayout'
import { LoadingScreen } from './components/LoadingScreen'
import { usePageLoad } from './hooks/usePageLoad'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { OurApproach } from './pages/OurApproach'
import { TreatmentPlans } from './pages/TreatmentPlans'
import { OurServices } from './pages/OurServices'
import { RecoveryJourney } from './pages/RecoveryJourney'
import { Facilities } from './pages/Facilities'
import { SuccessStories } from './pages/SuccessStories'
import { Contact } from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-approach" element={<OurApproach />} />
          <Route path="treatment-plans" element={<TreatmentPlans />} />
          <Route path="our-services" element={<OurServices />} />
          <Route path="recovery-journey" element={<RecoveryJourney />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const loading = usePageLoad()

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <AnimatedRoutes key="app" />
        )}
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
