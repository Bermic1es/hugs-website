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
import {Helmet} from 'react-helmet'

const Home = () => {
  return (
    <div className='home-page'>
      <Helmet>
        <title> HUG | Home</title>
      </Helmet>
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
