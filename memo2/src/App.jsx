import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserInfo from "./UserIfo";
import Task from "./Task";
import Shop from "./Shop";

function App() {
  const [count, setCount] = useState(0);
  const user = useMemo(() => ({ name: "Иван", age: 25, isActive: true }), []);

  return (
    <>
      <UserInfo obj={user} />
      <Task />
      <Shop />

      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>click</button>
    </>
  );
}

export default App;
