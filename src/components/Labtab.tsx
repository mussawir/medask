import React, { useState } from 'react';
import './labtab.css';
import Svgradio from '../images/iconmask.svg'
import Head2 from './head2';
 // Define the type for the keys in radioContent
type RadioOption = 'radio1' | 'radio2' | 'radio3' | 'radio4';

function Tab2() {
    const [selectedRadio, setSelectedRadio] = useState<RadioOption>('radio1'); // Type selectedRadio as RadioOption

    // Content for each radio button
    const radioContent: Record<RadioOption, { title: string; text: string }> = {
        radio1: {
            title: 'Radio One',
            text: 'MedAsk is a commercial entity that plans to work on the idea of public-private partnership in order to expand and assist the medical services. It aims to initiate a number of projects in phases that will generate capacity and profits which can be utilized to boost the resources of the Medical Corps and also the general public.'
        },
        radio2: {
            title: 'Radio Two',
            text: 'MedAsk is a commercial entity that plans to work on the idea of public-private partnership in order to expand and assist the medical services. It aims to initiate a number of projects in phases that will generate capacity and profits which can be utilized to boost the resources of the Medical Corps and also the general public.'
        },
        radio3: {
            title: 'Radio Three',
            text: 'MedAsk is a commercial entity that plans to work on the idea of public-private partnership in order to expand and assist the medical services. It aims to initiate a number of projects in phases that will generate capacity and profits which can be utilized to boost the resources of the Medical Corps and also the general public.'
        },
        radio4: {
            title: 'Radio Four',
            text: 'MedAsk is a commercial entity that plans to work on the idea of public-private partnership in order to expand and assist the medical services. It aims to initiate a number of projects in phases that will generate capacity and profits which can be utilized to boost the resources of the Medical Corps and also the general public.'
        }
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
                            radio 1
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
                            radio 2
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
                            radio 3
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
                            radio 4
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