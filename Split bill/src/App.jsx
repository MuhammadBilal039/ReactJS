import { useState } from "react";
import "./App.css";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import SplitBill from "./components/SplitBill";

function App() {
  const [friends, setFriends] = useState([
    {
      name: "Ayesha",
      img: "https://img.magnific.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740&q=80",
      balance: 0,
    },
    {
      name: "Ammna",
      img: "https://img.magnific.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-female-office-manager-ceo-e-commerce-company-looking-pleased-camera-white-background_1258-59171.jpg?semt=ais_hybrid&w=740&q=80",
      balance: 0,
    },
    {
      name: "Sara",
      img: "https://mockmind-api.uifaces.co/content/human/221.jpg",
      balance: 0,
    },
  ]);

  const [selectedFriend, setSelectedFriend] = useState();

  return (
    <div className="w-full min-h-screen bg-gray-400 p-4 flex justify-around gap-5">
      <div className="w-1/2">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
        <AddFriend friends={friends} setFriends={setFriends} />
      </div>
      {selectedFriend && <SplitBill friends={friends} setFriends={setFriends} selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
