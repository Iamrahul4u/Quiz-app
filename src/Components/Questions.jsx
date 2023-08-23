import { useQuestions } from "../contexts/QuestionsProvider";
import Question from "./Question";

function Questions() {
  const { questions, index } = useQuestions();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      {<Question question={question} key={question.question} />}
    </div>
  );
}

export default Questions;
