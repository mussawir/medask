import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Group20 from '../images/Group20'; // Custom SVG component
import svg from '../images/drugstore 2.svg'; // Your SVG source
import Icon from '../images/iconarrowdiv1.svg';
import Svg2 from '../images/secondgroup.png';
import './div1.css';

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

    return (
        <Box>
            <Box sx={{ mb: 2 }}>
            {['Pharmacy Distribution', 'Retail Pharmacies', 'LP Pharmacies', 'Commercial - Flagship Pharmacies'].map((item, index) => (
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
                            {item}
                        </span>
                            <span className='btn-arrow'>
                                <img className='ic' src={Icon} alt={`Go to ${item}`} />
                            </span>
                    </button>
                ))}
            </Box>

            {/* Render Tab Panels */}
            {['Pharmacy Distribution', 'Retail Pharmacies', 'LP Pharmacies', 'Commercial - Flagship Pharmacies'].map((content, idx) => (
                <TabPanel value={value} index={idx.toString()} key={idx} >
                        <div className="div1bgcolor">
                    <div className="right">
                        <div className="div">
                            <img className='logo-icon-1' src={svg} alt="" />
                            <h1 className='h3ofdiv'>{content}</h1>
                            <p className='p3'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <div className='dd'>
                                <div className='btn3'>Read More</div>
                                <img className='svg2img' src={Svg2} alt="" />
                            </div>
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