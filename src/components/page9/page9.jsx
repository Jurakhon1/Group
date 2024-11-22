import React, { useState } from "react";
import "./Page9.css"; // Стили для компонента

function Page9() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };


  const calculate = () => {
    try {
      const result = eval(input); 
      setHistory([{ input, result }, ...history]); 
      setInput(result.toString());
    } catch {
      setInput("сози?");
    }
  };

  const clear = () => setInput(""); 

  const handleHistoryClick = (item) => {
    setInput(item.input); 
  };

  const handleDelete = (index) => {
    setHistory((prevHistory) => prevHistory.filter((_, i) => i !== index));
  };

  return (
    <div className="box-calculator">
      <h1 className="caltitle">Calculator</h1>
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "="].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? calculate() : handleInput(btn))}
            >
              {btn}
            </button>
          ))}
          <button onClick={clear}>C</button>
        </div>
        <div className="history">
  {history.length > 0 && (
    <>
      <h3>История операций</h3>
      <ul>
        {history.map((item, index) => (
          <li
            key={index}
            className="history-item"
          >
            {item.input} = {item.result}
            <button
              onClick={() => handleDelete(index)}
              className="delBtn"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </>
  )}
</div>

      </div>
    </div>
  );
}

export default Page9;
