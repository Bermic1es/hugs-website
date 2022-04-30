import styled from 'styled-components';
import { motion } from "framer-motion";

export const Icon = styled(motion.svg)`
    width: ${({iconWidth}) => iconWidth || '100%'};
    stroke-width: 0.5;
    
`;