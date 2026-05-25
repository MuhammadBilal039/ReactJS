import { useState } from "react";
import "./App.css";

function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const days = ["Sun", "Mon", "Tues", "Thur", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();
  const setDate = date.setDate(count);

  console.log(date);

  return (
    <div className="container">
      <h2 className="heading">Steps Counter With Date Changing</h2>
      <h3>
        <button onClick={() => (steps >= 2 ? setSteps(steps - 1) : null)}>
          -
        </button>
        Step: {steps}
        <button onClick={() => setSteps(steps + 1)}>+</button>
      </h3>
      <h3>
        <button onClick={() => setCount(count - steps)}>-</button>
        Counter: {count}
        <button onClick={() => setCount(count + steps)}>+</button>
      </h3>

      <h2>
        Today is {days[date.getDay()]} {months[date.getMonth()]}{" "}
        {date.getDate(setDate)} {date.getFullYear()}
      </h2>
    </div>
  );
}

export default App;
