import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [savePassword, setSavePassword] = useState([]);
  const inputRef = useRef();

  const maxLength = 100;
  useEffect(() => {
    const passwordGenerator = () => {
      let pass = "";
      let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (isNumberAllowed) string += "0123456789";
      if (isCharacterAllowed) string += "`!@#$%^&*";

      for (let i = 1; i <= length; i++) {
        let randomIndex = Math.floor(Math.random() * string.length);
        let stringpass = string.charAt(randomIndex);
        pass += stringpass;
      }

      setPassword(pass);
    };

    passwordGenerator();
  }, [length, isNumberAllowed, isCharacterAllowed]);

  const passwordRestHandler = () => {
    setLength(8);
    setIsNumberAllowed(false);
    setIsCharacterAllowed(false);
  };

  const passwordSaveHandler = () => {
    setSavePassword([...savePassword, password]);
  };

  const passwordCopyHandler = () => {
    navigator.clipboard.writeText(password);
    inputRef.current.select()
    inputRef.current.setSelectionRange(0,maxLength)
  };

  return (
    <div className="select-none max-w-[40rem] m-auto flex flex-col gap-5 p-5">
      <h1 className="text-center mt-5 text-2xl font-bold">
        Password Generator
      </h1>
      <input
        className="bg-gray-300 text-black outline-none border-none py-2 px-3 rounded"
        type="text"
        ref={inputRef}
        placeholder="Password"
        readOnly={true}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <input
        type="range"
        min={0}
        max={maxLength}
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />

      <label htmlFor="numberAllowed">
        <input
          type="checkbox"
          id="numberAllowed"
          checked={isNumberAllowed}
          onChange={(e) => {
            setIsNumberAllowed(e.target.checked);
          }}
        />
        Number Allowed
      </label>

      <label htmlFor="characterAllowed">
        <input
          type="checkbox"
          id="characterAllowed"
          checked={isCharacterAllowed}
          onChange={(e) => {
            setIsCharacterAllowed(e.target.checked);
          }}
        />
        Character Allowed
      </label>

      <button
        onClick={passwordCopyHandler}
        className="py-3 px-4 bg-blue-500 rounded cursor-pointer"
      >
        Copy Password
      </button>
      <button
        onClick={passwordRestHandler}
        className="py-3 px-4 bg-blue-500 rounded cursor-pointer"
      >
        Reset Password
      </button>
      <button
        onClick={passwordSaveHandler}
        className="py-3 px-4 bg-blue-500 rounded cursor-pointer"
      >
        Save Password
      </button>

      {savePassword.map((pass) => {
        return <p key={pass} className="text-green-500 break-all">{pass}</p>;
      })}
    </div>
  );
}

export default App;
