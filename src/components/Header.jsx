import React, { useState } from "react";
import { Link } from "react-router-dom";


import './Header.css'
import Logo from '../assets/logo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(prev => !prev);
    };

    return (
    <header className="site-header">
    <div className="container">
        <div className="grid">
            <div className="col-3">
                <img src={Logo} alt="service's logo" />
            </div>
            <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
            <div className={`col-9 header-menu ${menuOpen ? 'open' : ''}`}>
                <nav>
                    <ul className="inline-menu">
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
  );
};

export default Header;
