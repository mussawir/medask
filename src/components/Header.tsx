import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png'; // Ensure the logo path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faArrowDown, faHome, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import Drawer from './Drawer';
import phonetopImg from '../images/phonetopImg.png';
import EmailTopImg from '../images/EmailTopImg.png';
import greyverticalHrNav from '../images/greyverticalHrNav.png';
import './Header.css';
import Group1 from '../images/Gruop21'; // Custom SVG component
import '../App.css'

const Header: React.FC = () => {
    // Function to scroll to the bottom of the page
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
            <nav className="navbar  ">
                <div className="navbar-top">
                    <div className="logo-top">
                    <a href="/">
                        <img src={logo} alt="Logo" className="logo-img" />
                        </a>
                    </div>
                    <div className='headerofsmallscreennavlinks'>
                    <Link to="/" className="nav-link-topsmallscreen">
                            <span className="icon-backgroundsmallscreen">
                                <img src={phonetopImg} alt="phonetopImg" className='phonetopImgsmallscreen' />
                            </span>
                            Call Us: <b>1300 950073</b>
                        </Link>
                        <Link to="/" className="nav-link-topsmallscreen2">
                            <span className="icon-backgroundsmallscreen">
                            <img src={EmailTopImg} alt="EmailTopImg" className='phonetopImgsmallscreen' />
                            </span>
                            <a className='emailnavsmallscreen' href="mailto:info@medask.com.pk" style={{ color: '170C40', textDecoration: 'none' }}>info@medask.com.pk</a>
                        </Link>
                    </div>
                    <div className='headerofsmallscreennavlinks'>
                    <Link to="/contact" className="nav-link partnerlinksmallscreen">
                    <span className="icon-backgroundsmallscreen">
                        <FontAwesomeIcon icon={faBusinessTime} />
                    </span>
                  <p className="partnerlinktextsmallscreen">  Become our business partner</p>
                </Link>
                    </div>

                    <div className="menu-iconsmallscreen">
                        <Drawer />
                    </div>

                    {/* Added Top Info Section */}
                    <div className="top-info">
                        <Link to="/" className="nav-link-top1">
                            <span className="icon-background">
                                <img src={phonetopImg} alt="phonetopImg" />
                            </span>
                            Call Us: <b>1300 950073</b>
                        </Link>
                        <Link to="/" className="nav-link-top">
                            <span className="icon-background">
                                <img src={EmailTopImg} alt="EmailTopImg" />
                            </span>
                            <a className='outlinenone' href="mailto:info@medask.com.pk" style={{ color: '170C40', textDecoration: 'none' }}>info@medask.com.pk</a>
                        </Link>
                        <Link to="/" className="nav-link-topsmallscreen available-info" id='available-info'>
                        We’re Available: Monday - Sunday (24/7)
                        </Link>
                    </div>
                    {/* End of Top Info Section */}

                    <ul className="nav-linkssecond">
            <li>
                <Link to="/" className={`nav-link ${activePath === '/' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faHome} /> {/* Home Icon */}
                    
                    Home
                    <span className={`png-logoseacc2 ${activePath === '/' ? 'png-logoseacc2-active' : ''}`}>
                                <Group1 />
                            </span>
                </Link>
            </li>
            <img src={greyverticalHrNav} alt="greyverticalHrNav" />
            <li>
                <Link to="/pharmacies" className={`nav-link ${activePath === '/pharmacies' ? 'active' : ''}`}>
                    Pharmacies
                    <span className={`png-logoseacc2 ${activePath === '/pharmacies' ? 'png-logoseacc2-active' : ''}`} >
                                <Group1 />
                            </span>
                </Link>
            </li>
            <img src={greyverticalHrNav} alt="greyverticalHrNav" />
            <li>
                <Link to="/medical-tourism" className={`nav-link ${activePath === '/medical-tourism' ? 'active' : ''}`}>
                    Medical Tourism
                    <span className={`png-logoseacc2 ${activePath === '/medical-tourism' ? 'png-logoseacc2-active' : ''}`} >
                                <Group1 />
                            </span>
                </Link>
            </li>
            <img src={greyverticalHrNav} alt="greyverticalHrNav" />
            <li>
                <Link to="/aboutus"  className={`nav-link ${activePath === '/aboutus' ? 'active' : ''}`}>
                    About Us
                    <span className={`png-logoseacc2 ${activePath === '/aboutus' ? 'png-logoseacc2-active' : ''}`} >
                                <Group1 />
                            </span>
                </Link>
            </li>
            <img src={greyverticalHrNav} alt="greyverticalHrNav" />
            <li>
                <Link to="/contact" className={`nav-link ${activePath === '/contact' ? 'active' : ''}`}>
                    Contact
                    <span className={`png-logoseacc2 ${activePath === '/contact' ? 'png-logoseacc2-active' : ''}`}>
                                <Group1 />
                            </span>
                </Link>
            </li>
            <li>
                <Link to="/contact" className="nav-link partner-link">
                    <span className="icon-background">
                        <FontAwesomeIcon icon={faBusinessTime} />
                    </span>
                    Become our business partner
                </Link>
            </li>
        </ul>
                </div>
            </nav>
</>

    );
};

export default Header;