import '../App.css';
import greenhr from '../images/greenhr.png';

function Pharpage1() {
    return (
        <>
            <div className="head">
                <div className="head1bg1">
                    <h1 className="aboutussec1h1 ibrtitle1">MedAsk</h1>
                    <h1 className="aboutussec1h2 subtitle">Pharmacies</h1>
                    <div className='hr-parent'>
                        <hr className="hr-line1" />
                        <img src={greenhr} className="greenhr1" alt="Green Horizontal Rule" />
                    </div>
                    <p className='aboutussec1p1'>
                    Your Trusted Partner in Health and Wellness, Offering the World’s Best <b>Pharmaceutical</b> Care.
                    </p>
                </div>
                <div className="head1bg2"></div>
                <div className="head1bg3"></div>
            </div>
        </>
    );
}

export default Pharpage1;
