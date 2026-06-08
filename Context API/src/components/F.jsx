import { useMyContext } from "../store/MyContext";

const F = () => {
  const { setCount } = useMyContext();
  return (
    <div className="p-10 bg-gray-500 rounded mt-3">
      F Component <br />
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="p-3 bg-black rounded mt-2 cursor-pointer"
      >
        Decrement
      </button>
    </div>
  );
};

export default F;
