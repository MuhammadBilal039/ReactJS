import { FaLuggageCart } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [mobileView, setMobileView] = useState(false);
  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full bg-gray-900 py-7 px-10 flex justify-between items-center text-white">
        <h2 className="text-2xl font-bold">Logo</h2>

        <div className="flex gap-7 text-xl font-semibold max-[720px]:hidden">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Portfolio</a>
          <a href="">Services</a>
        </div>

      <div className={`absolute flex flex-col top-0 left-0 w-[20rem]  h-screen bg-black min-[720px]:hidden ${mobileView ? 'translate-x-0' : '-translate-x-[100%]'} transition-all duration-500`}>
          <button
            onClick={() => setMobileView(false)}
            className="p-5 rounded-2xl absolute top-3 right-4 cursor-pointer"
          >
            ❌
          </button>
          <a
            href=""
            className="w-full p-5 text-center text-xl mt-[5rem] hover:bg-gray-900"
          >
            Home
          </a>
          <a
            href=""
            className="w-full p-5 text-center text-xl hover:bg-gray-900"
          >
            About
          </a>
          <a
            href=""
            className="w-full p-5 text-center text-xl hover:bg-gray-900"
          >
            Contact
          </a>
          <a
            href=""
            className="w-full p-5 text-center text-xl hover:bg-gray-900"
          >
            Portfolio
          </a>
          <a
            href=""
            className="w-full p-5 text-center text-xl hover:bg-gray-900"
          >
            Services
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaLuggageCart className="text-3xl cursor-pointer" />
          <AiOutlineMenuFold
            onClick={() => setMobileView(!mobileView)}
            className="text-3xl cursor-pointer min-[720px]:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
