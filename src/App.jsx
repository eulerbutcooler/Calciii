import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [sum, setSum] = useState([]);
  const [sqrtNum, setSqrtNum] = useState(0);
  const [mathFunctionResult1, setMathFunctionResult1] = useState(0);
  const [mathFunctionResult2, setMathFunctionResult2] = useState(0);

  const calc = () => {
    const sqrtNum = Math.sqrt(num);
    setSqrtNum(sqrtNum.toFixed(2));
    
    let tempSqrt = sqrtNum
    let decimalValue = 0
    if(sqrtNum>100 && sqrtNum<200){
      decimalValue = Math.ceil(tempSqrt-100)*0.01
    }
    else if(sqrtNum>200 && sqrtNum<300){
      decimalValue = Math.ceil(tempSqrt-200)*0.01
    }

    const result1 = (sqrtNum+decimalValue)**2
    setMathFunctionResult1(result1.toFixed(3))

    const result2 = (sqrtNum-decimalValue)**2
    setMathFunctionResult2(result2.toFixed(3))

    let tempSum = [];
    let localNum = sqrtNum;
    for (let i = 0; i < 5; i++) {
      localNum--;
      let b = (localNum * localNum).toFixed(3);
      tempSum.push(b);
    }

    localNum = sqrtNum;
    for (let j = 0; j < 5; j++) {
      localNum++;
      let b = (localNum * localNum).toFixed(3);
      tempSum.push(b);
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
      <h3 className="sqrt">{sqrtNum}</h3>
      <div className="flex-container">
        <div className="grid-container1">
          {sum.slice(0, 5).map((value, index) => (
            <div className="grid-item first-column" key={index}>
              {value}
            </div>
          ))}
        </div>
        <div className="grid-container-middle">
          <div className="grid-item middle-column-green">
            {mathFunctionResult1}
          </div>
          <div className="grid-item middle-column-red">
            {mathFunctionResult2}
          </div>
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
          <a
            className="footer-link"
            href="https://twitter.com/eulerbutcooler"
            target="_blank"
            rel="noopener noreferrer"
          >
            @eulerbutcooler
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
