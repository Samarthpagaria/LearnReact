import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copy");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZYXqwertgfdsazxcvbhyuiopljkmnbh";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}_-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-3xl p-6 bg-green-500 my-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Password Generator
        </h1>
        <div className="flex shadow-inner rounded-3xl overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 text-lg text-gray-700 bg-gray-100"
            placeholder="Your generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={() => {
              copyPasswordToClipboard();
              setCopy("Copied");
            }}
          >
            {copy}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(parseInt(e.target.value, 10));
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="w-5 h-5 appearance-none rounded-full border-2 border-black checked:bg-red-500 checked:border-orange-500"
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="w-5 h-5 appearance-none rounded-full border-2 border-black checked:bg-red-500 checked:border-orange-500"
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
