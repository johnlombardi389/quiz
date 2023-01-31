// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const GetUsername = ({ quizStatus, setQuizStatus, username, setUsername }) => {
  return (
    <UsernameCard>
      <h1>Quiz Title</h1>
      <p>Enter your username</p>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setQuizStatus(true)}>Start Quiz</button>
    </UsernameCard>
  );
};

const UsernameCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: green;
  min-width: 300px;
  min-height: 400px;
`;

export default GetUsername;
