import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import Navbar from '../../../..'
import Sidebar from '../../../../sidebar'
import {FooterContainer} from '../../../../footer/containers/footer'
import ScrollToTop from '../../../../ScrollToTop'
import ScrollIndicator from '../../../../ScrollLoad/sload'
// import Category from './Categories/Category';
import VisitUs from '../../../VisitUs'
import CarouselOurProducts from '../../../Carousel'
import Footer from '../../../../footer'

import style from "../../../Categories/layout/layout.module.css";
import Sidebar2 from "../../../Categories/layout/components/Sidebar";
import { Helmet } from 'react-helmet';

import Category from '../Category/Category';
import {HomeE_SubwooferSpeaker} from '../Category/Categories';

export const HomeESS = props => {
  return <div>
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
          <h3 className={style.heading}>Subwoofer Speaker</h3>
          <Category data={HomeE_SubwooferSpeaker}/>
        </main>
      </div>

    <ScrollToTop/>
      <ScrollIndicator/>
      <Footer/>
    </div>;
};

export default HomeESS;