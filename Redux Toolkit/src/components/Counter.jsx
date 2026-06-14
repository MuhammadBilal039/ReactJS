import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/features/counter/counter.slice";

const Counter = () => {
  const dispatch = useDispatch();
  const storeValue = useSelector((state) => state.counter.value);

  const handleIncremnt = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>{storeValue}</h2>
      <button className="border p-2 cursor-pointer" onClick={handleIncremnt}>
        Increment
      </button>
      <button className="border p-2 cursor-pointer" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
