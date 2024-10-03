import './ibrabout4.css'
import Icon2 from '../images/quote'
import Icon3 from '../images/leftbtn.png'
import Icon4 from '../images/review2.png'
import Icon5 from '../images/rightbtn.png'
import about3btn1 from '../images/about3btn1.png'
import about3btn2 from '../images/about3btn2.png'
function About4() {

    return (
        <>
            <div className="about4bg">
                <div className="about4head">
                    <h1 className="about4h1 ibrtitle1">Testimonial</h1>
                    <h1 className="about4h10 subtitle">Client’s Testimonial</h1>
                </div>
                <div className="about4body">
                    <div className="about4left">
                        <div className="about4left1">
                            <img className='leftbntright' src={Icon3} alt="" />
                            <div className="leftmain">
                                <div className='leftmain1'>                        
                                    <img  className='review2' src={Icon4} alt="" />
                                    <h3 className='about4h3'>Valarie Kisiel</h3>
                                </div>
                                <h1 className='about4h5'>CEO & Co-Owner at</h1>
                                <p className='about4p3'>InnovativeEducators.org</p>

                            </div>
                        </div>

                    </div>
                    <div className="about4main">
                        <div className="aboutmr">
                            <div className="about4mr">
                                <h1 className='about4h3'>Valarie Kisiel</h1>
                                <div>
                                    <h1 className="about4h4">CEO & Co-Owner at</h1>
                                    <p className='about4p1'>InnovativeEducators.org</p>
                                </div>

                            </div>
                        </div>
                        <div className='about4ml'>
                            <Icon2 />
                            <p className='about4p2'>"Since working with LearnEmail we've continued to see stable inboxing, which is great. Thank you again for all of your help and guidance - we would recommend LearnEmail to any company experiencing email deliverability issues."</p>
                        </div>
                    </div>  
                     <div className="about4right">
                        <div className="about4right">

                            <div className="leftmain3">
                                <div className='leftmain1'>                        
                                    <h3 className='about4h3'>Valarie Kisiel</h3>
                                </div>
                                <h1 className='about4h5'>CEO & Co-Owner at</h1>
                                <p className='about4p3'>InnovativeEducators.org</p>

                            </div>
                            <img className='leftbntright' src={Icon5} alt="" />
                        </div>

                    </div>
                </div>
                <div className="about3btn">
                        <img src={about3btn1} alt="" />
                        <img src={about3btn2} alt="" />
                    </div>
            </div>

        </>
    );
}

export default About4