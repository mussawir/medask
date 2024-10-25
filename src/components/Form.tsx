import '../App.css'
import arrow11 from '../images/Arrow 11.svg'
import mapsvgin from '../images/mapsvgin.svg'
import Head3  from './Head3';
function Form() {
    return (
        <div className="formbg">
            <Head3 />
            <div className="formdiv">

                <form action="">
                    <div className="formleft">

                        <div className="formbglogo1"></div>
                        <div className='formlab'>
                            <label className='inplabel' htmlFor="">Enter Your Name</label>
                            <input className='inpform' type="text" placeholder='John Doe' />
                        </div>
                        <div className='formlab'>
                            <label className='inplabel' htmlFor="">Enter Your Email</label>
                            <input className='inpform' type="text" placeholder='Email' />
                        </div>
                        <div className='formlab'>
                            <label className='inplabel' htmlFor="">Enter Your Subject</label>
                            <input className='inpform' type="text" placeholder='Subject' />
                        </div>
                        <div className='formlab'>
                            <label className='inplabel' htmlFor="">Enter Your Message</label>
                            <input className='inpform' type="text" placeholder='Message' />
                        </div>
                        <div >
                            <button className='formbtn' type='submit'>
                                <p className='formp'>Submit Now</p> <div className='arrdiv'> <img className='arrow11' src={arrow11} alt="" /></div> </button>
                        </div>

                    </div>
                </form>
                <a className='nonetexta' target='blank' href="https://maps.app.goo.gl/14RvLBPMQbr5cPu36">
                <div className="formright">
                    <div className='imageopop'>
         
                        <div className='mapsvg'>
                            <img className="svgani" src={mapsvgin} alt="" />
                        </div>
                 
                        <div className="imagedivmap">
                            <h1 className='imgmaph1'>MedAsk Pvt Ltd Head office Ra...</h1>
                            <p className='imgmapp'>7 Main Peshawar Rd, Saddar,
                                Rawalpindi, Punjab 46000</p>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        </div>
    );
}

export default Form