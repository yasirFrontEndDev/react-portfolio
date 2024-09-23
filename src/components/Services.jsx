import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
    const servicesArray = [
        {
            icon: faWaveSquare,
            title: 'Lorem Ipsum',
            description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
        },
        {
            icon: faWaveSquare,
            title: 'Dolor Sit Amet',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
        },
        {
            icon: faWaveSquare,
            title: 'Aonsectetur ',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt a qui officia deserunt',
        },
        {
            icon: faWaveSquare,
            title: 'Consectetur ',
            description: 'Occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
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
                        <div key={index} className="col-xl-3 col-md-6 d-flex">
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services