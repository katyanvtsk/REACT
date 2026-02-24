import { memo } from "react";

const CounterButton = ({ onClick }) => {
  console.log("render button");

  return <button onClick={onClick}>click</button>;
};

export default memo(CounterButton);
