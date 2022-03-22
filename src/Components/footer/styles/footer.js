import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;
    margin: auto;
    width: 100%;
    background: #feb10d;
    font-family: 'Montserrat', sans-serif;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grip-gap: 20px;

    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size:18px;
    text-decoration: none;
`

export const Title = styled.p`
    font-size: 20px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`

export const Title2 = styled.p`
    color: #fff;
    margin-bottom: 20px;
    font-size:16px;
    text-decoration: none;
`