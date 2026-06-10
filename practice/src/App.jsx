import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    languages: "",
  });

  const languages = ["HTML", "CSS", "JavaScript", "React JS", "Node JS"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFetchData = async () => {
    const response = await axios.get(
      "https://6a2503795447714a6f831e8f.mockapi.io/users",
    );
    setUsers(response.data);
  };

  const handlePostData = async (e) => {
    try {
      e.preventDefault();
      await axios.post(
        "https://6a2503795447714a6f831e8f.mockapi.io/users",
        formData,
      );
      handleFetchData();
      setFormData({
        name: "",
        email: "",
        gender: "",
        languages: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <form className="w-[30rem] bg-gray-800 p-5 m-auto mt-5 rounded">
        <label htmlFor="" className="text-xl font-semibold">
          Name:
        </label>
        <input
          type="text"
          placeholder="enter your name..."
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 bg-gray-300 rounded w-full my-4 text-black"
        />
        <label htmlFor="" className="text-xl font-semibold">
          Email:
        </label>
        <input
          type="emai"
          placeholder="enter your email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 bg-gray-300 rounded w-full mt-4 text-black"
        />
        <div className="my-3">
          <h2>Gender:</h2>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value={"male"}
              checked={formData.gender === "male"}
              className="mt-2 mx-3"
              onChange={handleChange}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value={"female"}
              checked={formData.gender === "female"}
              className="mt-2 mx-3"
              onChange={handleChange}
            />
            Female
          </label>
          <label htmlFor="other">
            <input
              type="radio"
              id="other"
              name="gender"
              value={"other"}
              checked={formData.gender === "other"}
              className="mt-2 mx-3"
              onChange={handleChange}
            />
            Other
          </label>
        </div>
        <div>
          <h2>Select Language:</h2>
          <select
            name="languages"
            id=""
            value={formData.languages}
            className="bg-gray-900 mt-3"
            onChange={handleChange}
          >
            <option value="">-- Select Language --</option>
            {languages.map((lang) => {
              return <option value={lang}>{lang}</option>;
            })}
          </select>
        </div>
        <button
          onClick={handlePostData}
          className="px-4 py-3 bg-gray-300 rounded w-full mt-4 text-black cursor-pointer"
        >
          Submit
        </button>
      </form>
      <div className="flex gap-4 flex-wrap justify-center mt-5">
        {users.map((userDetails) => {
          return (
            <div className="p-5 bg-gray-800 w-[300px] rounded m-3">
              <p>ID: {userDetails.id}</p>
              <p>Name : {userDetails.name}</p>
              <p>Email : {userDetails.email}</p>
              <p>Gender : {userDetails.gender}</p>
              <p>Language : {userDetails.languages}</p>
              <p></p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
