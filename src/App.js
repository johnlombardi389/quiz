import { useState } from "react";
// Pages
import Home from "./pages/Home";
import Finished from "./pages/Finished";
// Style
import GlobalStyles from "./components/GlobalStyle";

function App() {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [previousScore, setPreviousScore] = useState(0);

  return (
    <div className="App">
      <GlobalStyles />
      <Home
        username={username}
        setUsername={setUsername}
        score={score}
        setScore={setScore}
        previousScore={previousScore}
        setPreviousScore={setPreviousScore}
      />
      <Finished score={score} setPreviousScore={setPreviousScore} />
    </div>
  );
}

export default App;
