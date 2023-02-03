import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "./scoreSlice";
import Leaderboard from "./Leaderboard";
// Style
import { MdSportsScore, MdTimer } from "react-icons/md";

const Scoreboard = () => {
  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Score: {score}</p>
      <MdSportsScore />
      <MdTimer />
      <button onClick={() => dispatch(increment())}>Increase Score</button>
      <button onClick={() => dispatch(reset())}>Reset Score</button>

      <Leaderboard />
    </div>
  );
};

export default Scoreboard;
