import React from 'react'
import Slider from "react-slick";
import Images from '../assets/images/Images'
const Team = () => {
    var settings = {
        dots: false,
        infinite: true,
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
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      };
  return (
    <section className='about_Section py-5' id='about'>
        <div className="container sectionTitle">
            <h2>Leadership Team</h2>
            <p className='text-dark fw-light'>Meet the Expert Team</p>

            <div className="slider-container">
    <Slider {...settings}>
      <div className='p-3 d-flex justify-content-center'>
        <div className='card border-0 shadow-sm teamCard'>
            <div className="text-center teamImg"> 
            <img src={Images.bde} className='img-fluid card-img-top card-img-bottom' alt="client" />
            </div>
            <div class="card-body">
    <h3 class="card-title">Sher Ali Khan</h3>
    <p class="card-text textCherry fw-light">Business Development Executive</p>
  </div>
        </div>
      </div>
      <div className='p-3 d-flex justify-content-center'>
        <div className='card border-0 shadow-sm teamCard'>
            <div className="text-center teamImg">
            <img src={Images.frontEnd} className='img-fluid card-img-top card-img-bottom' alt="client" />
            </div>
            <div class="card-body">
    <h3 class="card-title">Yasir Ali Khan</h3>
    <p class="card-text textCherry fw-light">Front End Developer</p>
  </div>
        </div>
      </div>
      <div className='p-3 d-flex justify-content-center'>
        <div className='card border-0 shadow-sm teamCard'>
            <div className="text-center teamImg">
            <img src={Images.hre} className='img-fluid card-img-top card-img-bottom' alt="client" />
            </div>
            <div class="card-body">
    <h3 class="card-title">Ehtisham Ilyas</h3>
    <p class="card-text textCherry fw-light">HR Executive</p>
  </div>
        </div>
      </div>
      <div className='p-3 d-flex justify-content-center'>
        <div className='card border-0 shadow-sm teamCard'>
            <div className="text-center teamImg">
            <img src={Images.pythonDev} className='img-fluid card-img-top card-img-bottom' alt="client" />
            </div>
            <div class="card-body">
    <h3 class="card-title">Syed Awon Ali</h3>
    <p class="card-text textCherry fw-light">Python Developer</p>
  </div>
        </div>
      </div>
 
     
     
    </Slider>
  </div>
        </div>
       
    </section>
  )
}

export default Team