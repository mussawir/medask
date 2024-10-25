import React, { useState } from 'react';
import '../App.css';
import Svgradio from '../images/iconmask.svg'
import Head2 from './head2';
 // Define the type for the keys in radioContent
type RadioOption = 'radio1' | 'radio2' | 'radio3' | 'radio4';

function Tab2() {
    const [selectedRadio, setSelectedRadio] = useState<RadioOption>('radio1'); // Type selectedRadio as RadioOption

    // Content for each radio button
    const radioContent: Record<RadioOption, { title: string; text: string }> = {
        radio1: {
            title: 'Destination Pakistan',
            text: 'MedAsk Tours  offer seamless medical tourism services, connecting international patients to world-class healthcare solutions. From consultations and treatments to travel and accommodations, we ensure a smooth, stress-free experience. Our network guarantees personalized care at globally accredited facilities, prioritizing patient safety and comfort.'
        },
        radio2: {
            title: 'Our Hospitals',
            text: 'A Medical City, in 5 Km radius, we provide  Infinite possibilities: Your Comprehensive Healthcare Journey Awaits. Discover the power of integrated care with The MedAsk Tours Advantage.'
        },
        radio3: {
            title: 'Our Consultants',
            text: 'Meet our top class consultants, highly skilled, trained at the top class healthcare facilities. Provide dedicated treatments to our international patients.'
        },
        radio4: {
            title: 'Our Specialties',
            text: 'We offer almost all treatment speicalties at world class facilities at our hospitals. Speicalities such as cardiology, oncology, dentistry, aesthetic surgery and others are developed to provide every care possiblity to our esteemed patients from overseas.'
        },
    };

    const handleRadioChange = (value: RadioOption) => {
        setSelectedRadio(value); // Update the selected radio button
    };

    return (
        <div className='backgrounddiv2'>
            <Head2/>
            
            <div className="divcenter">
                <div className="div1ofdiv2">
                    <div className={selectedRadio === 'radio1' ? 'radiodiv2-active' : 'radiodiv2'}>
                        <input
                            className="radioofdiv2"
                            type="radio"
                            name="r1"
                            id="radio1"
                            checked={selectedRadio === 'radio1'}
                            onChange={() => handleRadioChange('radio1')}
                        />
                        <label
                            className={selectedRadio === 'radio1' ? 'labelofdiv2-active' : 'labelofdiv2'}
                            htmlFor="radio1"
                        >
                            Destination Pakistan
                        </label>
                    </div>

                    <div className={selectedRadio === 'radio2' ? 'radiodiv2-active' : 'radiodiv2'}>
                        <img className='svgdiv2' src={Svgradio} alt="" />
                        <input
                            className="radioofdiv2"
                            type="radio"
                            name="r1"
                            id="radio2"
                            checked={selectedRadio === 'radio2'}
                            onChange={() => handleRadioChange('radio2')}
                        />
                        <label
                            className={selectedRadio === 'radio2' ? 'labelofdiv2-active' : 'labelofdiv2'}
                            htmlFor="radio2"
                        >
                            Our Hospitals
                        </label>
                    </div>

                    <div className={selectedRadio === 'radio3' ? 'radiodiv2-active' : 'radiodiv2'}>
                        <input
                            className="radioofdiv2"
                            type="radio"
                            name="r1"
                            id="radio3"
                            checked={selectedRadio === 'radio3'}
                            onChange={() => handleRadioChange('radio3')}
                        />
                        <label
                            className={selectedRadio === 'radio3' ? 'labelofdiv2-active' : 'labelofdiv2'}
                            htmlFor="radio3"
                        >
                            Our Consultants
                        </label>
                    </div>

                    <div className={selectedRadio === 'radio4' ? 'radiodiv2-active' : 'radiodiv2'}>
                        <input
                            className="radioofdiv2"
                            type="radio"
                            name="r1"
                            id="radio4"
                            checked={selectedRadio === 'radio4'}
                            onChange={() => handleRadioChange('radio4')}
                        />
                        <label
                            className={selectedRadio === 'radio4' ? 'labelofdiv2-active' : 'labelofdiv2'}
                            htmlFor="radio4"
                        >
                            Our Specialties
                        </label>
                    </div>
                </div>
            </div>

            <div className='divofdiv3'>
                <div className="divleft">
                    <h1 className='div2h1'>
                        {radioContent[selectedRadio].title}
                    </h1>
                    <p className='divp'>
                        {radioContent[selectedRadio].text}
                    </p>
                </div>
                <div className="divright">
                    <img className='divimg' alt="" />
                </div>
            </div>
            <div className="divlogos"></div>
        </div>
    );
}

export default Tab2;