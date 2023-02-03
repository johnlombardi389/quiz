import { useEffect, useState } from "react";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import Scoreboard from "../features/score/Scoreboard";
import Timer from "../features/score/Timer";

const Home = () => {
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
      <Scoreboard />
      <Timer time={time} />
      <button onClick={handleStart}>Start Timer</button>
      <button onClick={handleStop}>Stop Timer</button>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  height: 100vh;
`;

export default Home;
