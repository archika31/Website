import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.jpg"

const Services = () => {
  return (
    <div className='services'>
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false}
    showIndicators={false} interval={2000}>
    <div>
      <img src={img1} alt="item1"/>
      <p className='legend'>Full Stack</p>
    </div>
    <div>
      <img src={img2} alt="item2"/>
      <p className='legend'>Peer to Peer Service</p>
    </div>

    </Carousel>
    
    </div>
  )
}

export default Services
