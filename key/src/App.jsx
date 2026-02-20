import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./List";

function App() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([
    { id: 1, str: "Redev" },
    { id: 2, str: "JS" },
    { id: 3, str: "HTML" },
    { id: 4, str: "React" },
  ]);
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setArr((prev) => [...prev, { id: prev.length + 1, str: text }]);
      setText("");
    }
  };

  return (
    <>
      <List arr={arr} />
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={focusInput}>нажми</button>
    </>
  );
}

export default App;
