import React from 'react';
import { connect } from 'react-redux';
import DateTime from './DateTime';
import Logo from './Logo';
import './Header.css';

const Header = ({ title, logoImagePath }) => {
  return (
    <header className="header">
      <Logo />
      <h1>{title}</h1>
      <div className="date-time">
        <DateTime />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  logoImagePath: state.logoImagePath,
});

export default connect(mapStateToProps)(Header);
