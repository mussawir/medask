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
                    <h1 className="about3h2 subtitle">Delivering Key Development in Healthcare</h1>

                    <p className="about3p2">
                  <b>MedAsk</b> offers a wide array of pharmaceutical and wellness services to meet diverse needs. Our focus is on providing high-quality, affordable healthcare solutions through our retail pharmacies, local purchase services, and distribution.
                   <p className="about3p2"> We also facilitate medical tourism by connecting international patients with top-tier healthcare, ensuring a seamless experience with leading professionals and advanced treatments.</p> 
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
                                To be one of the leading business houses by employing the best business practices. Committed to excellence and innovation in all our endeavors.
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
                                To provide innovative healthcare solutions that enhance patient care, promote collaboration, and ensure access to quality services."
This captures the essence of your mission while keeping it brief. Let me know if you'd like further adjustments!

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
                                At <b> MedAsk </b> we put our patients ahead and value, Integrity, Compassion, Hard Work and most of all Care & Trust
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
