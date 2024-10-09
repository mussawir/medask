import '../App.css';
import about3img1 from '../images/about3img1.png';
import about3img2 from '../images/about3img2.png';
import about3img3 from '../images/about3img3.png';
import About3icon1 from '../images/stethoscope';
import about3btn1 from '../images/about3btn1.png';
import about3btn2 from '../images/about3btn2.png';

function About3() {
    return (
        <>
            <div className="about3bg">
                <div className="about3head">
                    <h1 className="about3h1 ibrtitle1">MedAsk Role</h1>
                    <h1 className="about3h2 subtitle">MedAsk's Role in Healthcare</h1>

                    <p className="about3p1">
                        The healthcare market in Pakistan provides an opportunity for MedAsk to emerge as a competitive player in the medical tourism industry. With access to state-of-the-art medical facilities through established relationships with hospitals and healthcare professionals, including a network of skilled doctors and specialists, MedAsk is capable of delivering high-quality medical services to foreign and overseas patients.
                    </p>

                    <p className="about3p2">
                        MedAsk expands its service offerings by utilizing partnerships and collaborations with connected industries through associated companies and business units. Collaborations with hospitals, institutes, travel agencies, and tourism organizations enhance MedAsk's competitiveness in the medical tourism market, creating synergies and maximizing opportunities.
                    </p>
                </div>
                <div className="girdcen">
                    <div className="about3body">
                        <div className="about3div1w">
                            <img className='about3img' src={about3img1} alt="" />
                            <div className="div2radio">
                                <About3icon1 />
                            </div>
                            <div className="aboutbodytext">
                                <h1 className='about2h3'>Vision Statement</h1>
                                <p className='about3p3'>
                                    Be a leading medical tourism operator, providing the highest quality care, compassion, and support, while delivering a culturally appropriate, affordable, seamless, and enjoyable experience.
                                </p>
                            </div>
                        </div>
                        <div className="about3div1w">
                            <img className='about3img' src={about3img2} alt="" />
                            <div className="div2radio">
                                <About3icon1 />
                            </div>
                            <div className="aboutbodytext">
                                <h1 className='about2h3'>Mission Statement</h1>
                                <p className='about3p3'>
                                    Curate a seamless and unforgettable medical tourism experience, empowering individuals to access high-quality, culturally appropriate, and cost-effective healthcare with a touch of excellence.
                                </p>
                            </div>
                        </div>
                        <div className="about3div1w">
                            <img className='about3img' src={about3img3} alt="" />
                            <div className="div2radio">
                                <About3icon1 />
                            </div>
                            <div className="aboutbodytext">
                                <h1 className='about2h3'>Core Values</h1>
                                <p className='about3p3'>
                                    Excellence, Compassion, Integrity, Collaboration, Innovation, Safety, Respect.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about3btn">
                        <img src={about3btn1} alt="" />
                        <img src={about3btn2} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About3;
