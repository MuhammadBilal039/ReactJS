import "./App.css";
import Counter from "./components/Counter";
import User from "./components/User";

function App() {
  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <Counter />
      <User />
    </div>
  );
}

export default App;
