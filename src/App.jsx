import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ListingGrid from './components/ListingGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <ListingGrid />
      <Footer />
    </div>
  )
}

export default App
