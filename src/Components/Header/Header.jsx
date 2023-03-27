import React from 'react'
import './Header.css'
import Logo from "../../assets/logo/long-logo.png"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav';
import MobileSearchBar from '../MobileSearchBar/MobileSearchBar';


function Header() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text2">Add Guests</div>
        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb Your Home</div>
        <div className="globe-div">
          <LanguageRoundedIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;