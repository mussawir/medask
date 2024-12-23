import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png'; // Ensure the logo path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faArrowDown, faHome, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import Iconreadmore from '../images/Group23.png';
import greenhr from '../images/greenhr.png';
import { Container } from '@mui/material';
import Drawer from './Drawer';
import phonetopImg from '../images/phonetopImg.png';
import EmailTopImg from '../images/EmailTopImg.png';
import greyverticalHrNav from '../images/greyverticalHrNav.png';
import doctornursespecialequipment from '../images/doctornursespecialequipment.png';
import './Header.css';
import icon2 from '../images/TwCbOK.png';
import AboutUsPage from '../Pages/AboutUsPage';

const HomeHeader: React.FC = () => {
    const [currentClass, setCurrentClass] = useState('navbar-container'); // Initial class state

    useEffect(() => {
        const classes = ['navbar-container', 'navbar-container2', 'navbar-container3']; // List of classes
        let index = 0;

        // Function to change classes at set intervals
        const changeClass = () => {
            index = (index + 1) % classes.length; // Cycle through the classes
            setCurrentClass(classes[index]);
        };

        // Start with the first class immediately
        const firstTimeout = setTimeout(() => {
            changeClass(); // Change to the second class after 7 seconds
        }, 7000);

        // Change classes every 7 seconds after the initial timeout
        const interval = setInterval(() => {
            changeClass();
        }, 7000);

        // Clean up the timeouts on component unmount
        return () => {
            clearTimeout(firstTimeout);
            clearInterval(interval);
        };
    }, []);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    const location = useLocation(); // Get the current location
    const activePath = location.pathname; // Get the current path

    return (
        <>
            <nav className={`navbar ${currentClass}`}> {/* Apply dynamic class here */}
                <img className="icon2" src={icon2} alt="doctornurse" />
                <div className="navbar-top">
                    <div className="logo-top">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>

                    <div className='headerofsmallscreennavlinks'>
                        <Link to="/" className="nav-link-topsmallscreen">
                            <span className="icon-backgroundsmallscreen">
                                <img src={phonetopImg} alt="phonetopImg" className='phonetopImgsmallscreen' />
                            </span>
                            Call Us: <b>+92 319 6048487</b>
                        </Link>
                        <Link to="/" className="nav-link-topsmallscreen2">
                            <span className="icon-backgroundsmallscreen">
                                <img src={EmailTopImg} alt="EmailTopImg" className='phonetopImgsmallscreen' />
                            </span>
                            <a className='emailnavsmallscreen' href="mailto:info@medask.com.pk" style={{ color: '#170C40', textDecoration: 'none' }}>info@medask.com.pk</a>
                        </Link>
                    </div>
                    <div className="menu-iconsmallscreen">
                        <Drawer />
                    </div>

                    <div className="top-info">
                        <Link to="/" className="nav-link-top1">
                            <span className="icon-background">
                                <img src={phonetopImg} alt="phonetopImg" />
                            </span>
                            Call Us: <b>+92 319 6048487</b>
                        </Link>
                        <Link to="/" className="nav-link-top">
                            <span className="icon-background">
                                <img src={EmailTopImg} alt="EmailTopImg" />
                            </span>
                            <a className='outlinenone' href="mailto:info@medask.com.pk" style={{ color: '#170C40', textDecoration: 'none' }}>info@medask.com.pk</a>
                        </Link>
                    </div>

                    <ul className="nav-linkssecond">
                        <li>
                            <Link to="/" className={`nav-link ${activePath === '/' ? 'active' : ''}`}>
                                <FontAwesomeIcon icon={faHome} /> {/* Home Icon */}
                                Home
                            </Link>
                        </li>
                        <img src={greyverticalHrNav} alt="greyverticalHrNav" />
                        <li>
                            <Link to="/pharmacies" className={`nav-link ${activePath === '/pharmacies' ? 'active' : ''}`}>
                                Pharmacies
                            </Link>
                        </li>
                        <img src={greyverticalHrNav} alt="greyverticalHrNav" />
                        <li>
                            <Link to="/medical-tourism" className={`nav-link ${activePath === '/medical-tourism' ? 'active' : ''}`}>
                                Medical Tourism
                            </Link>
                        </li>
                        <img src={greyverticalHrNav} alt="greyverticalHrNav" />
                        <li>
                            <Link to="/aboutus" className={`nav-link ${activePath === '/about-us' ? 'active' : ''}`}>
                                About Us
                            </Link>
                        </li>
                        <img src={greyverticalHrNav} alt="greyverticalHrNav" />
                        <li>
                            <Link to="/contact" className={`nav-link ${activePath === '/contact' ? 'active' : ''}`}>
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );
};

export default HomeHeader;
