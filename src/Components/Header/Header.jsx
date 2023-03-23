import React from 'react'
import './Header.css'
import Logo from "../../assets/logo/long-logo.png"

function Header() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text2">Add Guests</div>
      </div>
      <div className="profile-container"></div>
    </div>
  );
}

export default Header;