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
            <h1>Better Solutions For Your Business</h1>
            <p>We are team of talented designers making websites with Bootstrap</p>
            <div className="d-flex">
              <a href="#about" className="btnGet_started">Get Started</a>
              <a href="#" className="btnWatch_video d-flex align-items-center">
              <FontAwesomeIcon className='faPlayIcon' icon={faCirclePlay} />
              <span>Watch Video</span></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2" >
            <img src={Images.image1} className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection