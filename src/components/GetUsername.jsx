// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const GetUsername = ({ quizStatus, setQuizStatus, username, setUsername }) => {
  return (
    <div>
      <h1>Enter your username</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setQuizStatus(true)}>Start Quiz</button>
    </div>
  );
};

export default GetUsername;
