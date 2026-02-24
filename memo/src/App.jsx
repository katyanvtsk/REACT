import { useCallback, useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ItemList from "./ItemList";
import SearchInput from "./SearchInput";
import CounterButton from "./CounterButton";

function App() {
  const [searchInput, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const items = useMemo(
    () => [
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
      { id: 3, name: "item3" },
      { id: 4, name: "item11" },
      { id: 5, name: "item22" },
      { id: 6, name: "item33" },
    ],
    [],
  );

  const onChange = useCallback((e) => {
    console.log("ввод");
    setSearch(e.target.value);
  }, []);

  const filterItems = useMemo(() => {
    console.log("фильтр");

    return items.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }, [items, searchInput]);

  const onClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <SearchInput onChange={onChange} />
      <ItemList items={filterItems} />
      <CounterButton onClick={onClick} />
    </>
  );
}

export default App;
