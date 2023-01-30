import { useState } from "react";
// Components
import GetUsername from "../components/GetUsername";

const Home = () => {
  const [quizStatus, setQuizStatus] = useState(false);

  return (
    <div>
      <GetUsername />
    </div>
  );
};

export default Home;
