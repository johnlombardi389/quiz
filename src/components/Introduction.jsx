// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Introduction = ({ handleStart }) => {
  return (
    <StyledSection>
      <h1>How many questions can you answer in 60 seconds?</h1>
      <button onClick={handleStart}>Hello</button>
    </StyledSection>
  );
};

const StyledSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  color: white;
  padding: 2rem;
  margin-top: 5rem;
`;

export default Introduction;
