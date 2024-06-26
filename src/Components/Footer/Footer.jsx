import './Footer.css'
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFacebook, faInstagram, faYoutube } from "@fortawesome/free-solid-svg-icons";


function Footer(){
    return(
        <footer>
            <div className='all_container'>
            <div className="container">
            <div className="one">
                <ul>
                    <li><a href="https://www.blanxer.com/"><img src="https://www.blanxer.com/svg/logo_white.svg" alt="logo" width={120} /></a></li>
                    <li><div className="message">Launch your e-commerce business in <br /> minutes</div></li>
                    <li>
                        <div className='social media'>
                        {/* <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTiktok} />
                        <FontAwesomeIcon icon={faYoutube} /> */}
                        </div>
                    </li>
                    <li><div className='mail'>hello@blanxer.com</div></li>
                </ul>
                <div></div>
            </div>
            <div className="two">
                <ul>
                    <li><h2 className='heading'>Blanxer</h2></li>
                    <li><a href="#" className='link'>Start For Free</a></li>
                    <li><a href="#" className='link'>Login</a></li>
                    <li><a href="#" className='link'>Pricing</a></li>
                    <li><a href="#" className='link'>FAQ's</a></li>
                </ul>

            </div>
            <div className="three">
                <ul>
                    <li><h2 className='heading'>Support</h2></li>
                    <li><a href="#"className='link'>Customer Service</a></li>
                    <li><a href="#"className='link'>+977 9802344850</a></li>
                    <li><a href="#"className='link'>Contact Us</a></li>
                    <li><a href="#"className='link'>Report a Bug</a></li>
                </ul>
            </div>
            <div className="four">
                <ul>
                    <li><h2 className='heading'>Legal</h2></li>
                    <li><a href="#" className='link'>Terms of Services</a></li>
                    <li><a href="#" className='link'>Privacy Policy</a></li>
                </ul>
            </div>
            </div>
            <a href="#" className='copyRight'>&copy; {new Date().getFullYear()} Blanxer</a>
            </div>
        </footer>
    );
}
export default Footer;