import { memo, useCallback, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(true);
  const [count, setCount] = useState(0);

  const obj = useMemo(() => {
    return {
      name: "Bilal",
    };
  }, []);

  const foo = useCallback(()=> {

  }, [])

  console.log("App Component is rendering");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setState(!state)}>State Changer</button>
      <Home count={count} obj={obj} foo={foo} />
      <About />
      <Contact />
    </>
  );
}

const Home = memo(({ count, obj }) => {
  console.log("Home Component is rendering");
  return (
    <>
      <h1>
        Home {count} {obj.name}
      </h1>
    </>
  );
});

function About() {
  console.log("About Component is rendering");
  return <h1>About </h1>;
}

function Contact() {
  console.log("Contact Component is rendering");
  return <h1>Contact</h1>;
}

export default App;
