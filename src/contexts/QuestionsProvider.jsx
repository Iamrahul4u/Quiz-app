import { createContext, useContext, useEffect, useReducer } from "react";

const QuestionContext = createContext(null);
const initialState = {
  questions: [],
  status: "Start",
  answer: null,
  index: 0,
  points: 0,
  secondsRemaining: 10,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
      };
    case "ErrorDetected":
      return {
        ...state,
        status: "Error",
      };
    case "active":
      return {
        ...state,
        status: "active",
      };
    case "answered":
      // eslint-disable-next-line no-case-declarations
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? question.points + state.points
            : state.points,
      };

    case "time":
      return {
        ...state,
        secondsRemaining: --state.secondsRemaining,
        status: state.secondsRemaining === 0 ? "Finished" : state.status,
      };
    case "next":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "Finished":
      return {
        ...state,
        status: "Finished",
      };
    case "Restart":
      return {
        ...initialState,
        status: "Start",
        questions: state.questions,
      };
    default:
      throw new Error("Error");
  }
}
function QuestionsProvider({ children }) {
  const [
    { questions, status, answer, index, points, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxPoints = questions.reduce((acc, curr) => {
    return acc + curr.points;
  }, 0);
  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch("http://localhost:9000/questions");
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data });
      //   console.log(data);
    }
    fetchQuestions();
  }, []);
  return (
    <QuestionContext.Provider
      value={{
        dispatch,
        questions,
        status,
        answer,
        index,
        points,
        maxPoints,
        secondsRemaining,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionContext);
  return context;
}

export default QuestionsProvider;
