import React from 'react'
import {Carousel} from 'react-bootstrap'
import Image1 from '../images/carousel_1.jpg'
import Image2 from '../images/carousel_2.jpg'
import Image3 from '../images/carousel_3.jpg'
import Image4 from '../images/carousel_4.jpg'
import Image5 from '../images/carousel_5.jpg'
import './carousel.css'

const CarouselContainer = () => {
  return (
    <Carousel className='carousel' fade>
        <Carousel.Item interval={4000}>
            <img
            className="nav-image"
            src={Image1}
            alt="Carousel 1"
            />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="nav-image"
            src={Image2}
            alt="Carousel 2"
            />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="nav-image"
            src={Image3}
            alt="Carousel 3"
            />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="nav-image"
            src={Image4}
            alt="Carousel 4"
            />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="nav-image"
            src={Image5}
            alt="Carousel 5"
            />
        </Carousel.Item>
        
    </Carousel>
  )
}

export default CarouselContainer
