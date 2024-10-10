import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer className='footer py-5' id='contact'>
      <div className="container footer_Top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footerAbout">
            <a href="#/"><h2>Woltrio</h2></a>
            <div className="footer_Contact pt-2">
              <p className='text-dark fw-light'> Lorem ipsum <br />Pu, Pak 46000 </p>
              <span className='mb-1 d-block'>
                <FontAwesomeIcon className='me-2 footerIcons' icon={faPhoneVolume} />
                <span className=''>+92 333 3333333</span>
              </span>
              <span className='mb-1 d-block'>
                <FontAwesomeIcon className='me-2 footerIcons' icon={faEnvelope} />
                <span className=''>sales@aLTRION.com</span>
              </span>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 footer_Links">
            <h4>Useful Links</h4>
            <ul className='list-group'>
              <li><FontAwesomeIcon className='linkIcons' icon={faChevronRight} /> <a href="#/">Home</a></li>
              <li><FontAwesomeIcon className='linkIcons' icon={faChevronRight} /> <a href="#/">About</a></li>
              <li><FontAwesomeIcon className='linkIcons' icon={faChevronRight} /> <a href="#/">Services</a></li>
              <li><FontAwesomeIcon className='linkIcons' icon={faChevronRight} /> <a href="#/">Terms of service</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 footer_Links">
            <h4>Our Services</h4>
            <ul className='list-group'>
              <li><FontAwesomeIcon className='linkIcons' icon={faChevronRight} /> <a href="#/">Wordpress Shopify</a></li>
              <li><FontAwesomeIcon className='linkIcons' icon={faChevronRight} /> <a href="#/">Web App Development</a></li>
              <li><FontAwesomeIcon className='linkIcons' icon={faChevronRight} /> <a href="#/">UI/UX Design</a></li>
              <li><FontAwesomeIcon className='linkIcons' icon={faChevronRight} /> <a href="#/">Digital Marketing</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 footer_Links">
            <h4>Subscribe</h4>
            <p className='text-dark fw-light subscribeText'>Subscribe your Email address for latest news & updates.</p>
            <div className="subsEmail">
              <input type="email" placeholder='Enter an email address' className='form-control mb-2 rounded-0' />
              <a href="#/" className='submitSubBtn'>Submit</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer