import React from 'react';
import doc from './../file.json';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
    <MenuIcon className="menu"/>
    <input type="text" placeholder="Enter here                                                            Search" className="input"/>
     <div className="liv">Live Bids</div>
    <img src={doc.nav_bar.person_icon} alt="person icon" className="icon"/>
     <div className="liv1">Help & support</div>
    </nav>
  );
}
