import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  const genders = ["Male", "Female", "Other"];
  console.log(gender)
  return (
    <>
      {genders?.map((item) => {
        return (
          <label htmlFor={item}>
            <input
              id={item}
              type="radio"
              value={item}
              checked={gender === item}
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            />
            {item}
          </label>  
        );
      })}
    </>
  );
}

export default App;
