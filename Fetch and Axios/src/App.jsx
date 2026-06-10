import { use, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
  });

  const handleFetchData = async () => {
    const response = await axios({
      url: "https://6a2503795447714a6f831e8f.mockapi.io/users",
    });
    setUsers(response.data);
  };

  const handlePostData = async () => {
    if (formDetails.name === "" || formDetails.age === "") {
      alert("Please fill all the fields!");
      return;
    }
    const response = await axios({
      url: "https://6a2503795447714a6f831e8f.mockapi.io/users",
      method: "post",
      data: formDetails,
    });
    setFormDetails({
      name: "",
      age: "",
    });
    handleFetchData();
    console.log(response);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSaveData = async () => {
    await axios({
      url: `https://6a2503795447714a6f831e8f.mockapi.io/users/${formDetails.id}`,
      method: "put",
      data: formDetails,
    });
    setFormDetails({
      name: "",
      age: "",
    });
    handleFetchData();
  };

  const handleDeleteData = async (id) => {
    await axios({
      url: `https://6a2503795447714a6f831e8f.mockapi.io/users/${id}`,
      method: "delete",
    });
    handleFetchData()
  };

  console.log("formDetails", formDetails);

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="w-1/2 m-auto bg-gray-500 p-4">
      <input
        className="px-5 py-3 bg-gray-400 rounded-xl"
        type="text"
        placeholder="enter name..."
        name="name"
        value={formDetails.name}
        onChange={handleChange}
      />{" "}
      <br />
      <input
        className="px-5 py-3 bg-gray-400 rounded-xl"
        type="number"
        placeholder="enter age..."
        name="age"
        value={formDetails.age}
        onChange={handleChange}
      />{" "}
      <br />
      {formDetails.editMode ? (
        <button
          onClick={handleSaveData}
          className="px-6 py-3 bg-gray-900 text-white rounded cursor-pointer"
        >
          Save Data
        </button>
      ) : (
        <button
          onClick={handlePostData}
          className="px-6 py-3 bg-gray-900 text-white rounded cursor-pointer"
        >
          Post Data
        </button>
      )}
      <div className="flex gap-3 flex-wrap justify-center items-center mt-5">
        {users.map((userDetails) => {
          return (
            <div className="w-[300px] p-4 bg-gray-900 rounded-xl text-center">
              <p className="text-xl font-bold mb-3">Name: {userDetails.name}</p>
              <p className="text-xl font-bold mb-3">Age: {userDetails.age}</p>
              <button
                onClick={() =>
                  setFormDetails({
                    ...userDetails,
                    editMode: true,
                  })
                }
                className="px-6 py-3 bg-gray-800/70 text-white rounded cursor-pointer"
              >
                Edit Data
              </button>
              <button
                onClick={() => handleDeleteData(userDetails.id)}
                className="px-6 py-3 bg-gray-800/70 text-white rounded cursor-pointer"
              >
                Delete Data
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
