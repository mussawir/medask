import '../App.css'
import greenhr from '../images/greenhr.png';
function Phar1() {

    return (
        <>
        <div className="head">
        <div className="head1bg1">
    <h1 className="aboutussec1h1 ibrtitle1">MedAsk</h1>
    <h1 className="aboutussec1h2 subtitle">Medical Tourism</h1>
    <div className='hr-parent'>
        <hr className="hr-line1" />
        <img src={greenhr} className="greenhr1" alt="Green horizontal rule" />
    </div>
    <p className='aboutussec1p1'>
    Your Gateway to Exceptional <b>Medical Tourism </b>and Global Healthcare Solutions
    </p>
</div>

            <div className="head1bg2"></div>
            <div className="head1bg3"></div>
        </div>
    </>
    );
}

export default Phar1