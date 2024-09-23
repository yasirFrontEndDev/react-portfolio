import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck , faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
const About = () => {
  return (
    <section className='about_Section py-5' id='about'>
        <div className="container sectionTitle">
            <h2>About Us</h2>
        </div>
        <div className="container about_Content">
            <div className="row gy-4">
                <div className="col-lg-6">
                <p className='text-dark fw-light'> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul className='list-group aboutList'>
              <li className='list-group-item'><FontAwesomeIcon icon={faCircleCheck} /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li className='list-group-item'><FontAwesomeIcon icon={faCircleCheck} /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li className='list-group-item'><FontAwesomeIcon icon={faCircleCheck} /> <span>Ullamco laboris nisi ut aliquip ex ea commodo</span></li>
            </ul>
                </div>
                <div className="col-lg-6">
                <p className='text-dark fw-light'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <a href="#" className="read_More"><span>Read More</span><FontAwesomeIcon icon={faArrowRightLong} /></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About