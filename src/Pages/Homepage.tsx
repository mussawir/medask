// HomePage.tsx
import React from 'react';
import Bnews from '../components/Bnews';
import Section4 from '../components/Section4';
import Head from '../components/Head';
import Div1 from '../components/div1';
import Section8 from '../components/Section8';
import Labtab from '../components/Labtab';
import Form from '../components/Form';
import NewsSection from '../components/NewsSection';
import VideoCarousel from '../components/videocarousel';
import Videohead from '../components/Videohead';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section1 from '../components/Section1';
import '../App.css';
import '../components/ibrdiv1.css';
import Section3 from '../components/Section3';
const HomePage = () => {
  return (
    <div className="HomePage">
      {/* <Header /> */}
      <Section1 />
      
      <div className='Bgofallwebvector'>
        <Bnews />
        <Head />
        <Div1 />
        <Section3 />
        {/* <div className="div1bgcolor">

        </div> */}
      </div>
      {/* <Section4 /> */}
      <div className='section5bgimg'>
      <Videohead />
      <VideoCarousel />
      </div>
      <Labtab />
   
      {/* <Labtab /> */}
      <NewsSection />
      <Form />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
