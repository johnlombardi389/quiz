import { useState } from "react";
// Components
import GetUsername from "../components/GetUsername";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const [quizStatus, setQuizStatus] = useState(false);

  return (
    <StyledHome>
      <GetUsername />
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  max-width: 1900px;
  margin: 0 auto;
`;

export default Home;
