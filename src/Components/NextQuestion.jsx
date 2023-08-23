import { useQuestions } from "../contexts/QuestionsProvider";

function NextQuestion() {
  const { dispatch, answer, index, questions } = useQuestions();

  if (index !== questions.length - 1) {
    return (
      <div>
        {answer != null && (
          <button className="btn" onClick={() => dispatch({ type: "next" })}>
            Next
          </button>
        )}
      </div>
    );
  }
  if (index === questions.length - 1) {
    return (
      <div>
        {answer != null && (
          <button
            className="btn"
            onClick={() => dispatch({ type: "Finished" })}
          >
            FinishQuiz
          </button>
        )}
      </div>
    );
  }
}

export default NextQuestion;
