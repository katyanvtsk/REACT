import { useContext } from "react";
import myContext from "./MyContext";

const Toggle = () => {
  const { theme, toggleTheme } = useContext(myContext);
  return (
    <label>
      <input type="checkbox" onChange={toggleTheme} />
      <span>{theme === "dark" ? " Dark🌙 " : " Light🌞 "}</span>
    </label>
  );
};

export default Toggle;
