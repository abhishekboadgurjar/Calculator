import  { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
        setResult("")
      calculateResult();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setResult("Enter Valid Operation");
    }
  };

  return (
    <div className="calculator">
      <div className="output-box">
        <h1>{input}</h1>
        <h2>{result}</h2>
      </div>
      <div className="buttons">
        <div className="row-1">
          <button onClick={() => handleClick("AC")}>
            <p>AC</p>
          </button>
          <button onClick={() => handleClick("DEL")}>
            <p>DEL</p>
          </button>
          <button onClick={() => handleClick("%")}>
            <p>%</p>
          </button>
          <button onClick={() => handleClick("/")}>
            <p>÷</p>
          </button>
        </div>
        <div className="row-2">
          <button onClick={() => handleClick("7")}>
            <p>7</p>
          </button>
          <button onClick={() => handleClick("8")}>
            <p>8</p>
          </button>
          <button onClick={() => handleClick("9")}>
            <p>9</p>
          </button>
          <button onClick={() => handleClick("*")}>
            <p>X</p>
          </button>
        </div>
        <div className="row-3">
          <button onClick={() => handleClick("4")}>
            <p>4</p>
          </button>
          <button onClick={() => handleClick("5")}>
            <p>5</p>
          </button>
          <button onClick={() => handleClick("6")}>
            <p>6</p>
          </button>
          <button onClick={() => handleClick("-")}>
            <p>-</p>
          </button>
        </div>
        <div className="row-4">
          <button onClick={() => handleClick("1")}>
            <p>1</p>
          </button>
          <button onClick={() => handleClick("2")}>
            <p>2</p>
          </button>
          <button onClick={() => handleClick("3")}>
            <p>3</p>
          </button>
          <button onClick={() => handleClick("+")}>
            <p>+</p>
          </button>
        </div>
        <div className="row-5">
          <button id="zero-button" onClick={() => handleClick("0")}>
            <p>0</p>
          </button>
          <button onClick={() => handleClick(".")}>
            <p>.</p>
          </button>
          <button onClick={() => handleClick("=")}>
            <p>=</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
