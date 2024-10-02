import './ibraboutusSec1.css'
import greenhr from '../images/greenhr.png';
function Phar1() {

    return (
        <>
        <div className="head">
            <div className="head1bg1">
                <h1 className="aboutussec1h1">Medask</h1>
                <h1 className="aboutussec1h2">Medical Tourism</h1>
                <div className='hr-parent'>
                    <hr className="hr-line1" />
                    <img src={greenhr} className="greenhr1" />
                </div>
                <p className='aboutussec1p1'>It is a long established fact that a reader will distracted by the readable content of a page.</p>
            </div>
            <div className="head1bg2"></div>
            <div className="head1bg3"></div>
        </div>
    </>
    );
}

export default Phar1