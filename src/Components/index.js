import React, { useState } from 'react'
import {Nav, NavLink, Bars, NavMenu} from './NavElements';
import './index.css'
import Sidebar from './sidebar';
import HUG from './hug-logo.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    
  return (
    <>
    <Nav className='navbarItems'>
        <NavLink to="/">
            <div className='hug-logo-background'>
                <img className='hug-logo' src={HUG}>

                </img>
            </div>
            
        </NavLink>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Bars onClick={toggle}/>
        <NavMenu>
            <NavLink className='nav-links' to="/home" activeStyle>
                Home
            </NavLink>
            <NavLink className='nav-links' to="/aboutus" activeStyle>
                About Us
            </NavLink>
            <NavLink className='nav-links' to="/ourproducts" activeStyle>
                Our Products
            </NavLink>
        </NavMenu>
    </Nav>
    </>
  )
}

export default Navbar
