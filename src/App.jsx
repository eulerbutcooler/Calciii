import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [sum, setSum] = useState([]);
  const [sqrtNum, setSqrtNum] =useState(0);

  function calc() {
    let a = Math.sqrt(num);
    setSqrtNum(a.toFixed(2))
    let tempsum = [];
    let i = 0;
    let localnum = a;
    while (i < 5) {
      localnum--;
      let b = (localnum * localnum).toFixed(3);
      tempsum.push(b);
      i++;
    }

    let j = 0;
    let localnum1 = a;
    while (j < 5) {
      localnum1++;
      let c = (localnum1 * localnum1).toFixed(3);
      tempsum.push(c);
      j++;
    }
    setSum(tempsum);
  }

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
      </div>
  );
}

export default App;
