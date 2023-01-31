const Quiz = ({
  username,
  questions,
  questionIndex,
  setQuestionIndex,
  score,
  setScore,
  previousScore,
  setPreviousScore,
}) => {
  return (
    <div>
      <h1>Quiz Questions</h1>
      <p>Hi {username}</p>

      <h2>{questions[questionIndex].ask}</h2>

      <div className="answers">
        {questions[questionIndex].options.map((option, i) => (
          <div key={i}>
            <p>{option.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
