import React from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg,StatusCardsContainer} from './HeroElements';
import StatusCard from '../Stats/StatusCard'
import { GrowthIcon, ProductIcon, StarIcon } from '../Stats/IconStyles';

const HeroSection = () => {
  return (
    <HeroContainer>       
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>           
        </HeroBg>              
        <StatusCardsContainer>
            <StatusCard
                img={<GrowthIcon/>}                                              
                title="YEARS OF EXPERIENCE"
            >
                18 YEARS since being ISO Certified.
            </StatusCard>
            <StatusCard
                img={<ProductIcon/>} 
                title="PRODUCTS SOLD"
            >
                Over 410,000 products sold on both Shopee and Lazada combined.
            </StatusCard>
            <StatusCard
                img={<StarIcon/>} 
                title="RATINGS"
                widthinput = "7%"
            >            
                4.8 / 5 Stars Rating on Shopee and 96% Positive Seller Ratings on Lazada.
            </StatusCard>
          </StatusCardsContainer>
        
    </HeroContainer>
  )
}

export default HeroSection