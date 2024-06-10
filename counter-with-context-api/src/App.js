import "./App.css";
import { CounterProvider } from "./CounterContext";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default App;
