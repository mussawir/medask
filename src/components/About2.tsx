import '../App.css';
import React from 'react';
import Icon from '../images/map-solid';  // Assuming these are the correct paths for the icons
import Icon2 from '../images/plan2';

function About2() {
    return (
        <div className="about2bg">
            <div className="about2cen2">
                <h1 className='about2h1 ibrtitle1'>What We Do</h1>
                <h1 className='about2h2 subtitle'>Our Services</h1>
            </div>
            <div className="about2cen">
                <div className="aboutdiv1">
                    <div className="aboutdiv2">
                        <Icon />
                        <h1 className='about2h3'>Medical Tourism</h1>
                        <p className='aboutp1'>
                        Our medical tourism services cater to international patients seeking advanced healthcare
                        </p>
                        <div className='arrw'></div>
                    </div>
                    <div className="aboutdiv2">
                        <Icon />
                        <h1 className='about2h3'>Home Health Services</h1>
                        <p className='aboutp1'>
                        Soon, we will offer personalized medical care, skilled nursing, and rehabilitation support at the comfort of your homes.
                        </p>
                        <div className='arrw'></div>
                    </div>
                    <div className="aboutdiv2">
                        <Icon />
                        <h1 className='about2h3'>Diagnostic Services</h1>
                        <p className='aboutp1'>
                        Introducing advanced diagnostic services with the latest technology for accurate, timely results that enhance diagnosis and treatment.
                        </p>
                        <div className='arrw'></div>
                    </div>
                    <div className="aboutdiv2">
                        <Icon />
                        <h1 className='about2h3'>Pharmacies</h1>
                        <p className='aboutp1'>
                        We are continuously expanding our Pharmacies with medicines and opening them right near you.
                        </p>
                        <div className='arrw'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About2;
