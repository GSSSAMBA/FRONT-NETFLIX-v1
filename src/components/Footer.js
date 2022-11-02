import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <div className='container'>
                    <div className='"footer__socials'>
                        <a href='/' className='footer__social'>
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href='/' className='footer__social'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href='/' className='footer__social'>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href='/' className='footer__social'>
                            <i className="fa-brands fa-youtube"></i>

                        </a>
                    </div>
                    <ul className='footer__links'>
                        <li className='footer__link'>
                            <a href='/'>Lien footer</a>
                        </li>
                        <li className='footer__link'>
                            <a href='/'>Lien footer</a>
                        </li>
                        <li className='footer__link'>
                            <a href='/'>Lien footer</a>
                        </li>
                        <li className='footer__link'>
                            <a href='/'>Lien footer</a>
                        </li>
                        <li className='footer__link'>
                            <a href='/'>Lien footer</a>
                        </li>
                        <li className='footer__link'>
                            <a href='/'>Lien footer</a>
                        </li>
                        <li className='footer__link'>
                            <a href='/'>Lien footer</a>
                        </li>
                        <li className='footer__link'>
                            <a href='/'>Lien footer</a>
                        </li>
                    </ul>
                    <div className='footer__copy'>
                        Netflix Clone - tous droits réservés
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

