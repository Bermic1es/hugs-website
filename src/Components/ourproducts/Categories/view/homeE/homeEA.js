import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import Navbar from '../../../..'
import ScrollToTop from '../../../../ScrollToTop'
import ScrollIndicator from '../../../../ScrollLoad/sload'
import VisitUs from '../../../VisitUs'
import CarouselOurProducts from '../../../Carousel'
import Footer from '../../../../footer'
import style from "../../../Categories/layout/layout.module.css";
import Sidebar2 from "../../../Categories/layout/components/Sidebar";
import '../Category/category.css'

import Category from '../Category/Category';
import {HomeE_Amplifier} from '../Category/Categories';

export const HomeEA = props => {

  return <div>
      <Navbar/>
      <CarouselOurProducts/>
      <VisitUs/>
      <div className={style.layout}>
        <aside className={style.aside}>
          <Sidebar2 />
        </aside>
        <main className={style.main}>
          <h3 className={style.heading}>Amplifier</h3>
          <Category data={HomeE_Amplifier}/>
        </main>
      </div>

    <ScrollToTop/>
      <ScrollIndicator/>
      <Footer/>
    </div>;
};

export default HomeEA;