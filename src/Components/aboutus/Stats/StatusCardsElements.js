import styled from 'styled-components';

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
export const Card = styled.div`
    background-color: #fff;  
    width: 100%;
    height: 200px; 
    border-radius: 0.75rem; 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);      
`
export const CardContent = styled.div`
    display: inline-flex; 
    padding: 0.75rem; 
    margin-bottom: 1.25rem; 
    text-align: center; 
    display: inline-flex; 
    justify-content: center; 
    align-items: center; 
    width: 3rem; 
    height: 3rem; 
    border-radius: 9999px; 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);       
`
export const Img = styled.img`
    width: 10%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const Title = styled.h3`
    color: gray;
`

export const Paragraph = styled.p`
    color: black;
`