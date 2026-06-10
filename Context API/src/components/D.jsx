import { useMyContext } from "../store/MyContext";

const D = () => {
  const { count } = useMyContext();
  return (
    <div className="p-10 bg-blue-500 rounded mt-3">
      D Component
      <h2 className="text-center p-3 bg-gray-900">{count}</h2>
    </div>
  );
};

export default D;
