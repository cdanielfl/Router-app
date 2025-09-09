import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export default function Layout() {
  return (
    <>
      <Navbar/>
      <main className="container d-flex justify-content-center align-items-center">
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
