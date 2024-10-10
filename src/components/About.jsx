import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const aboutData = [
        {
            aboutIcon: faCircleCheck,
            aboutTitle: 'Our Mission',
            aboutDescription: 'We empower businesses by providing innovative, scalable digital solutions that drive success and growth in the ever-evolving tech landscape.',
        },
        {
            aboutIcon: faCircleCheck,
            aboutTitle: 'Our Identity',
            aboutDescription: 'As a client-first company, we pride ourselves on building strong partnerships through transparency, trust, and a deep understanding of your business goals.',
        },
        {
            aboutIcon: faCircleCheck,
            aboutTitle: 'Our Philosophy',
            aboutDescription: 'Our philosophy is rooted in delivering excellence through innovation, with a focus on crafting digital experiences that resonate and create lasting impact.',
        },
    ];

    return (
        <section className='about_Section py-5' id='about'>
            <div className="container sectionTitle">
                <h2>About Us</h2>
            </div>
            <div className="container about_Content">
                <div className="row gy-4 text-center">
                    <div className="col-12">
                        <h2 className='text-dark fw-bold'>
                            Shaping the Future with Innovative Digital Solutions
                        </h2>
                        <p className='text-dark fw-light'>
                            Since 2010, we've partnered with forward-thinking organizations to create digital experiences that drive real results.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container cardsServices py-4">
                <div className="row gy-4">
                    {aboutData.map((about, index) => (
                        <div key={index} className="col-lg-4 d-flex">
                            <div className="service_Item position-relative aboutServicesBoth">
                                <div className="icon mb-2">
                                    <FontAwesomeIcon icon={about.aboutIcon} />
                                </div>
                                <h4 className="fw-bold mb-3">
                                    <a href="#/" className="stretched-link">
                                        {about.aboutTitle}
                                    </a>
                                </h4>
                                <p className="text-dark fw-light">{about.aboutDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
