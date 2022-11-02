import "./App.css";
import Calculator from "./components/Calculator";
import { useState, createContext } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export const AppContext = createContext();

function App() {
  const [text, setText] = useState("");
  const myTxt = useSelector((state) => state.txt);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "CHANGE_TXT", payload: e.target.value })
          }
        ></input>
        {myTxt}
      </header>
    </div>
  );
}

export default connect()(App);
