import React from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1,HeroP} from './HeroElements';
import Flash from 'react-reveal/Flash'

const HeroSection = () => {
  return (
    <HeroContainer>       
        <HeroBg>
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
        
    </HeroContainer>
  )
}

export default HeroSection