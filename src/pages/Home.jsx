// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return <StyledHome></StyledHome>;
};

const StyledHome = styled(motion.div)`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export default Home;
