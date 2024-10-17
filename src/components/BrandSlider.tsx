import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'; // Import the external CSS
import Slider from 'react-slick';

interface Brand {
    name: string;
    logo: string;
}

interface BrandSliderProps {
    brands: Brand[];
}

const BrandSlider: React.FC<BrandSliderProps> = ({ brands }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Default for larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        draggable: false,
        pauseOnHover: false,
        swipe: false,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1050, // Medium screens and below
                settings: {
                    slidesToShow: 3, // Show 3 slides on medium screens
                },
            },
            {
                breakpoint: 600, // Small screens (including XS)
                settings: {
                    slidesToShow: 1.5, // Show 1 slide on small screens
                },
            },
        ],
    };

    return (
        <div className="brand-slider-container">
            <div className="text-container">
                <h2 className="main-heading">Our Trusted Brands</h2>
                <h2 className="secondary-heading">Trusted By Industry Leaders</h2>
                <p className="paragraph-text"> <b>MedAsk</b>has leveraged its leadership and expertise across various brands, demonstrating excellence not only in its own services but also in complementary fields</p>
            </div>
            <div className="brand-slider">
                <Slider {...settings}>
                    {brands.map((brand, index) => {
                        const boxStyleClass = index % 3 !== 3
                            ? (index % 2 === 0 ? 'brand-box box-top-border' : 'brand-box box-bottom-border')
                            : 'brand-box';

                        return (
                            <div key={index} className="brand-slide">
                                <div className={boxStyleClass}>
                                    <img src={brand.logo} alt={brand.name} className="brand-logo" />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default BrandSlider;