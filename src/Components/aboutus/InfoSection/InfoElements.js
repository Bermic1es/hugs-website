import styled from 'styled-components'
import { motion } from "framer-motion";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#D9D9D9' : '#010606')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }

    @media (min-width: 481px) and (max-width: 767px) {
        height: 850px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        height: 500px;
    }
    @media (min-width: 768px) and (max-width: 768px) {
       height: 400px;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 500px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
    padding: 0 24px;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 768px) {
        height: 200px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 480px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
    }

`

export const Column1 = styled.div`    
    grid-area: col1;

    @media (min-width: 481px) and (max-width: 767px) {
        margin-top: 170px;
    }
`

export const Column2 = styled.div`
    grid-area: col2;

    @media (min-width: 481px) and (max-width: 767px) {
        margin-top: 370px;
    }
`

export const TextWrapper = styled.div`
    margin-right: 80px;
    margin-bottom: 120px;
    margin-left: 70px;
    margin-top: 40px;
    padding-top: 0;
    padding-bottom: 0;

    @media (max-width: 480px) { 
        margin: 0;
    }

    @media (min-width: 481px) and (max-width: 767px) {
        margin: 0;
    }

    @media (min-width: 768px) and (max-width: 768px) {
        margin: 0;
    }
`
export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    @media (max-width: 480px) { 
        margin-top: 160px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
        margin-top: 250px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        margin-top: 120px;
    }

    @media (min-width: 768px) and (max-width: 768px) {
        margin: 0;
    }
`

export const TopLine = styled(motion.p)`
    color: #ff8400;
    font-size:24px;
    line-height: 16px:
    font-weight: 700;
    letter_spacing: 1.4px;
    text-transform: uppercase;
`

export const Subtitle = styled(motion.p)`
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`


export const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    
`

export const Img = styled.img`
    width: 90%;

    @media (min-width: 481px) and (max-width: 767px) {
        width: 90%;
    }
    
    @media (min-width: 769px) and (max-width: 1024px){
        width: 90%;
    }
`