import { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ closeHandler, friends, setFriends }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddFriend = () => {
    const newFriend = [...friends];
    newFriend.push({
      name: name,
      img: imageUrl,
      balance: 0,
    });

    setFriends(newFriend);
  };

  return (
    <div className="w-full p-3 shadow-2xl rounded-2xl bg-gray-500 mt-3">
      <label htmlFor="" className="block text-xl font-semibold">
        Friend Name:
      </label>
      <input
        type="text"
        placeholder="Enter name..."
        className="block w-full bg-gray-400 py-2 px-3 rounded my-2"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="" className="block text-xl font-semibold">
        Image URL:
      </label>
      <input
        type="text"
        placeholder="Enter image url..."
        className="block w-full bg-gray-400 py-2 px-3 rounded my-2"
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <div className="flex gap-3 my-5 justify-end">
        <Button text={"Add"} clickHandler={handleAddFriend} />
        <Button text={"Close"} clickHandler={closeHandler} />
      </div>
    </div>
  );
};

export default AddFriendForm;
