import { useMyContext } from "../store/MyContext";

const E = () => {
  const { setCount } = useMyContext();
  return (
    <div className="p-10 bg-green-700 rounded mt-3">
      E Component <br />
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="p-3 bg-black rounded mt-2 cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
};

export default E;
