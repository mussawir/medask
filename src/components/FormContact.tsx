import React, { useState } from 'react';
import '../App.css';
import arrow11 from '../images/Arrow 11.svg';
import mapsvgin from '../images/mapsvgin.svg';
import imgcontact1 from '../images/conntect 1.png';
import imgcontact2 from '../images/conntect 2.png';
import imgcontact3 from '../images/conntect 3.png';
import axios from 'axios';

function FormContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await axios.post('http://localhost:8000/api/contact', formData);
            setSuccessMessage(response.data.message);
            setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form fields
        } catch (error: any) {
            // Casting error to 'any' to access its properties
            setErrorMessage(error.response?.data?.error || 'Failed to send message.');
        }
    };

    return (
        <div className="formbgofcontct">
            <h1 className='conth3 ibrtitle1'>MedAsk</h1>
            <h1 className='conth4 subtitle'>Contact Details</h1>

            <div className="Contactcenter">
                <div className="Contdiv1">
                    <img className='contimg' src={imgcontact1} alt="" />
                    <h1 className="conth1">Call Us :</h1>
                    <h3 className="conth2">UAN +92 319 6048487</h3>
                </div>
                <div className="Contdiv1">
                    <img className='contimg' src={imgcontact2} alt="" />
                    <h1 className="conth1">Email Us :</h1>
                    <h3 className="conth2">info@medask.com.pk</h3>
                </div>
                <div className="Contdiv1">
                    <img className='contimg' src={imgcontact3} alt="" />
                    <h1 className="conth1">Location :</h1>
                    <h3 className="conth2">1st Floor, AWT Plaza, Mall Road, Saddar Rawalpindi, Pakistan</h3>
                </div>
            </div>

            <div className="formdiv">
                <form onSubmit={handleSubmit}>
                    <div className="formleft">
                        <div className="formbglogo1"></div>
                        <div className='formlab'>
                            <label className='inplabel'>Enter Your Name</label>
                            <input
                                className='inpform'
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='John Doe'
                                required
                            />
                        </div>
                        <div className='formlab'>
                            <label className='inplabel'>Enter Your Email</label>
                            <input
                                className='inpform'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                required
                            />
                        </div>
                        <div className='formlab'>
                            <label className='inplabel'>Enter Your Subject</label>
                            <input
                                className='inpform'
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder='Subject'
                                required
                            />
                        </div>
                        <div className='formlab'>
                            <label className='inplabel'>Enter Your Message</label>
                            <textarea
                                className='inpform'
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Message'
                                required
                            />
                        </div>
                        <div>
                            <button className='formbtn' type='submit'>
                                <p className='formp'>Submit Now</p>
                                <div className='arrdiv'>
                                    <img className='arrow11' src={arrow11} alt="" />
                                </div>
                            </button>
                        </div>
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                </form>
                <a className='nonetexta' target='_blank' rel='noopener noreferrer' href="https://maps.app.goo.gl/14RvLBPMQbr5cPu36">
                    <div className="formright">
                        <div className='imageopop'>
                            <div className='mapsvg'>
                                <img className="svgani" src={mapsvgin} alt="" />
                            </div>
                            <div className="imagedivmap">
                                <h1 className='imgmaph1'>MedAsk Pvt Ltd Head office Ra...</h1>
                                <p className='imgmapp'>7 Main Peshawar Rd, Saddar, Rawalpindi, Punjab 46000</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default FormContact;
