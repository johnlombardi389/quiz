import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "./scoreSlice";
import Leaderboard from "./Leaderboard";

const Scoreboard = () => {
  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Score</h1>
      <p>{score}</p>
      <button onClick={() => dispatch(increment())}>Increase Score</button>
      <button onClick={() => dispatch(reset())}>Reset Score</button>

      <Leaderboard />
    </div>
  );
};

export default Scoreboard;
