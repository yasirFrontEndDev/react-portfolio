import React from 'react'
import BrandSlider from '../components/BrandSlider'
import About from '../components/About'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Articles from '../components/Articles'
const Portfolio = () => {
  return (
    <div>
       
        <Services />
        <About />
        <BrandSlider />
        <Team/>
        <Testimonials />
        <Articles />
    </div>
  )
}

export default Portfolio