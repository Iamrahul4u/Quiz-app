import { useQuestions } from "../contexts/QuestionsProvider";

function Progress() {
  const { questions, index, answer, points, maxPoints } = useQuestions();
  const currindex = index + Number(answer != null);
  return (
    <header className="progress">
      <progress value={currindex} max={questions.length} />
      <p>
        Question &nbsp;
        {index + 1}/{questions.length}
      </p>
      <p>
        Points &nbsp; {points}/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
