import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    const {name, value} = e.target;

    setData({ ...data, [name]: value });
  };

  const clearHandler = () => {
    setData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center flex-col gap-3 text-white">
      <input
        className="p-4 bg-gray-700 rounded"
        type="text"
        name="name"
        placeholder="enter name..."
        value={data.name}
        onChange={changeHandler}
      />
      <input
        className="p-4 bg-gray-700 rounded"
        type="email"
        name="email"
        placeholder="enter email..."
        value={data.email}
        onChange={changeHandler}
      />
      <button
        onClick={clearHandler}
        className="p-4 mt-4 bg-gray-700 px-10 rounded text-white cursor-pointer"
      >
        Clear
      </button>
      <h2>{data.name}</h2>
      <h2>{data.email}</h2>
    </div>
  );
}

export default App;
