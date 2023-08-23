import { useQuestions } from "../contexts/QuestionsProvider";
import NextQuestion from "./NextQuestion";
import TimeCounter from "./TimeCounter";

function Question(question) {
  const { dispatch, answer } = useQuestions();
  const isAnswered = answer != null;
  const correctAns = question.question.correctOption;
  console.log(correctAns);
  return (
    <div className="options">
      {question.question.options.map((option, i) => (
        <button
          className={`btn btn-option  ${i === answer ? "answer" : ""} ${
            isAnswered ? (i === correctAns ? "correct" : "wrong") : ""
          }`}
          disabled={isAnswered}
          key={option}
          onClick={() => dispatch({ type: "answered", payload: i })}
        >
          {option}
        </button>
      ))}
      <div className="buttons-gap">
        <TimeCounter />
        <NextQuestion />
      </div>
    </div>
  );
}

export default Question;
