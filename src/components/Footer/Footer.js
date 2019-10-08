import React from 'react';
import logo from '../../assets/img/logo-green-2x.png';

const Footer = props => (
    <footer className='footer'>
        <div className='footer__logo-box'>
            <img src={logo} alt='Full logo' className='footer__logo'></img>
        </div>
        <div className='row'>
            <div className='col-1-of-2'>
                <div className='footer__navigation'>
                    <ul className='footer__list'>
                        <li className='footer__item'><a href='#' className='footer__link'>Company</a></li>
                        <li className='footer__item'><a href='#' className='footer__link'>Contact us</a></li>
                        <li className='footer__item'><a href='#' className='footer__link'>Carrers</a></li>
                        <li className='footer__item'><a href='#' className='footer__link'>Privacy policy</a></li>
                        <li className='footer__item'><a href='#' className='footer__link'>Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className='col-1-of-2'>
                <p className='footer__copyright'>
                    Here should enter the copyright. You can also put some <a href='#' className='footer__link'>link</a> to navigate somewhere you want.
                </p>
            </div>
        </div>
    </footer>
)

export default Footer;