import React from 'react'
import { Card, ContentSection, CardTitle, CardContent } from './StepperElements';

const StepperCards = ({data, cardIndex}) => {
  return (
    <div>
      <ContentSection>
        {data[cardIndex].map(item =>(
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardContent>{item.name}</CardContent>
          </Card>
        ))} 
      </ContentSection>
    </div>
  )
}

export default StepperCards