// Style
import styled from "styled-components";
import { motion } from "framer-motion";
import supabase from "../config/supabaseClient";
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
  height: 100vh;
`;

export default Home;
