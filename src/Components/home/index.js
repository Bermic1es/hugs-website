import React from 'react'
import './home.css'
import Navbar from '..'
import Sidebar from '../sidebar'
import Footer from '../footer'
import ScrollToTop from '../ScrollToTop'
import ScrollIndicator from '../ScrollLoad/sload'
import Hero from './Hero'
import Carousel from './Carousel'
import Featured from './Featured'

const Home = () => {
  return (
    <div className='home-page'>
      <Navbar/>
      <Hero/>
      <Carousel/>
      <Featured/>
      <ScrollToTop/>
      <ScrollIndicator/>
      <Footer/>
    </div>
  )
}

export default Home
