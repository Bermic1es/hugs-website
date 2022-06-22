import React from 'react'
import {InfoContainer,RowsContainer,InfoRow,Img} from './ValuesContainerElements'
import { FastDeliveryVector,HandleWithCareVector,QualityVector,CustomerServiceVector,TextVector } from './VectorsStyle'

const CompanyValues = () => {
    return (
        <InfoContainer>   
            <InfoRow>
                <Img paddingTop='23px'>{<TextVector/>}</Img>    
            </InfoRow>        
            <RowsContainer>
                <InfoRow marginTop='20px'>                                      
                    <Img>{<QualityVector/>}</Img>                                                                         
                    <Img>{<CustomerServiceVector/>}</Img>                                     
                </InfoRow> 
                <InfoRow marginTop='15px'>                                     
                    <Img>{<HandleWithCareVector/>}</Img>                                                                                                         
                    <Img>{<FastDeliveryVector/>}</Img>                                                                                                                                                                                           
                </InfoRow> 
            </RowsContainer>                                                                                                                                             
        </InfoContainer>
    )
}

export default CompanyValues