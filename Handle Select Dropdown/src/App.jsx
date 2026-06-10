import { useState } from "react";
import DependentSelect from "./DependentSelect";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const languages = [
    "html",
    "css",
    "javascript",
    "c",
    "c++",
    "java",
    "python",
    "node js",
    "react js",
  ];

  console.log(selectedOption);

  return (
    <>
      {/* Method 1 */}
      {/* <select value={selectedOption} onChange={(e)=> setSelectedOption(e.target.value)}>
        <option value="">--- Select Option ---</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="reactjs">React JS</option>
      </select> */}

      {/* Method 2 */}
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">--- Select Option ---</option>
        {languages?.map((item) => {
          return <option value={item}>{item.toUpperCase()}</option>;
        })}
      </select>

      <DependentSelect />
    </>
  );
}

export default App;
