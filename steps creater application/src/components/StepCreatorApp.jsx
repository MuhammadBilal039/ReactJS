import { useState } from "react";

const styleSteps = {
  display: "flex",
  justifyContent: "space-around",
};

const liStyles = {
  backgroundColor: "lightgray",
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  fontSize: "20px",
};

const btnStyle = {
  padding: "7px 10px",
  backgroundColor: "gray",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "20px",
  cursor: "pointer",
};

const data = [
  "Step 1: Learn React JS",
  "Step 2: Earning from Development",
  "Step 3: Invest your new income",
];

const StepCreatorApp = () => {
  const [steps, setSteps] = useState(1);

  //   const handlePrevious = () => {
  //     if (steps > 1) {
  //       setSteps(steps - 1);
  //     } else {
  //       setSteps(3);
  //     }
  //   };

  //   const handleNext = () => {
  //     if (steps < 3) {
  //       setSteps(steps + 1);
  //     } else {
  //       setSteps(1);
  //     }
  //   };

  return (
    <div className="main-container">
      <div className="firstDiv">
        <ul style={styleSteps}>
          <li
            style={{
              ...liStyles,
              backgroundColor: steps === 1 ? "blue" : "lightgray",
              color: steps === 1 ? "white" : "black",
            }}
          >
            1
          </li>
          <li
            style={{
              ...liStyles,
              backgroundColor: steps === 2 ? "blue" : "lightgray",
              color: steps === 2 ? "white" : "black",
            }}
          >
            2
          </li>
          <li
            style={{
              ...liStyles,
              backgroundColor: steps === 3 ? "blue" : "lightgray",
              color: steps === 3 ? "white" : "black",
            }}
          >
            3
          </li>
        </ul>
      </div>
      <div className="secondDiv">
        <h1>{data[steps - 1]}</h1>
      </div>
      <div className="buttonsDiv">
        <button
          style={btnStyle}
          onClick={() => (steps > 1 ? setSteps(steps - 1) : setSteps(3))}
        >
          Previous
        </button>
        <button
          style={btnStyle}
          onClick={() => (steps < 3 ? setSteps(steps + 1) : setSteps(1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepCreatorApp;
