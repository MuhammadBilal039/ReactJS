import { useState } from "react";

const MultipleCheckboxes = () => {
  const [isHTML, setIsHTML] = useState(false);
  const [isCSS, setIsCSS] = useState(false);
  const [isJS, setIsJS] = useState(false);
  return (
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center text-white text-xl">
      <div className="w-1/3 shadow-2xl p-5 rounded-2xl bg-gray-700">
        <div className="flex gap-5">
          <label htmlFor="html" className="text-2xl">
            <input
              id="html"
              type="checkbox"
              checked={isHTML}
              onChange={(e) => setIsHTML(e.target.checked)}
            />
            HTML
          </label>
          <p className="text-xl text-green-400">{isHTML && "HTML Selected"}</p>
        </div>

        <div className="flex gap-5">
          <label htmlFor="css" className="text-2xl">
            <input
              id="css"
              type="checkbox"
              checked={isCSS}
              onChange={(e) => setIsCSS(e.target.checked)}
            />
            CSS
          </label>
          <p className="text-xl text-green-400">{isCSS && "CSS Selected"}</p>
        </div>

        <div className="flex gap-5">
          <label htmlFor="js" className="text-2xl">
            <input
              id="js"
              type="checkbox"
              checked={isJS}
              onChange={(e) => setIsJS(e.target.checked)}
            />
            JS
          </label>
          <p className="text-xl text-green-400">{isJS && "JS Selected"}</p>
        </div>
      </div>
    </div>
  );
};

export default MultipleCheckboxes;
