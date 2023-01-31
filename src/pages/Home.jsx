import { useState } from "react";
// Components
import GetUsername from "../components/GetUsername";
import Quiz from "../components/Quiz";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = ({ username, setUsername, score, setScore, previousScore }) => {
  const [quizStatus, setQuizStatus] = useState(false);

  return (
    <StyledHome>
      {quizStatus ? (
        <Quiz />
      ) : (
        <GetUsername quizStatus={quizStatus} setQuizStatus={setQuizStatus} />
      )}
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  background: pink;
  max-width: 1900px;
  margin: 0 auto;
`;

export default Home;
