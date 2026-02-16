import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { WhatsAppFloat } from '../components/WhatsAppFloat'

export function MainLayout() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
