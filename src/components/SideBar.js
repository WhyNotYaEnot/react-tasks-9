import React from 'react';
import './SideBar.css';
import Menu from './Menu';

const SideBar = ({ title, menuList }) => {
  return (
    <aside className="sidebar">
      <h2>{title}</h2>
      <Menu list={menuList} />
    </aside>
  );
};

export default SideBar;
