import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Navbar from '..'
import Sidebar from '../sidebar'
import {FooterContainer} from '../footer/containers/footer'
import ScrollToTop from '../ScrollToTop'
import ScrollIndicator from '../ScrollLoad/sload'
import Category from './Categories/view/Category/Category';
import VisitUs from './VisitUs'
import CarouselOurProducts from './Carousel'
import Footer from '../footer'
import Sidebar2 from "./Categories/layout/components/Sidebar";
import style from "./Categories/layout/layout.module.css";
import './Categories/view/Category/category.css';
import { ProductList } from './Categories/view/Category/AllProducts'
import { Helmet } from 'react-helmet'

const OurProducts = (props) => {

  return (
    <div>
      <Helmet>
        <title> HUG | Our Products</title>
      </Helmet>
      <Navbar/>
      <CarouselOurProducts/>
      <VisitUs/>
        <div className={style.layout}>
          <aside className={style.aside}>
            <Sidebar2 />
          </aside>
          <main className={style.main}>
            <h3 className={style.heading}>Our Products</h3>
            <Category data={ProductList}/>
          </main>
        </div>
      <ScrollToTop/>
      <ScrollIndicator/>
      <Footer/>
    </div>
  )
}

export default OurProducts
