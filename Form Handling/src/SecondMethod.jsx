import { useState } from "react";

function SecondMethod() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const nameChangeHandler = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const emailChangeHandler = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
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
        placeholder="enter name..."
        value={data.name}
        onChange={nameChangeHandler}
      />
      <input
        className="p-4 bg-gray-700 rounded"
        type="email"
        placeholder="enter email..."
        value={data.email}
        onChange={emailChangeHandler}
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

export default SecondMethod;
