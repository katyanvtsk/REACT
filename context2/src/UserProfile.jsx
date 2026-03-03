import { useContext } from "react";
import { LanguageContext, ThemeContext, translations } from "./MyContext";

const UserProfile = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const translate = translations[language];

  return (
    <div>
      <h3>{translate.profile}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {theme === "dark" ? "🌙" : "🌞"}
      </div>
    </div>
  );
};

export default UserProfile;
