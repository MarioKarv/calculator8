import React, { useState, useRef } from "react";
import "./App.css";

const Calculator = () => {
  const inputElement = useRef(null);
  const [total, setTotal] = useState(0);

  const handleCalculation = (operation) => (e) => {
    e.preventDefault();
    const inputValue = Number(inputElement.current.value);
    setTotal((prevTotal) => {
      switch (operation) {
        case "add":
          return prevTotal + inputValue;
        case "subtract":
          return prevTotal - inputValue;
        case "multiply":
          return prevTotal * inputValue;
        case "divide":
          return prevTotal / inputValue;
        default:
          return prevTotal;
      }
    });
  };

  const handleResetInput = (e) => {
    e.preventDefault();
    inputElement.current.value = "";
  };

  const handleResetTotal = (e) => {
    e.preventDefault();
    setTotal(0);
  };

  return (
    <div className="calculator">
      <h1>Simple React Calculator</h1>
      <form>
        <p className="result">{total}</p>
        <input ref={inputElement} type="number" placeholder="Enter a number" />
        <div className="button-group">
          <button onClick={handleCalculation("add")}>Add</button>
          <button onClick={handleCalculation("subtract")}>Subtract</button>
          <button onClick={handleCalculation("multiply")}>Multiply</button>
          <button onClick={handleCalculation("divide")}>Divide</button>
        </div>
        <div className="reset-group">
          <button onClick={handleResetInput}>Reset Input</button>
          <button onClick={handleResetTotal}>Reset Total</button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
