import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/features/user/user.slice";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="flex flex-wrap gap-5 mt-5">
      {users.map((user) => {
        return (
          <div
            className="p-5 shadow-2xl w-fit border rounded text-center"
            key={user.id}
          >
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
