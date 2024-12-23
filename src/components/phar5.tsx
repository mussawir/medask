import '../App.css';
import phar5card1 from '../images/phar5card1.png';
import phar5card2 from '../images/phar5card2.png';
import phar5card3 from '../images/phar3cardimg2.png';
import phar5card4 from '../images/phar5card3.png';
import phar5card5 from '../images/phar5card4.png';
import phar5card6 from '../images/phar5card5.png';
import btn1 from '../images/phar5btn1.png';
import btn2 from '../images/phar5btn2.png';

function Phar5() {
    return (
        <>
            <div className="phar5bg">
                <h1 className="phar5h1 ibrtitle1">MedAsk</h1>
                <h1 className="phar5h2 subtitle">Hospitals</h1>

                <div className="phar5cen">
                    <div className="phar5scroll-container">
                        <div className="phar5scroll">
                            <div className="phar5div3">
                                <h1 className='phar5h3'>Combined Hospital Rawalpindi</h1>
                                <img className='phar5card3' src={phar5card1} alt="" />
                                {/* <p className='phar3p1'>It is a long <span className='p1stroke11'>established</span> that a <span className='p1stroke11'>reader</span> will be distracted by the <span className='p1stroke11'>readable.</span></p> */}
                            </div>
                            <div className="phar5div3">
                                <h1 className='phar5h3'>Institute of Dentistry </h1>
                                <img className='phar5card3' src={phar5card2} alt="" />
                                {/* <p className='phar3p1'>It is a long <span className='p1stroke11'>established</span> that a <span className='p1stroke11'>reader</span> will be distracted by the <span className='p1stroke11'>readable.</span></p> */}
                            </div>
                            <div className="phar5div3">
                                <h1 className='phar5h3'>Institute of Cardiology </h1>
                                <img className='phar5card3' src={phar5card3} alt="" />
                                {/* <p className='phar3p1'>It is a long <span className='p1stroke11'>established</span> that a <span className='p1stroke11'>reader</span> will be distracted by the <span className='p1stroke11'>readable.</span></p> */}
                            </div>
                            <div className="phar5div3">
                                <h1 className='phar5h3'>Pak Emirates Hospital Rawalpindi</h1>
                                <img className='phar5card3' src={phar5card4} alt="" />
                                {/* <p className='phar3p1'>It is a long <span className='p1stroke11'>established</span> that a <span className='p1stroke11'>reader</span> will be distracted by the <span className='p1stroke11'>readable.</span></p> */}
                            </div>
                            <div className="phar5div3">
                                <h1 className='phar5h3'>Institute of Urology</h1>
                                <img className='phar5card3' src={phar5card5} alt="" />
                                {/* <p className='phar3p1'>It is a long <span className='p1stroke11'>established</span> that a <span className='p1stroke11'>reader</span> will be distracted by the <span className='p1stroke11'>readable.</span></p> */}
                            </div>
                        </div>
                    </div>


                </div>
                <div className='readmorbtn'> 
                    <div className='readmore'>
                        <a target='blanked' className='noline' href="https://medasktours.com/hospital?id=8">
                        <p>Hospitals</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Phar5;
