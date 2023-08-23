import { useQuestions } from "../contexts/QuestionsProvider";

function StartPage() {
  const { questions, dispatch } = useQuestions();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz Game</h2>
      <h3>
        <span>{questions.length}</span> Number of Questions to test your
        Knowledge
      </h3>
      <button className="btn" onClick={() => dispatch({ type: "active" })}>
        Start
      </button>
    </div>
  );
}

export default StartPage;
