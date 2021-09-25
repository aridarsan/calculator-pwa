import React from "react";
import "../Styles/style.css"

export default function Ngetang(){
  const [count, setCount] = React.useState("0");
  const [record, setRecord] = React.useState("0");

  const reset = () => setCount("0")

  const changeValue = (digit) => {
    if(count.length !== 12){      
      setCount(count === "0" ? String(digit) : count + String(digit))
    }else{
      return count
    }
  }

    // eslint-disable-next-line no-eval
  const evaluate = () => eval(count)

  const Calculate = () => {
    try{
      setRecord(count)
      setCount(evaluate())
    }catch{
      alert("aduh, inputannya ga bener nih")
    }
  }

  if(count.length>=12){
    alert("jangan kebanyakan dong masukin angkanya")
  }

  return (
    <div className="container-calc">
      <div className="calculator">
        <div className="title">
          <h3>Ngetang App</h3>
        </div>
        <div className="display">
          <div className="display-calc">
            <h1 className="disp">{count}</h1>
            <h3 className="disp">{record}</h3>
          </div>
        </div>
        <div className="keyboard">
          <div className="row">
            <button onClick={() => changeValue(7)}>7</button>
            <button onClick={() => changeValue(8)}>8</button>
            <button onClick={() => changeValue(9)}>9</button>
            <button onClick={() => changeValue("+")}  className="operator">+</button>
          </div>
          <div className="row">
            <button onClick={() => changeValue(4)}>4</button>
            <button onClick={() => changeValue(5)}>5</button>
            <button onClick={() => changeValue(6)}>6</button>
            <button onClick={() => changeValue("-")} className="operator">-</button>
          </div>
          <div className="row">
            <button onClick={() => changeValue(1)}>1</button>
            <button onClick={() => changeValue(2)}>2</button>
            <button onClick={() => changeValue(3)}>3</button>
            <button onClick={() => changeValue("*")} className="operator">*</button>
          </div>
          <div className="row">
            <button onClick={() => reset()} className="operator">C</button>
            <button onClick={() => changeValue(0)}>0</button>
            <button onClick={() => changeValue("/")} className="operator">/</button>
            <button className="calculate operator" onClick={() => Calculate()}>
              =
            </button>
          </div>
        </div>

        <div className="container-footer">
          <h4 className="footer">Created with ❤ by <a href="https://instagram.com/ari_darsan" target="_blank" rel="noreferrer">@ari_darsan</a></h4>
        </div>
     </div>
    </div>
  );
}
