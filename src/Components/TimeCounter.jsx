import { useEffect } from "react";
import { useQuestions } from "../contexts/QuestionsProvider";

function TimeCounter() {
  const { secondsRemaining, dispatch } = useQuestions();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "time" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return <div className="timer">{secondsRemaining}</div>;
}

export default TimeCounter;
