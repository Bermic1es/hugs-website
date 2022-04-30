import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { animated } from 'react-spring';
import { motion } from "framer-motion";

export const StoryContainer = styled.div`
    color: #fff;
    
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const StoryWrapper = styled.div`
    z-index: 1;
    height: 470px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
    padding: 0 24px;
    justify-content: center;
`

export const Card = styled(animated.div)`
  padding:30px 40px;
  text-align:center;
  background: #f3f3f3;
`

export const ContentSection = styled.div`
  width:80%;
  margin: auto;
  background: #fff;
  border-radius: 4px;
`
export const CardTitle = styled(motion.h2)`
  font-size:17px;
  font-weight: bold;
  text-transform:uppercase;
  color:#333;
  letter-spacing:1px;
  font-family: 'Montserrat';
`
export const CardContent = styled(motion.p)`
  font-size:16px;
  ine-height:1.8em;
  color:#777;
  font-family: 'proxima-nova';
`
export const Heading = styled.h1`
  padding-top: 50px;
  color: rgb(51, 51, 51); 
  font-weight: 700;  
  text-align: center; 
  text-transform: uppercase; 
  letter-spacing: 4px; 
  line-height: 23px;
  font-family: 'Montserrat';
`

export const ProcessWrapper = styled.div`
  margin: auto;
  max-width: 1080px;
`

export const ProcessBarContainer = styled.div`
  position:relative;
  width:90%;
  margin:auto;
  height:100px;
  margin-top:65px;
`

export const List = styled.ul`
  padding:0;
	margin:0;
	padding-top:15px;
	z-index:9999;
	position:absolute;
	width:100%;
	margin-top:-40px
`

export const ListItem = styled.li`
  list-style:none;
  float:left;
  width:20%;
  text-align:center;
  text-transform:uppercase;
  font-size:11px;
  cursor:pointer;
  font-weight:700;
  transition:all ease 0.2s;
  vertical-align:bottom;
  height:60px;
  position:relative;
  font-family: 'Montserrat';
  color: ${({State}) => (State ? 'orange' : 'gray')};

  :hover {
    color:orange;
  }

  :active {
    color:orange;
  }
`

export const ItemText = styled.div`
  position:absolute;
  width:100%;
  bottom:0;
  font-size: 14px;
`
export const Line = styled.div`
  width:80%;
  margin:auto;
  background: #eee;
  height:6px;
  position:absolute;
  left:10%;
  top:57px;
  z-index:1;
  border-radius:50px;
  transition:all ease 0.9s; 
`
export const LineProgress = styled.div`
  content:" ";
  height:100%;
  background: #ff8c00;	 
  background: linear-gradient(to right, #ff8c00 0%,#ff8c00 100%); 
  position:absolute;
  z-index:2;
  border-radius:50px;
  transition:all ease 0.9s;
`
export const FadeInUp = keyframes`
  0% {
    transform:translateY(15px);
    opacity:0;
  }

  100% {
    transform:translateY(0px);
    opacity:1;
  }
`
export const BigCircle = styled.div`
  content:" ";
  display:block;
  margin:auto;
  width:30px;
  height:30px;
  border-radius:50%;
  border:${({State}) => (State ? 'solid 2px #b54800' : 'solid 2px #aaa')};
  transition:all ease 0.3s; 
  background: ${({State}) => (State ? 'orange' : '#fff')};


  :hover {
    border:solid 2px #b54800;            
    background: orange; 
  }

  :active {
    border:solid 2px #b54800;   	 
    background: orange;
  }

`
export const SmallCircle = styled.div`
  content:" ";
  display:block;
  width:20px;
  height:20px;
  margin:auto;
  border:solid 7px #fff;
  border-radius:50%;
  margin-top:45px;
  box-shadow:0 2px 13px -1px rgba(0,0,0,0.3);
  transition:all ease 0.2s;
  background: ${({State}) => (State ? '#ff8c00' : '#777')};

  :hover {
    background:#555;
  }

  :active {
    background:#ff8c00;
  }
`