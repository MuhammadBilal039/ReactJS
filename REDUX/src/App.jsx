import { useDispatch } from "react-redux";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { decrementAction, incrementAction, resetAction } from "./Store/actions";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(resetAction())}>Reset</button>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
