import { useRef } from "react";

const Dom = () => {
  const divRef = useRef();

  const handleClick = () => {
    divRef.current.style.backgroundColor = "blue";
    divRef.current.style.borderRadius = "100%";
    divRef.current.click();
    divRef.current.style.translate = "50px 0px";
    divRef.current.style.transition = "all 2s";
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col gap-4 justify-center items-center">
      <div
        ref={divRef}
        className="h-40 w-40 bg-red-500"
        onClick={() => console.log("Div per click howa")}
      ></div>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-gray-800 text-white rounded ml-4 cursor-pointer"
      >
        Click Me
      </button>
    </div>
  );
};

export default Dom;
