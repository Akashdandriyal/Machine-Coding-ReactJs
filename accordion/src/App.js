import Accordion from "./Accordion";
import "./App.css";
import { questions } from "./data";

function App() {
  return (
    <div className="App">
      <h1 className="title">Accordion</h1>
      <div className="questions-container">
        {questions.map((question) => (
          <Accordion key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
}

export default App;
