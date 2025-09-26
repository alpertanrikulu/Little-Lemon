import React from 'react'
import BannerSection from './components/BannerSection'
import CardsSection from './components/CardsSection'
import Testimonials from './components/Testimonials'
import Introducing from './components/Introducing'

const Home = () => {
  return (
    <>
        <BannerSection />
        <CardsSection />
        <Testimonials />
        <Introducing />
    </>
  )
}

export default Home