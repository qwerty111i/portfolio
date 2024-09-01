import React, {useState} from 'react'
import { IoClose } from 'react-icons/io5'
import { RxHamburgerMenu } from "react-icons/rx";

import './Navbar.css'

const Navbar = () => {
const [isOpen, changeState] = useState(false);
const clickMenu = () => changeState(!isOpen);
const closeMenu = () => changeState(false);

  return (
    <div className='header'>
        <nav className='navbar'>
            <h1 className='title'>Adwaith Ramesh</h1>
            <div className='hamburger' onClick={clickMenu}>
                {isOpen ? (<IoClose size={30} style={{color: '#ffffff'}}/>) 
                : (<RxHamburgerMenu size={30} style={{color: '#ffffff'}}/>)}
            </div>
            <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <a href='#about' onClick={closeMenu}>About</a>
                </li>
                <li className='nav-item'>
                    <a href='#resume' onClick={closeMenu}>Resume</a>
                </li>
                <li className='nav-item'>
                    <a href='#portfolio' onClick={closeMenu}>Portfolio</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar