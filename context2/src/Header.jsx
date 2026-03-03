import { useContext } from "react";
import { LanguageContext, ThemeContext, translations } from "./MyContext";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const translate = translations[language];

  return (
    <div>
      <h1>{translate.welcome}</h1>
    </div>
  );
};

export default Header;
