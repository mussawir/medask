import './ibrabout1.css'
// import gird1 from '../images//gird1.png'
import gird2 from '../images/gird2.png'
import gird3 from '../images/gird3.png'

function About1() {

    return (

        <div className="about1bg">

            <div className="formbglogo"></div>
            <div className="about1cen">
                <div className="parent">
                    <div className='gird1'></div>
                    <div className='gird2'></div>
                    <div className='gird3'></div>
                    <div className='div4'></div>
                </div>
            </div>
            <div className="about1right">
                <h1 className='h1about1 ibrtitle1'>Who We Are</h1>
                <h2 className='h2about1 subtitle'>Welcome to Medask</h2>
                <p className='pabout1'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                </p>
                <p className='p2about1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>

    );
}

export default About1