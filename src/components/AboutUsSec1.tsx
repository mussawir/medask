import '../App.css';
import greenhr from '../images/greenhr.png';

function AboutUsSec1() {
    return (
        <>
            <div className="head">
                <div className="head1bg1">
                    <h1 className="aboutussec1h1 ibrtitle1">MedAsk</h1>
                    <h1 className="aboutussec1h2 subtitle">About Us</h1>
                    <div className='hr-parent'>
                        <hr className="hr-line1" />
                        <img src={greenhr} className="greenhr1" alt="Green horizontal rule" />
                    </div>
                    <p className='aboutussec1p1'>
                        MedAsk is a leading healthcare provider committed to delivering comprehensive and accessible medical solutions. Our focus is on enhancing patient care through integrated services, including pharmacy, medical tourism, and upcoming home health and diagnostic services.
                    </p>
                </div>
                <div className="head1bg2"></div>
                <div className="head1bg3"></div>
            </div>
        </>
    );
}

export default AboutUsSec1;
