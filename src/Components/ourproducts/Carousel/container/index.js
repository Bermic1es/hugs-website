import React from 'react'
import {Carousel} from 'react-bootstrap'
import Pic1 from '../Images/carousel_1.jpg'
import Pic2 from '../Images/carousel_2.jpg'
import Pic3 from '../Images/carousel_5.jpg'
import './ourproductscarousel.css'
import Fade from 'react-reveal/Fade';

const OurProductsCarousel = () => {
  return (
    <Fade>
    <Carousel className='carousel-ourproducts' slide>
        <Carousel.Item interval={4000}>
            <img
            className="nav-image-ourproducts"
            src={Pic1}
            alt="Carousel 1"
            />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="nav-image-ourproducts"
            src={Pic2}
            alt="Carousel 2"
            />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="nav-image-ourproducts"
            src={Pic3}
            alt="Carousel 3"
            />
        </Carousel.Item>
    </Carousel>
    </Fade>
  )
}

export default OurProductsCarousel
