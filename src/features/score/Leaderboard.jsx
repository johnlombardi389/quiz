import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient";

const Leaderboard = () => {
  const [fetchError, setFetchError] = useState(null);
  const [leaderboard, setLeaderboard] = useState(null);
  const [orderBY, setOrderBy] = useState("score");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const { data, error } = await supabase.from("leaderboard").select();
      if (error) {
        setFetchError("Leaderboard is not available at this time");
        setLeaderboard(null);
        console.log(error);
      }
      if (data) {
        setLeaderboard(data);
        setFetchError(null);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <div className="board">
        {fetchError && <p>{fetchError}</p>}
        {leaderboard && (
          <div className="leaderboard">
            {leaderboard
              .sort((a, b) => b.score - a.score)
              .map((leader) => (
                <p>
                  {leader.name} got {leader.score}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
