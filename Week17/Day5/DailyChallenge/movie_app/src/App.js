import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
