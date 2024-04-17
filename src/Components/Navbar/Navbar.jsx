import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/asset 0.png'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };
  return (
    <div className="header">
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="" /><span>MetaLogic</span>

            </div>
            <ul className={`nav ${isActive ? "active" : ""}`}>
                <li><a href="#" onClick={closeMenu}>Home</a></li>
                <li><a href="#" onClick={closeMenu}>Services</a></li>
                <li><a href="#" onClick={closeMenu}>Career</a></li>
                <li><a href="#" onClick={closeMenu}>Blogs</a></li>
                <li><a href="#" onClick={closeMenu}>About Us</a></li>
            </ul>
            <button className='nav-btn'>Get in Touch</button>
            <div class={`hamburger ${isActive ? "active": ""}`} onClick={toggleMenu}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
