// import { useState } from "react";
import FormData from "./FormData";

function App() {
  // const [languages, setLanguages] = useState({
  //   html: false,
  //   css: false,
  //   js: false,
  // });

  // const handleChange = (e) => {
  //   const key = e.target.name;
  //   const checked = e.target.checked;

  //   setLanguages({
  //     ...languages,
  //     [key]: checked,
  //   });
  // };

  return (
    // <div className="w-full h-screen bg-gray-800 flex justify-center items-center text-white text-xl">
    //   <div className="w-1/3 shadow-2xl p-5 rounded-2xl bg-gray-700">
    //     <div className="flex gap-5">
    //       <label htmlFor="html" className="text-2xl">
    //         <input
    //           id="html"
    //           name="html"
    //           type="checkbox"
    //           checked={languages.html}
    //           onChange={handleChange}
    //         />
    //         HTML
    //       </label>
    //       <p className="text-xl text-green-400">
    //         {languages.html && "HTML Selected"}
    //       </p>
    //     </div>

    //     <div className="flex gap-5">
    //       <label htmlFor="css" className="text-2xl">
    //         <input
    //           id="css"
    //           name="css"
    //           type="checkbox"
    //           checked={languages.css}
    //           onChange={handleChange}
    //         />
    //         CSS
    //       </label>
    //       <p className="text-xl text-green-400">
    //         {languages.css && "CSS Selected"}
    //       </p>
    //     </div>

    //     <div className="flex gap-5">
    //       <label htmlFor="js" className="text-2xl">
    //         <input
    //           id="js"
    //           name="js"
    //           type="checkbox"
    //           checked={languages.js}
    //           onChange={handleChange}
    //         />
    //         JS
    //       </label>
    //       <p className="text-xl text-green-400">
    //         {languages.js && "JS Selected"}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
      <FormData />
    </>
  );
}

export default App;
