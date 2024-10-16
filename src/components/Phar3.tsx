import '../App.css'
import Phargird1 from '../images/phar3gird1.png'
import Phargird2 from '../images/phar3gird2.png'
import Phargird3 from '../images/phar3gird3.png'
import Phargird4 from '../images/phar3gird4.png'
import Phargird5 from '../images/phar3gird5.png'
import Phargird6 from '../images/phar3gird6.png'
import Phargird7 from '../images/phar3gird7.png'
import Phargird8 from '../images/phar3gird8.png'
import Phargird9 from '../images/phar3gird9.png'
import Phargird10 from '../images/phar3gird10.png'
import Phargird11 from '../images/phar3gird11.png'
import Phargird12 from '../images/phar3gird12.png'
import Phargird13 from '../images/phar3gird13.png'
import Phargird14 from '../images/phar3gird14.png'
import Phargird15 from '../images/phar3gird15.png'
import Phargird16 from '../images/phar3gird16.png'
import Phargird17 from '../images/phar3gird17.png'
import Phargird18 from '../images/phar3gird18.png'
import Phargird19 from '../images/phar3gird19.png'
import Phargird20 from '../images/phar3gird20.png'
import Phargird21 from '../images/phar3gird21.png'
import Phargird22 from '../images/phar3gird22.png'
import Phargird23 from '../images/phar3gird23.png'
import Phargird24 from '../images/phar3gird24.png'
import Phargird25 from '../images/phar3gird25.png'
import Phargird26 from '../images/phar3gird26.png'
import Phargird27 from '../images/phar3gird27.png'
import Phargird28 from '../images/phar3gird28.png'
function Phar3() {
    const images = [
        Phargird1,
        Phargird2,
        Phargird3,
        Phargird4,
        Phargird5,
        Phargird6,
        Phargird7,
        Phargird8,
        Phargird9,
        Phargird10,
        Phargird11,
        Phargird12,
        Phargird13,
        Phargird14,
        Phargird15,
        Phargird16,
        Phargird17,
        Phargird18,
        Phargird19,
        Phargird20,
        Phargird21,
        Phargird22,
        Phargird23,
        Phargird24,
        Phargird25,
        Phargird26,
        Phargird27,
        Phargird28
    ];
    return (
        <>
            <div className="phar3bg">

                <h1 className="phar3h1">MedAsk</h1>
                <h1 className="phar3h2">Medask Specialties</h1>
                <div className="phar3cen">

                    <div className="phar3gird">
                    {images.map((src, index) => (
                <div className='grid-div' key={index}>
                    <img className='grid-item' src={src} alt={`Phargird ${index + 1}`} />
                </div>
            ))}
                    </div>
      

                </div>

            </div>
        </>
    );
}

export default Phar3