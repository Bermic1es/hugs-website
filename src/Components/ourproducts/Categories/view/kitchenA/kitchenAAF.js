import React from 'react';
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
import {KitchenA_AirFryer} from '../Category/Categories';

export const KitchenAAF = props => {
  return <div>
      <Navbar/>
      <CarouselOurProducts/>
      <VisitUs/>
        <div className={style.layout}>
          <aside className={style.aside}>
            <Sidebar2 />
          </aside>
          <main className={style.main}>
            <h3 className={style.heading}>Air Fryer</h3>
            <Category data={KitchenA_AirFryer}/>
          </main>
        </div>

    <ScrollToTop/>
      <ScrollIndicator/>
      <Footer/>
    </div>;
};

export default KitchenAAF;