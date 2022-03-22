import React, {useState} from 'react'
import StepperCards from './Cards';
import Data from './Data';
import { StoryContainer,StoryWrapper,Heading, ProcessWrapper, ProcessBarContainer, List, ListItem, ItemText, Line, LineProgress,BigCircle,SmallCircle} from './StepperElements';


const StepperStory = () => {
    const [active, setActive] = useState("FirstCard");
    const [lineWidth, setLineWidth] = useState("3%");
    const [selectedButton, setSelectedButton] = useState(1);
    const State = false;

    const changeSelected =(cardNumber,lineSize, selectedNumber) => {
      setActive(cardNumber)
      setLineWidth(lineSize)
      setSelectedButton(selectedNumber)
    } 
    return(
      <StoryContainer>
        <StoryWrapper>
        <Heading>Our Story</Heading>
          <ProcessWrapper>
            <ProcessBarContainer>
              <List>  
                {selectedButton >= 1
                  ? <ListItem State={!State} onClick={() => changeSelected("FirstCard","3%", 1)}>
                      <BigCircle State={!State}></BigCircle>
                      <ItemText>LOREM IPSUM</ItemText>
                      <SmallCircle State={!State}></SmallCircle>
                    </ListItem>                
                  : <ListItem State={State} onClick={() => changeSelected("FirstCard","3%", 1)}>
                      <BigCircle State={State}></BigCircle>
                      <ItemText>LOREM IPSUM</ItemText>
                      <SmallCircle State={State}></SmallCircle>
                  </ListItem>
                }
                {selectedButton >= 2
                ? <ListItem State={!State} onClick={() => changeSelected("SecondCard","25%", 2)}>
                    <BigCircle State={!State}></BigCircle>
                    <ItemText>LOREM IPSUM</ItemText>
                    <SmallCircle State={!State}></SmallCircle>
                  </ListItem>                
                : <ListItem State={State} onClick={() => changeSelected("SecondCard","25%", 2)}>
                    <BigCircle State={State}></BigCircle>
                    <ItemText>LOREM IPSUM</ItemText>
                    <SmallCircle State={State}></SmallCircle>
                </ListItem>
                }  
                {selectedButton >= 3
                ? <ListItem State={!State} onClick={() => changeSelected("ThirdCard","50%", 3)}>
                    <BigCircle State={!State}></BigCircle>
                    <ItemText>LOREM IPSUM</ItemText>
                    <SmallCircle State={!State}></SmallCircle>
                  </ListItem>                
                : <ListItem State={State} onClick={() => changeSelected("ThirdCard","50%", 3)}>
                    <BigCircle State={State}></BigCircle>
                    <ItemText>LOREM IPSUM</ItemText>
                    <SmallCircle State={State}></SmallCircle>
                </ListItem>
                }
                {selectedButton >= 4
                ? <ListItem State={!State} onClick={() => changeSelected("FourthCard","75%", 4)}>
                    <BigCircle State={!State}></BigCircle>
                    <ItemText>LOREM IPSUM</ItemText>
                    <SmallCircle State={!State}></SmallCircle>
                  </ListItem>                
                : <ListItem State={State} onClick={() => changeSelected("FourthCard","75%", 4)}>
                    <BigCircle State={State}></BigCircle>
                    <ItemText>LOREM IPSUM</ItemText>
                    <SmallCircle State={State}></SmallCircle>
                </ListItem>
                }
                {selectedButton >= 5
                ? <ListItem State={!State} onClick={() => changeSelected("FifthCard","100%", 5)}>
                    <BigCircle State={!State}></BigCircle>
                    <ItemText>LOREM IPSUM</ItemText>
                    <SmallCircle State={!State}></SmallCircle>
                  </ListItem>                
                : <ListItem State={State} onClick={() => changeSelected("FifthCard","100%", 5)}>
                    <BigCircle State={State}></BigCircle>
                    <ItemText>LOREM IPSUM</ItemText>
                    <SmallCircle State={State}></SmallCircle>
                </ListItem>
                }                                                                                                        
              </List>
              <Line>
                <LineProgress style={{width: lineWidth}}></LineProgress>
              </Line>
            </ProcessBarContainer>
          </ProcessWrapper>        
          <div>
            {active === "FirstCard" && <StepperCards data={Data} cardIndex={0}/>}
            {active === "SecondCard" && <StepperCards data={Data} cardIndex={1}/>}
            {active === "ThirdCard" && <StepperCards data={Data} cardIndex={2}/>}
            {active === "FourthCard" && <StepperCards data={Data} cardIndex={3}/>}
            {active === "FifthCard" && <StepperCards data={Data} cardIndex={4}/>}
          </div>   
        </StoryWrapper>  
      </StoryContainer>   
    );
}

export default StepperStory;