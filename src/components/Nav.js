import React from 'react';
import { useState } from 'react';
import "./Nav.scss";
import Netflixlogo from '../components/Netflixlogo.png';
import avatar from '../components/avatar.png';

const Nav = () => {

    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    };

    useState(() => {
        document.addEventListener("scroll", transitionNav)
    });

    const handleClick = () => {
        console.log(toggleMenu);
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    return (
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
            <button className='nav__burger' onClick={handleClick}><i className="fa-solid fa-bars"></i></button>
            {/* <img src='./images/Netflix-logo.png' className="nav__logo" alt="Netflix" /> */}
            <img className='nav__logo' src={Netflixlogo} alt="Netflix" ></img>
            <nav className='nav__links'>
                <a href='/' className='nav__link'>
                    Accueil
                </a>
                <a href='/' className='nav__link'>
                    Séries
                </a>
                <a href='/' className='nav__link'>
                    Films
                </a>
            </nav>
            <div className='nav__actions'>
                <a href='/' className='nav__action'>
                    <i className="fa-solid fa-magnifying-glass"></i>                </a>
                <a href='/' className='nav__action'>
                    <p className='direct'>DIRECT</p>
                </a>
                <a href='/' className='nav__action'>
                    <i className="fa-regular fa-gift"></i>
                </a>
                <a href='/' className='nav__action'>
                    <i className="fa-solid fa-bell"></i>
                </a>
                <a href='/' className='nav__action'>
                    {/* <img className='avatar1' src='./images/avatar.png' alt='' /> */}
                    <img className='avatar1' src={avatar} alt="imgfond" ></img>
                </a>
            </div>
        </div>
    );
}

export default Nav;