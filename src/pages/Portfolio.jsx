import React from 'react'
import BrandSlider from '../components/BrandSlider'
import About from '../components/About'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
const Portfolio = () => {
  return (
    <div>
       
        <About />
        <Services />
        <Pricing />
        <Team/>
        <BrandSlider />
        <Testimonials />
    </div>
  )
}

export default Portfolio