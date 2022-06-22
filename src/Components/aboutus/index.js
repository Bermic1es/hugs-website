import Navbar from '..'
import ScrollToTop from '../ScrollToTop'
import ScrollIndicator from '../ScrollLoad/sload'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import StepperStory from './Stepper'
import CompanyValues from './CompanyValues'
import { homeObjOne } from './InfoSection/Data'
import Footer from '../footer'
import { Helmet } from 'react-helmet'

const AboutUs = () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; 
  }
  
  return (
    <div>
      <Helmet>
        <title> HUG | About Us</title>
      </Helmet>
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
