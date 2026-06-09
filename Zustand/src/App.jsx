import useMyStore from "./store";

function App() {
  // Choose subscription of state carefully
  // const state = useMyStore();

  const count = useMyStore((state) => state.count);
  const name = useMyStore((state) => state.name);
  const increment = useMyStore((state) => state.increment);
  const capitalizeName = useMyStore((state) => state.capitalizeName);

  return (
    <>
      <h1>
        Hello
        <p>{name}</p>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button className="ml-4" onClick={capitalizeName}>
          Capitalize
        </button>
      </h1>
    </>
  );
}

export default App;
