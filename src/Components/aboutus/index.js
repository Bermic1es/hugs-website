import React from 'react'
import Navbar from '..'
import Sidebar from '../sidebar'
import {FooterContainer} from '../footer/containers/footer'
import ScrollToTop from '../ScrollToTop'
import ScrollIndicator from '../ScrollLoad/sload'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import StepperStory from './Stepper'
import { homeObjOne } from './InfoSection/Data'
import Footer from '../footer'

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <StepperStory/>
      <ScrollIndicator/>
      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default AboutUs
