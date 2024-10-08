import React from 'react';
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
import icon2 from '../images/TwCbOK.png'
import Group1 from '../images/Gruop21'; // Custom SVG component

const Navbar: React.FC = () => {
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
        <div className="navbar-container">
                    <Container maxWidth="xl">

            <nav className="navbar">
                <div className="navbar-top">
                    <div className="logo-top">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>
                    <div className="menu-icon">
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
                        <Link to="/" className="nav-link available-info" id='available-info'>
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
                <Link to="/about-us" className={`nav-link ${activePath === '/about-us' ? 'active' : ''}`}>
                    About Us
                </Link>
            </li>
            <img src={greyverticalHrNav} alt="greyverticalHrNav" />
            <li>
                <Link to="/contact" className={`nav-link ${activePath === '/contact' ? 'active' : ''}`}>
                    Contact
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
            <div className="content-below">
                <div className="scroll-container">
                    <a href="https://www.facebook.com" className="social-icon fb-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.twitter.com" className="social-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.linkedin.com" className="social-icon">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://www.instagram.com" className="social-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <div className="divider"></div>

                    <div className="scroll-down-text">Scroll Down</div>
                    <button className="scroll-button" onClick={scrollToBottom}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>
                <div className="herocontent">
                    <div className="text-content">
                        <h1 className="welcome-headline">Welcome to MedAsk</h1>
                        <h1 className="medask-headline1">Medicine & Care,</h1>
                        <h1 className="medask-headline">Ask Anytime.</h1>
                        <hr className="hr-line" />
                        <img src={greenhr} className="greenhr" />
                        <p className="welcome-para1">It is a long established fact that a reader will</p>
                        <p className="welcome-para">be distracted by the readable content of a page.</p>
                        <a href="#" className='read-moreBtn'>Read More <img src={Iconreadmore} alt="" /></a>
                    </div>
                    <div>
                      
                        {/* <img src={doctornursespecialequipment} alt="doctornursespecialequipment"  /> */}
                    </div>
                </div>
            </div>
            </Container>

        </div>
    );
};

export default Navbar;