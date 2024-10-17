import '../App.css'

import phar4div1 from '../images/phar4div1.png'
import phar4div2 from '../images/phar4div2.png'
import phar4div3 from '../images/phar4div3.png'
import phar4div4 from '../images/phar4div4.png'
import phar4div5 from '../images/phar4div5.png'
function Phar4(){
    return(
        <>
        <h1 className="phar3h1">MedAsk</h1>
        <h1 className="phar3h2">Our Process</h1>
        <div className="phar4bg">
            
                <div className="pharcont">
                    
                    <div>
                        <img className='gird4mainimg' src={phar4div1} alt="" />
                        <h1 className='phar4h1'>Get In Touch</h1>
                        <p className='phar4h2'>Fill out our form,request a quote, and select your preferred doctor.</p>
                    </div>
                    <div>
                        <img src={phar4div5} alt="" className='phar4img' />
                    </div>
                    <div>
                        <img className='gird4mainimg' src={phar4div2} alt="" />
                        <h1 className='phar4h1'>Connect & Finalize</h1>
                        <p className='phar4h2'>We'll connect you with the doctor or hospital to finalize your plan.</p>
                    </div>
                    <div>
                        <img src={phar4div5} alt="" className='phar4img' />
                    </div>
                    <div>
                        <img className='gird4mainimg' src={phar4div3} alt="" />
                        <h1 className='phar4h1'>Arrive & Visit</h1>
                        <p className='phar4h2'>Upon arrival, meet with your doctor or hospital and enjoy our additional services, including tours and local visits.</p>
                    </div>
                    <div>
                        <img src={phar4div5} alt="" className='phar4img' />
                    </div>
                    <div>
                        <img className='gird4mainimg' src={phar4div4} alt="" />
                        <h1 className='phar4h1'>Follow-up Care</h1>
                        <p className='phar4h2'>Receive follow-up care during your visit, or after returning to your home country.</p>
                    </div>

                </div>

        </div>
        </>
    );
}

export default Phar4