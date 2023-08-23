import Error from "./Components/Error";
import FinalPage from "./Components/FinalPage";
import Loader from "./Components/Loader";
import Main from "./Components/Main";
import Progress from "./Components/Progress";
import Questions from "./Components/Questions";
import StartPage from "./Components/StartPage";
import { useQuestions } from "./contexts/QuestionsProvider";

function AppLayout() {
  const { questions, status, index } = useQuestions();
  return (
    <div>
      <Main>{status === "active" && <Progress />}</Main>
      {status === "Error" && <Error />}
      {status === "Loading" && <Loader />}
      {status === "Start" && <StartPage />}
      {status === "active" && <Questions />}
      {status === "Finished" && <FinalPage />}
    </div>
  );
}

export default AppLayout;
