import { CardsContainer, Card, Title, Paragraph, Img } from './StatusCardsElements';
import { motion } from "framer-motion";

const sentence = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity:1,
        transition: {
            staggerChildren: 0.02,
        }
    }
}
const letter = {
    hidden: {
        opacity: 0, 
        y: 50
    },
    visible: {
        opacity:1,
        y: 50
    }
}
const cardHeader = {
    hidden: {
        opacity: 0, 
        scale: 0
    },
    visible: {
        opacity:1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}
export default function StatusCard({ img, title, children }) {
    return (
        <CardsContainer>
            <Card>                                                                   
                    <Img>{img}</Img>                
                    <Title
                        variants ={cardHeader}
                        initial="hidden"
                        animate="visible"
                    > 
                        {title}
                    </Title>
                    <Paragraph
                        variants ={sentence}
                        initial="hidden"
                        animate="visible"
                    >
                        {children.split("").map((char,index) => {
                            return(
                                <motion.span key={char + "-" + index} 
                                variants={letter}>
                                    {char}
                                </motion.span>
                            )}
                        )}
                    </Paragraph>
            </Card>
        </CardsContainer>
    );
}
