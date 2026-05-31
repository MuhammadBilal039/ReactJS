import { useState } from "react";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";

function App() {

  const [selectedColor, setSelectedColor] = useState('red')

  const colors = [
    "black",
    "blue",
    "orange",
    "lightblue",
    "pink",
    "tomato",
    "lightgray",
    "green",
    "aqua"
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-gray-400 h-screen w-full">
      <h1 className="text-4xl font-bold">🎨 Color Switcher</h1>
      <div className="flex gap-2 my-5">
        {colors.map((item) => {
        return <Button color={item} setSelectedColor={setSelectedColor}>{item}</Button>;
      })}
      </div>

     <ColorBox selectedColor={selectedColor} />
    </div>
  );
}

export default App;
