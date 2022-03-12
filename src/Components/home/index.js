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
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>

      <Zoom>
        <Carousel/>
      </Zoom>
      
      <Fade>
        <Featured/>
      </Fade>
      
      <ScrollToTop/>
      <ScrollIndicator/>
      <Footer/>
    </div>
  )
}

export default Home
