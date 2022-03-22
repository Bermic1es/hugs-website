import React from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1,HeroP,StatusCardsContainer,Overlay} from './HeroElements';
import Flash from 'react-reveal/Flash'
import StatusCard from '../Stats/StatusCard'
import star from '../images/star.svg';
import growth from '../images/growth.svg';
import product from '../images/product.svg';

const HeroSection = () => {
  return (
    <HeroContainer>       
        <HeroBg>
            <Overlay></Overlay>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>           
        </HeroBg>              
        <HeroContent>
          <Flash>
              <HeroH1>
              Quality You can Trust. Prices You can Pay.
              </HeroH1>
              <HeroP>
              Our business offers quality yet affordable electronic products, home appliances, gadgets, accessories, and a lot more for the masses
              </HeroP>
          </Flash>          
        </HeroContent>
        <StatusCardsContainer>
            <StatusCard
                img = {growth}                                              
                title="YEARS OF EXPERIENCE"
                widthinput = "7%"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </StatusCard>
            <StatusCard
                img = {product}
                title="PRODUCTS SOLD"
                widthinput = "10%"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </StatusCard>
            <StatusCard
                img = {star}
                title="RATINGS"
                widthinput = "7%"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
            </StatusCard>
          </StatusCardsContainer>
        
    </HeroContainer>
  )
}

export default HeroSection