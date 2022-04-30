import React, {useEffect} from 'react'
import Navbar from '..'
import Sidebar from '../sidebar'
import {FooterContainer} from '../footer/containers/footer'
import ScrollToTop from '../ScrollToTop'
import ScrollIndicator from '../ScrollLoad/sload'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import StepperStory from './Stepper'
import CompanyValues from './CompanyValues'
import { homeObjOne } from './InfoSection/Data'
import Footer from '../footer'
import axios from 'axios'

const AboutUs = () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
    
  }
  
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <CompanyValues/>
      <StepperStory/>
      <ScrollIndicator/>
      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default AboutUs
