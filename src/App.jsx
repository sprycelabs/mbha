import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filozofie from './components/Filozofie'
import Projekty from './components/Projekty'
import Sluzby from './components/Sluzby'
import Recenze from './components/Recenze'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="bg-cream font-sans text-stone-950">
      <Navbar />
      <Hero />
      <Filozofie />
      <Projekty />
      <Sluzby />
      <Recenze />
      <Kontakt />
      <Footer />
    </div>
  )
}
