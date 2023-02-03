// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Introduction = ({ handleStart }) => {
  return (
    <StyledSection>
      <h1>How many questions can you answer in 60 seconds?</h1>
      <StartButton onClick={handleStart}>Start</StartButton>
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

const StartButton = styled(motion.button)`
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 2rem;
  color: white;
  text-transform: uppercase;
  background: blue;
  letter-spacing: 0.25rem;
  margin-top: 15rem;
`;

export default Introduction;
