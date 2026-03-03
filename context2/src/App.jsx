import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LanguageContext, ThemeContext } from "./MyContext";
import Header from "./Header";
import ControlPanel from "./ControlPanel";
import UserProfile from "./UserProfile";

function App() {
  const themes = {
    light: "light",
    dark: "dark",
  };

  const [theme, setTheme] = useState(themes.light);
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => {
    setTheme((prev) => (prev === themes.dark ? themes.light : themes.dark));
  };

  const toggleLanguage = (e) => {
    const selectLang = e.target.value;

    switch (selectLang) {
      case "en":
        setLanguage("en");
        break;
      case "ru":
        setLanguage("ru");
        break;
      case "de":
        setLanguage("de");
        break;
      case "es":
        setLanguage("es");
        break;
      default:
        setLanguage("en");
    }
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          <Header />
          <UserProfile />
          <ControlPanel />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
