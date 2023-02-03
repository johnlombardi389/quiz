// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import Scoreboard from "../features/score/Scoreboard";

const Home = () => {
  return (
    <StyledHome>
      <Scoreboard />
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export default Home;
