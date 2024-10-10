import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const servicesArray = [
        {
            icon: faWaveSquare,
            title: 'Web App Development',
            description: 'We build robust, scalable, and fast web applications using the latest technologies like Node.js, Python, PHP, and data science to meet your business needs.',
        },
        {
            icon: faWaveSquare,
            title: 'WordPress / Shopify Development',
            description: 'Expert WordPress and Shopify development services to create responsive, SEO-friendly, and high-converting websites and online stores.',
        },
        {
            icon: faWaveSquare,
            title: 'UI / UX Design',
            description: 'Crafting intuitive, user-centered interfaces with modern UI/UX design principles to enhance customer experience and drive engagement.',
        },
        {
            icon: faWaveSquare,
            title: 'Digital Marketing',
            description: 'Full-service digital marketing, including SEO, PPC, content marketing, and social media strategies, designed to maximize online visibility and drive growth.',
        },
    ];

    return (
        <section className='services_Section' id='services'>
            <div className="container sectionTitle">
                <h2>Our Services</h2>
                <p className='text-dark fw-light'>Empowering businesses with tailored digital solutions for a competitive edge.</p>
            </div>
            <div className="container cardsServices">
                <div className="row gy-4">
                    {servicesArray.map((service, index) => (
                        <div key={index} className="col-xl-6 col-md-6">
                            <div className="service_Item position-relative">
                                <div className="icon mb-2">
                                    <FontAwesomeIcon icon={service.icon} />
                                </div>
                                <h4 className="fw-bold mb-3">
                                    <a href="#/" className="stretched-link">
                                        {service.title}
                                    </a>
                                </h4>
                                <p className="text-dark fw-light">{service.description}</p>
                                <a href="#" className="read_More"><span>Read More</span><FontAwesomeIcon icon={faArrowRightLong} /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
