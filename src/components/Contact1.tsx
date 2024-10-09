import '../App.css';
import greenhr from '../images/greenhr.png';

function Contact1() {
    return (
        <>
            <div className="head">
                <div className="head1bg1">
                    <h1 className="aboutussec1h1 ibrtitle1">MedAsk</h1>
                    <h1 className="aboutussec1h2 subtitle">Contact Us</h1>
                    <div className='hr-parent'>
                        <hr className="hr-line1" />
                        <img src={greenhr} className="greenhr1" alt="Green Horizontal Rule" />
                    </div>
                    <p className='aboutussec1p1'>
                        We are here to assist you with all your healthcare needs. If you have any questions, feedback, or inquiries, feel free to reach out to us. Our dedicated team at MedAsk is ready to help!
                    </p>
                </div>
                <div className="head1bg2"></div>
                <div className="head1bg3"></div>
            </div>
        </>
    );
}

export default Contact1;
