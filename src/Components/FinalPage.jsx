import { useQuestions } from "../contexts/QuestionsProvider";

function FinalPage() {
  const { maxPoints, points, dispatch } = useQuestions();
  return (
    <div>
      <p className="result ">
        You Scored {points}/{maxPoints}
      </p>
      <div className="start">
        <button className="btn " onClick={() => dispatch({ type: "Restart" })}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default FinalPage;
