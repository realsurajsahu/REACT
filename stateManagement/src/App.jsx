import React, { useState } from "react";

const App = () => {
  const [Num, setNum] = useState(0);

  function increase() {
    setNum(Num + 1);
  }
  function decrease() {
    setNum(Num - 1);
  }
  function increase5() {
    setNum(Num + 5);
  }
  function decrease5() {
    setNum(Num - 5);
  }
  function reset() {
    setNum(0);
  }

  return (
    <div className="center">
      <h1>{Num}</h1>
      <div className="button-container">
        <button className="btn" onClick={increase}>Increase Num</button>
        <button className="btn" onClick={decrease}>Decrease Num</button>
        <br />
        <button onClick={increase5}>Increase Num by 5</button>
        <button onClick={decrease5}>Decrease Num by 5</button>
        <br />
        <button className="btn-reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
