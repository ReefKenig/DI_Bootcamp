import "./App.css";
import { useRef } from "react";

function App() {
  const num1 = useRef(null);
  const num2 = useRef(null);

  const calculate = () => {
    let resultElement = document.querySelector("#result");
    const operators = document.querySelector("#operators");

    const operator = operators.options[operators.selectedIndex].value;

    let result;
    switch (operator) {
      case "+":
        result = Number(num1.current.value) + Number(num2.current.value);
        break;
      case "-":
        result = Number(num1.current.value) - Number(num2.current.value);
        break;
      case "*":
        result = Number(num1.current.value) * Number(num2.current.value);
        break;
      case "/":
        result = Number(num1.current.value) / Number(num2.current.value);
        break;
      default:
        result = 0;
    }
    resultElement.innerHTML = `Result: ${result}`;
  };

  return (
    <>
      <h1>Calculator</h1>
      <input ref={num1} type="number" id="num1" name="num1" />

      <select id="operators">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input ref={num2} type="number" id="num2" name="num2" />

      <br />

      <button onClick={calculate}>calc</button>
      <h2 id="result">Result: </h2>
    </>
  );
}

export default App;
