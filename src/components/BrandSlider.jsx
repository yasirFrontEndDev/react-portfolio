import React from 'react'
import Slider from "react-slick";
import Images from '../assets/images/Images'
const BrandSlider = () => {

  const brandsData = [
    {
      brandImage: Images.client1,
    },
    {
      brandImage: Images.client2,
    },
    {
      brandImage: Images.client3,
    },
    {
      brandImage: Images.gens,
    },
    {
      brandImage: Images.client2,
    },
    {
      brandImage: Images.client3,
    },
  ];

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

    <section className='about_Section py-5' id='about'>
      <div className="container sectionTitle">
        <h2>Our Clients</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {brandsData.map((brand, index) => (
              <div className='p-3' key={index}>
                <div>
                  <img src={brand.brandImage} className='img-fluid w-75' alt="client" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>

  )
}

export default BrandSlider