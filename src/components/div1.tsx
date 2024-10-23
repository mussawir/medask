import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Group20 from '../images/Group20'; // Custom SVG component
import svg from '../images/drugstore 2.svg'; // Your SVG source
import Icon from '../images/iconarrowdiv1.svg';
import Svg2 from '../images/secondgroup.png';
import '../App.css';
import './ibrdiv1.css';

function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export default function LabTabs() {
    const [value, setValue] = useState('0'); // Initial value is index 0

    const handleButtonClick = (index: string) => {
        setValue(index);
    };

    // Define your tabs and their corresponding content
    const tabs = [
        { title: 'Pharmacy Distribution', content: 'We offer reliable pharmacy distribution services to ensure timely delivery of medications to healthcare facilities. Our network prioritizes efficiency, accuracy, and quality, ensuring compliance with regulatory requirements while maintaining supply chain integrity.' },
        { title: 'Retail Pharmacies', content: 'Our retail pharmacies are dedicated to accessible, high-quality healthcare products and services. We offer prescription medications, over-the-counter drugs, and expert advice from qualified pharmacists.' },
        { title: 'LP Pharmacies', content: 'Medask LP Pharmacies support military hospitals like CMH and PEMH by providing essential medications through efficient local procurement. We ensure high-quality pharmaceutical products meet the specific needs of military healthcare facilities.' },
        { title: 'Commercial - Flagship Pharmacies', content: 'We are launching our Commercial Flagship Pharmacies, designed to set new standards in healthcare retail. These locations will feature an extensive selection of services, including digital prescription management and health screenings.' },
    ];

    return (
        <Box>
            <Box sx={{ mb: 2 }}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={value === index.toString() ? 'btnofselectofsec2' : 'btn-simple'}
                        onClick={() => handleButtonClick(index.toString())}
                        {...a11yProps(index)}
                    >
                        {/* Render SVG only for the active button */}
                        {value === index.toString() && (
                            <span className='btn-icon'>
                                <Group20 />
                            </span>
                        )}

                        {/* Conditionally apply class to the text */}
                        <span
                            className={value === index.toString() ? 'btn-text-active' : 'btn-text-inactive'}
                        >
                            {tab.title}
                        </span>
                        <span className='btn-arrow'>
                            <img className='ic' src={Icon} alt={`Go to ${tab.title}`} />
                        </span>
                    </button>
                ))}
            </Box>

            {/* Render Tab Panels */}
            {tabs.map((tab, idx) => (
                <TabPanel value={value} index={idx.toString()} key={idx} >
                    <div className="div1bgcolor">
                        <div className="right">
                            <div className="div">
                                <img className='logo-icon-1' src={svg} alt="" />
                                <h1 className='h3ofdiv'>{tab.title}</h1>
                                <p className='p3'>
                                    {tab.content}
                                </p>
                                <a className='none-text-a' href="/aboutus">
                                    <div className='dd'>
                                        <div className='btn3'> <p className='btn3'>Read More </p>  </div>
                                        <img className='svg2img' src={Svg2} alt="" />
                                     </div>
                                </a>
                            </div>
                            <div>
                                <img className='doc' alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
            ))}
        </Box>
    );
}

// TabPanel Component
function TabPanel(props: { children?: React.ReactNode; index: string; value: string }) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}
