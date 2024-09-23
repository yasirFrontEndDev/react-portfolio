import React from 'react'
import Slider from "react-slick";
import Images from '../assets/images/Images'
const BrandSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
        ]
      };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div className='bgOffwhiteColorCherry p-3'>
        <div>
            <img src={Images.client1} className='img-fluid w-25' alt="client" />
        </div>
      </div>
      <div className='bgOffwhiteColorCherry p-3'>
      <div>
            <img src={Images.client2} className='img-fluid w-25' alt="client" />
        </div>
      </div>
      <div className='bgOffwhiteColorCherry p-3'>
      <div>
            <img src={Images.client3} className='img-fluid w-25' alt="client" />
        </div>
      </div>
      <div className='bgOffwhiteColorCherry p-3'>
      <div>
            <img src={Images.client1} className='img-fluid w-25' alt="client" />
        </div>
      </div>
      <div className='bgOffwhiteColorCherry p-3'>
      <div>
            <img src={Images.client2} className='img-fluid w-25' alt="client" />
        </div>
      </div>
      <div className='bgOffwhiteColorCherry p-3'>
      <div>
            <img src={Images.client3} className='img-fluid w-25' alt="client" />
        </div>
      </div>
    </Slider>
  </div>
  )
}

export default BrandSlider