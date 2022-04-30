import logo from './logo.svg';

import Navbar from "./Components"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Components/home/index"
import AboutUs from "./Components/aboutus/index"
import OurProducts from './Components/ourproducts/index';
import ScrollToTop from './Components/ScrollToTop';
import ScrollIndicator from './Components/ScrollLoad/sload';

import {HomeEPBS} from './Components/ourproducts/Categories/view/homeE/homeEPBS';
import {HomeEBS} from './Components/ourproducts/Categories/view/homeE/homeEBS';
import {HomeESS} from './Components/ourproducts/Categories/view/homeE/homeESS';
import {HomeECS} from './Components/ourproducts/Categories/view/homeE/homeECS';
import {HomeES} from './Components/ourproducts/Categories/view/homeE/homeES';
import {HomeET} from './Components/ourproducts/Categories/view/homeE/homeET';
import {HomeEWB} from './Components/ourproducts/Categories/view/homeE/homeEWB';
import {HomeEM} from './Components/ourproducts/Categories/view/homeE/homeEM';
import {HomeEA} from './Components/ourproducts/Categories/view/homeE/homeEA';
import {HomeLH} from './Components/ourproducts/Categories/view/homeL/homeLH';
import {HomeLP} from './Components/ourproducts/Categories/view/homeL/homeLP';
import {HomeLD} from './Components/ourproducts/Categories/view/homeL/homeLD';
import {HomeLCT} from './Components/ourproducts/Categories/view/homeL/homeLCT';
import {HomeLF} from './Components/ourproducts/Categories/view/homeL/homeLF';
import {HomeLO} from './Components/ourproducts/Categories/view/homeL/homeLO';
import {KitchenARC} from './Components/ourproducts/Categories/view/kitchenA/kitchenARC';
import {KitchenAEC} from './Components/ourproducts/Categories/view/kitchenA/kitchenAEC';
import {KitchenAEHC} from './Components/ourproducts/Categories/view/kitchenA/kitchenAEHC';
import {KitchenAI} from './Components/ourproducts/Categories/view/kitchenA/kitchenAI';
import {KitchenAO} from './Components/ourproducts/Categories/view/kitchenA/kitchenAO';
import {KitchenAEK} from './Components/ourproducts/Categories/view/kitchenA/kitchenAEK';
import {KitchenAM} from './Components/ourproducts/Categories/view/kitchenA/kitchenAM';
import {KitchenAG} from './Components/ourproducts/Categories/view/kitchenA/kitchenAG';
import {KitchenAAF} from './Components/ourproducts/Categories/view/kitchenA/kitchenAAF';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/ourproducts' element={<OurProducts/>} />
        <Route path='/ourproducts/homeE/homeEPBS' element={<HomeEPBS/>}/>
        <Route path='/ourproducts/homeE/homeEBS' element={<HomeEBS/>}/>
        <Route path='/ourproducts/homeE/homeESS' element={<HomeESS/>}/>
        <Route path='/ourproducts/homeE/homeECS' element={<HomeECS/>}/>
        <Route path='/ourproducts/homeE/homeES' element={<HomeES/>}/>
        <Route path='/ourproducts/homeE/homeET' element={<HomeET/>}/>
        <Route path='/ourproducts/homeE/homeEWB' element={<HomeEWB/>}/>
        <Route path='/ourproducts/homeE/homeEM' element={<HomeEM/>}/>
        <Route path='/ourproducts/homeE/homeEA' element={<HomeEA/>}/>
        <Route path='/ourproducts/homeL/homeLH' element={<HomeLH/>}/>
        <Route path='/ourproducts/homeL/homeLD' element={<HomeLD/>}/>
        <Route path='/ourproducts/homeL/homeLP' element={<HomeLP/>}/>
        <Route path='/ourproducts/homeL/homeLCT' element={<HomeLCT/>}/>
        <Route path='/ourproducts/homeL/homeLF' element={<HomeLF/>}/>
        <Route path='/ourproducts/homeL/homeLO' element={<HomeLO/>}/>
        <Route path='/ourproducts/kitchenA/kitchenARC' element={<KitchenARC/>}/>
        <Route path='/ourproducts/kitchenA/kitchenAEC' element={<KitchenAEC/>}/>
        <Route path='/ourproducts/kitchenA/kitchenAEHC' element={<KitchenAEHC/>}/>
        <Route path='/ourproducts/kitchenA/kitchenAI' element={<KitchenAI/>}/>
        <Route path='/ourproducts/kitchenA/kitchenAO' element={<KitchenAO/>}/>
        <Route path='/ourproducts/kitchenA/kitchenAEK' element={<KitchenAEK/>}/>
        <Route path='/ourproducts/kitchenA/kitchenAM' element={<KitchenAM/>}/>
        <Route path='/ourproducts/kitchenA/kitchenAG' element={<KitchenAG/>}/>
        <Route path='/ourproducts/kitchenA/kitchenAAF' element={<KitchenAAF/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
