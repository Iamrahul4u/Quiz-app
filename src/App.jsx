import Header from "./Components/Header";
import QuestionsProvider from "./contexts/QuestionsProvider";
import AppLayout from "./AppLayout";

function App() {
  return (
    <QuestionsProvider>
      <div className="app">
        <Header />
        <AppLayout />
      </div>
    </QuestionsProvider>
  );
}

export default App;
