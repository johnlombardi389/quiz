import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "./scoreSlice";

const Scoreboard = () => {
  const count = useSelector((state) => state.score.score);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Score</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increase Score</button>
      <button onClick={() => dispatch(reset())}>Reset Score</button>
    </div>
  );
};

export default Scoreboard;
