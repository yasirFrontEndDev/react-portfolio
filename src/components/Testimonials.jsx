import React from 'react'
import Slider from "react-slick";
import Images from '../assets/images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
const Testimonials = () => {
    const testimonialsArray = [
        {
            feedback: 'Amazing developer with a very supportive team. If you are looking for a team to help you on something where you might not even know where to start, go with them. They will identify the problem, explain the solution, and make sure you are kept up to speed on their progress the entire time. I will be working with them a lot in the future. Super grateful, highly recommend',
            cImage: Images.testimonial1,
            name: 'Raza Khan',
            location: 'South Africa',
            icon: faQuoteRight,
        },
        {
            feedback: 'Working with Yasir and team has been an absolute pleasure. They have been completely professional, very cooperative with our needs, and are very capable with the job. I would highly recommend Yasir and team for development jobs',
            cImage: Images.testimonial1,
            name: 'Rohit Rao',
            location: 'India',
            icon: faQuoteRight,
        },
        {
            feedback: 'Amazing developer with a very supportive team. Took all the time in the world to guide me through the process and over delivered past what I was looking for. If you are looking for a team to help you on something where you might not even know where to start, go with them. They will identify the problem, explain the solution, and make sure you are kept up to speed on their progress the entire time. I will be working with them a lot in the future. Super grateful, highly recommend. ',
            cImage: Images.testimonial1,
            name: 'John',
            location: 'Israel',
            icon: faQuoteRight,
        },
        {
            feedback: 'This was my first time getting a small web app developed, and I must say that Yasir and his team know what they are doing. They have guided me and been very transparent in the whole process',
            cImage: Images.testimonial1,
            name: 'Kristian',
            location: 'Denmark',
            icon: faQuoteRight,
        },
        {
            feedback: 'Excellent professionalism and quick work. Good knowledge of the topic and smart approach. ',
            cImage: Images.testimonial1,
            name: 'Jay Pixter',
            location: 'India',
            icon: faQuoteRight,
        },
        {
            feedback: 'Yasir is a well-skilled developer. He understood the task immediately and did everything within the agreed time. I am very pleased with the result. I advise everyone to work with him. Thank you Yasir :) ',
            cImage: Images.testimonial1,
            name: 'Adrenaline',
            location: 'Ukraine',
            icon: faQuoteRight,
        },
        {
            feedback: 'An amazing developer with great skills. I am very pleased with his delivery and looking forward to working with him again. ',
            cImage: Images.testimonial1,
            name: 'Yalexcel',
            location: 'Finland',
            icon: faQuoteRight,
        },
        {
            feedback: 'Very responsive and skilled front end web developer, a pleasure to work with. ',
            cImage: Images.testimonial1,
            name: 'Fislia',
            location: 'United Kingdom',
            icon: faQuoteRight,
        },
        {
            feedback: 'Yasir is Most Professional to work with, Very Fast & work done before delivery time Highly recommended . ',
            cImage: Images.testimonial1,
            name: 'Book',
            location: 'Egypt',
            icon: faQuoteRight,
        },
        {
            feedback: 'My best experience so far here on Fiverr! Absolutely recommended. First class work and great communication. Looking forward to all the other projects to come! Thank you for your awesome service!. ',
            cImage: Images.testimonial1,
            name: 'TieStudio',
            location: 'Pakistan',
            icon: faQuoteRight,
        },
        {
            feedback: 'Incredibly hard worker. Very pleased with work and looking forward to more. ',
            cImage: Images.testimonial1,
            name: 'Deathskull',
            location: 'United States',
            icon: faQuoteRight,
        },
        {
            feedback: 'I needed someone to take on setting the styles for a quick turn-around project. Yasir understood the specifications, was easy to work with and quick to respond when changes were requested. His communications were clear and concise. We will definitely work with him again. ',
            cImage: Images.testimonial1,
            name: 'Jerry',
            location: 'United States',
            icon: faQuoteRight,
        },
        {
            feedback: 'He helped us a great deal as we have had so many python related issues. Great work getting Sandbox back online ',
            cImage: Images.testimonial1,
            name: 'Mmapplew',
            location: 'United States',
            icon: faQuoteRight,
        },
        
    ];


    var settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
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
                <h2>Client Testimonials</h2>
                <p className='text-dark fw-light'>Hear from our clients about their experiences and success stories with us.</p>

            </div>

            <div className="container allTests">
                <Slider {...settings}>

                    {testimonialsArray.map((allTests, index) => (
                        <div key={index}>
                            <div className="testsBox px-3 py-4" >
                                <p className='text-dark mb-4'> {allTests.feedback}
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