import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addToProduct } from "./redux/actions/productAction";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  console.log(state);
  return (
    <>
      <h1>Hello</h1>
      <button
        onClick={() =>
          dispatch(
            addToProduct({
              name: "Bilal",
            }),
          )
        }
      >
        Click
      </button>
    </>
  );
}

export default App;
