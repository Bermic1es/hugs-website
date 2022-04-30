import styled from 'styled-components'

export const InfoContainer = styled.div`
justify-content: center;
color: #fff;
background: #feaa00;
height: 600px;
`
export const RowsContainer = styled.div` 
    display: flex;
    flex-direction: column; 
    align-items: center;  
    padding-left:10vw; 
    padding-right:10vw;
`

export const InfoRow = styled.div`   
    flex-wrap: wrap;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    margin-top: ${({marginTop}) => marginTop || '0px'};
`

export const Img = styled.div`
    padding-top: ${({paddingTop}) => paddingTop || '0px'};
    height: auto;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    width: 600px;
`

