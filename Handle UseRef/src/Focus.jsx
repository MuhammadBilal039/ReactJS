import { useRef } from "react";

const Focus = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center">
      <input
        ref={inputRef}
        className="px-6 py-2 bg-gray-800 text-white rounded"
        type="text"
        placeholder="enter your name..."
      />
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-gray-800 text-white rounded ml-4 cursor-pointer"
      >
        Click Me
      </button>
    </div>
  );
};

export default Focus;
