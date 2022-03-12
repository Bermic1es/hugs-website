import React,{useState} from 'react'
import Navbar from '..'
import Sidebar from '../sidebar'
import {FooterContainer} from '../footer/containers/footer'
import ScrollToTop from '../ScrollToTop'
import ScrollIndicator from '../ScrollLoad/sload'
import Category from './Categories/Category';
import VisitUs from './VisitUs'
import CarouselOurProducts from './Carousel'
import Footer from '../footer'


const OurProducts = () => {
  return (
    <div>
      <Navbar/>
      <CarouselOurProducts/>
      <VisitUs/>
      <Category/>
      <ScrollToTop/>
      <ScrollIndicator/>
      <Footer/>
    </div>
  )
}

export default OurProducts
