import {React, useEffect, useState} from 'react'
import LightSpeed from 'react-reveal/LightSpeed';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine,Subtitle,Img, ImgWrap,TitleWrapper } from './InfoElements'
import { motion, useAnimation } from "framer-motion";
import {useInView} from 'react-intersection-observer';
const infoTitle = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity:1,
        transition: {
            staggerChildren: 0.1,
        }
    }
}
const infoDescription = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity:1,
        transition: {
            staggerChildren: 0.01,
        }
    }
}
const letter = {
    hidden: { 
        opacity: 0,
        x: '-10vw'
    },
    visible: {
        opacity:1,
        x: 0
    }
}
const InfoSection = ({lightBg,id,imgStart,topLine,darkText,description,img}) => {

    const {ref, inView} = useInView();
    const playAnimation = useAnimation();
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)

    useEffect(()=>{
        if(inView && isAnimationPlaying === false){
            playAnimation.start("visible")
            setIsAnimationPlaying(true)
        }
        if(!inView){
            playAnimation.start("hidden")
            setIsAnimationPlaying(false)
        }

    },[inView]);
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TitleWrapper>
                            <TopLine 
                                ref={ref}
                                variants ={infoTitle}
                                animate={playAnimation}
                            >
                                {topLine.split("").map((char,index) => {
                                    return(
                                        <motion.span 
                                        key={char + "-" + index} 
                                        variants={letter}
                                        onAnimationComplete={() => {
                                            setIsAnimationPlaying(false)
                                        }}
                                        >                              
                                            {char}
                                        </motion.span>
                                    )}
                                )}
                            </TopLine>
                        </TitleWrapper>             
                        <Subtitle 
                            darkText= {darkText}
                            ref={ref}
                            variants ={infoDescription}
                            animate={playAnimation}
                        >
                            {description.split("").map((char,index) => {
                                return(
                                    <motion.span 
                                    key={char + "-" + index} 
                                    variants={letter}
                                    onAnimationComplete={() => {
                                        setIsAnimationPlaying(false)
                                      }}
                                    >                              
                                        {char}
                                    </motion.span>
                                )}
                            )}
                        </Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <LightSpeed right>
                        <Img src={img}/>
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