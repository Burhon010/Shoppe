import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

// Общий каркас: Header сверху, Footer снизу, страница на месте <Outlet />.
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
