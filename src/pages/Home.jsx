import { useEffect, useState } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { reset, endGame } from "../features/score/scoreSlice";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import Scoreboard from "../features/score/Scoreboard";
import Introduction from "../components/Introduction";
import QuizQuestions from "../components/QuizQuestions";

const Home = () => {
  const gameOver = useSelector((state) => state.score.gameOver);
  const dispatch = useDispatch();

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      if (time === 60) {
        clearInterval(intervalId);
        setIsRunning(false);
        setTime(0);
        dispatch(endGame());
      }
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <StyledHome>
      <QuizGame>
        <Scoreboard time={time} />
        {/* <button onClick={handleStart}>Start Timer</button>
        <button onClick={handleStop}>Stop Timer</button> */}
        {isRunning ? (
          <QuizQuestions />
        ) : (
          <Introduction handleStart={handleStart} />
        )}
      </QuizGame>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const QuizGame = styled(motion.div)`
  position: absolute;
  width: 700px;
  height: 900px;
  background: linear-gradient(148.83deg, #4da58b 0%, #004349 100%);
`;

export default Home;
