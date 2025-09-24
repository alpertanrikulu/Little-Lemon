
import './App.css'
import BannerSection from './components/BannerSection'
import Footer from './components/Footer'
import Header from './components/Header'
import CardsSection from './components/CardsSection'

function App() {

  return (
    <>
    <Header />
    <main className=''>
      <BannerSection />
      <CardsSection />
    </main>
    <Footer />
    </>
  )
}

export default App
