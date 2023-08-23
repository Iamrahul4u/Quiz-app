import { useEffect } from "react";
import { useQuestions } from "../contexts/QuestionsProvider";

function TimeCounter() {
  const { secondsRemaining, dispatch } = useQuestions();

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "time" });
    }, 1000);
  }, []);
  return <div className="timer">{secondsRemaining}</div>;
}

export default TimeCounter;
