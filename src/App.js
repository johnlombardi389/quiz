import { useState } from "react";
// Pages
import Home from "./pages/Home";

function App() {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
