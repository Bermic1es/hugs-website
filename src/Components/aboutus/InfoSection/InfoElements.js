import styled from 'styled-components'
import { motion } from "framer-motion";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#D9D9D9' : '#010606')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
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
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
    }
`

export const Column1 = styled.div`    
    grid-area: col1;
`

export const Column2 = styled.div`
    grid-area: col2;
`

export const TextWrapper = styled.div`
    margin-right: 80px;
    margin-bottom: 120px;
    margin-left: 70px;
    margin-top: 40px;
    padding-top: 0;
    padding-bottom: 0;
`

export const TopLine = styled(motion.p)`
    color: #ff8400;
    font-size:24px;
    line-height: 16px:
    font-weight: 700;
    letter_spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 200px;
    margin-left: 120px;
`

export const Heading = styled(motion.h1)`
    margin-bottom: 24px;
    font-size: 48px;
    font-weight: bold;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled(motion.p)`
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    margin-top: 100px;
    max-width: 550px;
    height: 100%;
`

export const Img = styled.img`
    width: 90%;
    margin: 0 0 10px 0;
    padding-right: 0;
`