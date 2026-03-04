import { memo } from "react";

const CounterButton = ({ onClick }) => {
  return <button onClick={onClick}>click</button>;
};

export default memo(CounterButton);
