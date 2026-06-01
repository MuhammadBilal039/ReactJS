import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";

const AddFriend = ({friends, setFriends}) => {
  const [showModal, setShowModal] = useState(false);

  const addFriend = ()=> {
     setShowModal(true)
  }

  const closeHandler = ()=> {
     setShowModal(false)
  }

  return (
    <div className="w-full my-5">
      {!showModal ? (
        <div className="w-full flex justify-end">
          <Button text={"Add Friend"} clickHandler={addFriend} />
        </div>
      ) : (
        <AddFriendForm closeHandler={closeHandler} friends={friends} setFriends={setFriends} />
      )}
    </div>
  );
};

export default AddFriend;
