import React from 'react'
import Slider from "react-slick";
import Images from '../assets/images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
const Testimonials = () => {
    const testimonialsArray = [
        {
            feedback: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
            cImage: Images.testimonial1,
            name: 'Alie Ron',
            location: 'Belgrade',
            icon: faQuoteRight,
        },
        {
            feedback: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
            cImage: Images.testimonial2,
            name: 'Sarah Tancredi',
            location: 'L.A',
            icon: faQuoteRight,
        },
        {
            feedback: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
            cImage: Images.testimonial1,
            name: 'Mia Ron',
            location: 'Belgrade',
            icon: faQuoteRight,
        },
        {
            feedback: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
            cImage: Images.testimonial2,
            name: 'Jade Tancredi',
            location: 'L.A',
            icon: faQuoteRight,
        },
    ];


    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <section className='py-5' id='clients'>
            <div className="container sectionTitle">
                <h2>Client's Testimonials</h2>
                <p className='text-dark fw-light'>What Client Saying About Us</p>
            </div>

            <div className="container allTests">
                <Slider {...settings}>

                    {testimonialsArray.map((allTests, index) => (
                        <div key={index}>
                            <div className="testsBox px-3 py-4 bg-light" >
                                <p className='text-dark fw-light mb-4'> {allTests.feedback}
                                </p>
                                <div className="testBoxItem d-flex align-items-center justify-content-between">
                                    <div className="testBoxProfile d-flex align-items-center">
                                        <img src={allTests.cImage} className='img-fluid' alt="client" />
                                        <span>
                                            <h4 className='mb-0'>{allTests.name}</h4>
                                            <p className='text-dark fw-light'>{allTests.location}  </p>
                                        </span>
                                    </div>
                                    <FontAwesomeIcon className='testIcon' icon={allTests.icon} />
                                </div>
                            </div>
                        </div>
                    ))}


                </Slider>
            </div>

        </section>
    )
}

export default Testimonials