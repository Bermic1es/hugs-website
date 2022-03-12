import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Section = styled.section`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D9D9D9;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3rem calc((100vw - 1300px) / 2);
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px){
        grid-grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    color: #000;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 3rem;

    h1{
        margin-bottom: 0.5rem;
        font-size: 72px;
    }
    p{
        margin: 2rem 0;
        font-size: 25px;
        line-height: 1.1;
    }
`;

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #000;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #000;
`;

const Hero = () => {
    const fadeLeft = {
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x:0}
    }

  return (
    <Section>
        <Container>
            <ColumnLeft>
            <motion.h1
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >Headline</motion.h1>
            <motion.p
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{duration: 1}}
            >What we do</motion.p>
            <Button
            whileHover={{scale: 1.05}}
            whileTap={{
                scale: 0.95,
                backgroundColor: '#858585',
                border: 'none',
                color: '#000'
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration: 1.5} }}
            
            >Shop Now!</Button> 
            </ColumnLeft>
        </Container>
    </Section>
  )
}

export default Hero
