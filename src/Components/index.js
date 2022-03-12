import React, { useState } from 'react'
import {Nav, NavLink, Bars, NavMenu} from './NavElements';
import './index.css'
import Sidebar from './sidebar';

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
                <img className='hug-logo' src='http://www.hug.com.ph/wp-content/uploads/2019/02/HUG-LOGO.png'>

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
