import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 650px;
    position: relative;
    z-index: 1;
    font-family: 'Montserrat', sans-serif;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%), rgba(0,0,0,0.6)100%),linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

    @media (min-width: 375px ) and (max-width: 425px ) { 
        height: 50px;
    }
`

export const StatusCardsContainer = styled.div`    
    z-index: 50;  
    flex-wrap: wrap; 
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 620px;

    @media (min-width: 375px) and (max-width: 425px ) { 
        background: red; 
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`