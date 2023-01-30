import { useState } from "react";
// Pages
import Home from "./pages/Home";
import Finished from "./pages/Finished";

function App() {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [previousScore, setPreviousScore] = useState(0);

  return (
    <div className="App">
      <Home
        username={username}
        setUsername={setUsername}
        score={score}
        setScore={setScore}
        previousScore={previousScore}
      />
      <Finished score={score} setPreviousScore={setPreviousScore} />
    </div>
  );
}

export default App;
