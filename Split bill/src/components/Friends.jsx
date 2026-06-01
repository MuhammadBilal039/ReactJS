import Button from "./Button";

const Friends = ({ item, setSelectedFriend, selectedFriend }) => {
  return (
    <div className="w-full flex justify-between items-center p-3">
      <div className="flex gap-4 items-center">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
          <img className="w-[100%] h-[100%]" src={item.img} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-xl font-semibold">
            {item.balance < 0
              ? `App lengay ${item.name} se ${Math.abs(item.balance)} rupees`
              : `App Dengay ${item.name} ko ${Math.abs(item.balance)} rupees    `}
          </p>
        </div>
      </div>
      {item.name === selectedFriend?.name ? (
        <Button text={"Close"} clickHandler={() => setSelectedFriend()} />
      ) : (
        <Button text={"Select"} clickHandler={() => setSelectedFriend(item)} />
      )}
    </div>
  );
};

export default Friends;
