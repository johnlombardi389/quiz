import { useState } from "react";
// Components
import GetUsername from "../components/GetUsername";
import Quiz from "../components/Quiz";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = ({ username, setUsername, score, setScore, previousScore }) => {
  const [quizStatus, setQuizStatus] = useState(false);

  console.log(username);

  return (
    <StyledHome>
      {quizStatus ? (
        <Quiz username={username} />
      ) : (
        <GetUsername
          quizStatus={quizStatus}
          setQuizStatus={setQuizStatus}
          username={username}
          setUsername={setUsername}
        />
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
