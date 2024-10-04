import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const About = () => {
  return (
    <section className='about_Section py-5' id='about'>
        <div className="container sectionTitle">
            <h2>About Us</h2>
        </div>
        <div className="container about_Content">
            <div className="row gy-4 text-center">
                <div className="col-12">
                <h2 className='text-dark fw-bold'> 
                When you are more prepared, your future will be brighter
            </h2>
            <p className='text-dark fw-light'>Since 2010 we’ve been working with amazing organisations to create meaningful impact and compelling experiences. </p>
                
                </div>
            <ul className='list-group aboutList d-none'>
              <li className='list-group-item'><FontAwesomeIcon icon={faCircleCheck} /> <span>Excellence In IT Solutions</span></li>
              <li className='list-group-item'><FontAwesomeIcon icon={faCircleCheck} /> <span>Economic Prosperity For All</span></li>
              <li className='list-group-item'><FontAwesomeIcon icon={faCircleCheck} /> <span>Full Potential of Technology</span></li>
              <li className='list-group-item'><FontAwesomeIcon icon={faCircleCheck} /> <span>Attain Business Success</span></li>
            </ul>
           
                </div>
        </div>
        <div className="container cardsServices py-4">
                <div className="row gy-4">
                        <div  className="col-lg-4 d-flex">
                            <div className="service_Item position-relative aboutServicesBoth">
                                <div className="icon mb-2">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </div>
                                <h4 className="fw-bold mb-3">
                                    <a href="#/" className="stretched-link">
                                        Our Mission
                                    </a>
                                </h4>
                                <p className="text-dark fw-light">Our mission, and our vision, is our mission. We are here to support and encourage individuals in their journey.</p>
                            </div>
                        </div>
                        <div  className="col-lg-4 d-flex">
                            <div className="service_Item position-relative aboutServicesBoth">
                                <div className="icon mb-2">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </div>
                                <h4 className="fw-bold mb-3">
                                    <a href="#/" className="stretched-link">
                                    Our Identity
                                    </a>
                                </h4>
                                <p className="text-dark fw-light">Our commitment to our clients is key to our success. We make it a point to meet with our clients to make sure.</p>
                            </div>
                        </div>
                        <div  className="col-lg-4 d-flex">
                            <div className="service_Item position-relative aboutServicesBoth">
                                <div className="icon mb-2">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </div>
                                <h4 className="fw-bold mb-3">
                                    <a href="#/" className="stretched-link">
                                    Our philosophy
                                    </a>
                                </h4>
                                <p className="text-dark fw-light">We also know that with all our wellness initiatives, customer value and service, our doors to the community.</p>
                            </div>
                        </div>
                </div>
            </div>
    </section>
  )
}

export default About