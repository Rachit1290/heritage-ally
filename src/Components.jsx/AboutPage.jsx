import React from 'react'
import Breadcrum from '../Components.jsx/Breadcrum'
import About from '../Components.jsx/About'
import Feature from '../Components.jsx/Feature'
import Testimonial from './Testimonial'

export default function () {
  return (
    <>
     <Breadcrum title="About us" description= "Heritage Ally is an e-commerce platform that blends tradition with modern lifestyle needs. Our mission is to bring culturally inspired products into everyday use, offering a curated collection that reflects authenticity, craftsmanship, and style. We believe that heritage is not just something to preserve, but something to experience and wear with pride. Each product on our platform is thoughtfully selected to represent a story rooted in culture while fitting seamlessly into contemporary living. From fashion and accessories to lifestyle essentials, Heritage Ally aims to deliver quality, uniqueness, and value to our customers. We are committed to providing a smooth and secure shopping experience, ensuring trust, reliability, and customer satisfaction at every step. By combining tradition with innovation, Heritage Ally strives to create a brand that connects the past with the present in a meaningful way."/>
     
     <About />
     <Feature/>
     <Testimonial/>
    </>
  )
}
