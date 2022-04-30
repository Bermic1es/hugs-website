import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
    top: 0;
    background: #feb10d;
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    border-bottom: 1px solid #4d2512;
`

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &.active{
        color: #000;
    }
`
export const Bars = styled(FaBars)`
    display:none;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display:grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style:none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`