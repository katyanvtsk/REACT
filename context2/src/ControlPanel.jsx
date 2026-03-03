import { useContext } from "react";
import { LanguageContext, ThemeContext, translations } from "./MyContext";

const ControlPanel = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const translate = translations[language];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <label htmlFor="theme">
        <input type="checkbox" id="theme" onChange={toggleTheme} />
        {translate.color}
      </label>

      <label htmlFor="language">
        <select
          style={{ display: "inline", marginRight: "10px" }}
          name="language"
          id="language"
          value={language}
          onChange={toggleLanguage}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="de">DE</option>
          <option value="es">ES</option>
        </select>
        {translate.text}
      </label>
    </div>
  );
};

export default ControlPanel;
