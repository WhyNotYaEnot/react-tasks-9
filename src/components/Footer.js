import React from 'react';
import './Footer.css';
import Menu from './Menu';

const Footer = ({ title, menuList }) => {
  return (
    <footer className="footer">
      <h2>{title}</h2>
      <Menu list={menuList} />
    </footer>
  );
};

export default Footer;
