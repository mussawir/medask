import './FormContact.css'
import arrow11 from '../images/Arrow 11.svg'
import mapsvgin from '../images/mapsvgin.svg'
import imgcontact1 from '../images/conntect 1.png'
import imgcontact2 from '../images/conntect 2.png'
import imgcontact3 from '../images/conntect 3.png'
function FormContact() {
    return (
        <div className="formbg">

                <h1 className='conth3'>Medask</h1>
                <h1 className='conth4'>Contact Details</h1>

            <div className="Contactcenter">
                <div className="Contdiv1">
                    <img className='contimg' src={imgcontact1} alt="" />
                    <h1 className="conth1">Call Us :</h1>
                    <h3 className="conth2">UAN 111-633-275</h3>

                </div>
                <div className="Contdiv1">
                    <img className='contimg' src={imgcontact2} alt="" />
                    <h1 className="conth1">Email Us :</h1>
                    <h3 className="conth2">info@medask.com.pk</h3>

                </div>
                <div className="Contdiv1">
                    <img className='contimg' src={imgcontact3} alt="" />
                    <h1 className="conth1">Location :</h1>
                    <h3 className="conth2">1st Floor, AWT Plaza, Mall Road
                        Saddar Rawalpindi, Pakistan</h3>

                </div>
            </div>

            <div className="formdiv">
                <form action="">
                    <div className="formleft">

                        <div className="formbglogo"></div>
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
                <div className="formright">
                    <div className='imageopop'>
                        <div className='mapsvg'>
                            <img className="svgani" src={mapsvgin} alt="" />
                        </div>
                        <div className="imagedivmap">
                            <h1 className='imgmaph1'>Medask Pvt Ltd Head office Ra...</h1>
                            <p className='imgmapp'>7 Main Peshawar Rd, Saddar,
                                Rawalpindi, Punjab 46000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormContact