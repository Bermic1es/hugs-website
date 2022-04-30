import React from 'react';
import style from './sidebar.module.css';
import NavItem from './navItem/NavItem';
import { NavLink } from 'react-router-dom';
import { sideMenu } from './menu.config.js';

const Sidebar = props => {
  return (
    <nav className={style.sidebar}>
      {sideMenu.map((item, index) => {
        return <NavItem key={`${item.label}-${index}`} item={item} />;
      })}
      <div className={style.div}>
        <NavLink to='/ourproducts' className={style.viewall}>View All</NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;