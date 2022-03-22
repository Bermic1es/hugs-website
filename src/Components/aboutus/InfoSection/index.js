import React from 'react'
import Slide from 'react-reveal/Slide'
import LightSpeed from 'react-reveal/LightSpeed';


import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoElements'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <Slide left>
                        <TopLine>{topLine}</TopLine>
                        
                        <Subtitle darkText= {darkText}>{description}</Subtitle>
                        </Slide>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <LightSpeed right>
                        <Img src={img} alt={alt}/>
                        </LightSpeed>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection