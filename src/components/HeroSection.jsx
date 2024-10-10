import React from 'react'
import Images from '../assets/images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
const HeroSection = () => {
  return (
    <div className='hero_section'>
        <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Transforming Ideas into Digital Success</h1>
            <div className="d-flex">
              <a href="#/" className="btnGet_started">View More Details</a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2" >
            <img src={Images.image1} className="img-fluid animated" alt=""/>
          </div>
        </div>
        <div className="boxDesign">
          <div className="boxDesign_Inner py-2 px-2">
              <span>WEB DEVELOPMENT </span>
              <span>UI/UX DESIGN</span>
              <span>WORDPRESS / SHOPIFY</span>
              <span>DIGITAL MARKETING</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection