import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(0);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 100);
    setCount(randomNum);
  };

  useEffect(() => {
    counterRef.current += 1;
  });

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col gap-4 justify-center items-center text-white">
      <h2 className="text-2xl">{count}</h2>
      <h2 className="">Re-render Count: {counterRef.current}</h2>
      <button
        className="px-6 py-2 bg-gray-800 text-white rounded"
        onClick={handleClick}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
