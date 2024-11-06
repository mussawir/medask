import React, { useState } from 'react';
import '../App.css';
import arrow11 from '../images/Arrow 11.svg';
import mapsvgin from '../images/mapsvgin.svg';
import Head3 from './Head3';
import axios from 'axios';

function Form() {
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // State for submission status and messages
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccessMessage('');

        try {
            const response = await axios.post('http://localhost:8000/api/contact', formData);
            console.log(response.data.message);
            setSuccessMessage('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setError('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="formbg">
            <Head3 />
            <div className="formdiv">
                <form onSubmit={handleSubmit}>
                    <div className="formleft">
                        <div className="formbglogo1"></div>
                        <div className="formlab">
                            <label className="inplabel" htmlFor="name">Enter Your Name</label>
                            <input
                                className="inpform"
                                type="text"
                                placeholder="John Doe"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formlab">
                            <label className="inplabel" htmlFor="email">Enter Your Email</label>
                            <input
                                className="inpform"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formlab">
                            <label className="inplabel" htmlFor="subject">Enter Your Subject</label>
                            <input
                                className="inpform"
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formlab">
                            <label className="inplabel" htmlFor="message">Enter Your Message</label>
                            <textarea
                                className="inpform"
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <button className="formbtn" type="submit" disabled={isSubmitting}>
                                <p className="formp">{isSubmitting ? 'Submitting...' : 'Submit Now'}</p>
                                <div className="arrdiv">
                                    <img className="arrow11" src={arrow11} alt="" />
                                </div>
                            </button>
                        </div>
                        {successMessage && <p className="success-message" aria-live="polite">{successMessage}</p>}
                        {error && <p className="error-message" aria-live="polite">{error}</p>}
                    </div>
                </form>
                <a className="nonetexta" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/14RvLBPMQbr5cPu36">
                    <div className="formright">
                        <div className="imageopop">
                            <div className="mapsvg">
                                <img className="svgani" src={mapsvgin} alt="Map location icon" />
                            </div>
                            <div className="imagedivmap">
                                <h1 className="imgmaph1">MedAsk Pvt Ltd Head office Ra...</h1>
                                <p className="imgmapp">7 Main Peshawar Rd, Saddar, Rawalpindi, Punjab 46000</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Form;
