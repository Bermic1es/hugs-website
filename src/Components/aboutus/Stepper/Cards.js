import React from 'react'
import { Card, ContentSection, CardTitle, CardContent } from './StepperElements';
import { useSpring, config } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 10, (x - window.innerWidth / 2) / 90, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const paragraph = {
  hidden: {
      y: '5vw',
      opacity:0,       
  },
  visible: {           
      opacity: 1,
      y:0,
      transition: {
          duration: 5,
          type:'spring',
          damping: 15
      }        
  }       
}

const StepperCards = ({data, cardIndex}) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
  return (
    <div>
      <ContentSection>
        {data[cardIndex].map(item =>(
          <Card
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
          >
            <CardTitle
              variants={paragraph}
              initial="hidden"
              animate="visible"
            >
              {item.title}
            </CardTitle>
            <CardContent
              variants={paragraph}
              initial="hidden"
              animate="visible"
            >
              {item.name}
            </CardContent>
          </Card>
        ))} 
      </ContentSection>
    </div>
  )
}

export default StepperCards