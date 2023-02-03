import { useState } from "react";
import questions from "../questions";
// Components
import Question from "./Question";

const QuizQuestions = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div>
      <Question
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
      />
    </div>
  );
};

export default QuizQuestions;
