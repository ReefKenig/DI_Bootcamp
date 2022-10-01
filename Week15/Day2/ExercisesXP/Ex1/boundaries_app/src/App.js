import "./App.css";
import BuggyCounter from "./Components/BuggyCounter";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="simulation1">
          <h2>Simulation 1</h2>
          <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>
        </div>
        <br />
        <div className="simulation2">
          <h2>Simulation 2</h2>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>
        <br />
        <div className="simulation3">
          <h2>Simulation 3</h2>
          <BuggyCounter />
        </div>
      </header>
    </div>
  );
}

export default App;
