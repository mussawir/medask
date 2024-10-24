import React, { useState } from 'react';
import '../App.css';
import phar6img from '../images/phar6img1.png';
import phar6img1 from '../images/phar6img2.png';
import phar6img2 from '../images/phar6img3.png';
import phar6img3 from '../images/phar6img4.png';
import about3btn1 from '../images/about3btn1.png';
import about3btn2 from '../images/about3btn2.png';

import Doctor1 from '../images/doctor1.png';
import Doctor2 from '../images/doctor2.png';
import Doctor3 from '../images/doctor3.png';
import Doctor4 from '../images/doctor4.png';
import Doctor5 from '../images/doctor5.png';
import DocHead from './DocHead';

import img1 from '../images/doctor1img.png';
import img2 from '../images/doctor2img.png';
import img3 from '../images/doctor3img.png';
import img4 from '../images/doctor4img.png';
import img5 from '../images/doctor5img.png';

function Phar6() {
    // State to track the selected doctor, defaulting to Dr Naseer Ahmed Samore
    const [selectedDoctor, setSelectedDoctor] = useState<number | null>(3); // Default to ID 3

    // List of doctors
    const doctors = [
        { id: 1, name: "Dr Nadir Khan ", image: Doctor1, image2: img1, description: "Cardiologist", details: "It is a long established fact that a reader will be distracted by the readable content of a page." },
        { id: 2, name: "Dr Muhammad Tanveer Sajid", image: Doctor2, image2: img2, description: "Urologist", details: "It is a long established fact that a reader will be distracted by the readable content of a page." },
        { id: 3, name: "Dr Naseer Ahmed Samore", image2: img3, image: Doctor3, description: "Cardiologiest", details: "Dr Naseer Ahmed Samore’s extensive qualifications and experience make him a distinguished figure in the field of interventional cardiology, known for his advanced clinical skills and dedication to medical education." },
        { id: 4, name: "Dr Fahan Ahmed Majeed", image: Doctor4, image2: img4, description: "Thoracic", details: "It is a long established fact that a reader will be distracted by the readable content of a page." },
        { id: 5, name: "Dr Arshad Naseem ", image: Doctor5, image2: img5, description: "Critical Care", details: "It is a long established fact that a reader will be distracted by the readable content of a page." }
    ];

    // Handle click to show/hide doctor details
    const handleDoctorClick = (doctorId: number) => {
        // Toggle the selected doctor
        setSelectedDoctor(prevId => (prevId === doctorId ? null : doctorId));
    };

    return (
        <>
            <DocHead />
            <div>
                <div className="phar6bg" style={{ marginTop: '100px' }}>
                    <div className="phar6cen">
                        {doctors.map((doctor) => (
                            <div key={doctor.id} className="phar6div1">
                                {/* Conditionally render the doctor details if clicked */}
                                {selectedDoctor === doctor.id ? (
                                    <div className="phar6div2">
                                        <img className='phar5img2' src={doctor.image} alt={doctor.name} />
                                        <h1 style={{ marginTop: '20px', paddingTop: '100px' }} className="phar6h3">{doctor.name}</h1>
                                        <h1 className="phar6h4">{doctor.description}</h1>
                                        <p className='phar6p1'>{doctor.details}</p>
                                    </div>
                                ) : (
                                    <div onClick={() => handleDoctorClick(doctor.id)}>
                                        <img className='prago' src={doctor.image2} alt={doctor.name} />
                                        <h1 className="phar6h1">{doctor.name}</h1>
                                        <h1 className="phar6h2">{doctor.description}</h1>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <a className='nonetexta' target='blank' href="https://medasktours.com/allDoctor">
                    <h2 className='hf'>Our Doctors</h2>
                </a>
            </div>
        </>
    );
}

export default Phar6;
