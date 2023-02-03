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

  return (
    <div>
      <h3>{questions[questionIndex].ask}</h3>
      <div className="answers">
        {questions[questionIndex].options.map((option) => (
          <div key={option.slot} onClick={() => handleClick(option.isCorrect)}>
            <p>{option.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
