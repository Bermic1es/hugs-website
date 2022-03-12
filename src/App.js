import logo from './logo.svg';
import Navbar from "./Components"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Components/home"
import AboutUs from "./Components/aboutus"
import OurProducts from './Components/ourproducts';
import ScrollToTop from './Components/ScrollToTop';
import ScrollIndicator from './Components/ScrollLoad/sload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/ourproducts' element={<OurProducts/>} />
      </Routes>
    </Router>
  );
}

export default App;
