import Friends from "./Friends";

const FriendsList = ({friends, setSelectedFriend, selectedFriend}) => {
  return (
    <div className="p-3 shadow-2xl rounded-2xl bg-gray-500">
      <h2 className="text-center text-4xl font-bold mb-3">FriendsList</h2>
     {friends?.map(item => <Friends item={item} selectedFriend={selectedFriend} setSelectedFriend={setSelectedFriend} />)}
    </div>
  );
};

export default FriendsList;
