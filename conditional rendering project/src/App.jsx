import { useState } from "react";
import Popup from "./components/Popup";

function App() {
  const [popup, setPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);

  return (
    <div className="h-screen w-full bg-gray-800 flex justify-center items-center gap-5">
      <button
        onClick={() => setPopup(true)}
        className="py-4 px-5 text-xl bg-gray-900 text-white cursor-pointer  rounded hover:bg-gray-900/50"
      >
        Delete
      </button>
      <Popup
        popup={popup}
        setPopup={setPopup}
        title="Delete"
        description="Are you sure you want to Delete this?"
      />

      <button
        onClick={() => setEditPopup(true)}
        className="py-4 px-5 text-xl bg-gray-900 text-white cursor-pointer  rounded hover:bg-gray-900/50"
      >
        Edit
      </button>
      <Popup
        popup={editPopup}
        setPopup={setEditPopup}
        title="Edit"
        description="Are you sure you want to Edit this?"
      />
    </div>
  );
}

export default App;
