import { useState } from 'react';
import './App.css';

function App() {
  const [inpt, setInpt] = useState("");
// document.querySelectorAll(".same").forEach((cell)=>{cell.addEventListener("click",calculation)});

  const calculate = (ch)=>{
    // let clickedBtn = event.target;
    // document.getElementById("input").value = document.getElementById("input").value + clickedBtn.innerHTML;
    setInpt(inpt+ch);
  }

  const clearAll = ()=>{
    setInpt("");
  }

  const displayAns = ()=>{
    if(inpt !== ""){
      let ans = eval(inpt);
      setInpt(ans);
    }
  }

  return (
    <div className="container">
        <div id="title">Calculator</div>
        {/* <input type="text" id="input" value={inpt} onChange={(e)=>setInpt(e.currentTarget.value)} /> */}
        <div className="result">{inpt}</div>
        <div className="div-flex" >
            <button className="btn wide-btn" onClick={clearAll}>C</button>
            <button className="btn wide-btn" onClick={displayAns}>=</button>
        </div>
        <div className="div-flex" >
            <button className="btn" onClick={()=>calculate("7")} >7</button>
            <button className="btn" onClick={()=>calculate("8")} >8</button>
            <button className="btn" onClick={()=>calculate("9")} >9</button>
            <button className="btn" onClick={()=>calculate("/")} >/</button>
        </div>
        <div className="div-flex" >
            <button className="btn" onClick={()=>calculate("4")} >4</button>
            <button className="btn" onClick={()=>calculate("5")} >5</button>
            <button className="btn" onClick={()=>calculate("6")} >6</button>
            <button className="btn" onClick={()=>calculate("*")} >*</button>
        </div>
        <div className="div-flex" >
            <button className="btn" onClick={()=>calculate("1")} >1</button>
            <button className="btn" onClick={()=>calculate("2")} >2</button>
            <button className="btn" onClick={()=>calculate("3")} >3</button>
            <button className="btn" onClick={()=>calculate("-")} >-</button>
        </div>
        <div className="div-flex" >
            <button className="btn wide-btn" onClick={()=>calculate("0")} >0</button>
            <button className="btn" onClick={()=>calculate(".")} >.</button>
            <button className="btn" onClick={()=>calculate("+")} >+</button>
        </div>
    </div>
  );
}

export default App;
