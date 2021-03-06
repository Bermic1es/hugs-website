import styled from 'styled-components';
import { motion } from "framer-motion";

export const CardsContainer = styled.div`
    display: flex; 
    padding-left: 1rem;
    padding-right: 1rem; 
    text-align: center; 
    display: flex; 
    justify-content: center; 
    width: 100%; 
    
    @media (min-width: 768px) { 
    width: 33.333333%; 
    }
`
export const Card = styled(motion.div)`
    background-color: #fff;  
    width: 100%;
    height: 200px; 
    border-radius: 0.75rem; 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);     
    
    @media (max-width: 480px) { 
        width: 100%;
        height: 170px;
    }
`
export const Img = styled.div`
    margin: 20px 0 10px 0;
    padding-right: 0;
`

export const Title = styled(motion.h3)`
    color: black;
    font-family: 'Montserrat';

    @media (max-width: 480px) { 
        font-size: 20px;
    }
`

export const Paragraph = styled(motion.p)`
    margin: 0 10px 0 10px;
    color: #5c5957;
    font-family: 'proxima-nova';
    
`

export const Icon = styled(motion.svg)`
    width: ${({iconWidth}) => iconWidth || '100%'};
    overflow: visible;
    stroke-width: 0.5;
    
`;

