import React from 'react'

const Images = {
    logo : new URL('./site-logo.jpg', import.meta.url).href,
    logoT : new URL('./logo-transparent.png', import.meta.url).href,
    image1 : new URL('./index/hero-img.png', import.meta.url).href,
    client1 : new URL('./clients/client-1.png', import.meta.url).href,
    client2 : new URL('./clients/client-2.png', import.meta.url).href,
    client3 : new URL('./clients/client-3.png', import.meta.url).href,
    frontEnd : new URL('./team/yasir.jpg', import.meta.url).href,
    bde : new URL('./team/bde.jpg', import.meta.url).href,
    hre : new URL('./team/hr.jpg', import.meta.url).href,
    pythonDev : new URL('./team/backend.jpg', import.meta.url).href,
    testimonial1: new URL('./testimonials/review-1.jpg', import.meta.url).href,
    testimonial2: new URL('./testimonials/review-2.jpg', import.meta.url).href,
}

export default Images