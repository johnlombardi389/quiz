// Redux
import { useDispatch } from "react-redux";
import { increment, reset } from "../features/score/scoreSlice";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
// Questions
import { questions } from "../questions";

const Question = ({ questionIndex, setQuestionIndex }) => {
  const dispatch = useDispatch();

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      dispatch(increment());
    }
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (questionIndex >= questions.length) {
    return <h3>All questions have been answered!</h3>;
  }

  return (
    <StyledSection>
      <h3>{questions[questionIndex].ask}</h3>
      <Answers>
        {questions[questionIndex].options.map((option) => (
          <Choices
            key={option.slot}
            onClick={() => handleClick(option.isCorrect)}
          >
            <p>{option.answer}</p>
          </Choices>
        ))}
      </Answers>
    </StyledSection>
  );
};

const StyledSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  color: white;
  padding: 2rem;
  margin-top: 5rem;
`;

const Answers = styled(motion.div)`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const Choices = styled(motion.div)`
  cursor: pointer;
  background: #004349;
  width: 250px;
  height: 200px;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
`;

export default Question;
