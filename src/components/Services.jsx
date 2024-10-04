import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWaveSquare , faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
const Services = () => {
    const servicesArray = [
        {
            icon: faWaveSquare,
            title: 'Web App Development',
            description: 'We create scalable, secure, high-end performing web applications that drive your business forward.',
        },
        {
            icon: faWaveSquare,
            title: 'Wordpress/Shopify Development',
            description: 'From iOS to Android, build an innovative app that creates a seamless user experience & meets today’s mobile-first-world.',
        },
        {
            icon: faWaveSquare,
            title: 'UI / UX Design ',
            description: 'From wireframes to mockups, we create captivating designs that engage your audience and drive results.',
        },
        {
            icon: faWaveSquare,
            title: 'Digital Marketing ',
            description: 'Dot Networks is the best digital marketing agency to offer a 360 degree digital services portfolio. We have a focused approach to drive traffic and sales through our digital marketing services.',
        },
    ];
    return (
        <section className='services_Section' id='services'>
            <div className="container sectionTitle">
                <h2>Services</h2>
                <p className='text-dark fw-light'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
    )
}

export default Services