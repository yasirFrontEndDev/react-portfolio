import React from 'react'
import HeroSection from '../components/HeroSection'
import BrandSlider from '../components/BrandSlider'
import About from '../components/About'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
const Portfolio = () => {
  return (
    <div>
        <HeroSection />
        <BrandSlider />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
    </div>
  )
}

export default Portfolio