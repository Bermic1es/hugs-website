import React from 'react'
import { FaToggleOff } from 'react-icons/fa'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper, SidebarRoute } from './SidebarElements'

import { SidebarData } from "./SidebarData";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink className='nav-links' to="/home" activeStyle>
                    Home
                </SidebarLink>
                <SidebarLink className='nav-links' to="/aboutus" activeStyle>
                    About Us
                </SidebarLink>
                <SidebarLink className='nav-links' to="/ourproducts" activeStyle>
                    Our Products
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
