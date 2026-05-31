import Card from "./components/Card";
import data from "../data";

function App() {
  return (
    <div className="w-[80%] m-auto mt-5 grid gap-3 grid-cols-4 max-[1400px]:grid-cols-3 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
      {data?.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
