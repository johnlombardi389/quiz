import { useState } from "react";
// Components
import GetUsername from "../components/GetUsername";
import Quiz from "../components/Quiz";
import { questions } from "../questions";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = ({
  username,
  setUsername,
  score,
  setScore,
  previousScore,
  setPreviousScore,
}) => {
  const [quizStatus, setQuizStatus] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  console.log(username);

  return (
    <StyledHome>
      {quizStatus ? (
        <Quiz
          username={username}
          questions={questions}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          score={score}
          setScore={setScore}
          previousScore={previousScore}
          setPreviousScore={setPreviousScore}
        />
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
  display: grid;
  place-items: center;
  height: 100vh;
`;

export default Home;
