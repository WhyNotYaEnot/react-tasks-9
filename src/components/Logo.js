import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLogoImage } from '../actions';

const Logo = ({ imagePath, setLogoImage }) => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={imagePath} alt="Logo" />
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  imagePath: state.logoImagePath,
});

export default connect(mapStateToProps, { setLogoImage })(Logo);
