import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import myContext from "./MyContext";
import Toggle from "./Toggle";

function App() {
  const themes = {
    dark: "dark",
    light: "light",
  };
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.dark ? themes.light : themes.dark,
    );
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div>
      <myContext.Provider value={{ theme, toggleTheme }}>
        <h1>Dark / Light</h1>
        <Toggle />
      </myContext.Provider>
    </div>
  );
}

export default App;
