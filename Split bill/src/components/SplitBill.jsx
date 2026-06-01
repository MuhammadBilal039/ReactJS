import { useState } from "react";
import Button from "./Button";

const SplitBill = ({ selectedFriend, friends, setFriends }) => {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [paidBy, setPaidBy] = useState("you");

  const splitManagementHandler = () => {
    const modifyList = friends?.map((friend) => {
      if (friend.name === selectedFriend.name) {
        return {
          ...friend,
          balance:
            paidBy === "you"
              ? friend.balance - (billValue - yourExpense)
              : +friend.balance + yourExpense,
        };
      }

      return friend;
    });

    setFriends(modifyList);
  };

  return (
    <div className="w-[40%] h-fit px-8 py-3 shadow-2xl rounded-2xl bg-gray-500 flex flex-col items-center">
      <h2 className="text-center text-3xl font-bold">
        Split a Bill with {selectedFriend.name}
      </h2>
      <div className="w-[60%] p-2  my-3 flex justify-between items-center">
        <label htmlFor="" className="text-xl font-bold">
          Bill Value
        </label>
        <input
          type="text"
          className="w-[30%] p-3 bg-gray-400 text-xl font-bold"
          onChange={(e) => setBillValue(e.target.value)}
        />
      </div>
      <div className="w-[60%] p-2  my-3 flex justify-between items-center">
        <label htmlFor="" className="text-xl font-bold">
          Your Expense
        </label>
        <input
          type="text"
          className="w-[30%] p-3 bg-gray-400 text-xl font-bold"
          onChange={(e) => setYourExpense(e.target.value)}
        />
      </div>
      <div className="w-[60%] p-2  my-3 flex justify-between items-center">
        <label htmlFor="" className="text-xl font-bold">
          {selectedFriend.name}'s Expense
        </label>
        <input
          type="text"
          className="w-[30%] p-3 bg-gray-400 text-xl font-bold"
          value={billValue - yourExpense}
        />
      </div>
      <div className="w-[60%] p-2  my-3 flex justify-between items-center">
        <label htmlFor="" className="text-xl font-bold">
          Who is paying the bill?
        </label>
        <select
          name=""
          id=""
          className="w-[30%] p-3 px-1 bg-gray-400 text-xl font-bold"
          onChange={(e) => setPaidBy(e.target.value)}
        >
          <option value="you">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
      </div>
      <div className="w-[60%] py-2 my-3 flex justify-end">
        <Button
          width={"30%"}
          text={"Split Bill"}
          clickHandler={splitManagementHandler}
        />
      </div>
    </div>
  );
};

export default SplitBill;
