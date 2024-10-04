import './ibrphar4.css'

import phar4div1 from '../images/phar4div1.png'
import phar4div2 from '../images/phar4div2.png'
import phar4div3 from '../images/phar4div3.png'
import phar4div4 from '../images/phar4div4.png'
import phar4div5 from '../images/phar4div5.png'
function Phar4(){
    return(
        <>
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
                        <h1 className='phar4h1'>Get In Touch</h1>
                        <p className='phar4h2'>Fill out our form,request a quote, and select your preferred doctor.</p>
                    </div>
                    <div>
                        <img src={phar4div5} alt="" className='phar4img' />
                    </div>
                    <div>
                        <img className='gird4mainimg' src={phar4div3} alt="" />
                        <h1 className='phar4h1'>Get In Touch</h1>
                        <p className='phar4h2'>Fill out our form,request a quote, and select your preferred doctor.</p>
                    </div>
                    <div>
                        <img src={phar4div5} alt="" className='phar4img' />
                    </div>
                    <div>
                        <img className='gird4mainimg' src={phar4div4} alt="" />
                        <h1 className='phar4h1'>Get In Touch</h1>
                        <p className='phar4h2'>Fill out our form,request a quote, and select your preferred doctor.</p>
                    </div>

                </div>

        </div>
        </>
    );
}

export default Phar4