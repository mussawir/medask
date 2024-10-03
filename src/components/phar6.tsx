import './ibrphar6.css'
import phar6img from '../images/phar6img1.png'
import phar6img1 from '../images/phar6img2.png'
import phar6img2 from '../images/phar6img3.png'
import phar6img3 from '../images/phar6img4.png'
import links from '../images/links.png'
import about3btn1 from '../images/about3btn1.png'
import about3btn2 from '../images/about3btn2.png'
import DocHead from './DocHead';

function Phar6(){
    return(
        <>
        <DocHead/>

        <div className="phar6bg" style={{marginTop:'100px'}}>
          
                <div className="phar6cen">
                    <div className="phar6div1">
                        <img className='prago' src={phar6img} alt="" />
                        <h1 className="phar6h1">Arnoud Troost</h1>
                        <h1 className="phar6h2">Lorem Ipsum</h1>
                    </div>
                    <div className="phar6div2">
                        <img className='phar5img2' src={phar6img3} alt="" />
                        <h1 className="phar6h3">Arnoud Troost</h1>
                        <h1 className="phar6h4">Lorem Ipsum</h1>
                        <p className='phar6p1'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <p className='phar6p2'>social links </p>
                        <img  src={links} alt="" />
                    </div>
                    <div className="phar6div1">
                        <img src={phar6img1} alt="" />
                        <h1 className="phar6h1">Arnoud Troost</h1>
                        <h1 className="phar6h2">Lorem Ipsum</h1>
                    </div>
                    <div className="phar6div1">
                        <img src={phar6img2} alt="" />
                        <h1 className="phar6h1">Arnoud Troost</h1>
                        <h1 className="phar6h2">Lorem Ipsum</h1>
                    </div>
                </div>
                <div className="about3btn">
                        <img src={about3btn1} alt="" />
                        <img src={about3btn2} alt="" />
                    </div>
        </div>
        </>
    );
}

export default Phar6