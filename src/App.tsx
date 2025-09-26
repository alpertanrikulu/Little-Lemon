
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import BookingPage from './BookingPage'

function App() {

  return (
    <BrowserRouter>
      <Header />
        <main className=''>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
