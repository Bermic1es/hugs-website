import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import './hero.css'


const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 7.31rem;
    font-family: 'Montserrat', sans-serif;
    
    @media screen and (max-width: 768px){
        grid-grid-template-columns: 1fr;
    }
`;



const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 3rem;

    h1{
        font-size: 72px;
    }
    h2{
        font-size: 45px;
    }
    p{
        margin-bottom: 4rem;
        font-size: 30px;
        line-height: 1.1;
    }

    @media only screen and (min-width: 300px) and (max-width: 600px){
        h1{
            font-size: 60px;
        }
        h2{
            font-size: 35px;
        }
        p{
            margin-bottom: 2rem;
            font-size: 25px;
            line-height: 1.1;
        }
    }
`;

const Button = styled(motion.button)`
    padding: 5px;
    width: 55%;
    height: 25%;
    font-size: 1.5rem;
    border: 2px solid #fff;
    border-radius: 4px;
    border-color: #feb10d;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #feb10d;
    
    @media only screen and (min-width: 300px) and (max-width: 600px){
        
    }
`;

const Hero = () => {
    const fadeLeft = {
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x:0}
    }

    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    })

  return (
    <Section>
        <Container className='hero-background'>
            <ColumnLeft>
            <motion.h2
                className='hero-headline'
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >Quality yet</motion.h2>
            <motion.h1
                className='hero-headline'
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >Affordable</motion.h1>
            <motion.p
                className='hero-paragraph'
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{duration: 1}}
            >Electronics</motion.p>
            
            <Button
            whileHover={{scale: 1.05}}
            whileTap={{
                scale: 0.95,
                backgroundColor: '#feb10d',
                border: 'none',
                color: '#fff'
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration: 1.5} }}
            onClick={scrollToBottom}
            >SHOP NOW</Button> 
            </ColumnLeft>
        </Container>
    </Section>
  )
}

export default Hero
