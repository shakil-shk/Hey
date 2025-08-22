import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import FabricGallery from '../components/FabricGallery'
import Services from '../components/Services'
import Brands from '../components/Brands'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Overview/>
    <FabricGallery/>
    <Services/>
    <Brands/>
    <Footer />
    </>
  )
}

export default Home
