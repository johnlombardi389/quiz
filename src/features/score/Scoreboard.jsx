import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "./scoreSlice";
// Style
import { MdSportsScore, MdTimer } from "react-icons/md";
import styled from "styled-components";
import { motion } from "framer-motion";

const Scoreboard = ({ time }) => {
  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();

  return (
    <ScoreTimerSection>
      <div className="info-layout">
        <MdSportsScore /> {score}
      </div>
      <div className="info-layout">
        <MdTimer /> {time}
      </div>
      {/* <button onClick={() => dispatch(increment())}>Increase Score</button>
      <button onClick={() => dispatch(reset())}>Reset Score</button> */}
    </ScoreTimerSection>
  );
};

const ScoreTimerSection = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  .info-layout {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    svg {
      margin-right: 0.5rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export default Scoreboard;
