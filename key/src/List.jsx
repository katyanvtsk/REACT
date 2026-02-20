import { useEffect, useState } from "react";

const List = ({ arr }) => {
  const [state, setState] = useState(arr);

  const handleClick = (id) => {
    setState((prev) => {
      return prev.map((item) => {
        if (item.id == id) {
          return { ...item, str: "!!!" + item.str };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    setState(arr);
  }, [arr]);

  return (
    <>
      <ul>
        {state.map((item) => (
          <li key={item.id}>
            {item.str}
            <button onClick={() => handleClick(item.id)}>click</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
