import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [sum, setSum] = useState([]);
  const [sqrtNum, setSqrtNum] = useState(0);

  const calc = () => {
    const sqrtNum = Math.sqrt(num).toFixed(2);
    setSqrtNum(sqrtNum);

    const tempSum = [];
    for (let i = -5; i <= 5; i++) {
      if (i !== 0) {
        const value = ((sqrtNum + i) ** 2).toFixed(3);
        tempSum.push(value);
      }
    }
    setSum(tempSum);
  };

  const handleChange = (e) => {
    setNum(Number(e.target.value));
  };

  useEffect(() => {
    calc();
  }, [num]);

  return (
    <div>
      <input
        className="input"
        onChange={handleChange}
        placeholder="Enter the number"
      />
      <h3 className="sqrt">
        {sqrtNum}
      </h3>
      <div className="flex-container">
        <div className="grid-container1">
          {sum.slice(0, 5).map((value, index) => (
            <div className="grid-item first-column" key={index}>
              {value}
            </div>
          ))}
        </div>
        <div className="grid-container2">
          {sum.slice(5).map((value, index) => (
            <div className="grid-item second-column" key={index}>
              {value}
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">Made by Amaan</p>
        <p>
          <a className="footer-link" href="https://twitter.com/eulerbutcooler" target="_blank" rel="noopener noreferrer">
            @eulerbutcooler
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;