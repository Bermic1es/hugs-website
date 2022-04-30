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

import Category from '../Category/Category';
import {HomeE_BluetoothSpeaker} from '../Category/Categories';

export const HomeEBS = props => {

  return <div>
      <Navbar/>
      <CarouselOurProducts/>
      <VisitUs/>
      <div className={style.layout}>
      <aside className={style.aside}>
        <Sidebar2 />
      </aside>
      <main className={style.main}>
        <h3 className={style.heading}>Bluetooth Speaker</h3>
        <Category data={HomeE_BluetoothSpeaker}/>
      </main>
      </div>

    <ScrollToTop/>
      <ScrollIndicator/>
      <Footer/>
    </div>;
};

export default HomeEBS;