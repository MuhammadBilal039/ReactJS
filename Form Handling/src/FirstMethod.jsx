import { useState } from "react";
const FirstMethod = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const clearHandler = () => {
    setName("");
    setEmail("");
  };
  return (
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center flex-col gap-3 text-white">
      <input
        className="p-4 bg-gray-700 rounded"
        type="text"
        placeholder="enter name..."
        value={name}
        onChange={handleName}
      />
      <input
        className="p-4 bg-gray-700 rounded"
        type="email"
        placeholder="enter email..."
        value={email}
        onChange={handleEmail}
      />
      <button
        onClick={clearHandler}
        className="p-4 mt-4 bg-gray-700 px-10 rounded text-white cursor-pointer"
      >
        Clear
      </button>
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default FirstMethod;
