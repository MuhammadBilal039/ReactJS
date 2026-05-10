import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("Bilal");
  async function jani() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const resjson = await res.json();
    console.log(resjson.slip.advice);
    setAdvice(resjson.slip.advice);
  }
  return (
    <>
      <h1>Hello Bilal</h1>
      <h2>{advice}</h2>
      <button onClick={jani}>Advice</button>
    </>
  );
}

export default App;
