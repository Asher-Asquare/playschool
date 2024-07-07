import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';
import my_logo from '../assets/my_logo_short.png';

const Navbar = ({ theme, setTheme }) => {
    const toggleMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`navbar ${theme}`}>
            <img src={my_logo} alt='Logo' className='logo' />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#teacher">Teacher</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='search-box'>
                <input type='text' placeholder='Search' />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt='Search Icon' />
            </div>
            <img 
                onClick={toggleMode} 
                src={theme === 'light' ? toggle_light : toggle_dark} 
                alt='Toggle Icon' 
                className='toggle-icon' 
            />
        </div>
    );
};

export default Navbar;
